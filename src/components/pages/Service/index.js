import React from 'react';
import Banner from './banner';
import Available from './available';

export default function Service({ locale, trans }) {
  return (
    <main>
      <section className='container-fluid bg-banner-bg-1 bg-cover bg-no-repeat'>
        <div className='container-full-px'>
          <Banner trans={trans} />
        </div>
      </section>

      <section className='container-fluid bg-section-bg-3 bg-cover bg-no-repeat'>
        <div className='container-full-px'>
          <Available trans={trans} locale={locale} />
        </div>
      </section>
    </main>
  );
}
