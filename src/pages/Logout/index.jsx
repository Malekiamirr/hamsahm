import { redirect } from 'react-router-dom';

export function action() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('expiration');
  return redirect('/');
}
