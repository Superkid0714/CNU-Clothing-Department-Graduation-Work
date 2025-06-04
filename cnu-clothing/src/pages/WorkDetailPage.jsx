import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getWorkById, getCategoryName } from '../data/worksData';

const WorkDetailPage = ({ category }) => {
  const { workId } = useParams();
  const navigate = useNavigate();
  const [copySuccess, setCopySuccess] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  useEffect(() => {
    // 작품 데이터 로드
    const workData = getWorkById(category, workId);
    setWork(workData);
    setLoading(false);

    // 페이지 스크롤 초기화
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [category, workId]);

  // 링크 복사 기능
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  // 모달 열기
  const openModal = (index) => {
    setModalImageIndex(index);
    setShowModal(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setShowModal(false);
  };

  // 이전/다음 이미지 (모달)
  const nextModalImage = () => {
    if (work && work.images) {
      setModalImageIndex((prev) =>
        prev === work.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevModalImage = () => {
    if (work && work.images) {
      setModalImageIndex((prev) =>
        prev === 0 ? work.images.length - 1 : prev - 1
      );
    }
  };

  // 키보드 이벤트 (모달)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!showModal) return;

      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        nextModalImage();
      } else if (e.key === 'ArrowLeft') {
        prevModalImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showModal, work]);

  // 로딩 상태
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-800 mx-auto mb-4"></div>
          <p className="text-gray-600">작품을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  // 작품을 찾을 수 없는 경우
  if (!work) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="px-6 md:px-16 lg:px-24 py-16">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6">
              <svg
                className="w-12 h-12 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              작품을 찾을 수 없습니다
            </h2>
            <p className="text-gray-600 mb-8">
              요청하신 작품이 존재하지 않거나 삭제되었을 수 있습니다.
            </p>
            <button
              onClick={() => navigate(`/archive/${category}`)}
              className="inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              {getCategoryName(category)}로 돌아가기
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />

        <div className="px-6 md:px-16 lg:px-24 pb-16">
          <div className="container mx-auto">
            {/* 뒤로가기 버튼 */}
            <button
              onClick={() => navigate(`/archive/${category}`)}
              className="flex items-center text-blue-800 hover:text-blue-600 mb-8 transition-colors duration-200 group"
            >
              <svg
                className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              {getCategoryName(category)}로 돌아가기
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 왼쪽: 이미지 섹션 */}
              <div className="space-y-6">
                {/* 메인 이미지 */}
                <div className="relative aspect-w-4 aspect-h-5 bg-gray-100 rounded-lg overflow-hidden shadow-lg group">
                  <img
                    src={
                      work.images && work.images[selectedImageIndex]
                        ? work.images[selectedImageIndex]
                        : '/default-image.jpg'
                    }
                    alt={work.title}
                    className="w-full h-full object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
                    onClick={() => openModal(selectedImageIndex)}
                    onError={(e) => {
                      e.target.src =
                        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzljYTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPu2MjOydvCDsnbTrr7jsp4A8L3RleHQ+PC9zdmc+';
                    }}
                  />

                  {/* 전체화면 보기 버튼 */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => openModal(selectedImageIndex)}
                      className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
                      aria-label="전체화면으로 보기"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* 썸네일 이미지들 */}
                {work.images && work.images.length > 1 && (
                  <div className="overflow-x-auto p-2">
                    <div className="flex space-x-3">
                      {work.images.map((image, index) => (
                        <div
                          key={index}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                            selectedImageIndex === index
                              ? 'ring-4 ring-blue-800 ring-opacity-50'
                              : 'border-2 border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => setSelectedImageIndex(index)}
                        >
                          <img
                            src={image}
                            alt={`${work.title} ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
                            onError={(e) => {
                              e.target.src =
                                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2U1ZTdlYiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj4xPC90ZXh0Pjwvc3ZnPg==';
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 오른쪽: 작품 정보 */}
              <div className="space-y-8">
                {/* 기본 정보 */}
                <div>
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                    {getCategoryName(category)}
                  </div>
                  <h1 className="text-xl md:text-4xl font-bold text-blue-800 mb-4 leading-tight">
                    {work.title}
                  </h1>
                  <div className="flex items-center text-base md:text-lg text-gray-600 mb-6">
                    <span className="font-semibold text-black">
                      {work.artist}
                    </span>
                  </div>
                </div>

                {/* 작품 설명 */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-4">
                    작품 소개
                  </h3>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-xs md:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                      {work.description}
                    </p>
                  </div>
                </div>
                {/* 미디어제작 전용 정보 */}
                {category === 'media-production' && work.duration && (
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-blue-800 mb-3">
                      작품 정보
                    </h4>
                    <div className="bg-gray-50 p-3 md:p-4 rounded-lg space-y-2">
                      <p className="text-sm md:text-base">
                        <span className="font-medium">유형:</span>{' '}
                        {work.mediaType}
                      </p>
                      <p className="text-sm md:text-base">
                        <span className="font-medium">재생시간:</span>{' '}
                        {work.duration}
                      </p>
                    </div>
                  </div>
                )}

                {/* 패션마케팅 전용 정보 */}
                {category === 'fashion-marketing' && work.targetAudience && (
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-blue-800 mb-3">
                      마케팅 정보
                    </h4>
                    <div className="bg-gray-50 p-3 md:p-4 rounded-lg space-y-2">
                      <p className="text-sm md:text-base">
                        <span className="font-medium">타겟:</span>{' '}
                        {work.targetAudience}
                      </p>
                      <p className="text-sm md:text-base">
                        <span className="font-medium">핵심 메시지:</span>{' '}
                        {work.keyMessage}
                      </p>
                    </div>
                  </div>
                )}

                {/* 공유 버튼 */}
                <div className="pt-6 border-t border-gray-200">
                  <button
                    onClick={copyToClipboard}
                    className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-sm md:text-base"
                  >
                    {copySuccess ? (
                      <>
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        링크가 복사되었습니다!
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          ></path>
                        </svg>
                        링크 공유하기
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      {/* 전체화면 이미지 모달 */}
      {showModal && work && work.images && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* 모달 컨텐츠 */}
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
              aria-label="닫기"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* 메인 이미지 */}
            <img
              src={work.images[modalImageIndex]}
              alt={work.title}
              className="max-w-full max-h-[85vh] object-contain"
              onError={(e) => {
                e.target.src =
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuydtOuvuOyngCDroZzrk5zsl7Trn7w8L3RleHQ+PC9zdmc+';
              }}
            />

            {/* 이미지 네비게이션 (여러 이미지가 있을 때만) */}
            {work.images.length > 1 && (
              <>
                {/* 이전 버튼 */}
                <button
                  onClick={prevModalImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
                  aria-label="이전 이미지"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </button>

                {/* 다음 버튼 */}
                <button
                  onClick={nextModalImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
                  aria-label="다음 이미지"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>

                {/* 이미지 인디케이터 */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {work.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setModalImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === modalImageIndex
                          ? 'bg-white'
                          : 'bg-white bg-opacity-50'
                      }`}
                      aria-label={`이미지 ${index + 1}로 이동`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

WorkDetailPage.propTypes = {
  category: PropTypes.string.isRequired,
};

export default WorkDetailPage;
