import { supportData } from '@constants/mocks/homes';
import { getPlayLink } from '@utilities/dev';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

export default function Support({ trans }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center py-[40px] md:py-[100px]'>
      <div className='space-y-[20px] py-[20px]'>
        <h1 className='text-title font-bold text-black text-center md:text-left'>
          {trans.home.support.title}
        </h1>
        {/* <p className='text-24px text-white text-center md:text-left'>{trans.home.support.dsp}</p> */}
        <ul className='space-y-[20px]'>
          {supportData.map((load) => (
            <li key={load.id} className='flex gap-[10px]'>
              <div className='flex-none pt-[5px]'>
                <BsCheck2Circle size={28} className='text-secondary' />
              </div>
              <p className='text-li text-black'>{trans.home.support[load.trans]}</p>
            </li>
          ))}
        </ul>
        <div className='flex justify-center lg:justify-start px-[40px]'>
          <Link href={getPlayLink()}>
            <a>
              <button
                type='button'
                className='bg-primary text-btn py-[10px] px-[40px] hover:bg-primary hover:text-white hover:scale-110 transition-all text-white font-semibold rounded-[10px]'
              >
                {trans.home.support.btn}
              </button>
            </a>
          </Link>
        </div>
      </div>
      <div className='py-[40px]'>
        <Image
          src='/assets/home/support-1.png'
          alt='support-1'
          layout='responsive'
          width={1328}
          height={1194}
        />
      </div>
    </div>
  );
}
