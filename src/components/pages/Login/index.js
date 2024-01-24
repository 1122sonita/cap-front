import React from 'react';
import RightPanel from './rightPanel';

export default function Login({ trans }) {
  return (
    <main>
      <section className='container-fluid bg-primary bg-cover bg-no-repeat'>
        <div className='container-full-px py-[100px]'>
          <RightPanel trans={trans} />
        </div>
      </section>
    </main>
  );
}
