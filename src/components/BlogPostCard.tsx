import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
  id?: string;
}

const BlogPostCard = ({
  title,
  excerpt,
  slug,
  coverImage,
  date,
  author,
  tags,
}: BlogPostCardProps) => {
  // 기본 아바타 이미지 설정
  const defaultAvatar = '/images/avatars/default-avatar.jpg';
  
  return (
    <article className="card overflow-hidden hover:translate-y-[-5px]">
      <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
        <Image
          src={coverImage || '/images/blog/default-cover.jpg'}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-3">
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold">
          <Link href={`/blog/${slug}`} className="hover:text-accent transition-colors">
            {title}
          </Link>
        </h3>
        
        <p className="text-light-gray line-clamp-2">{excerpt}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden relative">
              <Image
                src={author?.avatar || defaultAvatar}
                alt={author?.name || '작성자'}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span className="text-sm">{author?.name || '작성자'}</span>
          </div>
          <span className="text-sm text-light-gray">{date}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard; 