import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CustomLayout from './layout';

export default function OrderHistory() {
  return (
    <CustomLayout>
      <div className='container'>
        <div className='text-2xl text-gray-500'>All Products and Services</div>
        <div className='mt-5'>
          <div className='max-w-full mx-auto relative'>
            <div
              role='status'
              className='max-w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700'
            >
              <div className='flex items-center justify-between'>
                <div>
                  <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5' />
                  <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                </div>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12' />
              </div>
              <div className='flex items-center justify-between pt-4'>
                <div>
                  <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5' />
                  <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                </div>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12' />
              </div>
              <div className='flex items-center justify-between pt-4'>
                <div>
                  <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5' />
                  <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                </div>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12' />
              </div>
              <div className='flex items-center justify-between pt-4'>
                <div>
                  <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5' />
                  <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                </div>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12' />
              </div>
              <div className='flex items-center justify-between pt-4'>
                <div>
                  <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5' />
                  <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                </div>
                <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12' />
              </div>
              <span className='sr-only'>Loading...</span>
            </div>

            <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto'>
                  <Image
                    src='/assets/main/icons/not_found.png'
                    alt='not_found'
                    layout='responsive'
                    width={50}
                    height={50}
                  />
                </div>
                <h2 className='text-xl font-bold mb-2'>You do not have any products yet.</h2>
                <Link href='/service'>
                  <a>
                    <button
                      type='button'
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'
                    >
                      Go to Purchase
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}
