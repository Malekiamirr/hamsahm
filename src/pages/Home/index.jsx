import { EffectiveNews, Slider } from '../../components';
function HomePage() {
  const DUMMY_DATA = [
    {
      id: 1,
      text: 'میخوای همه اخبار و با تحلیل شون داشته باشی؟ اینجا کلیک کن ',
    },
    {
      id: 2,
      text: 'میخوای همه اخبار و با تحلیل شون داشته باشی؟ اینجا کلیک کن ',
    },
    {
      id: 3,
      text: 'میخوای همه اخبار و با تحلیل شون داشته باشی؟ اینجا کلیک کن ',
    },
  ];

  return (
    //   temprary width 360px
    <div className="h-[554px] flex flex-col gap-[84px] pt-[50px]">
      <Slider slides={DUMMY_DATA} />
      <EffectiveNews />
    </div>
  );
}

export default HomePage;
