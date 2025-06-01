import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ImageGallery from '../../components/ImageGallery';

const FashionMarketingPage = () => {
  // 페이지 진입 시 스크롤을 맨 위로 이동
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  // 패션마케팅 작품 데이터 (실제 이미지 경로로 수정하세요)
  const marketingWorks = [
    {
      id: 1,
      title: '패션마케팅 작품 1',
      artist: '학생명 1',
      image: '/images/fashion-marketing/work1.jpg', // 실제 파일명으로 교체
      description: '패션마케팅 작품에 대한 설명입니다.',
    },
    {
      id: 2,
      title: '패션마케팅 작품 2',
      artist: '학생명 2',
      image: '/images/fashion-marketing/work2.jpg', // 실제 파일명으로 교체
      description: '패션마케팅 작품에 대한 설명입니다.',
    },
    // 더 많은 작품들을 추가하세요
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* 페이지 제목 */}
      <div className="px-6 md:px-16 lg:px-24 pb-8">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            패션마케팅
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            패션 비즈니스와 마케팅 전략을 융합한 혁신적인 프로젝트들을
            만나보세요.
          </p>
        </div>
      </div>

      {/* 작품 갤러리 */}
      <div className="px-6 md:px-16 lg:px-24 pb-16">
        <div className="container mx-auto">
          {marketingWorks.length > 0 ? (
            <ImageGallery works={marketingWorks} category="fashion-marketing" />
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                작품을 준비 중입니다
              </h3>
              <p className="text-gray-600">
                패션마케팅 작품들이 곧 업데이트될 예정입니다.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FashionMarketingPage;
