import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  // 현재 경로가 어떤 네비게이션 항목과 일치하는지 확인
  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 상단 장식 */}
      <div className="h-1 bg-gradient-to-r from-blue-800 to-blue-600"></div>

      {/* 헤더 */}
      <header className="py-4 bg-white shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            {/* 로고 */}
            <div className="mb-4 md:mb-0">
              <Link
                to="/main"
                className="text-xl font-bold text-blue-800 hover:text-blue-700 transition-colors duration-200"
              >
                Parergon: Layered Being
              </Link>
              <p className="text-sm text-blue-800 opacity-70">
                CNU Clothing & Textiles 2025 Graduation Show
              </p>
            </div>

            {/* 내비게이션 */}
            <nav className="flex items-center space-x-6">
              <NavLink to="/main" isActive={isActive('/main')}>
                Home
              </NavLink>
              <NavLink to="/about" isActive={isActive('/about')}>
                About
              </NavLink>
              <NavLink to="/artists" isActive={isActive('/artists')}>
                Artists
              </NavLink>
              <NavLink to="/schedule" isActive={isActive('/schedule')}>
                Schedule
              </NavLink>
              <NavLink to="/location" isActive={isActive('/location')}>
                Location
              </NavLink>
            </nav>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* 푸터 */}
      <footer className="py-8 bg-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 컬럼 1: 소개 */}
            <div>
              <h3 className="text-lg font-bold mb-4">
                Parergon: Layered Being
              </h3>
              <p className="text-sm opacity-80 mb-4">
                전남대학교 의류학과 2025년 졸업작품전은 개인의 정체성과 겹겹이
                쌓인 경험의 층위를 탐구합니다.
              </p>
            </div>

            {/* 컬럼 2: 링크 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a
                    href="https://jnu.ac.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-200 transition-colors duration-200"
                  >
                    전남대학교
                  </a>
                </li>
                <li>
                  <a
                    href="https://jnu.ac.kr/dept/clothing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-200 transition-colors duration-200"
                  >
                    전남대학교 의류학과
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/cnu_clothing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-200 transition-colors duration-200"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* 컬럼 3: 연락처 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <address className="not-italic text-sm opacity-80 space-y-2">
                <p>전라남도 광주시 북구 용봉로 77</p>
                <p>전남대학교 의류학과</p>
                <p>Email: clothing@jnu.ac.kr</p>
                <p>Tel: +82-62-530-1340</p>
              </address>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-blue-700 text-center text-sm opacity-70">
            <p>
              © 2025 Chonnam National University Clothing & Textiles
              Department. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// 네비게이션 링크 컴포넌트
const NavLink = ({ to, children, isActive }) => {
  return (
    <Link
      to={to}
      className={`relative font-medium transition-colors duration-200 ${
        isActive ? 'text-blue-800' : 'text-gray-600 hover:text-blue-700'
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800 rounded-full"></span>
      )}
    </Link>
  );
};

export default Layout;
