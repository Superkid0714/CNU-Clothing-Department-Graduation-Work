import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ImageGallery = ({ works = [], category }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // 작품 클릭 시 상세 페이지로 이동
  const handleWorkClick = (work) => {
    if (category) {
      navigate(`/archive/${category}/${work.id}`);
    } else {
      // category가 없으면 모달 열기 (기존 방식)
      openModal(work);
    }
  };
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // 화면 크기 감지
  useEffect(() => {
  const openModal = (work) => {
    setSelectedImage(work);
    // 모바일에서 스크롤 방지
    if (isMobile) {
      document.body.style.overflow = 'hidden';
    }
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedImage(null);
    // 스크롤 복원
    document.body.style.overflow = 'unset';
  };

  // works가 없거나 빈 배열인 경우 처리
  if (!works || works.length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-blue-100 rounded-full mb-4 md:mb-6">
          <svg className="w-8 h-8 md:w-12 md:h-12 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-2 md:mb-4">작품을 준비 중입니다</h3>
        <p className="text-sm md:text-base text-gray-600">작품들이 곧 업데이트될 예정입니다.</p>
      </div>
    );
  }

  return (
    <>
      {/* 갤러리 그리드 - 모바일 2개, 데스크탑 4개 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
        {works.map((work) => (
          <div 
            key={work.id}
            className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2"
            onClick={() => handleWorkClick(work)}
          >
            {/* 이미지 - 모바일에서 높이 조정 */}
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden">
              <img
                src={work.image}
                alt={work.title || '작품 이미지'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuydtOuvuOyngCDspJXsnpE8L3RleHQ+PC9zdmc+';
                }}
              />
              
              {/* 호버 오버레이 - 모바일에서 터치 피드백 */}
              <div className="absolute inset-0 bg-blue-800 bg-opacity-0 group-hover:bg-opacity-20 group-active:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* 작품 정보 - 모바일에서 패딩 조정 */}
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-1 md:mb-2 line-clamp-2">
                {work.title || '제목 없음'}
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-2">
                by {work.artist || '작가명'}
              </p>
              {work.description && (
                <p className="text-xs md:text-sm text-gray-500 line-clamp-2 md:line-clamp-3">
                  {work.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 모달 - 모바일 최적화 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 md:p-4"
          onClick={closeModal}
        >
          <div className="relative w-full h-full md:max-w-4xl md:max-h-full flex flex-col md:block">
            {/* 닫기 버튼 - 모바일에서 위치 조정 */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 md:-top-10 md:right-0 z-10 p-2 md:p-0 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 md:bg-transparent rounded-full md:rounded-none"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* 확대된 이미지 - 모바일에서 스크롤 가능 */}
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title || '작품 이미지'}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* 이미지 정보 - 모바일에서 하단 고정 */}
            <div className="bg-black bg-opacity-80 md:bg-opacity-70 text-white p-4 md:p-6 md:absolute md:bottom-0 md:left-0 md:right-0 md:rounded-b-lg">
              <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">
                {selectedImage.title || '제목 없음'}
              </h3>
              <p className="text-sm md:text-lg mb-1 md:mb-2">
                by {selectedImage.artist || '작가명'}
              </p>
              {selectedImage.description && (
                <p className="text-xs md:text-sm opacity-90 line-clamp-3 md:line-clamp-none">
                  {selectedImage.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// PropTypes 정의
ImageGallery.propTypes = {
  works: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      artist: PropTypes.string,
      image: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
  category: PropTypes.string, // category prop 추가
};

export default ImageGallery;