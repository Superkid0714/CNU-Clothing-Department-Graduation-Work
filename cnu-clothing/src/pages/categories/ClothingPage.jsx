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
      image: '/clothing/1_main.jpg',
    },
    {
      id: 2,
      title: 'Tidy Deviation (정돈된 일탈)',
      artist: '신채영',
      image: '/clothing/2_main.jpg',
    },
    {
      id: 3,
      title: '도시:들',
      artist: '박채윤',
      image: '/clothing/3_main.jpg',
    },
    {
      id: 4,
      title: 'Lament of a rose',
      artist: '정서윤',
      image: '/clothing/4_main.jpg',
    },
    {
      id: 5,
      title: '물',
      artist: '박주아',
      image: '/clothing/5_main.jpg',
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
          <ImageGallery works={clothingWorks} category="clo" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ClothingPage;
