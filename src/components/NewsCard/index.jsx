import { GoBookmark } from 'react-icons/go';
import { HiOutlinePencil } from 'react-icons/hi';
import { BsArrow90DegUp } from 'react-icons/bs';
import { useState } from 'react';
import NewsAnalysis from '../NewsAnalysis';

function NewsCard({ news, toggleShowNewsDetail }) {
  const [showNewsAnalysis, setShowNewsAnalysis] = useState(false);

  const toggleShowNewsAnalysis = () => setShowNewsAnalysis((prev) => !prev);

  return (
    <li className="pb-4 mt-2 border-b">
      <div className="float-left w-[103px] h-[121px] bg-[#CCCCCC] mx-2"></div>
      <p className={`text-[17px] pr-2 ${!news.showDetails && 'line-clamp-4'}`}>
        {news.text}
      </p>
      <div
        className={`flex items-center justify-between px-2 ${
          news.showDetails ? 'mt-4' : 'mt-10'
        }`}
      >
        <GoBookmark className="w-5 h-5 text-dark-gray hover:cursor-pointer" />
        <div className="flex items-center gap-1">
          <button
            onClick={toggleShowNewsAnalysis}
            style={{ boxShadow: '0px 4px 12px 0px #00000040' }}
            className="w-[60px] h-[18px] text-white bg-primary-color text-[8px] rounded-full"
          >
            تحلیل خبر
          </button>
          <button
            onClick={() => toggleShowNewsDetail(news.id)}
            className={`flex items-center justify-center text-white bg-secondary-color rounded-full ${
              news.showDetails ? 'w-[22px]' : 'w-[60px]'
            } h-[18px]`}
          >
            {news.showDetails ? (
              <BsArrow90DegUp className="w-3 h-3" />
            ) : (
              <>
                <span className="text-[8px]">ادامه مطلب</span>
                <HiOutlinePencil className="w-2 h-2" />
              </>
            )}
          </button>
        </div>
      </div>
      <NewsAnalysis isOpen={showNewsAnalysis} setIsOpen={setShowNewsAnalysis} />
    </li>
  );
}

export default NewsCard;
