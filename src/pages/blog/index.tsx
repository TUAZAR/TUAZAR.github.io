import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import BlogPostCard from '@/components/BlogPostCard';

// 임시 데이터
const DUMMY_POSTS = [
  {
    title: 'Next.js와 React로 빠른 웹 애플리케이션 구축하기',
    excerpt: 'Next.js는 React 프레임워크로, 서버 사이드 렌더링, 정적 사이트 생성 등 다양한 렌더링 방식을 지원합니다. 이 글에서는 Next.js를 활용한 웹 애플리케이션 개발 방법을 알아봅니다.',
    slug: 'nextjs-react-web-app',
    coverImage: '/images/blog/nextjs.webp',
    date: '2023-05-15',
    author: {
      name: '김기술',
      avatar: '/images/avatars/author1.jpg',
    },
    tags: ['Next.js', 'React', '웹개발'],
  },
  {
    title: 'TailwindCSS로 효율적인 UI 디자인 구현하기',
    excerpt: 'TailwindCSS는 유틸리티 우선 CSS 프레임워크로, 빠르고 효율적인 UI 개발을 가능하게 합니다. 이 글에서는 TailwindCSS의 기본 개념과 활용법을 소개합니다.',
    slug: 'tailwindcss-ui-design',
    coverImage: '/images/blog/tailwind.webp',
    date: '2023-06-02',
    author: {
      name: '이디자인',
      avatar: '/images/avatars/author2.jpg',
    },
    tags: ['TailwindCSS', 'UI/UX', 'CSS'],
  },
  {
    title: '모던 JavaScript의 비동기 프로그래밍',
    excerpt: 'JavaScript에서 비동기 프로그래밍은 필수적인 개념입니다. Promise, async/await를 활용한 효율적인 비동기 코드 작성법을 알아봅니다.',
    slug: 'modern-javascript-async',
    coverImage: '/images/blog/javascript.webp',
    date: '2023-06-10',
    author: {
      name: '박개발',
      avatar: '/images/avatars/author3.jpg',
    },
    tags: ['JavaScript', '비동기', 'Promise'],
  },
  {
    title: 'TypeScript 타입 시스템 마스터하기',
    excerpt: 'TypeScript의 고급 타입 기능을 활용하여 더 안정적이고 유지보수가 용이한 코드를 작성하는 방법을 살펴봅니다.',
    slug: 'typescript-type-system',
    coverImage: '/images/blog/typescript.webp',
    date: '2023-06-22',
    author: {
      name: '최타입',
      avatar: '/images/avatars/author4.jpg',
    },
    tags: ['TypeScript', '타입시스템', '개발'],
  },
  {
    title: 'GraphQL API 설계 가이드',
    excerpt: 'REST API와 비교하여 GraphQL의 장점과 효율적인 API 설계 방법에 대해 알아봅니다.',
    slug: 'graphql-api-design',
    coverImage: '/images/blog/graphql.webp',
    date: '2023-07-05',
    author: {
      name: '정백엔드',
      avatar: '/images/avatars/author5.jpg',
    },
    tags: ['GraphQL', 'API', '백엔드'],
  },
  {
    title: '웹 성능 최적화 전략',
    excerpt: '웹 애플리케이션의 로딩 속도와 사용자 경험을 향상시키기 위한 다양한 최적화 기법을 소개합니다.',
    slug: 'web-performance-optimization',
    coverImage: '/images/blog/performance.webp',
    date: '2023-07-18',
    author: {
      name: '김기술',
      avatar: '/images/avatars/author1.jpg',
    },
    tags: ['성능최적화', '웹개발', 'UX'],
  },
];

// 블로그 카테고리
const CATEGORIES = ['전체', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'CSS', 'UI/UX', '백엔드', '성능최적화'];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');

  // 카테고리 및 검색어 필터링
  const filteredPosts = DUMMY_POSTS.filter((post) => {
    // 카테고리 필터링
    if (activeCategory !== '전체' && !post.tags.includes(activeCategory)) {
      return false;
    }
    
    // 검색어 필터링
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
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
                <BlogPostCard key={post.slug} {...post} />
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

export default BlogPage; 