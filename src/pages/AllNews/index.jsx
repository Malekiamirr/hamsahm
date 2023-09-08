import { useState } from 'react';
import { NewsList } from '../../components';

const DUMMY_NEWS = [
  {
    id: 1,
    text: 'متن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبر متن خبر متن خبر متن خبر متن خبر متن خبر متن خبر متن خبر متن خبر خبر متن خبر متن خبر ',
    showDetails: false,
    showAnalysis: false,
  },
  {
    id: 2,
    text: 'متن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبرمتن خبر متن خبر متن خبر متن خبر متن خبر متن خبر متن خبر متن خبر متن خبر خبر متن خبر متن خبر ',
    showDetails: false,
    showAnalysis: false,
  },
];

function AllNewsPage() {
  const [newsData, setNewsData] = useState(DUMMY_NEWS);

  const toggleShowNewsDetail = (id) => {
    const updatedNewsData = [...newsData];

    const index = updatedNewsData.findIndex((news) => news.id === id);

    updatedNewsData[index].showDetails = !updatedNewsData[index].showDetails;

    setNewsData(updatedNewsData);
  };

  return (
    <div className="h-[554px]">
      <h1 className="text-[17px] font-bold mt-[26px] px-2">تمامی اخبار</h1>
      <NewsList
        newsData={newsData}
        toggleShowNewsDetail={toggleShowNewsDetail}
      />
    </div>
  );
}

export default AllNewsPage;
