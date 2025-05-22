import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/layouts/MainLayout';

// 기술 스택 데이터
const SKILLS = [
  {
    category: '프론트엔드',
    skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML/CSS']
  },
  {
    category: '백엔드',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'RESTful API']
  },
  {
    category: '인공지능/데이터',
    skills: ['TensorFlow', 'PyTorch', 'LangChain', 'AI Agent', 'LLM', 'Prompt Engineering']
  },
  {
    category: '도구 및 환경',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'GitHub Actions']
  }
];

// 경력 및 경험 데이터
const EXPERIENCES = [
  {
    period: '2022 - 현재',
    role: 'AI 엔지니어',
    company: 'AI 스타트업',
    description: 'AI 기반 서비스 개발 및 인공지능 모델 최적화 작업 진행'
  },
  {
    period: '2020 - 2022',
    role: '풀스택 개발자',
    company: '테크 기업',
    description: '웹 애플리케이션 개발 및 유지보수, 새로운 기능 구현'
  },
  {
    period: '2018 - 2020',
    role: '프론트엔드 개발자',
    company: '디지털 에이전시',
    description: '반응형 웹사이트 개발 및 UI/UX 개선 작업 수행'
  }
];

const AboutPage = () => {
  return (
    <MainLayout title="소개 - TUAZAR 기술 블로그" description="AI 엔지니어이자 풀스택 개발자인 TUAZAR의 소개 페이지입니다.">
      {/* 헤더 섹션 */}
      <section className="py-20 bg-gradient-to-b from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              안녕하세요, TUAZAR입니다
            </h1>
            <p className="text-xl text-light-gray mb-8">
              AI 엔지니어이자 풀스택 개발자로, 혁신적인 기술과 사용자 경험에 중점을 둔 개발을 지향합니다
            </p>
          </div>
        </div>
      </section>

      {/* 메인 콘텐츠 영역 - 다크 그레이 배경 */}
      <section className="bg-dark-gray">
        {/* 프로필 섹션 */}
        <div className="py-16 container mx-auto px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
              <div className="w-48 h-48 rounded-full overflow-hidden relative flex-shrink-0">
                <Image
                  src="/images/avatars/default-avatar.svg"
                  alt="TUAZAR 프로필"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">개발 철학</h2>
                <div className="space-y-4 text-light-gray">
                  <p>
                    저는 <span className="text-accent">사용자 중심적인 개발</span>을 지향합니다. 기술은 사용자의 문제를 해결하고 경험을 향상시키는 도구라고 믿습니다. 사용자의 요구를 이해하고 그에 맞는 직관적이고 효율적인 솔루션을 제공하는 것이 제 개발 철학의 핵심입니다.
                  </p>
                  <p>
                    또한 <span className="text-accent">지속적인 학습과 성장</span>을 중요시합니다. 기술 분야는 빠르게 변화하기 때문에, 새로운 기술과 방법론에 대한 지속적인 학습이 필수적입니다. 이 블로그를 통해 제가 배운 것들을 공유하고, 다른 개발자들과 함께 성장하고자 합니다.
                  </p>
                  <p>
                    <span className="text-accent">문제 해결 능력</span>과 <span className="text-accent">창의적 사고</span>는 좋은 개발자의 핵심 역량이라고 생각합니다. 복잡한 문제를 분석하고 효율적인 해결책을 찾아내는 과정에서 큰 보람을 느낍니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 현재 관심사 */}
        <div className="py-16 container mx-auto px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">현재 관심사</h2>
            <div className="bg-secondary/30 rounded-2xl p-8">
              <div className="space-y-4">
                <p>
                  최근에는 <span className="text-accent">AI 에이전트 개발</span>에 큰 관심을 두고 있습니다. LLM을 활용한 자율적인 에이전트 시스템은 다양한 분야에서 혁신적인 변화를 가져올 수 있다고 믿습니다. 특히 다음과 같은 주제에 집중하고 있습니다:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 text-light-gray">
                  <li>LLM 기반 자율 에이전트 시스템 개발</li>
                  <li>AI 에이전트의 도구 사용 능력 확장</li>
                  <li>프롬프트 엔지니어링 기법 연구</li>
                  <li>멀티모달 AI 통합</li>
                  <li>대화형 인터페이스 설계</li>
                </ul>
                <p className="pt-2">
                  이러한 기술들을 활용하여 사용자들의 일상과 업무를 더 효율적으로 만들어주는 솔루션을 개발하는 것이 제 목표입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 경력 및 기술 섹션 - 다른 배경색 */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 기술 스택 */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center">기술 스택</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SKILLS.map((skillGroup, index) => (
                  <div key={index} className="bg-dark-gray/40 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-dark-gray rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 경력 및 경험 */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">경력 및 경험</h2>
              <div className="space-y-8">
                {EXPERIENCES.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-accent">
                    <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0"></div>
                    <div className="mb-1 text-sm text-light-gray">{exp.period}</div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <div className="text-accent mb-2">{exp.company}</div>
                    <p className="text-light-gray">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 하단 CTA 섹션 */}
      <section className="bg-dark-gray py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">함께 일해보세요</h2>
            <p className="text-xl text-light-gray mb-8">
              프로젝트 협업, 기술 논의, 또는 단순한 인사를 나누고 싶으시다면 언제든지 연락주세요.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="mailto:tuazar@gmail.com"
                className="btn btn-primary w-full sm:w-auto"
              >
                이메일 보내기
              </a>
              <a
                href="https://github.com/TUAZAR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full sm:w-auto"
              >
                GitHub 방문하기
              </a>
            </div>

            <div className="pt-12 border-t border-white/10">
              <h2 className="text-2xl font-bold mb-4">기술 블로그 구경하기</h2>
              <p className="text-light-gray mb-8">
                제가 경험한 기술적 인사이트와 프로젝트 경험을 블로그에서 확인해보세요.
              </p>
              <Link href="/blog" className="btn btn-accent">
                블로그 보러가기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage; 