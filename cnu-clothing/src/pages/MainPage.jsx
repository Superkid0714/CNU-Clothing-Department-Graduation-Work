import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    document.title = 'Parergon: Layered Being - CNU 2025';
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  // 아카이브 하위 카테고리 정보
  const archiveCategories = [
    {
      id: 'fashion-design',
      name: '패션디자인',
      image:
        'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=704&auto=format&fit=crop',
    },
    {
      id: 'media-production',
      name: '미디어제작',
      image:
        'https://images.unsplash.com/photo-1616469829467-ca19058ef7d8?q=80&w=704&auto=format&fit=crop',
    },
    {
      id: 'clothing',
      name: '클로',
      image:
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=704&auto=format&fit=crop',
    },
    {
      id: 'fashion-marketing',
      name: '패션마케팅',
      image:
        'https://images.unsplash.com/photo-1659029271786-92c362bacbe2?q=80&w=704&auto=format&fit=crop',
    },
    {
      id: 'traditional-costume',
      name: '전통복식',
      image:
        'https://images.unsplash.com/photo-1613387945987-b6a449ca8f9e?q=80&w=704&auto=format&fit=crop',
    },
    {
      id: 'thesis',
      name: '논문',
      image:
        'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=704&auto=format&fit=crop',
    },
  ];

  // 상단에 검은색 배경 추가
  const handleArchiveClick = () => {
    setActiveCategory('archive');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 상단 검은 배경 */}
      <div className="h-12 bg-gray-800 w-full"></div>

      <div
        className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* 메인 OPUS HAUS 스타일 헤더 */}
        <div className="px-12 md:px-16 lg:px-24 pt-20">
          <div className="container mx-auto">
            <h1 className="text-4xl font-medium text-blue-800 mb-28">
              Parergon: Layered Being
            </h1>

            {/* 주 메뉴 - OPUS HAUS 스타일로 넓은 간격 적용 */}
            <div className="flex space-x-32 mb-32 text-xl">
              <button
                onClick={handleArchiveClick}
                className={`text-${activeCategory === 'archive' ? 'blue-800 font-medium' : 'gray-600'} hover:text-blue-800 transition-colors`}
              >
                Archive
              </button>
              <Link
                to="/artists"
                className="text-gray-600 hover:text-blue-800 transition-colors"
              >
                Artists
              </Link>
            </div>
          </div>
        </div>

        {/* 아카이브 카테고리 */}
        {activeCategory === 'archive' && (
          <div className="px-12 md:px-16 lg:px-24 mb-20">
            <div className="container mx-auto">
              {/* 카테고리 메뉴 - OPUS HAUS 스타일 */}
              <div className="flex flex-wrap space-x-16 mb-20">
                {archiveCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="text-gray-600 hover:text-blue-800 transition-colors text-lg pb-2"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              {/* 그리드 표시 영역 - 필요시 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {archiveCategories.map((category) => (
                  <Link
                    to={`/category/${category.id}`}
                    key={category.id}
                    className="group block"
                  >
                    <div className="overflow-hidden mb-4">
                      <div
                        className="aspect-[4/5] bg-gray-100 transition-transform duration-700 group-hover:scale-105 bg-cover bg-center"
                        style={{ backgroundImage: `url(${category.image})` }}
                      />
                    </div>
                    <h3 className="text-xl font-medium text-blue-800">
                      {category.name}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 메인 콘텐츠 (아카이브가 선택되지 않았을 때) */}
        {!activeCategory && (
          <div className="px-12 md:px-16 lg:px-24 py-20">
            <div className="container mx-auto">
              <div className="flex flex-col items-center justify-center min-h-[40vh]">
                <h2 className="text-4xl font-medium text-blue-800 mb-8">
                  Welcome to Parergon
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl text-center mb-12">
                  전남대학교 의류학과 2025년 졸업작품전에 오신 것을 환영합니다.
                  <br />
                  상단의 'Archive'를 클릭하여 카테고리별 작품을 살펴보세요.
                </p>
                <button
                  onClick={handleArchiveClick}
                  className="px-8 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  아카이브 보기
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 간단한 푸터 */}
        <footer className="py-16 px-12 md:px-16 lg:px-24 border-t border-gray-200 mt-16">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-8 md:mb-0">
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Parergon: Layered Being
                </h3>
                <p className="text-sm text-gray-500 max-w-md">
                  전남대학교 의류학과 2025년 졸업작품전
                  <br />
                  2025.06.11 - 2025.06.17
                  <br />
                  전남대학교 컨벤션홀
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-blue-800 transition-colors"
                >
                  전시 소개
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-blue-800 transition-colors"
                >
                  전시 일정
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-blue-800 transition-colors"
                >
                  오시는 길
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-blue-800 transition-colors"
                >
                  문의하기
                </a>
              </div>
              <div className="flex flex-col space-y-2 mt-8 md:mt-0">
                <a
                  href="https://jnu.ac.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-blue-800 transition-colors"
                >
                  전남대학교
                </a>
                <a
                  href="https://jnu.ac.kr/dept/clothing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-blue-800 transition-colors"
                >
                  의류학과
                </a>
                <a
                  href="https://www.instagram.com/cnu_clothing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-blue-800 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-400">
                © 2025 Chonnam National University Clothing & Textiles
                Department. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainPage;
