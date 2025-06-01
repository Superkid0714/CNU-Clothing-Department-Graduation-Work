import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ImageGallery from '../../components/ImageGallery';

const ClothingPage = () => {
  // 페이지 진입 시 스크롤을 맨 위로 이동
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  // 클로 작품 데이터
  const clothingWorks = [
    {
      id: 1,
      title: 'Phoenix Veil',
      artist: '배소진',
      image: 'public/clothing/1_main.jpg',
    },
    {
      id: 2,
      title: '클로 작품 2',
      artist: '박서연',
      image: '/images/clothing/work2.jpg',
      description: '클로 작품에 대한 설명입니다.',
    },
    {
      id: 3,
      title: '클로 작품 3',
      artist: '이지원',
      image: '/images/clothing/work3.jpg',
      description: '클로 작품에 대한 설명입니다.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* 페이지 제목 */}
      <div className="px-6 md:px-16 lg:px-24 pb-8">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            클로
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            클로 카테고리의 창의적이고 독창적인 작품들을 만나보세요.
          </p>
        </div>
      </div>

      {/* 작품 갤러리 */}
      <div className="px-6 md:px-16 lg:px-24 pb-16">
        <div className="container mx-auto">
          {clothingWorks.length > 0 ? (
            <ImageGallery works={clothingWorks} category="clo" />
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
                클로 카테고리의 작품들이 곧 업데이트될 예정입니다.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ClothingPage;
