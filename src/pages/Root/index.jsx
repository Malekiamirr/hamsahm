import { useEffect, useState } from 'react';
import { Footer, Navbar } from '../../layout';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import { getRefreshToken, getTokenDuration } from '../../utils/auth';
function RootPage() {
  const [refreshingToken, setRefreshingToken] = useState(false);
  const token = useLoaderData();
  const refreshToken = getRefreshToken();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED' && refreshToken) {
      if (!refreshingToken) {
        setRefreshingToken(true);
        fetch('https://hamsahm.com/api/accounts/login/refresh/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ refresh: refreshToken }),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Tokresponseen refresh failed');
            }
          })
          .then((data) => {
            // Update your access token and reset the refresh token flag
            localStorage.setItem('accessToken', data.accessToken);
            setRefreshingToken(false);
          })
          .catch((error) => {
            console.error('Token refresh failed:', error);
            // Handle the error, possibly by redirecting to the login page
          });
      }
    }

    const tokenDuration = getTokenDuration();
    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
    }, tokenDuration);
  }, [token, submit, refreshToken, refreshingToken]);

  return (
    <div className="mx-auto w-[360px] bg-white h-[800px] justify-between flex flex-col relative overflow-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootPage;
