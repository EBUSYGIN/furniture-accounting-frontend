import { createBrowserRouter } from 'react-router';
import { RootLayout } from '../providers/RootLayout/RootLayout';
import { ProductsPage } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <ProductsPage />,
      },
      {
        path: '/workshops',
        element: <div>Workshops</div>,
      },
      {
        path: 'product/:id',
        element: <div>Страница редактирования</div>,
      },
    ],
  },
]);
