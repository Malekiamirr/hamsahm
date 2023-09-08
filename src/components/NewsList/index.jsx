import NewsCard from '../NewsCard';

function NewsList({ newsData, toggleShowNewsDetail }) {
  return (
    <ul className="overflow-y-auto h-full scrolling">
      {newsData.map((news) => (
        <NewsCard
          news={news}
          key={news.id}
          toggleShowNewsDetail={toggleShowNewsDetail}
        />
      ))}
    </ul>
  );
}

export default NewsList;
