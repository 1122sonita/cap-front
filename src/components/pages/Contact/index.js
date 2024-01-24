import React from 'react';
import LeftPanel from './leftPanel';
import RightPanel from './rightPanel';

export default function Contact({ trans }) {
  return (
    <main>
      <section className='container-fluid bg-gradient bg-cover bg-no-repeat'>
        <div className='container-full-px md:py-[100px] pt-[5px] pb-[100px]'>
          <div className='grid grid-cols-1  gap-[40px] md:grid-cols-2'>
            <LeftPanel trans={trans} />
            <RightPanel trans={trans} />
          </div>
        </div>
      </section>
    </main>
  );
}
