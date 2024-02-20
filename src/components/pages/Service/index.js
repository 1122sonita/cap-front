import React from 'react';
import Banner from './banner';
import Available from './available';

export default function Service({ locale, trans, apiData }) {
  return (
    <main>
      <section className='container-fluid bg-primary bg-cover bg-no-repeat'>
        <div className='container-full-px'>
          <Banner trans={trans} />
        </div>
      </section>

      <section className='container-fluid  bg-cover bg-no-repeat'>
        <div className='container-full-px'>
          <Available trans={trans} locale={locale} apiData={apiData} />
        </div>
      </section>
    </main>
  );
}
