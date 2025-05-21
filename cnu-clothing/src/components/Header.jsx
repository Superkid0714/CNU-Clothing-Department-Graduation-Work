import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <>
      {/* 상단 검은 배경 */}
      <div className="h-12 bg-gray-800 w-full"></div>

      {/* 헤더 전체에 동일한 패딩 */}
      <header className="px-6 md:px-16 lg:px-24 pt-16">
        {/* 타이틀과 메뉴를 같은 container 안에 */}
        <div className="container mx-auto">
          {/* 타이틀 */}
          <Link to="/main" className="block mb-12">
            <h1 className="text-5xl font-bold text-slate-700 tracking-tight">
              Parergon : Layered Being
            </h1>
          </Link>

          {/* 네비게이션 메뉴: 타이틀과 같은 컨테이너 내에! */}
          <nav className="flex mb-20 text-xl font-medium">
            <Link
              to="/archive"
              style={{ marginRight: '3rem' }} // 직접 마진 값 지정
              className={`relative ${
                location.pathname === '/archive'
                  ? 'text-blue-800 font-semibold'
                  : 'text-slate-600'
              } hover:text-blue-800 transition-colors`}
            >
              Archive
              {location.pathname === '/archive' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-800"></span>
              )}
            </Link>

            <Link
              to="/artists"
              className={`relative ${
                location.pathname.includes('/artists')
                  ? 'text-blue-800 font-semibold'
                  : 'text-slate-600'
              } hover:text-blue-800 transition-colors`}
            >
              Artists
              {location.pathname.includes('/artists') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-800"></span>
              )}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
