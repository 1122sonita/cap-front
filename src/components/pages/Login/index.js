import React from 'react';
import RightPanel from './rightPanel';

export default function Login({ trans }) {
  return (
    <main>
      <section className='container-fluid bg-gradient bg-cover bg-no-repeat'>
        <div className='container-full-px md:py-[100px] pt-[5px] pb-[100px]'>
          <div className='flex justify-center items-center  gap-[40px] '>
            <RightPanel trans={trans} />
          </div>
        </div>
      </section>
    </main>
  );
}
