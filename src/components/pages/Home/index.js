import React from 'react';
import Banner from './banner';

export default function Home() {
  return (
    <main>
      <section className='container-fluid bg-primary bg-cover bg-no-repeat'>
        <div className='container-full-px'>
          <Banner />
        </div>
      </section>
    </main>
  );
}
