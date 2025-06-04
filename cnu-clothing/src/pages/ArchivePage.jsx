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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={index} to={category.path} className="block group">
                <div className="relative overflow-hidden rounded-lg bg-white hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                  {/* 컨텐츠 */}
                  <div className="p-4 md:p-8">
                    <h3 className="text-lg md:text-2xl font-bold text-blue-800 group-hover:text-blue-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
            r
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArchivePage;
