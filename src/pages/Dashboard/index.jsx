import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { getAuthToken } from '../../utils/auth';
import logo from '../../assets/logo.jpg';

function DashboardPage() {
  const token = getAuthToken();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    age: '',
    userName: '',
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { userData },
  });

  const onSubmit = (data) => {
    reset({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      age: '',
      userName: '',
    });
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch user information from the backend using the JWT token
    if (token) {
      fetch('https://hamsahm.com/api/accounts/user/phone/09365205363', {
        method: 'GET',
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0MTU4ODAxLCJpYXQiOjE2OTQxNTUyMDEsImp0aSI6IjE3OTAzYWVkZWM0NjQwZGFiYzk1NDljMDM3MmNjMWNhIiwidXNlcl9pZCI6IjFjNWI2YTBhLWI2ZjktNDA0MS1iOTc5LWMyMTFkY2ZhMmVjOCIsInVzZXJuYW1lIjpudWxsfQ.7o_SG2s67KNK1XFer72PWhSEyrAlGmNhyPz2bFTB2U8`,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to fetch user information');
          }
        })
        .then((data) => {
          // Set the fetched user information as default values for the input fields
          setUserData(data);
          setLoading(false);
          reset(data);
        })
        .catch((error) => {
          console.error('Error fetching user information:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [token, reset]);

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div>
      <div className="border-b-2 border-[#C2C2C2] mx-[10px] flex items-center justify-between px-4 py-[10px]">
        <h2 className="text-[#B0B0B0]">مشخصات فردی</h2>
        <Link to="/">
          <GoArrowLeft className="w-7 h-7 hover:cursor-pointer" />
        </Link>
      </div>
      <div className=" p-6 flex items-center gap-[34px] flex-col">
        <div className="w-[120px] min-h-[64px]">
          <img src={logo} alt="logo" />
        </div>

        <form
          style={{
            boxShadow: '0px 4px 12px 0px #00000063',
            borderImageWidth: 2,
          }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col pr-3 py-[26px] gap-6 w-[312px] h-[456px] bg-white gradient-border"
        >
          <input
            type="text"
            placeholder="نام"
            {...register('firstName', { required: true })}
            className="gradient-border w-[228px] h-[38px] text-xs placeholder:text-[#A1A1A1] placeholder:text-[11px] px-1 bg-[#F3F3F3] outline-none"
            style={{
              boxShadow: '0px 4px 9px 0px rgba(0, 0, 0, 0.22)',
            }}
          />

          <input
            type="text"
            placeholder="نام‌ خانوادگی"
            {...register('lastName', { required: true })}
            className="gradient-border w-[228px] h-[38px] text-xs placeholder:text-[#A1A1A1] placeholder:text-[11px] px-1 bg-[#F3F3F3] outline-none"
            style={{
              boxShadow: '0px 4px 9px 0px rgba(0, 0, 0, 0.22)',
            }}
          />

          <input
            type="text"
            placeholder="شماره تلفن"
            {...register('phoneNumber', { required: true })}
            className="gradient-border w-[228px] h-[38px] text-xs placeholder:text-[#A1A1A1] placeholder:text-[11px] px-1 bg-[#F3F3F3] outline-none"
            style={{
              boxShadow: '0px 4px 9px 0px rgba(0, 0, 0, 0.22)',
            }}
          />

          <input
            type="email"
            placeholder="ایمیل"
            {...register('email', { required: true })}
            className="gradient-border w-[228px] h-[38px] text-xs placeholder:text-[#A1A1A1] placeholder:text-[11px] px-1 bg-[#F3F3F3] outline-none"
            style={{
              boxShadow: '0px 4px 9px 0px rgba(0, 0, 0, 0.22)',
            }}
          />

          <input
            type="text"
            placeholder="سن"
            {...register('age', { required: true })}
            className="gradient-border w-[228px] h-[38px] text-xs placeholder:text-[#A1A1A1] placeholder:text-[11px] px-1 bg-[#F3F3F3] outline-none"
            style={{
              boxShadow: '0px 4px 9px 0px rgba(0, 0, 0, 0.22)',
            }}
          />

          <input
            type="text"
            placeholder="نام کاربری"
            {...register('userName', { required: true })}
            className="gradient-border w-[228px] h-[38px] text-xs placeholder:text-[#A1A1A1] placeholder:text-[11px] px-1 bg-[#F3F3F3] outline-none"
            style={{
              boxShadow: '0px 4px 9px 0px rgba(0, 0, 0, 0.22)',
            }}
          />

          <button
            type="submit"
            style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
            className={`bg-primary-color ${
              hasErrors
                ? 'bg-opacity-[15%] text-[#A1A1A1] pointer-events-none'
                : 'text-white'
            } rounded-full w-[68px] px-1 py-2  text-[11px] self-end ml-[22px]`}
          >
            ثبت تغییرات
          </button>
        </form>
      </div>
    </div>
  );
}

export default DashboardPage;
