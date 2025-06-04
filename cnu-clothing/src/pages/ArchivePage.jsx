import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ArchivePage = () => {
  // 페이지 진입 시 스크롤을 맨 위로 이동
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const categories = [
    {
      name: '클로',
      path: '/archive/clo',
    },
    {
      name: '전통복식',
      path: '/archive/traditional',
    },
    {
      name: '작품',
      path: '/archive/works',
    },
    {
      name: '미디어제작',
      path: '/archive/media-production',
    },
    {
      name: '패션마케팅',
      path: '/archive/fashion-marketing',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="px-6 md:px-16 lg:px-24 pb-16">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Archive
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            전남대학교 의류학과 졸업작품 전시
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className="block group touch-manipulation"
              >
                <div
                  className="py-4 md:py-6 lg:py-8 
                              transition-all duration-150 ease-out
                              md:hover:-translate-y-1
                              active:scale-95 active:duration-75
                              select-none"
                >
                  <h3
                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-800 
                               transition-colors duration-150
                               md:group-hover:text-blue-600 
                               group-active:text-blue-600 leading-tight pointer-events-none"
                  >
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArchivePage;
