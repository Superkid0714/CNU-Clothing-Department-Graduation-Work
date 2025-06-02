import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ImageGallery from '../../components/ImageGallery';

const TraditionalPage = () => {
  // 페이지 진입 시 스크롤을 맨 위로 이동
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  // 전통복식 작품 데이터 (
  const traditionalWorks = [
    {
      id: 1,
      title: '대한제국 대례복 연구',
      artist: '문경진',
      image: '/traditional/1_main.jpg',
    },
    {
      id: 2,
      title: '웨딩, 전통을 입다',
      artist: '오유진',
      image: '/traditional/2_main.jpg',
    },
    {
      id: 3,
      title: '월하 (月下)',
      artist: '성채원',
      image: '/traditional/3_main.jpg',
    },
    {
      id: 4,
      title: '꽃의 향연',
      artist: '박지후',
      image: '/traditional/4_main.jpg',
    },
    {
      id: 5,
      title: 'A legacy of TIME : 시간이 남긴 유산',
      artist: '이승유',
      image: '/traditional/5_main.jpg',
    },
    {
      id: 6,
      title: 'THE 黑 :경계를 허물다',
      artist: '송하경',
      image: '/traditional/6_main.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* 페이지 제목 */}
      <div className="px-6 md:px-16 lg:px-24 pb-8">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            전통복식
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            우리나라 전통 복식의 아름다움을 현대적으로 재해석한 작품들을
            만나보세요.
          </p>
        </div>
      </div>

      {/* 작품 갤러리 */}
      <div className="px-6 md:px-16 lg:px-24 pb-16">
        <div className="container mx-auto">
          {traditionalWorks.length > 0 ? (
            <ImageGallery works={traditionalWorks} category="traditional" />
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
                <svg
                  className="w-12 h-12 text-blue-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                작품을 준비 중입니다
              </h3>
              <p className="text-gray-600">
                전통복식 작품들이 곧 업데이트될 예정입니다.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TraditionalPage;
