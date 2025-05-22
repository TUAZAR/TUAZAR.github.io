import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/layouts/MainLayout';

// 프로젝트 상태 타입
type ProjectStatus = '계획 중' | '진행 중' | '완료됨';

// 프로젝트 인터페이스
interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  thumbnail: string;
  techs: string[];
  links?: {
    github?: string;
    demo?: string;
    article?: string;
  };
  date: string;
}

// 샘플 프로젝트 데이터
const PROJECTS: Project[] = [
  {
    id: 'ai-agent-assistant',
    title: 'AI 에이전트 비서',
    description: '일상 업무를 자동화하는 AI 에이전트 비서 시스템. 이메일 관리, 일정 조율, 정보 검색 등의 기능을 수행합니다.',
    status: '진행 중',
    thumbnail: '/images/blog/default-cover.svg',
    techs: ['Python', 'LangChain', 'React', 'OpenAI API'],
    links: {
      github: 'https://github.com/TUAZAR/ai-assistant',
    },
    date: '2023-09-15'
  },
  {
    id: 'tech-blog',
    title: '기술 블로그 플랫폼',
    description: 'Next.js와 마크다운을 활용한 개인 기술 블로그 플랫폼. 코드 하이라이팅, 반응형 디자인, 다크 모드를 지원합니다.',
    status: '완료됨',
    thumbnail: '/images/blog/default-cover.svg',
    techs: ['Next.js', 'TypeScript', 'TailwindCSS', 'Markdown'],
    links: {
      github: 'https://github.com/TUAZAR/tech-blog',
      demo: 'https://tuazar.github.io'
    },
    date: '2023-06-30'
  },
  {
    id: 'ml-dashboard',
    title: '머신러닝 분석 대시보드',
    description: '다양한 머신러닝 모델의 성능을 분석하고 시각화하는 대시보드. 실시간 데이터 모니터링과 모델 비교 기능을 제공합니다.',
    status: '계획 중',
    thumbnail: '/images/blog/default-cover.svg',
    techs: ['Python', 'React', 'D3.js', 'TensorFlow'],
    date: '2023-12-01'
  },
  {
    id: 'smart-home-system',
    title: '스마트홈 IoT 시스템',
    description: '라즈베리파이를 활용한 스마트홈 제어 시스템. 온도, 습도, 조명 등을 모니터링하고 제어할 수 있는 웹 인터페이스를 제공합니다.',
    status: '진행 중',
    thumbnail: '/images/blog/default-cover.svg',
    techs: ['Raspberry Pi', 'Python', 'MQTT', 'React'],
    links: {
      github: 'https://github.com/TUAZAR/smart-home'
    },
    date: '2023-08-10'
  },
  {
    id: 'e-commerce-platform',
    title: '전자상거래 플랫폼',
    description: '소규모 판매자를 위한 맞춤형 전자상거래 플랫폼. 상품 관리, 결제 처리, 배송 추적 기능을 제공합니다.',
    status: '완료됨',
    thumbnail: '/images/blog/default-cover.svg',
    techs: ['Next.js', 'MongoDB', 'Express', 'Node.js'],
    links: {
      github: 'https://github.com/TUAZAR/ecommerce',
      demo: 'https://ecommerce-demo.tuazar.dev'
    },
    date: '2022-12-15'
  },
  {
    id: 'ar-navigation',
    title: 'AR 실내 내비게이션',
    description: '증강현실(AR)을 활용한 실내 내비게이션 앱. 복잡한 건물 내에서 길찾기를 도와주는 모바일 애플리케이션입니다.',
    status: '계획 중',
    thumbnail: '/images/blog/default-cover.svg',
    techs: ['React Native', 'AR.js', 'Node.js', 'MongoDB'],
    date: '2024-03-01'
  }
];

const ProjectPage = () => {
  // 상태 필터
  const [statusFilter, setStatusFilter] = useState<'전체' | ProjectStatus>('전체');
  
  // 필터링된 프로젝트
  const filteredProjects = PROJECTS.filter(project => 
    statusFilter === '전체' || project.status === statusFilter
  );

  return (
    <MainLayout title="프로젝트 - TUAZAR 기술 블로그" description="AI 엔지니어이자 풀스택 개발자인 TUAZAR의 프로젝트 포트폴리오입니다.">
      {/* 헤더 섹션 */}
      <section className="py-20 bg-gradient-to-b from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              프로젝트
            </h1>
            <p className="text-xl text-light-gray mb-8">
              계획 중인 아이디어부터 완성된 프로젝트까지, 저의 개발 여정을 공유합니다
            </p>
          </div>
        </div>
      </section>

      {/* 프로젝트 컨텐츠 */}
      <section className="bg-dark-gray py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* 필터 버튼 */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {(['전체', '계획 중', '진행 중', '완료됨'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    statusFilter === status
                      ? 'bg-accent text-black'
                      : 'bg-secondary text-light-gray hover:text-white'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
            
            {/* 프로젝트 그리드 */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div 
                    key={project.id}
                    className="bg-secondary/30 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all"
                  >
                    {/* 프로젝트 썸네일 */}
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      {/* 상태 배지 */}
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === '완료됨' 
                          ? 'bg-green-500/80 text-white' 
                          : project.status === '진행 중'
                            ? 'bg-blue-500/80 text-white'
                            : 'bg-yellow-500/80 text-black'
                      }`}>
                        {project.status}
                      </div>
                    </div>
                    
                    {/* 프로젝트 정보 */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-light-gray mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* 기술 스택 */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techs.map((tech, index) => (
                          <span 
                            key={index} 
                            className="px-2 py-1 bg-dark-gray rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* 날짜 */}
                      <div className="text-sm text-light-gray mb-4">
                        {project.status === '완료됨' 
                          ? '완료일: ' 
                          : project.status === '진행 중' 
                            ? '시작일: ' 
                            : '예정일: '
                        }
                        {project.date}
                      </div>
                      
                      {/* 링크 */}
                      {project.links && (
                        <div className="flex gap-3">
                          {project.links.github && (
                            <a 
                              href={project.links.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-accent hover:text-accent/80"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                              </svg>
                            </a>
                          )}
                          {project.links.demo && (
                            <a 
                              href={project.links.demo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-accent hover:text-accent/80"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M15.75 2H8.25C7.00736 2 6 3.00736 6 4.25V19.75C6 20.9926 7.00736 22 8.25 22H15.75C16.9926 22 18 20.9926 18 19.75V4.25C18 3.00736 16.9926 2 15.75 2ZM12 20.5C11.4477 20.5 11 20.0523 11 19.5C11 18.9477 11.4477 18.5 12 18.5C12.5523 18.5 13 18.9477 13 19.5C13 20.0523 12.5523 20.5 12 20.5ZM16 17H8V5H16V17Z" />
                              </svg>
                            </a>
                          )}
                          {project.links.article && (
                            <a 
                              href={project.links.article} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-accent hover:text-accent/80"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                                <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                              </svg>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-bold mb-2">해당 상태의 프로젝트가 없습니다</h3>
                <p className="text-light-gray">다른 필터를 선택하거나 전체 프로젝트를 확인해보세요.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">함께 프로젝트를 진행해보세요</h2>
            <p className="text-light-gray mb-8">
              협업 프로젝트에 관심이 있거나 제 프로젝트에 대한 피드백이 있으시면 연락주세요.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:tuazar@gmail.com"
                className="btn btn-primary"
              >
                연락하기
              </a>
              <a
                href="https://github.com/TUAZAR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHub 방문하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProjectPage; 