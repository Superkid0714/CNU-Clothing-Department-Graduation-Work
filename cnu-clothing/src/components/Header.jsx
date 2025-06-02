import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [showArchiveDropdown, setShowArchiveDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const timeoutRef = useRef(null);

  // 카테고리 정보
  const archiveCategories = [
    { name: '클로', path: 'clo' },
    { name: '전통복식', path: 'traditional' },
    { name: '작품', path: 'works' },
    { name: '미디어제작', path: 'media-production' },
    { name: '패션마케팅', path: 'fashion-marketing' },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowArchiveDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowArchiveDropdown(false);
    }, 200); // 200ms 지연
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      {/* 데스크탑 헤더 */}
      <header className="hidden md:block px-6 md:px-16 lg:px-24 pt-16">
        <div className="container mx-auto">
          {/* 타이틀  */}
          <Link to="/archive" className="block mb-12">
            <h1
              className="text-5xl font-bold tracking-tight"
              style={{ color: '#20418f' }}
            >
              Parergon : Layered Being
            </h1>
          </Link>

          {/* 네비게이션 메뉴 */}
          <nav className="flex items-baseline mb-20 text-xl font-medium relative">
            {/* Archive 메뉴 */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ marginRight: '3rem' }}
            >
              <Link
                to="/archive"
                className={`relative block px-3 py-2 rounded-md transition-all duration-200 ${
                  location.pathname === '/archive' ||
                  location.pathname.startsWith('/archive/')
                    ? 'font-semibold'
                    : ''
                }`}
                style={{ color: '#20418f' }}
                onMouseEnter={(e) => (e.target.style.color = '#1a3777')}
                onMouseLeave={(e) => (e.target.style.color = '#20418f')}
              >
                Archive
                {(location.pathname === '/archive' ||
                  location.pathname.startsWith('/archive/')) && (
                  <span
                    className="absolute -bottom-1 left-0 w-full h-0.5"
                    style={{ backgroundColor: '#20418f' }}
                  ></span>
                )}
              </Link>

              {/* 드롭다운 메뉴  */}
              {showArchiveDropdown && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="h-2 w-full"></div>
                  <div className="bg-white shadow-lg border border-gray-200 rounded-lg py-4 px-6 min-w-56">
                    <ul className="space-y-3 text-sm">
                      {archiveCategories.map((category, index) => (
                        <li key={index} className="relative">
                          <Link
                            to={`/archive/${category.path}`}
                            className={`block px-3 py-2 rounded-md transition-colors duration-200 text-slate-600 hover:font-medium whitespace-nowrap text-sm ${
                              location.pathname === `/archive/${category.path}`
                                ? 'font-medium text-blue-800'
                                : ''
                            }`}
                            onMouseEnter={(e) => {
                              e.target.style.color = '#20418f';
                            }}
                            onMouseLeave={(e) => {
                              if (
                                location.pathname !==
                                `/archive/${category.path}`
                              ) {
                                e.target.style.color = '';
                              }
                            }}
                          >
                            {category.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Artists 메뉴 */}
            <Link
              to="/artists"
              className={`relative block px-3 py-2 rounded-md transition-all duration-200 ${
                location.pathname.includes('/artists') ? 'font-semibold' : ''
              }`}
              style={{ color: '#20418f' }}
              onMouseEnter={(e) => (e.target.style.color = '#1a3777')}
              onMouseLeave={(e) => (e.target.style.color = '#20418f')}
            >
              Artists
              {location.pathname.includes('/artists') && (
                <span
                  className="absolute -bottom-1 left-0 w-full h-0.5"
                  style={{ backgroundColor: '#20418f' }}
                ></span>
              )}
            </Link>
          </nav>
        </div>
      </header>

      {/* 모바일 헤더 */}
      <header className="block md:hidden px-4 pt-8 pb-8 bg-white shadow-sm mb-6">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <Link to="/archive" className="flex-1">
            <h1 className="text-lg font-bold text-blue-800 leading-tight">
              Parergon :<br />
              Layered Being
            </h1>
          </Link>

          {/* 햄버거 메뉴 버튼 */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-blue-800 hover:bg-blue-50 transition-colors"
            aria-label="메뉴 열기"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 오버레이 */}
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-300 ${
            showMobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {/* 배경 오버레이 */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              showMobileMenu ? 'bg-opacity-50' : 'bg-opacity-0'
            }`}
            onClick={closeMobileMenu}
          />

          {/* 메뉴 패널 */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-out ${
              showMobileMenu ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* 메뉴 헤더 */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-blue-800">메뉴</h2>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-md text-gray-500 hover:bg-gray-100 transition-all duration-200 hover:scale-110"
                aria-label="메뉴 닫기"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            {/* 메뉴 내용 */}
            <div className="p-4 space-y-6">
              {/* Archive 섹션 */}
              <div className="mobile-menu-item-1">
                <Link
                  to="/archive"
                  onClick={closeMobileMenu}
                  className={`block text-lg font-semibold mb-3 p-2 rounded-md transition-all duration-200 hover:bg-blue-50 ${
                    location.pathname === '/archive' ||
                    location.pathname.startsWith('/archive/')
                      ? 'text-blue-800 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-800'
                  }`}
                >
                  Archive
                </Link>
                <div className="ml-4 space-y-1">
                  {archiveCategories.map((category, index) => (
                    <Link
                      key={index}
                      to={`/archive/${category.path}`}
                      onClick={closeMobileMenu}
                      className={`block py-2 px-3 text-sm rounded-md transition-all duration-200 hover:bg-blue-50 hover:translate-x-1 mobile-menu-category ${
                        location.pathname === `/archive/${category.path}`
                          ? 'text-blue-800 font-medium bg-blue-50'
                          : 'text-gray-600 hover:text-blue-800'
                      }`}
                      style={{
                        animationDelay: `${(index + 1) * 100}ms`,
                        opacity: showMobileMenu ? 1 : 0,
                        transform: showMobileMenu
                          ? 'translateX(0)'
                          : 'translateX(20px)',
                        transition: `all 0.4s ease-out ${(index + 1) * 100}ms`,
                      }}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Artists 섹션 */}
              <div
                className="mobile-menu-item-2"
                style={{
                  opacity: showMobileMenu ? 1 : 0,
                  transform: showMobileMenu
                    ? 'translateX(0)'
                    : 'translateX(20px)',
                  transition: 'all 0.4s ease-out 0.3s',
                }}
              >
                <Link
                  to="/artists"
                  onClick={closeMobileMenu}
                  className={`block text-lg font-semibold p-2 rounded-md transition-all duration-200 hover:bg-blue-50 ${
                    location.pathname.includes('/artists')
                      ? 'text-blue-800 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-800'
                  }`}
                >
                  Artists
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
