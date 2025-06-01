import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ArtistsPage = () => {
  // 학생 데이터
  const artistsByCategory = {
    clo: {
      title: '클로',
      color: 'from-blue-500 to-blue-600',
      students: [
        { id: 1, name: '배소진', workId: 1 },
        { id: 2, name: '신채영', workId: 2 },
        { id: 3, name: '박채윤', workId: 3 },
        { id: 4, name: '최예진', workId: 4 },
        { id: 5, name: '박주아', workId: 5 },
      ],
    },
    traditional: {
      title: '전통복식',
      color: 'from-purple-500 to-purple-600',
      students: [
        { id: 6, name: '문경진', workId: 1 },
        { id: 7, name: '오유진', workId: 2 },
        { id: 8, name: '성채원', workId: 3 },
        { id: 9, name: '박지후', workId: 4 },
        { id: 10, name: '이승유', workId: 5 },
        { id: 11, name: '송하경', workId: 6 },
      ],
    },
    works: {
      title: '작품',
      color: 'from-green-500 to-green-600',
      students: [
        { id: 12, name: '박정윤', workId: 1 },
        { id: 13, name: '오현경', workId: 2 },
        { id: 14, name: '김주영', workId: 3 },
        { id: 15, name: '박민혁', workId: 4 },
        { id: 16, name: 'DAI CHUNHUI', workId: 5 },
        { id: 17, name: 'HUANG JINGYA', workId: 6 },
        { id: 18, name: '이영석', workId: 7 },
        { id: 19, name: '최영철', workId: 8 },
        { id: 20, name: '유채하', workId: 9 },
        { id: 21, name: '전필립', workId: 10 },
        { id: 22, name: '안정윤', workId: 11 },
        { id: 23, name: '박찬희', workId: 12 },
        { id: 24, name: '김소민', workId: 13 },
        { id: 25, name: '조수아', workId: 14 },
        { id: 26, name: '최훈비', workId: 15 },
        { id: 27, name: '전은서', workId: 16 },
      ],
    },
    'media-production': {
      title: '미디어제작',
      color: 'from-red-500 to-red-600',
      students: [
        { id: 28, name: '박태서', workId: 1 },
        { id: 29, name: '박주영', workId: 2 },
        { id: 30, name: '배나연', workId: 3 },
        { id: 31, name: '김민진', workId: 4 },
        { id: 32, name: '류가령', workId: 5 },
        { id: 33, name: '이정민', workId: 6 },
      ],
    },
    'fashion-marketing': {
      title: '패션마케팅',
      color: 'from-yellow-500 to-yellow-600',
      students: [
        { id: 34, name: '정은정', workId: 1 },
        { id: 35, name: '문서희', workId: 2 },
        { id: 36, name: '신다솔', workId: 3 },
        { id: 37, name: '김채환', workId: 4 },
        { id: 38, name: '최세령', workId: 5 },
        { id: 39, name: '유다연', workId: 6 },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="px-4 md:px-6 lg:px-16 xl:px-24 pt-4 md:pt-0 pb-12 md:pb-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-3 md:mb-4">
            Artists
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12">
            전남대학교 의류학과 학생들
          </p>

          {/* 분야별 아티스트 섹션 */}
          <div className="space-y-8 md:space-y-12">
            {Object.entries(artistsByCategory).map(
              ([categoryKey, category]) => (
                <section key={categoryKey} className="space-y-4 md:space-y-6">
                  {/* 분야 제목 */}
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div
                      className={`w-3 h-6 md:w-4 md:h-8 bg-gradient-to-b ${category.color} rounded-full`}
                    ></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-800">
                      {category.title}
                    </h3>
                    <span className="text-xs md:text-sm text-gray-500 bg-gray-100 px-2 md:px-3 py-1 rounded-full">
                      {category.students.length}명
                    </span>
                  </div>

                  {/* 학생 카드 그리드 */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
                    {category.students.map((student) => (
                      <Link
                        key={student.id}
                        to={`/archive/${categoryKey}/${student.workId}`}
                        className="group block"
                      >
                        <div className="bg-white border-2 border-gray-200 rounded-lg p-3 md:p-4 hover:border-blue-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                          {/* 학생 정보 */}
                          <div className="text-center">
                            <h4 className="text-sm md:text-lg font-bold text-blue-800 group-hover:text-blue-600 transition-colors duration-300">
                              {student.name}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArtistsPage;
