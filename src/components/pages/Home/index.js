import React from 'react';
import Banner from './banner';
import Service from './service';
import Strategy from './strategy';

export default function Home() {
  return (
    <main>
      <section className='container-fluid bg-primary bg-cover bg-no-repeat'>
        <div className='container-full-px'>
          <Banner />
        </div>
      </section>
      <section className='container-fluid bg-gradient bg-cover bg-no-repeat'>
        <div className='container-full-px'>
          <Service />
        </div>
      </section>
      <section className='container-fluid bg-gradient bg-cover bg-no-repeat'>
        <div className='container-full-px'>
          <Strategy />
        </div>
      </section>
    </main>
  );
}
