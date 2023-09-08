import { VscChromeClose } from 'react-icons/vsc';
import { FiLogOut } from 'react-icons/fi';
import { Link, Form } from 'react-router-dom';
import userIcon from '../../assets/user.svg';
import cameraIcon from '../../assets/camera.svg';
import bookmarkIcon from '../../assets/bookmark.svg';
import inviteIcon from '../../assets/invite.svg';
import smileIcon from '../../assets/smile.svg';
import securityIcon from '../../assets/security.svg';
import questionIcon from '../../assets/question.svg';
import phoneRingIcon from '../../assets/phoneRing.svg';

function Profile({ showProfile, toggleShowProfile }) {
  return (
    <div
      className={`absolute inset-0 w-full h-full z-50 bg-white transition-all duration-300 ${
        !showProfile && 'translate-x-[360px] -z50'
      }`}
    >
      <div className="flex flex-col justify-between w-full h-[189px] bg-primary-color bg-opacity-[15%]">
        <div onClick={toggleShowProfile} className="self-end pt-5 pl-6">
          <VscChromeClose className="w-6 h-6 text-dark-gray hover:cursor-pointer" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="w-[65px] h-[65px] border border-dark-gray rounded-full flex items-center justify-center text-dark-gray">
            <img
              src={userIcon}
              alt="userIcon"
              className="w-[53.53px] h-[53.53px]"
            />
          </div>
          <p className="text-[17px] text-dark-gray">نام و نام خانوادگی</p>
        </div>
        <div className="w-[34px] h-[34px] mb-2 mr-2 hover:cursor-pointer">
          <img src={cameraIcon} alt="cameraIcon" />
        </div>
      </div>

      <ul className="flex flex-col gap-[26px] pt-7 pr-[13px]">
        <li>
          <Link to="/dashboard">
            <div className="flex hover:cursor-pointer w-fit items-center gap-2 text-[17px] text-dark-gray">
              <img src={smileIcon} alt="smileIcon" />
              <span>مشخصات فردی</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/saved-news">
            <div className="flex hover:cursor-pointer w-fit items-center gap-2 text-[17px] text-dark-gray">
              <img src={bookmarkIcon} alt="bookmarkIcon" />
              <span>ذخیره شده ها</span>
            </div>
          </Link>
        </li>
        <li>
          <div className="flex hover:cursor-pointer w-fit items-center gap-2 text-[17px] text-dark-gray">
            <img src={securityIcon} alt="securityIcon" />
            <span>امنیت</span>
          </div>
        </li>
        <li className="flex hover:cursor-pointer w-fit items-center gap-2 text-[17px] text-dark-gray">
          <img src={questionIcon} alt="questionIcon" />
          <span>راهنما</span>
        </li>
        <li className="flex hover:cursor-pointer w-fit items-center gap-2 text-[17px] text-dark-gray">
          <img src={inviteIcon} alt="inviteIcon" />
          <span>دعوت از دوستان</span>
        </li>
        <li className="flex hover:cursor-pointer w-fit items-center gap-2 text-[17px] text-dark-gray">
          <img src={phoneRingIcon} alt="phoneRingIcon" />
          <span>پشتیبانی</span>
        </li>
        <li className="flex hover:cursor-pointer w-fit items-center text-[17px] text-dark-gray mr-[27px]">
          <span>درباره ما</span>
        </li>
        <li>
          <Form action="/logout" method="post">
            <button className="flex hover:cursor-pointer w-fit items-center gap-2 text-[17px] text-dark-gray">
              <FiLogOut className="w-5 h-5" />
              <span className="text-[17px] text-dark-gray">
                خروج از حساب کاربری
              </span>
            </button>
          </Form>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
