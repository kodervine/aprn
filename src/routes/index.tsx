import { Navigate, useRoutes } from 'react-router-dom';
import AppLayout from '@/layouts/AppLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import People from '@/pages/People';
import Publications from '@/pages/Publications';
import Contact from '@/pages/Contact';
import Conferences from '@/pages/Conferences';

const AppRoutes = () => {
  const allPages = useRoutes([
    {
      element: <AppLayout />,
      children: [
        { path: '/', element: <Navigate to="/home" /> },
        { path: '/home', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/people', element: <People /> },
        { path: '/publications', element: <Publications /> },
        { path: '/conferences', element: <Conferences /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
    {
      path: '/*',
      element: <Navigate to="/home" />,
    },
  ]);

  return allPages;
};

export default AppRoutes;
