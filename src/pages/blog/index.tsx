import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import MainLayout from '@/layouts/MainLayout';
import BlogPostCard from '@/components/BlogPostCard';
import { getSortedPostsData } from '@/lib/posts';

// 블로그 카테고리
const CATEGORIES = ['전체', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'CSS', 'UI/UX', '백엔드', '성능최적화'];

interface BlogPageProps {
  posts: Array<{
    id: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    slug?: string;
    coverImage?: string;
    author?: {
      name: string;
      avatar: string;
    };
  }>;
}

const BlogPage = ({ posts }: BlogPageProps) => {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');

  // 카테고리 및 검색어 필터링
  const filteredPosts = posts.filter((post) => {
    // 카테고리 필터링
    if (activeCategory !== '전체' && !post.tags?.includes(activeCategory)) {
      return false;
    }
    
    // 검색어 필터링
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }
    
    return true;
  });

  return (
    <MainLayout title="블로그 - TUAZAR 기술 블로그" description="최신 기술 트렌드와 개발 인사이트를 확인하세요">
      <section className="py-16 bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              기술 블로그
            </h1>
            <p className="text-xl text-light-gray">
              최신 기술 트렌드와 개발 인사이트, 디자인 노하우를 공유합니다.
            </p>
          </div>
          
          {/* 검색 */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="블로그 포스트 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-dark-gray border border-white/10 rounded-full px-6 py-3 text-white pr-12"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-light-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* 카테고리 필터 */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category
                    ? 'bg-accent text-black'
                    : 'bg-dark-gray text-light-gray hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* 블로그 포스트 목록 */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogPostCard 
                  key={post.id} 
                  title={post.title}
                  excerpt={post.description}
                  slug={post.slug || post.id}
                  coverImage={post.coverImage || '/images/blog/default-cover.svg'}
                  date={post.date}
                  author={post.author || {
                    name: 'TUAZAR',
                    avatar: '/images/avatars/default-avatar.svg'
                  }}
                  tags={post.tags || []}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">검색 결과가 없습니다</h3>
              <p className="text-light-gray">다른 키워드로 검색하거나 필터를 변경해보세요.</p>
            </div>
          )}
          
          {/* 페이지네이션 (필요시 구현) */}
          {filteredPosts.length > 0 && (
            <div className="flex justify-center mt-12">
              <button className="btn btn-outline mx-2">이전</button>
              <button className="btn btn-outline mx-2">다음</button>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const allPostsData = getSortedPostsData();
    
    // 각 포스트에 slug 필드 추가 (id를 slug로 사용)
    const postsWithSlug = allPostsData.map(post => ({
      ...post,
      slug: post.id
    }));
    
    return {
      props: {
        posts: postsWithSlug
      }
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: []
      }
    };
  }
};

export default BlogPage; 