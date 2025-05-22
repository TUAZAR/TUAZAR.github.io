import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import BlogPostCard from '@/components/BlogPostCard';
import { getSortedPostsData } from '@/lib/posts';

// 추천 기술 스택
const TECH_STACK = [
  {
    name: 'Next.js',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.814 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.316 35.316 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.66-6.084 2.68-.423 5.023.271 5.315.369a8.468 8.468 0 01-3.655 5.715z',
    color: 'blue'
  },
  {
    name: 'React',
    icon: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z',
    color: 'cyan'
  },
  {
    name: 'TypeScript',
    icon: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM5.26 15.181c0 1.084.63 1.554 1.612 1.554.922 0 1.607-.47 1.607-1.554v-5.17h1.629v5.233c0 1.99-1.588 2.963-3.274 2.963-1.646 0-3.193-.973-3.193-2.963v-5.233h1.619v5.17zM14.829 19h-4.169v-1.329h1.304v-5.462h-1.304V11.06h2.865v6.611h1.304V19z',
    color: 'blue'
  },
  {
    name: 'TailwindCSS',
    icon: 'M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z',
    color: 'teal'
  }
];

// 임시 블로그 데이터 (나중에 실제 데이터로 대체)
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
  }
];

// 실제 배포 시에는 getStaticProps로 대체
export async function getStaticProps() {
  try {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        posts: allPostsData
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
}

const HomePage = ({ posts = [] }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제로는 이메일 등록 API 호출
    alert('감사합니다! 업데이트 알림이 등록되었습니다.');
    setEmail('');
  };

  // 포스트가 없으면 더미 데이터 사용
  const displayPosts = posts.length > 0 ? posts : DUMMY_POSTS;

  return (
    <MainLayout>
      {/* 히어로 섹션 */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                TUAZAR, 
                <br />
                <span className="text-opacity-70">기술 블로그</span>
              </h1>
              <p className="text-light-gray text-lg mb-8 max-w-lg">
                개발자로서의 성장 과정과 프로젝트 경험, 새로운 기술에 대한 인사이트를 공유합니다.
                웹 개발, 인공지능, 데이터 과학 등 다양한 주제를 다룹니다.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com" 
                  className="bg-dark-gray border border-white/10 rounded-full px-6 py-3 text-white flex-grow"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  구독하기
                </button>
              </form>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-10"></div>
                  <Image 
                    src="/images/dashboard.webp" 
                    alt="Dashboard design" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden mt-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 z-10"></div>
                  <Image 
                    src="/images/mobile-app.webp" 
                    alt="Mobile app design" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* 떠 있는 요소들 */}
              <div className="absolute -top-10 -left-10 p-4 bg-accent/10 backdrop-blur-sm rounded-xl border border-accent/30 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span>React</span>
                </div>
              </div>
              
              <div className="absolute -bottom-5 right-20 p-4 bg-blue-500/10 backdrop-blur-sm rounded-xl border border-blue-500/30 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section className="py-16 bg-dark-gray">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">주요 기술 스택</h2>
            <p className="text-light-gray">블로그에서 주로 다루는 기술들</p>
          </div>
          
          <div className="flex flex-wrap justify-between items-center">
            {TECH_STACK.map((tech, index) => (
              <div key={index} className="flex flex-col items-center mx-auto mb-8">
                <svg 
                  viewBox="0 0 24 24" 
                  className={`w-12 h-12 text-${tech.color}-500 mb-2`}
                  fill="currentColor"
                >
                  <path d={tech.icon} />
                </svg>
                <span className="text-white font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 최신 블로그 포스트 섹션 */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">최신 포스트</h2>
            <p className="text-light-gray max-w-2xl mx-auto">
              기술 블로그의 최신 글들을 확인하세요. 개발 경험, 기술 분석, 튜토리얼 등 다양한 주제를 다룹니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayPosts.slice(0, 3).map((post) => (
              <BlogPostCard key={post.slug || post.id} {...post} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/blog" className="btn btn-outline">
              모든 글 보기
            </Link>
          </div>
        </div>
      </section>
      
      {/* 뉴스레터 섹션 */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-dark-gray to-secondary p-12 rounded-3xl border border-white/10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">기술 뉴스레터 구독하기</h2>
              <p className="text-light-gray mb-8">
                최신 개발 트렌드와 유용한 기술 팁을 이메일로 받아보세요. 주간 업데이트로 기술 동향을 놓치지 마세요.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com" 
                  className="bg-dark-gray border border-white/10 rounded-full px-6 py-3 text-white flex-grow"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  구독하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage; 