// M
import React from 'react';
import Header from '../components/Header';

const MainPage = () => {
  return (
    <div>
      <Header />
      {/* 이 아래에 MainPage의 본문 내용 */}
      <main className="container mx-auto">
        <h2 className="text-2xl font-bold">메인 콘텐츠 영역</h2>
        {/* ... */}
      </main>
    </div>
  );
};

export default MainPage;
