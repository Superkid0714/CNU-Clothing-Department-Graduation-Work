import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ImageGallery = ({ works = [], category }) => {
  const navigate = useNavigate();

  // 작품 클릭 핸들러
  const handleWorkClick = (work) => {
    if (category) {
      navigate(`/archive/${category}/${work.id}`);
    }
  };

  // works가 없거나 빈 배열인 경우 처리
  if (!works || works.length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-blue-100 rounded-full mb-4 md:mb-6">
          <svg
            className="w-8 h-8 md:w-12 md:h-12 text-blue-800"
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
        <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-2 md:mb-4">
          작품을 준비 중입니다
        </h3>
        <p className="text-sm md:text-base text-gray-600">
          작품들이 곧 업데이트될 예정입니다.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
      {works.map((work) => (
        <div
          key={work.id}
          className="group cursor-pointer transition-all duration-300 transform hover:-translate-y-2"
          onClick={() => handleWorkClick(work)}
        >
          {/* 이미지 컨테이너 (900x1200) */}
          <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-4 md:mb-5">
            <img
              src={work.images ? work.images[0] : work.image}
              alt={work.title || '작품 이미지'}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                console.error(
                  `이미지 로드 실패: ${work.images ? work.images[0] : work.image}`
                );
                // 에러 시 기본 이미지로 대체
                e.target.src =
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuydtOuvuOyngDwvdGV4dD48L3N2Zz4=';
              }}
            />
          </div>

          {/* 텍스트 영역 */}
          <div>
            <h3 className="text-sm md:text-lg font-bold text-blue-800 mb-1 md:mb-2 leading-tight">
              {work.title || '제목 없음'}
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              {work.artist || '작가명'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// PropTypes 정의
ImageGallery.propTypes = {
  works: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      artist: PropTypes.string,
      image: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
    })
  ),
  category: PropTypes.string,
};

export default ImageGallery;
