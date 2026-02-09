import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { Preloader } from '../components/Preloader';

export function Root() {
  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-[hsl(var(--color-dark))]">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}