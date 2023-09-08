import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoadingSpinner } from '../../components';

function SignUp({ isUserSignUp, setIsUserSignUp }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneOrEmail: '',
      password: '',
      repeatPassword: '',
    },
  });

  const handleSubmitForm = async (data) => {
    const authData = {
      first_name: 'hamsahm',
      last_name: 'hamsahm',
      phone: data.phoneOrEmail,
      password: data.password,
    };

    setIsLoading(true);

    try {
      const response = await fetch(
        'https://hamsahm.com/api/accounts/register/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(authData),
        }
      );

      if (!response.ok) {
        throw await response.json(); // Throw the response body for detailed error messages
      }

      const resData = await response.json();
      console.log(resData);
      const token = resData.access_token;
      localStorage.setItem('accessToken', token);

      const refreshToken = resData.refresh_token;
      localStorage.setItem('refreshToken', refreshToken);

      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 1);
      localStorage.setItem('expiration', expiration.toISOString());

      setIsUserSignUp(true);
      setIsError(null);
    } catch (error) {
      setIsError(error); // Set the error object received from the server
    } finally {
      setIsLoading(false);
    }

    reset({
      phoneOrEmail: '',
      password: '',
      repeatPassword: '',
    });
  };

  const password = watch('password');

  return (
    <form
      method="post"
      onSubmit={handleSubmit(handleSubmitForm)}
      className={`${
        isUserSignUp && 'hidden'
      } mt-[38px] space-y-[38px] flex flex-col`}
    >
      <div className="flex flex-col gap-1">
        <input
          className="bg-[#F3F3F3] px-2 gradient-border w-[228px] h-[38px] outline-none placeholder:text-[11px] text-xs"
          type="text"
          {...register('phoneOrEmail', {
            required: 'شماره موبایل اشتباه است',
            pattern: {
              value: /^0[0-9]{10}$/, // Starts with 0 and has 11 digits
              message: 'شماره موبایل اشتباه است',
            },
          })}
          placeholder="شماره تلفن یا ایمیل"
          disabled={isLoading}
          onBlur={() => trigger('phoneOrEmail')}
          onFocus={() => setIsError(null)}
        />
        <p className="text-[#C81D11] text-[7px] h-[10px]">
          {errors.phoneOrEmail?.message}
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <input
          className="bg-[#F3F3F3] px-2 gradient-border w-[228px] h-[38px] outline-none placeholder:text-[11px] text-xs"
          type="password"
          {...register('password', {
            required:
              'رمز عبور باید شامل حداقل ۸ کاراکتر و حروف بزرگ، کوچک، عدد، و علامت خاص باشد',
            minLength: {
              value: 8,
              message:
                'رمز عبور باید شامل حداقل ۸ کاراکتر و حروف بزرگ، کوچک، عدد، و علامت خاص باشد',
            },
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
              message:
                'رمز عبور باید شامل حداقل ۸ کاراکتر و حروف بزرگ، کوچک، عدد، و علامت خاص باشد',
            },
          })}
          placeholder="رمز عبور"
          disabled={isLoading}
          onBlur={() => trigger('password')}
          onFocus={() => setIsError(null)}
        />
        <p className="text-[#C81D11] text-[7px] h-[10px]">
          {errors.password?.message}
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <input
          className="bg-[#F3F3F3] px-2 gradient-border w-[228px] h-[38px] outline-none placeholder:text-[11px] text-xs"
          type="password"
          {...register('repeatPassword', {
            required: 'رمز عبور یکسان نیست',
            minLength: {
              value: 8,
              message: 'رمز عبور یکسان نیست',
              validate: (value) =>
                value === password || 'رمز عبورها باید یکسان باشند',
            },
          })}
          placeholder="تکرار رمز عبور"
          disabled={isLoading}
          onBlur={() => trigger('repeatPassword')}
          onFocus={() => setIsError(null)}
        />
        <p className="text-[#C81D11] text-[7px] h-[10px]">
          {errors.repeatPassword?.message}
        </p>
      </div>

      {isError ? (
        <p className="text-[#C81D11] text-xs h-[10px] mx-auto">
          اکانت دیگری با این شماره موبایل وجود دارد!
        </p>
      ) : (
        <button
          className={`${
            isLoading && 'pointer-events-none'
          } text-[11px] bg-primary-color w-[68px] h-[29px] text-white rounded-full self-center flex items-center justify-center`}
          type="submit"
        >
          {isLoading ? <LoadingSpinner /> : 'تایید'}
        </button>
      )}
    </form>
  );
}

export default SignUp;
