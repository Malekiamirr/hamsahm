import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  AllNewsPage,
  DashboardPage,
  HomePage,
  LoginPage,
  RootPage,
  SavedNewsPage,
} from './pages';
import { checkAuthLoader, tokenLoader } from './utils/auth';
import { action as logoutAction } from './pages/Logout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'all-news',
        element: <AllNewsPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
        loader: checkAuthLoader,
      },
      {
        path: 'saved-news',
        element: <SavedNewsPage />,
        loader: checkAuthLoader,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
