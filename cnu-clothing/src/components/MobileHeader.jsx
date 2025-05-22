// components/MobileHeader.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileHeader = () => {
  const location = useLocation();
  return (
    <header className="block md:hidden py-8 bg-white text-center shadow">
      <h1 className="text-2xl font-bold mb-6 text-[#20418f]">
        Parergon : Layered Being
      </h1>
      <div className="flex justify-center gap-4">
        <Link
          to="/archive"
          className={`w-40 py-3 rounded-full text-lg font-semibold border-2 transition
            ${
              location.pathname.startsWith('/archive')
                ? 'bg-[#5b7290] text-white border-[#5b7290]'
                : 'bg-white text-[#5b7290] border-[#5b7290]'
            }
          `}
        >
          Archive
        </Link>
        <Link
          to="/artists"
          className={`w-40 py-3 rounded-full text-lg font-semibold border-2 transition
            ${
              location.pathname.startsWith('/artists')
                ? 'bg-[#5b7290] text-white border-[#5b7290]'
                : 'bg-white text-[#5b7290] border-[#5b7290]'
            }
          `}
        >
          Artist
        </Link>
      </div>
    </header>
  );
};

export default MobileHeader;
