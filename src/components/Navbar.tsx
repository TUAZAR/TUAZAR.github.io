import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary py-4 sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center">
        {/* 로고 */}
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 relative mr-2">
            {/* 로고 이미지 또는 SVG 컴포넌트 */}
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect x="8" y="8" width="10" height="10" fill="white" />
              <rect x="22" y="8" width="10" height="10" fill="white" />
              <rect x="8" y="22" width="10" height="10" fill="white" />
              <rect x="22" y="22" width="10" height="10" fill="white" />
              <rect x="15" y="15" width="10" height="10" fill="#CEFF00" />
            </svg>
          </div>
          <span className="font-bold text-xl hidden sm:block">TUAZAR</span>
        </Link>

        {/* 데스크톱 메뉴 */}
        <div className="hidden md:flex space-x-8">
          <Link href="/features" className="nav-link">Features</Link>
          <Link href="/how-it-works" className="nav-link">How it works</Link>
          <Link href="/testimonials" className="nav-link">Testimonials</Link>
          <Link href="/faqs" className="nav-link">FAQs</Link>
        </div>

        {/* 데스크톱 CTA 버튼 */}
        <div className="hidden md:block">
          <Link href="/notify-me" className="btn btn-primary">
            Notify me
          </Link>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-secondary py-4 px-4 absolute w-full border-b border-white/10">
          <div className="flex flex-col space-y-4">
            <Link href="/features" className="nav-link">Features</Link>
            <Link href="/how-it-works" className="nav-link">How it works</Link>
            <Link href="/testimonials" className="nav-link">Testimonials</Link>
            <Link href="/faqs" className="nav-link">FAQs</Link>
            <Link href="/notify-me" className="btn btn-primary text-center">
              Notify me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 