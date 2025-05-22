import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 로고 및 소개 */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <div className="w-10 h-10 relative mr-2">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="8" y="8" width="10" height="10" fill="white" />
                  <rect x="22" y="8" width="10" height="10" fill="white" />
                  <rect x="8" y="22" width="10" height="10" fill="white" />
                  <rect x="22" y="22" width="10" height="10" fill="white" />
                  <rect x="15" y="15" width="10" height="10" fill="#CEFF00" />
                </svg>
              </div>
              <span className="font-bold text-xl">TUAZAR</span>
            </Link>
            <p className="text-light-gray max-w-md">
              AI agent 개발 및 최신 기술 정보를 공유합니다. 때로는 하고 싶은 것을 올리기도 합니다.
            </p>
          </div>

          {/* 링크 모음 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-light-gray hover:text-white transition-colors">홈</Link></li>
              <li><Link href="/about" className="text-light-gray hover:text-white transition-colors">소개</Link></li>
              <li><Link href="/blog" className="text-light-gray hover:text-white transition-colors">블로그</Link></li>
              <li><Link href="/project" className="text-light-gray hover:text-white transition-colors">프로젝트</Link></li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <ul className="space-y-2">
              <li className="text-light-gray">이메일: tuazar@gmail.com</li>
              <li className="text-light-gray">
                <a href="https://github.com/TUAZAR" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  깃허브: github.com/TUAZAR
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-accent hover:underline">
                  최신 포스트 보기
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 저작권 정보 */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-gray text-sm">
            © {new Date().getFullYear()} TUAZAR. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="https://github.com/TUAZAR" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-white text-sm">
              GitHub
            </a>
            <Link href="/blog" className="text-light-gray hover:text-white text-sm">
              블로그
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 