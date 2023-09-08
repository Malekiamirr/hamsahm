import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { FiPhoneCall, FiTwitter } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { LiaTelegram } from 'react-icons/lia';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  if (
    location.pathname === '/dashboard' ||
    location.pathname === '/saved-news' ||
    location.pathname === '/login'
  ) {
    return null;
  }
  return (
    <footer className="w-full bg-footer-gradient px-4 h-[181px] pt-4">
      {/* About Us */}
      <div className="flex flex-col text-dark-gray text-xs gap-[8px]">
        <span>درباره ما</span>
        <span>پرسش های متداول</span>
      </div>

      {/* Contact us */}
      <div className="flex flex-col items-end gap-2">
        <p className="font-bold text-xs text-dark-gray">ارتباط با ما</p>
        <div className="flex items-center justify-end gap-1 border-b-2 border-b-dark-gray border-opacity-30 pb-1 w-[168px]">
          <a className="text-white text-xs" href="mailto:hamsahm2023@gmail.com">
            hamsahm2023@gmail.com
          </a>
          <div className="w-[15px] h-[15px]">
            <HiOutlineMail className="text-dark-gray w-[15px] h-[15px]" />
          </div>
        </div>
        <div className="flex items-center justify-end gap-1 border-b-2 border-b-dark-gray border-opacity-30 pb-1 w-[168px]">
          <a className="text-white text-xs" href="tel:09938077806">
            09938077806
          </a>
          <div className="w-[13px] h-[13px]">
            <FiPhoneCall className="text-dark-gray w-[13px] h-[13px]" />
          </div>
        </div>

        {/* Social media */}
        <div className="flex items-center gap-2">
          <a href="">
            <FiTwitter className="w-3 h-3 text-dark-gray" />
          </a>
          <a href="">
            <LiaTelegram className="w-3 h-3 text-dark-gray" />
          </a>
          <a href="">
            <FaInstagram className="w-3 h-3 text-dark-gray" />
          </a>
        </div>
      </div>

      {/* Our Location */}
      <div className="flex items-center gap-1 hover:cursor-pointer">
        <HiOutlineLocationMarker className="w-4 h-4 text-dark-gray" />
        <span className="text-white text-xs">ما کجاییم؟</span>
      </div>
    </footer>
  );
}

export default Footer;
