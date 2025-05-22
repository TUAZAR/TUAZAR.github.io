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
              기술 기업 및 새로운 비즈니스를 위한 혁신적인 디자인 솔루션을 제공합니다. 
              최신 기술 트렌드와 디자인 인사이트를 공유합니다.
            </p>
          </div>

          {/* 링크 모음 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-light-gray hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/how-it-works" className="text-light-gray hover:text-white transition-colors">How it works</Link></li>
              <li><Link href="/testimonials" className="text-light-gray hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/faqs" className="text-light-gray hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <ul className="space-y-2">
              <li className="text-light-gray">이메일: contact@tuazar.com</li>
              <li className="text-light-gray">깃허브: github.com/TUAZAR</li>
              <li className="text-light-gray">트위터: @tuazar_tech</li>
              <li>
                <Link href="/notify-me" className="text-accent hover:underline">
                  업데이트 알림 받기
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
            <Link href="/privacy" className="text-light-gray hover:text-white text-sm">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-light-gray hover:text-white text-sm">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 