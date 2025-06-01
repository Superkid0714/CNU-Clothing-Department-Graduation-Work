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
      description: '클로 작품들을 만나보세요',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: '전통복식',
      path: '/archive/traditional',
      description: '전통복식 작품들을 만나보세요',
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: '작품',
      path: '/archive/works',
      description: '작품들을 만나보세요',
      color: 'from-green-500 to-green-600',
    },
    {
      name: '미디어제작',
      path: '/archive/media-production',
      description: '미디어제작 작품들을 만나보세요',
      color: 'from-red-500 to-red-600',
    },
    {
      name: '패션마케팅',
      path: '/archive/fashion-marketing',
      description: '패션마케팅 작품들을 만나보세요',
      color: 'from-yellow-500 to-yellow-600',
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
            전남대학교 의류학과 졸업작품 카테고리별 전시
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={index} to={category.path} className="block group">
                <div className="relative overflow-hidden rounded-lg bg-white border-2 border-gray-200 hover:border-blue-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                  {/* 그라데이션 배경 */}
                  <div
                    className={`h-32 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>

                  {/* 컨텐츠 */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-blue-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>

                    {/* 화살표 아이콘 */}
                    <div className="mt-4 flex items-center text-blue-800 group-hover:text-blue-600 transition-colors duration-300">
                      <span className="text-sm font-medium mr-2">더 보기</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </div>
                  </div>
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
