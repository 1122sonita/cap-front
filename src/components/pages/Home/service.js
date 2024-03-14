import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Service({ trans }) {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center py-[50px]'>
        <div className='xl:pr-[100px] 2xl:pr-[200px]'>
          <div>
            <Image
              src='/assets/home/service-1.png'
              alt='service-1'
              layout='responsive'
              width={930}
              height={1010}
            />
          </div>
        </div>
        <div className='space-y-[20px] py-[20px]'>
          <h2 className='text-title font-bold text-primary text-center md:text-left'>
            {trans.home.service.title}
          </h2>
          <p className='text-p text-black text-center md:text-left whitespace-pre-wrap'>
            {trans.home.service.dsp}
          </p>
          <div className='flex justify-center md:justify-start'>
            <Link href='/service'>
              <a>
                <button
                  type='button'
                  className='bg-primary text-btn py-[10px] px-[40px] hover:bg-primary hover:text-white hover:scale-110 transition-all text-white rounded-full font-semibold'
                >
                  {trans.home.service.btn}
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
