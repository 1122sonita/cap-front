import Image from 'next/image';
import React from 'react';

export default function Business({ trans }) {
  return (
    <div className='md:space-y-[100px] space-y-[40px]'>
      <div className='text-center space-y-[10px]'>
        <h1 className='mb-12 text-3xl sm:text-4xl md:text-4xl font-semibold text-primary'>
          Our Team
        </h1>
        <p className='text-p t'>{trans.about.business.dsp}</p>
      </div>
      <div className='container my-24 mx-auto md:px-6 '>
        <section className='mb-32 text-center'>
          <div className='lg:gap-xl-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-5'>
            <div className='mb-12 lg:mb-0  '>
              <div className='mx-auto mb-6   '>
                <Image
                  className='rounded-full w-[150px] '
                  src='/assets/team/neath.jpg'
                  alt='banner-1'
                  layout='responsive'
                  width={0}
                  height={0}
                />
                <h5 className='mb-4 text-lg font-bold text-primary mt-2'>Pich PuthSreyNeath</h5>
                <p className='mb-6'>Team Leader</p>
              </div>
            </div>
            <div className='mb-12 lg:mb-0'>
              <Image
                className='mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[100px]'
                src='/assets/team/n.jpg'
                alt='banner-1'
                layout='responsive'
                width={0}
                height={0}
              />
              <h5 className='mb-4 text-lg font-bold text-primary mt-2'>Ren Sonita</h5>
              <p className='mb-6'>Frontend Developer</p>
            </div>
            <div className='mb-12 md:mb-0 '>
              <Image
                className='mx-auto mb-6  rounded-full shadow-lg dark:shadow-black/20 w-[150px]'
                src='/assets/team/satya.jpg'
                alt='banner-1'
                layout='responsive'
                width={0}
                height={0}
              />
              <h5 className='mb-4 text-lg font-bold text-primary mt-2'>Sieng Satya</h5>
              <p className='mb-6'>API Deveoper</p>
            </div>
            <div className='mb-12 md:mb-0'>
              <Image
                className='mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]'
                src='/assets/team/sreynit.jpg'
                alt='banner-1'
                layout='responsive'
                width={0}
                height={0}
              />
              <h5 className='mb-4 text-lg font-bold text-primary mt-2'>Theara Sreynit</h5>
              <p className='mb-6'>Backend Developer</p>
            </div>
            <div className='mb-12 md:mb-0'>
              <Image
                className='mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]'
                src='/assets/team/tinong.jpg'
                alt='banner-1'
                layout='responsive'
                width={0}
                height={0}
              />
              <h5 className='mb-4 text-lg font-bold text-primary mt-2'>Sot Tinong</h5>
              <p className='mb-6'>Cloud Engineer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
