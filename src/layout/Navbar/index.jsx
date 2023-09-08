import { Link, useLocation, useRouteLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { SearchBox, Sidebar } from '../../components';
import { Profile } from '../index';
import greenUser from '../../assets/greenUser.svg';
import logoSquere from '../../assets/logo-squere.jpg';

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const toggleShowSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const toggleShowProfile = () => {
    setShowProfile((prev) => !prev);
  };

  const token = useRouteLoaderData('root');

  const location = useLocation();
  if (
    location.pathname === '/dashboard' ||
    location.pathname === '/saved-news' ||
    location.pathname === '/login'
  ) {
    return null;
  }
  return (
    <nav className="px-[8px] py-[11.5px] bg-white navbar-shadow h-[65px] flex items-center justify-between">
      {/* Menu & Searchbar Container */}
      <div className="flex items-center gap-6">
        <AiOutlineMenu
          onClick={toggleShowSidebar}
          className="w-6 h-6 text-primary-color hover:cursor-pointer"
        />
        <SearchBox />
      </div>
      {/* Login button & Logo image Container*/}
      <div className="flex items-center gap-4">
        {token ? (
          <div
            onClick={toggleShowProfile}
            className="w-6 h-6 hover:cursor-pointer"
          >
            <img src={greenUser} alt="userIcon" />
          </div>
        ) : (
          <Link to="/login?mode=sign-up">
            <p className="text-dark-gray text-[11px] hover:cursor-pointer">
              ورود/عضویت
            </p>
          </Link>
        )}
        {/* Logo */}
        <Link to="/">
          <div className="w-[42px] h-[42px] hover:cursor-pointer">
            <img src={logoSquere} alt="logo" />
          </div>
        </Link>
      </div>

      {/* //NOTE only show if showSidebar === true */}
      <Sidebar
        toggleShowSidebar={toggleShowSidebar}
        showSidebar={showSidebar}
      />

      <Profile
        toggleShowProfile={toggleShowProfile}
        showProfile={showProfile}
      />
    </nav>
  );
}

export default Navbar;
