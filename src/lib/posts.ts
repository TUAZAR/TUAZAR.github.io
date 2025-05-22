import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/posts');

// 마크다운 내용에서 첫 번째 이미지 URL 추출
function extractFirstImageUrl(markdown: string): string | null {
  // 마크다운 이미지 문법 패턴: ![대체 텍스트](이미지 URL)
  const imageRegex = /!\[.*?\]\((.*?)\)/;
  const match = imageRegex.exec(markdown);
  
  if (match && match[1]) {
    return match[1];
  }

  // HTML 이미지 태그 패턴: <img src="이미지 URL" ... />
  const htmlImageRegex = /<img.*?src=["'](.*?)["'].*?>/;
  const htmlMatch = htmlImageRegex.exec(markdown);
  
  if (htmlMatch && htmlMatch[1]) {
    return htmlMatch[1];
  }

  return null;
}

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    // 첫 번째 이미지 URL 추출
    const firstImageUrl = extractFirstImageUrl(matterResult.content);
    
    // 커버 이미지: 메타데이터에 정의된 이미지 우선, 없으면 본문에서 추출, 그것도 없으면 null
    const coverImage = matterResult.data.coverImage || firstImageUrl || null;

    // Combine the data with the id and coverImage
    return {
      id,
      coverImage,
      ...(matterResult.data as { date: string; title: string; description: string; tags: string[] }),
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // 첫 번째 이미지 URL 추출
  const firstImageUrl = extractFirstImageUrl(matterResult.content);
  
  // 커버 이미지: 메타데이터에 정의된 이미지 우선, 없으면 본문에서 추출, 그것도 없으면 null
  const coverImage = matterResult.data.coverImage || firstImageUrl || null;

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id, contentHtml and coverImage
  return {
    id,
    contentHtml,
    coverImage,
    ...(matterResult.data as { date: string; title: string; description: string; tags: string[] }),
  };
} 