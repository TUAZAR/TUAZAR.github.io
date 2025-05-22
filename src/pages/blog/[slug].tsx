import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/layouts/MainLayout';

// 임시 데이터 (실제로는 API나 마크다운 파일에서 데이터를 가져와야 함)
const DUMMY_POSTS = [
  {
    title: 'Next.js와 React로 빠른 웹 애플리케이션 구축하기',
    excerpt: 'Next.js는 React 프레임워크로, 서버 사이드 렌더링, 정적 사이트 생성 등 다양한 렌더링 방식을 지원합니다. 이 글에서는 Next.js를 활용한 웹 애플리케이션 개발 방법을 알아봅니다.',
    content: `
# Next.js와 React로 빠른 웹 애플리케이션 구축하기

Next.js는 React 기반의 프레임워크로, 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG), 증분 정적 재생성(ISR) 등 다양한 렌더링 방식을 지원합니다. 이러한 기능을 통해 개발자는 더 빠르고 SEO 친화적인 웹 애플리케이션을 쉽게 구축할 수 있습니다.

## Next.js의 주요 특징

### 1. 다양한 렌더링 방식

Next.js는 페이지별로 렌더링 방식을 선택할 수 있습니다:

- **정적 생성 (Static Generation)**: 빌드 시점에 HTML을 생성하여 CDN에서 제공
- **서버 사이드 렌더링 (Server-side Rendering)**: 요청 시점에 서버에서 HTML 생성
- **증분 정적 재생성 (Incremental Static Regeneration)**: 정적 페이지를 백그라운드에서 주기적으로 재생성

### 2. 파일 기반 라우팅

pages 디렉토리에 파일을 생성하면 자동으로 라우트가 설정됩니다. 예를 들어:

- \`pages/index.js\` → \`/\`
- \`pages/about.js\` → \`/about\`
- \`pages/blog/[slug].js\` → \`/blog/:slug\`

### 3. API 라우트

Next.js는 \`pages/api\` 디렉토리에 API 엔드포인트를 쉽게 생성할 수 있습니다. 이를 통해 서버리스 함수를 구현할 수 있습니다.

## Next.js 프로젝트 시작하기

1. 새 프로젝트 생성:

\`\`\`bash
npx create-next-app my-app
cd my-app
\`\`\`

2. 개발 서버 실행:

\`\`\`bash
npm run dev
\`\`\`

3. 브라우저에서 \`http://localhost:3000\` 접속

## 성능 최적화

Next.js는 자동 코드 스플리팅, 이미지 최적화, 프리페칭 등 다양한 성능 최적화 기능을 제공합니다.

### Image 컴포넌트

Next.js의 Image 컴포넌트는 자동 이미지 최적화, 지연 로딩 등의 기능을 제공합니다:

\`\`\`jsx
import Image from 'next/image'

function Home() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={500}
      height={300}
      priority
    />
  )
}
\`\`\`

## 결론

Next.js는 React 애플리케이션 개발을 위한 강력한 프레임워크로, 다양한 렌더링 방식과 최적화 기능을 통해 빠르고 효율적인 웹 사이트 구축을 가능하게 합니다. 프로덕션 환경에서 사용할 수 있는 많은 기능을 내장하고 있어, 개발자가 핵심 비즈니스 로직에 집중할 수 있도록 도와줍니다.
    `,
    slug: 'nextjs-react-web-app',
    coverImage: '/images/blog/nextjs.webp',
    date: '2023-05-15',
    author: {
      name: '김기술',
      avatar: '/images/avatars/author1.jpg',
      bio: '프론트엔드 개발자 | Next.js 및 React 전문가'
    },
    tags: ['Next.js', 'React', '웹개발'],
  },
  // 다른 포스트 데이터...
];

interface BlogPostProps {
  post: typeof DUMMY_POSTS[0];
  relatedPosts: typeof DUMMY_POSTS;
}

const BlogPost = ({ post, relatedPosts }: BlogPostProps) => {
  // 마크다운 내용을 HTML로 변환하는 함수 (실제로는 remark, remark-html 등을 사용해야 함)
  const renderMarkdown = (content: string) => {
    // 여기서는 간단하게 처리합니다 (실제로는 마크다운 파서 사용 필요)
    return content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>')
      .replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gm, '<em>$1</em>')
      .replace(/```([\s\S]*?)```/gm, '<pre class="bg-dark-gray p-4 rounded-lg overflow-x-auto my-4"><code>$1</code></pre>')
      .replace(/`([^`]+)`/gm, '<code class="bg-dark-gray px-1 rounded">$1</code>')
      .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
      .replace(/\n\n/gm, '<p class="my-4"></p>');
  };

  if (!post) {
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <MainLayout title={`${post.title} - TUAZAR 기술 블로그`} description={post.excerpt}>
      {/* 헤더 섹션 */}
      <section className="py-20 bg-gradient-to-b from-secondary to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-3 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/20 text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-light-gray mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between border-t border-white/10 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-light-gray">{post.author.bio}</p>
                </div>
              </div>
              <div className="text-light-gray">
                게시일: {post.date}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 커버 이미지 */}
      <div className="relative h-96 w-full">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      
      {/* 블로그 내용 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
            </article>
            
            {/* 소셜 공유 및 태그 */}
            <div className="mt-12 pt-6 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex gap-3">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag}`}
                      className="text-sm font-medium px-3 py-1 rounded-full bg-dark-gray text-light-gray hover:text-white"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button className="p-2 rounded-full bg-dark-gray hover:bg-white/10">
                    <svg className="w-5 h-5 text-light-gray" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-dark-gray hover:bg-white/10">
                    <svg className="w-5 h-5 text-light-gray" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-dark-gray hover:bg-white/10">
                    <svg className="w-5 h-5 text-light-gray" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 작성자 프로필 */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-dark-gray rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden relative">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">{post.author.name}</h3>
                  <p className="text-light-gray mb-4">{post.author.bio}</p>
                  <div className="flex justify-center md:justify-start gap-4">
                    <a href="#" className="text-accent hover:underline">Twitter</a>
                    <a href="#" className="text-accent hover:underline">GitHub</a>
                    <a href="#" className="text-accent hover:underline">Portfolio</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 관련 포스트 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">관련 포스트</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.slice(0, 3).map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                <div className="card hover:translate-y-[-5px]">
                  <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-accent transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-light-gray line-clamp-2">{relatedPost.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // 실제로는 모든 포스트 슬러그를 가져와야 함
  const paths = DUMMY_POSTS.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false, // 없는 경로는 404
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // 실제로는 API나 파일 시스템에서 포스트 데이터를 가져와야 함
  const post = DUMMY_POSTS.find((p) => p.slug === params?.slug);
  
  // 관련 포스트 (같은 태그를 가진 다른 포스트들)
  const relatedPosts = post
    ? DUMMY_POSTS.filter(
        (p) => p.slug !== post.slug && p.tags.some((tag) => post.tags.includes(tag))
      )
    : [];

  return {
    props: {
      post: post || null,
      relatedPosts: relatedPosts.slice(0, 3), // 최대 3개만
    },
  };
};

export default BlogPost; 