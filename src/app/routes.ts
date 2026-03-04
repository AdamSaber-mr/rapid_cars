import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AanbodPage } from './pages/AanbodPage';
import { ContactPage } from './pages/ContactPage';
import { CarDetailPage } from './pages/CarDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'aanbod', Component: AanbodPage },
      { path: 'auto/:slug', Component: CarDetailPage },
      { path: 'contact', Component: ContactPage },
    ],
  },
]);