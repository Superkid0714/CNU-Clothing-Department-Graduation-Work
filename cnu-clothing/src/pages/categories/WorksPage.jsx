import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ImageGallery from '../../components/ImageGallery';

const WorksPage = () => {
  // 페이지 진입 시 스크롤을 맨 위로 이동
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  // 작품 데이터
  const works = [
    {
      id: 1,
      title: 'Sérénade en Rose',
      artist: '박정윤',
      image: '/works/1_main.jpg',
    },
    {
      id: 2,
      title: 'Metamorphosis',
      artist: '오현경',
      image: '/works/2_main.jpg',
    },
    {
      id: 3,
      title: '사탄화 : 천사의 부재',
      artist: '김주영',
      image: '/works/3_main.jpg',
    },
    {
      id: 4,
      title: 'Fatal',
      artist: '박민혁',
      image: '/works/4_main.jpg',
    },
    {
      id: 5,
      title: '채식주의',
      artist: 'DAI CHUNHUI',
      image: '/works/5_main.jpg',
    },
    {
      id: 6,
      title: 'Killing myself',
      artist: 'HUANG JINGYA',
      image: '/works/6_main.jpg',
    },
    {
      id: 7,
      title: 'Deconstruct to Redefine',
      artist: '이영석',
      image: '/works/7_main.jpg',
    },
    {
      id: 8,
      title: 'NO TITLE',
      artist: '최영철',
      image: '/works/8_main.jpg',
    },
    {
      id: 9,
      title: 'Beyond Reason, Into Light (광란의 빛)',
      artist: '유재하',
      image: '/works/9_main.jpg',
    },
    {
      id: 10,
      title: '바람의 노래를 들어라',
      artist: '전필립',
      image: '/works/10_main.jpg',
    },
    {
      id: 11,
      title: 'boRn;fire (본파이어)',
      artist: '안정윤',
      image: '/works/11_main.jpg',
    },
    {
      id: 12,
      title: '파란 언덕',
      artist: '박찬희',
      image: '/works/12_main.jpg',
    },
    {
      id: 13,
      title: '화무십일홍 : 花無十日紅',
      artist: '김소민',
      image: '/works/13_main.jpg',
    },
    {
      id: 14,
      title: '형태의 해체, 그 이면',
      artist: '조수아',
      image: '/works/14_main.jpg',
    },
    {
      id: 15,
      title: '입혀진 실존',
      artist: '최훈비',
      image: '/works/15_main.jpg',
    },
    {
      id: 16,
      title: '불편한 실용성 (hostile architecture)',
      artist: '전은서',
      image: '/works/16_main.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* 페이지 제목 */}
      <div className="px-6 md:px-16 lg:px-24 pb-8">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            작품
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            다양한 창작 작품들을 만나보세요.
          </p>
        </div>
      </div>

      {/* 작품 갤러리 */}
      <div className="px-6 md:px-16 lg:px-24 pb-16">
        <div className="container mx-auto">
          {works.length > 0 ? (
            <ImageGallery works={works} category="works" />
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
                작품들이 곧 업데이트될 예정입니다.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WorksPage;
