import arrowLeft from '../../assets/arrowLeft.svg';

function EffectiveNews() {
  return (
    <section>
      <div className="flex items-center justify-between pr-4 pl-2">
        <h2 className="text-[17px] font-bold">تاثیر گذار ترین اخبار</h2>
        <button className="flex items-center text-secondary-color">
          <span className="text-xs pb-1">همه</span>
          <img src={arrowLeft} alt="arrow left" />
        </button>
      </div>

      <div className="flex items-center justify-between px-[7px] mt-[18px]">
        <div
          style={{ boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.25)' }}
          className="w-[169px] h-[134px] rounded-[20px] flex py-8 px-[2px] gap-1"
        >
          <div className="w-[68px] h-[72px] bg-[#DCCBCB]"></div>
          <div className="w-[92px]">
            {/* //NOTE will be dynamic soon */}
            <h5 className="text-[7px] border-b-2 border-b-[#dedede] w-[66px] pb-[2px] mb-[2px]">
              تاثیرگذاری در ۳ سهم
            </h5>
            <p className="text-[10px] line-clamp-5">
              سایپا با ارائه آمار تولید و فروش پنج ماه سال، درآمد ۲۹.۱ هزار
              میلیارد تومانی شناسایی کرد...
            </p>
          </div>
        </div>

        <div
          style={{ boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.25)' }}
          className="w-[169px] h-[134px] rounded-[20px] flex py-8 px-[2px] gap-1"
        >
          <div className="w-[68px] h-[72px] bg-[#DCCBCB]"></div>
          <div className="w-[92px]">
            {/* //NOTE will be dynamic soon */}
            <h5 className="text-[7px] border-b-2 border-b-[#dedede] w-[66px] pb-[2px] mb-[2px]">
              تاثیرگذاری در ۳ سهم
            </h5>
            <p className="text-[10px] line-clamp-5">
              سایپا با ارائه آمار تولید و فروش پنج ماه سال، درآمد ۲۹.۱ هزار
              میلیارد تومانی شناسایی کرد...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EffectiveNews;
