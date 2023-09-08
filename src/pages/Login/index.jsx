import { useState } from 'react';
import { Link } from 'react-router-dom';
import { VscChromeClose } from 'react-icons/vsc';
import { SignIn, SignUp } from '../../layout';
import arrowDown from '../../assets/arrowDown.svg';
import { WelcomeMessage } from '../../components';
import logo from '../../assets/logo.jpg';

function LoginPage() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [whichfield, setWhichfield] = useState('sign-up');
  const [isUserSignUp, setIsUserSignUp] = useState(false);
  const toggleDropdown = (field) => {
    setShowDropdown((prevState) => !prevState);
    setWhichfield(field);
  };

  return (
    <div className="flex flex-col items-center h-screen p-6 bg-white">
      <div className="self-end">
        <Link to="/">
          <VscChromeClose className="w-6 h-6 text-dark-gray hover:cursor-pointer" />
        </Link>
      </div>
      <div
        className={`${isUserSignUp && 'hidden'} mt-[40px] w-[120px] h-[64px]`}
      >
        <img src={logo} alt="logo" />
      </div>
      <div
        style={{ borderImageWidth: 2 }}
        className={`w-[312px] h-[394px] gradient-border shadow-[0_4px_12px_0_rgba(0,0,0,0.39)] mt-[35px] px-2 py-4 ${
          isUserSignUp && 'flex items-center justify-center'
        }`}
      >
        <div
          className={`flex ${isUserSignUp && 'hidden'} ${
            whichfield === 'sign-up' ? 'flex-col' : 'flex-col-reverse'
          } shadow-[0_4px_9px_0_rgba(0,0,0,0.22)] w-min gradient-border`}
        >
          {(whichfield === 'sign-up' || showDropdown) && (
            <Link to="?mode=sign-up">
              <button
                onClick={() => toggleDropdown('sign-up')}
                className={`w-[81px] h-[22px] flex items-center justify-between text-[13px] px-1 ${
                  showDropdown &&
                  whichfield === 'sign-up' &&
                  'border-b-2 border-[#8E8E8E]'
                }`}
              >
                <span>عضویت</span>
                <img src={arrowDown} alt="arrow left" />
              </button>
            </Link>
          )}
          {(whichfield === 'sign-in' || showDropdown) && (
            <Link to="?mode=sign-in">
              <button
                onClick={() => toggleDropdown('sign-in')}
                className={`w-[81px] h-[22px] flex items-center justify-between text-[13px] px-1 ${
                  showDropdown &&
                  whichfield === 'sign-in' &&
                  'border-b-2 border-[#8E8E8E]'
                }`}
              >
                <span>ورود</span>
                <img src={arrowDown} alt="arrow left" />
              </button>
            </Link>
          )}
        </div>

        {whichfield === 'sign-up' ? (
          <SignUp
            isUserSignUp={isUserSignUp}
            setIsUserSignUp={setIsUserSignUp}
          />
        ) : (
          <SignIn />
        )}
        <WelcomeMessage isUserSignUp={isUserSignUp} />
      </div>
    </div>
  );
}

export default LoginPage;
