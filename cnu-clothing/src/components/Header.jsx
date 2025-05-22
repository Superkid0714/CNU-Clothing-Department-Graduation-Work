import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [showArchiveDropdown, setShowArchiveDropdown] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const timeoutRef = useRef(null);

  const archiveCategories = [
    '패션디자인',
    '미디어제작',
    '클로',
    '패션마케팅',
    '전통복식',
    '논문',
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
            <h1
              className="text-5xl font-bold tracking-tight"
              style={{ color: '#20418f' }}
            >
              Parergon : Layered Being
            </h1>
          </Link>

          {/* 네비게이션 메뉴: 타이틀과 같은 컨테이너 내에! */}
          <nav className="flex items-baseline mb-20 text-xl font-medium relative">
            {/* Archive 메뉴 - 드롭다운 포함 */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ marginRight: '3rem' }}
            >
              <Link
                to="/archive"
                className={`relative block px-3 py-2 rounded-md transition-all duration-200 ${
                  location.pathname === '/archive' ? 'font-semibold' : ''
                }`}
                style={{ color: '#20418f' }}
                onMouseEnter={(e) => (e.target.style.color = '#1a3777')}
                onMouseLeave={(e) => (e.target.style.color = '#20418f')}
              >
                Archive
                {location.pathname === '/archive' && (
                  <span
                    className="absolute -bottom-1 left-0 w-full h-0.5"
                    style={{ backgroundColor: '#20418f' }}
                  ></span>
                )}
              </Link>

              {/* 드롭다운 메뉴 */}
              {showArchiveDropdown && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  {/* 투명한 연결 영역 - 마우스가 이동할 때 끊어지지 않도록 */}
                  <div className="h-2 w-full"></div>
                  <div className="bg-white shadow-lg border border-gray-200 rounded-lg py-4 px-6 min-w-48">
                    <h3 className="text-lg font-semibold text-slate-700 mb-4 border-b border-gray-200 pb-2">
                      Opus Archive
                    </h3>
                    <ul className="space-y-3">
                      {archiveCategories.map((category, index) => (
                        <li key={index} className="relative">
                          {category === 'Fashion' ? (
                            <div
                              onMouseEnter={handleFashionMouseEnter}
                              onMouseLeave={handleFashionMouseLeave}
                              className="relative"
                            >
                              <Link
                                to={`/archive/${category.toLowerCase()}`}
                                className="block px-3 py-2 rounded-md transition-colors duration-200 text-slate-600 hover:font-medium"
                                onMouseEnter={(e) => {
                                  e.target.style.color = '#20418f';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.color = '';
                                }}
                              >
                                {category} →
                              </Link>

                              {/* Fashion 하위 메뉴 */}
                              {showFashionDropdown && (
                                <div className="absolute left-full top-0 ml-2 bg-white shadow-lg border border-gray-200 rounded-lg py-3 px-4 min-w-40 z-50">
                                  <ul className="space-y-2">
                                    {fashionSubCategories.map(
                                      (subCategory, subIndex) => (
                                        <li key={subIndex}>
                                          <Link
                                            to={`/archive/fashion/${subCategory}`}
                                            className="block px-2 py-1 rounded text-sm text-slate-600 hover:font-medium"
                                            onMouseEnter={(e) => {
                                              e.target.style.color = '#20418f';
                                            }}
                                            onMouseLeave={(e) => {
                                              e.target.style.color = '';
                                            }}
                                          >
                                            {subCategory}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              to={`/archive/${category.toLowerCase().replace(' ', '-')}`}
                              className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                                category === 'Furniture'
                                  ? 'bg-slate-600 text-white'
                                  : 'text-slate-600 hover:font-medium'
                              }`}
                              onMouseEnter={(e) => {
                                if (category !== 'Furniture') {
                                  e.target.style.color = '#20418f';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (category !== 'Furniture') {
                                  e.target.style.color = '';
                                }
                              }}
                            >
                              {category}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

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
    </>
  );
};

export default Header;
