import { Link } from 'react-router-dom';
function WelcomeMessage({ isUserSignUp }) {
  return (
    <div
      className={`w-[208px] h-[170px] shadow-[0_3px_29px_0_rgba(0,166,147,0.75)] ${
        !isUserSignUp && 'opacity-0 -z-50'
      } duration-500 transition-opacity rounded-lg flex flex-col items-center`}
    >
      <div className="w-[64px] h-[37px] bg-[#D9D9D9] mt-[9px]"></div>
      <p className="text-[13px] mt-[22px]">به خانواده بزرگ همسهم خوش آمدید</p>
      <div className="flex w-[208px] h-[49px] -mb-px border-t border-t-primary-color rounded-t-lg mt-auto overflow-hidden">
        <button className="w-1/2 h-full bg-primary-color text-white text-[9px]">
          <Link to="/dashboard">
            <p className="w-full h-full flex items-center justify-center">
              تکمیل پروفایل
            </p>
          </Link>
        </button>
        <button className="w-1/2 h-full bg-white text-black text-[9px]">
          <Link to="/">
            <p className="w-full h-full flex items-center justify-center">
              بعدا
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default WelcomeMessage;
