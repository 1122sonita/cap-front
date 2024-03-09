import React from 'react';
import Success from './success';

export default function Successful() {
  return (
    <main>
      <section className='container-fluid bg-section-bg-1 bg-cover bg-no-repeat py-[10vh]'>
        <div className='container-full-px '>
          <div className='flex justify-center items-center'>
            <Success />
          </div>
        </div>
      </section>
    </main>
  );
}
