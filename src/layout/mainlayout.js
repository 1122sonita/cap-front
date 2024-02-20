import { Layout, Main } from '@components/common';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

export default function MainLayout({ children }) {
  // State
  const [scrollBtn, setScrollBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    });
  }, []);

  return (
    <div className='w-full relative'>
      <Main.ScrollToTop scrollBtn={scrollBtn} />

      <Layout.Navbar Cookies={Cookies} />
      <div>{children}</div>
      <Layout.Footer />
    </div>
  );
}
