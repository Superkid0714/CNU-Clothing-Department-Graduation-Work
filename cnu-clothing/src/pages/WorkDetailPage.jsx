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
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMediaIndex, setModalMediaIndex] = useState(0);

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
    setModalMediaIndex(index);
    setShowModal(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setShowModal(false);
  };

  // 이전/다음 미디어 (모달)
  const nextModalMedia = () => {
    const mediaItems = createMediaItems();
    if (mediaItems && mediaItems.length > 0) {
      setModalMediaIndex((prev) =>
        prev === mediaItems.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevModalMedia = () => {
    const mediaItems = createMediaItems();
    if (mediaItems && mediaItems.length > 0) {
      setModalMediaIndex((prev) =>
        prev === 0 ? mediaItems.length - 1 : prev - 1
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
        nextModalMedia();
      } else if (e.key === 'ArrowLeft') {
        prevModalMedia();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showModal]); // work 의존성 제거

  // 미디어 렌더링 함수
  const renderMedia = (mediaItem, index, isModal = false, isThumb = false) => {
    const baseClasses = isThumb
      ? 'w-full h-full object-cover hover:scale-110 transition-transform duration-200'
      : isModal
        ? 'max-w-full max-h-[85vh] object-contain'
        : 'w-full h-full object-cover transition-transform duration-500 hover:scale-105';

    // 썸네일이 아니고 모달도 아닌 경우(메인 이미지)에는 클릭 이벤트 제거
    const clickHandler = isThumb ? undefined : isModal ? undefined : undefined;

    if (mediaItem.type === 'video') {
      return (
        <video
          key={index}
          className={baseClasses}
          controls={isModal || isThumb}
          muted={!isModal}
          autoPlay={false}
          poster={mediaItem.poster}
          onClick={clickHandler}
          onError={(e) => {
            // 영상 로드 실패 시 포스터 이미지로 대체
            if (mediaItem.poster) {
              const img = document.createElement('img');
              img.src = mediaItem.poster;
              img.className = baseClasses;
              img.alt = work?.title || '작품 이미지';
              e.target.parentNode.replaceChild(img, e.target);
            }
          }}
        >
          <source src={mediaItem.src} type="video/mp4" />
          브라우저에서 비디오를 지원하지 않습니다.
        </video>
      );
    } else {
      return (
        <img
          key={index}
          src={mediaItem.src}
          alt={work?.title || '작품 이미지'}
          className={baseClasses}
          onClick={clickHandler}
          onError={(e) => {
            e.target.src =
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzljYTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuydtOuvuOyngDwvdGV4dD48L3N2Zz4=';
          }}
        />
      );
    }
  };

  // 썸네일에 비디오 아이콘 표시
  const renderThumbIcon = (mediaItem) => {
    if (mediaItem.type === 'video') {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      );
    }
    return null;
  };

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
                />
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
                />
              </svg>
              {getCategoryName(category)}로 돌아가기
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // media 배열이 없으면 기존 images 배열 사용, videos 배열이 있으면 통합
  const createMediaItems = () => {
    const mediaItems = [];

    // 기존 images 배열을 먼저 추가
    if (work.images) {
      work.images.forEach((image) => {
        mediaItems.push({ type: 'image', src: image });
      });
    }

    // videos 배열이 있으면 추가 (원하는 위치에 삽입 가능)
    if (work.videos) {
      work.videos.forEach((video) => {
        // 영상을 특정 위치에 삽입하거나 끝에 추가
        if (
          video.insertAt !== undefined &&
          video.insertAt <= mediaItems.length
        ) {
          mediaItems.splice(video.insertAt, 0, {
            type: 'video',
            src: video.src,
            poster: video.poster,
          });
        } else {
          mediaItems.push({
            type: 'video',
            src: video.src,
            poster: video.poster,
          });
        }
      });
    }

    return mediaItems;
  };

  const mediaItems = createMediaItems();

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
                className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 왼쪽: 미디어 섹션 */}
              <div className="space-y-6">
                {/* 메인 이미지 */}
                <div className="relative aspect-w-4 aspect-h-5 bg-gray-100 rounded-lg overflow-hidden shadow-lg group">
                  {mediaItems.length > 0 &&
                    renderMedia(
                      mediaItems[selectedMediaIndex],
                      selectedMediaIndex
                    )}

                  {/* 전체화면 보기 버튼 */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => openModal(selectedMediaIndex)}
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
                        />
                      </svg>
                    </button>
                  </div>

                  {/* 메인 이미지 클릭 시 확대 */}
                  <div
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => openModal(selectedMediaIndex)}
                  />
                </div>

                {/* 썸네일 미디어들 */}
                {mediaItems.length > 1 && (
                  <div className="overflow-x-auto p-2">
                    <div className="flex space-x-3">
                      {mediaItems.map((mediaItem, index) => (
                        <div
                          key={index}
                          className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                            selectedMediaIndex === index
                              ? 'ring-4 ring-blue-800 ring-opacity-50'
                              : 'border-2 border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => setSelectedMediaIndex(index)}
                        >
                          {renderMedia(mediaItem, index, false, true)}
                          {renderThumbIcon(mediaItem)}
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
                  <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-800 mb-2 leading-tight">
                    {work.title} - {work.artist}
                  </h1>
                </div>

                {/* 작품 설명 */}
                <div>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
                      {work.description}
                    </p>
                  </div>
                </div>

                {/* 미디어제작 전용 정보 */}
                {category === 'media-production' && work.duration && (
                  <div>
                    <h4 className="text-sm md:text-base lg:text-lg font-semibold text-blue-800 mb-3">
                      작품 정보
                    </h4>
                    <div className="bg-gray-50 p-3 md:p-4 rounded-lg space-y-2">
                      <p className="text-xs md:text-sm lg:text-base">
                        <span className="font-medium">유형:</span>{' '}
                        {work.mediaType}
                      </p>
                      <p className="text-xs md:text-sm lg:text-base">
                        <span className="font-medium">재생시간:</span>{' '}
                        {work.duration}
                      </p>
                    </div>
                  </div>
                )}

                {/* 패션마케팅 전용 정보 */}
                {category === 'fashion-marketing' && work.targetAudience && (
                  <div>
                    <h4 className="text-sm md:text-base lg:text-lg font-semibold text-blue-800 mb-3">
                      마케팅 정보
                    </h4>
                    <div className="bg-gray-50 p-3 md:p-4 rounded-lg space-y-2">
                      <p className="text-xs md:text-sm lg:text-base">
                        <span className="font-medium">타겟:</span>{' '}
                        {work.targetAudience}
                      </p>
                      <p className="text-xs md:text-sm lg:text-base">
                        <span className="font-medium">핵심 메시지:</span>{' '}
                        {work.keyMessage}
                      </p>
                    </div>
                  </div>
                )}

                {/* 공유 버튼들 */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-3">
                    {/* 링크 공유 버튼 */}
                    <button
                      onClick={copyToClipboard}
                      className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium text-xs md:text-sm lg:text-base"
                    >
                      {copySuccess ? (
                        <>
                          <svg
                            className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mr-1 md:mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          복사됨
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mr-1 md:mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          링크 공유
                        </>
                      )}
                    </button>

                    {/* 인스타그램 버튼 - 인스타그램 주소가 있을 때만 표시 */}
                    {work.instagram && (
                      <button
                        onClick={() => window.open(work.instagram, '_blank')}
                        className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium text-xs md:text-sm lg:text-base"
                      >
                        <svg
                          className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mr-1 md:mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        Instagram
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      {/* 전체화면 미디어 모달 */}
      {showModal && work && mediaItems.length > 0 && (
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
                />
              </svg>
            </button>

            {/* 메인 미디어 */}
            {renderMedia(mediaItems[modalMediaIndex], modalMediaIndex, true)}

            {/* 미디어 네비게이션 (여러 미디어가 있을 때만) */}
            {mediaItems.length > 1 && (
              <>
                {/* 이전 버튼 */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevModalMedia();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200 z-20"
                  aria-label="이전 미디어"
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
                    />
                  </svg>
                </button>

                {/* 다음 버튼 */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextModalMedia();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200 z-20"
                  aria-label="다음 미디어"
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
                    />
                  </svg>
                </button>

                {/* 미디어 인디케이터 */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {mediaItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalMediaIndex(index);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === modalMediaIndex
                          ? 'bg-white'
                          : 'bg-white bg-opacity-50'
                      }`}
                      aria-label={`미디어 ${index + 1}로 이동`}
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
