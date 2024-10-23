import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const AppLayout = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>
      <footer className="bg-[#4c2a52] text-white text-center py-4">
        &copy; {new Date().getFullYear()} ADPRN. All rights reserved.
      </footer>
    </div>
  );
};

export default AppLayout;
