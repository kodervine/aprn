import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const AppLayout = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; {new Date().getFullYear()} APRN. All rights reserved.
      </footer>
    </div>
  );
};

export default AppLayout;
