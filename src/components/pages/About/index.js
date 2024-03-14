import React from 'react';
import Banner from './banner';
import Why from './why';
import Channel from './channel';
import Business from './business';

export default function About({ trans }) {
  return (
    <main>
      <section className=' bg-primary bg-cover bg-no-repeat'>
        <div className='container-full-px'>
          <Banner trans={trans} />
        </div>
      </section>

      <section className=' bg-gradient bg-cover bg-no-repeat'>
        <div className='container-full-px py-[50px]'>
          <Why trans={trans} />
        </div>
      </section>

      <section className='container-full-px md:pt-[50px] md:pb-[10px] pt-[40px] pb-[2px]'>
        <Channel trans={trans} />
      </section>

      <section className='container-full-px md:py-[100px] py-[20px]'>
        <Business trans={trans} />
      </section>
    </main>
  );
}
