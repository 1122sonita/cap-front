import { Main } from '@components/common';
import { useState, useEffect } from 'react';

export const MainLayout = ({ children }) => {
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
    <div>
      <Main.ScrollToTop scrollBtn={scrollBtn} />
      <div className='w-full h-full'>{children}</div>
    </div>
  );
};
