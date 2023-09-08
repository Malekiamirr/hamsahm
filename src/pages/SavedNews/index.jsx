import { Link } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';
import { useState } from 'react';
import { NewsList } from '../../components';

const DUMMY_NEWS = [
  {
    id: 1,
    text: 'متن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبر متن خبر متن خبر متن خبر متن خبر متن خبر متن خبر متن خبر متن خبر خبر متن خبر متن خبر ',
    showDetails: false,
  },
  {
    id: 2,
    text: 'متن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبر متن خبر متن خبر متن خبر متن خبر متن خبر متن خبر متن خبر متن خبر خبر متن خبر متن خبر ',
    showDetails: false,
  },
];

function SavedNewsPage() {
  const [newsData, setNewsData] = useState(DUMMY_NEWS);

  const toggleShowNewsDetail = (id) => {
    const updatedNewsData = [...newsData];

    const index = updatedNewsData.findIndex((news) => news.id === id);

    updatedNewsData[index].showDetails = !updatedNewsData[index].showDetails;

    setNewsData(updatedNewsData);
  };

  return (
    <div>
      <div className="border-b-2 border-[#C2C2C2] mx-[10px] flex items-center justify-between px-4 py-[10px]">
        <h2 className="text-[#B0B0B0]">ذخیره شده ها</h2>
        <Link to="/">
          <GoArrowLeft className="w-7 h-7 hover:cursor-pointer" />
        </Link>
      </div>
      <div className="mt-[36px]">
        <NewsList
          newsData={newsData}
          toggleShowNewsDetail={toggleShowNewsDetail}
        />
      </div>
    </div>
  );
}

export default SavedNewsPage;
