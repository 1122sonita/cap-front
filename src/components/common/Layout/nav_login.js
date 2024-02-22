import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavbarLogin() {
  return (
    <nav className='bg-white  shadow-md border-b-2 border-gray-200 top-0 z-10'>
      <div className='max-w-[90rem] mx-auto px-2 sm:px-4 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Link href='/'>
              <a>
                <div className='w-24 h-24 mx-auto'>
                  <Image
                    src='/assets/main/logo_without_name.png'
                    alt='logo'
                    layout='responsive'
                    width={500}
                    height={500}
                  />
                </div>
              </a>
            </Link>
            <div className='hidden sm:block'>
              <div className='ml-1 flex items-baseline space-x-4'>
                <Link href='/about'>
                  <a className='px-3 py-2 rounded-md text-xl font-medium text-primary'>CloudBloc</a>
                </Link>
              </div>
            </div>
            <div className='hidden sm:block'>
              <div className='ml-6 flex items-baseline space-x-4'>
                <Link href='/'>
                  <a className='px-3 py-2 rounded-md text-sm font-medium hover:text-gray-700'>
                    Go back to website
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className='hidden sm:block'>
            <div className='ml-4 flex items-center space-x-4'>
              <Link href='/account'>
                <a className=' px-3 py-2 rounded-md text-sm font-medium'>Thida</a>
              </Link>
              <Link href='/'>
                <button
                  type='button'
                  className='inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-500 hover:bg-blue-700'
                >
                  Log out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
