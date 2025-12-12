import { createBrowserRouter } from 'react-router';
import { RootLayout } from '../providers/RootLayout/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <div>Home page</div>,
      },
    ],
  },
]);
