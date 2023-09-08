function NewsAnalysis({ isOpen, setIsOpen }) {
  return (
    <div
      className={`${
        !isOpen ? 'h-[0px]' : null
      } absolute left-0 bottom-0 w-full h-[70%] bg-[#EBEBEB] transition-all duration-300 rounded-t-[20px] flex flex-col items-center`}
    >
      {/* Draging button */}
      <div
        onClick={() => {
          setIsOpen(false);
          console.log(isOpen);
        }}
        className="w-[82px] flex items-center h-[20px] mt-2 hover:cursor-pointer"
      >
        <div className="w-[82px] bg-[#8F8F8F] h-[2px]"></div>
      </div>

      {/* Analysis */}
      <div className="w-[314px] h-[212px] bg-white p-3 rounded-[45px] shadow-[0_4px_8px_0_rgba(0,0,0,0.46)] mt-11">
        <p className="text-[15px] text-[#949494] text-center w-full">تحلیل</p>
        <p className="text-[13px] mt-[21px]">
          متن تحلیل متن تحلیل متن تحلیل متن تحلیل متن تحلیل متن تحلیل متن تحلیل
          متن تحلیل متن تحلیل متن تحلیل متن تحلیل متن تحلیل متن تحلیل متن تحلیل
          متن تحلیل متن تحلیل متن تحلیل متن تحلیل متن تحلیل متن تحلیل متن تحلیل
          متن تحلیل متن تحلیل متن تحلیل
        </p>
      </div>

      {/* Effectivity  */}
      <div className="w-[155px] h-[180px] bg-white py-[14px] px-2 mt-[41px] self-start mx-[23px] shadow-[0_4px_8px_0_rgba(0,0,0,0.46)] rounded-[21px] rounded-br-[0] flex flex-col">
        <div className="flex items-center gap-1 text-[8px] text-[#949494]">
          <span>تگ صنعت تاثیر گذار</span>
          <span className="h-3 w-[2px] bg-[#ebebeb]"></span>
          <span>نام تگ</span>
        </div>

        <div className="flex flex-col w-[52px] mt-4 text-[#949494]">
          <div className="flex items-center justify-between border-b-2 border-b-[#fafafa] pb-2">
            <span className="text-[8px]">نام سهم</span>
            <span className="w-[5px] h-[5px] bg-[#C81D11] rounded-full"></span>
          </div>
          <div className="flex items-center justify-between border-b-2 border-b-[#fafafa] pb-2 pt-1">
            <span className="text-[8px]">نام سهم</span>
            <span className="w-[5px] h-[5px] bg-[#FAFF02] rounded-full"></span>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-[8px]">نام سهم</span>
            <span className="w-[5px] h-[5px] bg-[#70FF00] rounded-full"></span>
          </div>
        </div>

        <div className="flex flex-col text-[4px] text-[#949494] w-[27px] self-end justify-self-end h-full justify-end">
          <div className="flex items-center justify-between">
            <span>تاثیر زیاد</span>
            <span className="w-[3px] h-[11px] bg-[#70FF00]"></span>
          </div>
          <div className="flex items-center justify-between">
            <span>تاثیر متوسط</span>
            <span className="w-[3px] h-[11px] bg-[#FAFF02]"></span>
          </div>
          <div className="flex items-center justify-between">
            <span>تاثیر کم</span>
            <span className="w-[3px] h-[11px] bg-[#C81D11]"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsAnalysis;
