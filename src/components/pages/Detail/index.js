import React from 'react';
import Stepper from './stepper';

export default function Detail({ trans, apiData }) {
  return (
    <main>
      <section className=' container-fluid bg-section-bg-1 bg-cover bg-no-repeat '>
        <div className='container-full-px md:py-[50px] pt-[5px] pb-[100px] bg-slate-200 '>
          <Stepper trans={trans} apiData={apiData} />
        </div>
      </section>
    </main>
  );
}
