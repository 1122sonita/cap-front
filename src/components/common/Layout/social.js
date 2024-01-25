import { socialData } from '@constants/mocks/social';
import Link from 'next/link';
import React from 'react';
import Display from '../Display';

export default function Social() {
  return (
    <>
      <ul className='hidden 3xl:flex gap-[9px] items-center absolute top-1/2 transform -translate-y-1/2 right-5'>
        <li className='text-gray1 text-[20px]'>|&emsp;</li>
        {socialData.map(
          (load) =>
            load.navbar && (
              <li key={load.id}>
                <Link href={load.linkTo}>
                  <a target='_blank'>
                    <Display.Icon name={load.icon} size={24} className='text-white' />
                  </a>
                </Link>
              </li>
            )
        )}
      </ul>

      <ul className='hidden bg-primary 3xl:hidden md:flex flex-col items-center gap-[15px] fixed top-1/2 transform -translate-y-1/2 left-5 border-[3px] border-gray1 rounded-full px-[10px] py-[20px]'>
        {socialData.map(
          (load) =>
            load.navbar && (
              <li key={load.id}>
                <Link href={load.linkTo}>
                  <a target='_blank'>
                    <Display.Icon name={load.icon} size={24} className='text-white' />
                  </a>
                </Link>
              </li>
            )
        )}
      </ul>
    </>
  );
}
