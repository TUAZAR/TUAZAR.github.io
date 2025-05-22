import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제로는 이메일 등록 API 호출
    alert('감사합니다! 업데이트 알림이 등록되었습니다.');
    setEmail('');
  };

  return (
    <MainLayout>
      {/* 히어로 섹션 */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Design work, 
                <br />
                <span className="text-opacity-70">the efficient way</span>
              </h1>
              <p className="text-light-gray text-lg mb-8 max-w-lg">
                기술 기업 및 신생 비즈니스를 위한 혁신적인 디자인 솔루션. 
                전형적인 미학적 방법론에서 벗어난 접근법. 곧 출시됩니다.
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
                  Get notified
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
                  <span>Sarah</span>
                </div>
              </div>
              
              <div className="absolute -bottom-5 right-20 p-4 bg-blue-500/10 backdrop-blur-sm rounded-xl border border-blue-500/30 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Elish</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-16 bg-dark-gray">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">이미 업계의 리더들이 선택했습니다</h2>
            <p className="text-light-gray">디자인 작업에 혁신을 가져올 미래형 솔루션</p>
          </div>
          
          <div className="flex flex-wrap justify-between items-center">
            <Image 
              src="/images/logos/headspace.svg" 
              alt="Headspace" 
              width={150} 
              height={50}
              className="opacity-70 hover:opacity-100 transition-opacity mx-auto mb-8"
            />
            <Image 
              src="/images/logos/shopify.svg" 
              alt="Shopify" 
              width={150} 
              height={50}
              className="opacity-70 hover:opacity-100 transition-opacity mx-auto mb-8"
            />
            <Image 
              src="/images/logos/volvo.svg" 
              alt="Volvo" 
              width={150} 
              height={50}
              className="opacity-70 hover:opacity-100 transition-opacity mx-auto mb-8"
            />
            <Image 
              src="/images/logos/mobbin.svg" 
              alt="Mobbin" 
              width={150} 
              height={50}
              className="opacity-70 hover:opacity-100 transition-opacity mx-auto mb-8"
            />
            <Image 
              src="/images/logos/pinterest.svg" 
              alt="Pinterest" 
              width={150} 
              height={50}
              className="opacity-70 hover:opacity-100 transition-opacity mx-auto mb-8"
            />
            <Image 
              src="/images/logos/duolingo.svg" 
              alt="Duolingo" 
              width={150} 
              height={50}
              className="opacity-70 hover:opacity-100 transition-opacity mx-auto mb-8"
            />
          </div>
        </div>
      </section>
      
      {/* 특징 섹션 */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">주요 특징</h2>
            <p className="text-light-gray max-w-2xl mx-auto">
              디자인 작업을 더 효율적이고 창의적으로 만들어주는 주요 기능들을 살펴보세요.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 특징 카드 1 */}
            <div className="card hover:translate-y-[-5px]">
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">빠른 작업 속도</h3>
              <p className="text-light-gray">
                AI 기반 자동화로 디자인 작업 속도를 향상시키고 반복 작업을 줄여줍니다.
              </p>
            </div>
            
            {/* 특징 카드 2 */}
            <div className="card hover:translate-y-[-5px]">
              <div className="bg-blue-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">고급 템플릿</h3>
              <p className="text-light-gray">
                다양한 산업 분야에 맞춘 전문 템플릿으로 디자인 시간을 단축합니다.
              </p>
            </div>
            
            {/* 특징 카드 3 */}
            <div className="card hover:translate-y-[-5px]">
              <div className="bg-purple-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">협업 도구</h3>
              <p className="text-light-gray">
                팀원들과 실시간으로 협업하고 피드백을 주고받을 수 있는 강력한 도구를 제공합니다.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/features" className="btn btn-outline">
              모든 기능 살펴보기
            </Link>
          </div>
        </div>
      </section>
      
      {/* 뉴스레터 섹션 */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-dark-gray to-secondary p-12 rounded-3xl border border-white/10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">최신 디자인 트렌드 소식 받기</h2>
              <p className="text-light-gray mb-8">
                디자인과 기술에 관한 최신 인사이트를 뉴스레터로 받아보세요. 스팸은 보내지 않습니다.
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