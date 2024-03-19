import React from 'react';
import Banner from './banner';
import Service from './service';
import Strategy from './strategy';
import Provider from './provider';
import Support from './support';

export default function Home({ trans, apiData, apiData1 }) {
  return (
    <main>
      <section className='container-fluid bg-primary bg-cover bg-no-repeat'>
        <div className='container-full-px'>
          <Banner trans={trans} apiData={apiData} />
        </div>
      </section>

      <section className='container-fluid bg-section-bg-1 bg-cover bg-no-repeat'>
        <div className='container-full-px'>
          <Service trans={trans} />
        </div>
      </section>

      <section className='container-fluid bg-gradient bg-cover bg-no-repeat'>
        <div className='container-full-px'>
          <Strategy trans={trans} apiData1={apiData1} />
        </div>
      </section>

      <section className='container-fluid  bg-cover bg-no-repeat'>
        <div className='container-full-px'>
          <Provider trans={trans} />
        </div>
      </section>

      <section className='container-fluid  bg-cover bg-no-repeat'>
        <div className='container-full-px'>
          <Support trans={trans} />
        </div>
      </section>
    </main>
  );
}
