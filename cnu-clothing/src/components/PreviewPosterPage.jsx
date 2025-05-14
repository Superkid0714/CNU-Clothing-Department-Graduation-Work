import { useNavigate } from 'react-router-dom';

export default function PreviewPosterPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 py-12">
      <div className="text-center space-y-6 max-w-[90vw] md:max-w-[600px]">
        {/* 상단 영문 부서명 */}
        <h2 className="text-xs md:text-sm tracking-widest text-gray-400">
          Department of Clothing & Textile Graduation Exhibition
        </h2>

        {/* 메인 타이틀 */}
        <h1 className="text-6xl md:text-8xl font-bold leading-none">
          共<br />存
        </h1>

        {/* 부제 */}
        <p className="text-base md:text-lg text-gray-300">
          : 서로의 시각을 엮다
        </p>

        {/* 전시 정보 */}
        <div className="mt-4 space-y-1 text-sm md:text-base text-gray-300">
          <p>06.06. ~ 06.11.</p>
          <p className="font-semibold text-white">
            전남대학교 의류학과 2025년도 졸업작품 전시회
          </p>
          <p>전남대학교 광주캠퍼스 스토리움</p>
        </div>
      </div>

      {/* 버튼 */}
      <button
        onClick={() => navigate('/main')}
        className="mt-12 px-6 py-2 rounded-full bg-white text-black text-sm md:text-base font-semibold hover:bg-gray-100 transition"
      >
        전시 시작하기
      </button>
    </div>
  );
}
