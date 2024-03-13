import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Success() {
  return (
    <div className=' border-2 md:max-w-[60%] w-full drop-shadow-lg  py-[60px] rounded-xl'>
      <div className=' space-y-[20px] 2xl:px-[150px] xl:px-[80px] lg:px-[50px] px-[20px] '>
        <div className='flex flex-col justify-center items-center gap-y-[20px] '>
          <div className=' lg:w-[128px] w-[100px]'>
            <Image
              src='/assets//check.png'
              alt='banner-1'
              layout='responsive'
              width={128}
              height={128}
            />
          </div>
          <p className=' text-subtitle font-bold'>Payment Successful!</p>
        </div>

        <div className=' space-y-[10px]'>
          <div className=' flex justify-start items-center'>
            <p className=' text-p font-bold'>Receipt Number：</p>
          </div>
          <div className=' flex justify-start items-center gap-x-[10px]'>
            <p className=' text-p font-bold'>Amount: </p>
            <span className=' text-18px text-rose-500' />
          </div>

          <div className=' flex justify-start items-center'>
            <p className=' text-p font-bold'>Payment Method：</p>
          </div>

          <div className=' flex justify-start items-center border-t-2 border-gray-500 pt-[20px]'>
            <p className=' text-16px '>
              Payment has been successful,{' '}
              <span className=' font-bold'>
                please contact customer service immediately and send a screenshot of the order
              </span>
              , we will quickly process the account you purchased for you.
            </p>
          </div>
          <div className=' flex justify-between items-center px-[30px] pt-[30px]'>
            <Link href='/ads'>
              <a>
                <button
                  type='button'
                  className=' lg:w-[150px] md:w-[130px] w-[120px] py-[10px] font-bold border-2 rounded-full text-btn  border-primary hover:scale-[1.02] hover:bg-primary hover:text-white'
                >
                  Home
                </button>
              </a>
            </Link>

            <Link href='/account'>
              <a>
                <button
                  type='button'
                  className='  lg:w-[200px] md:w-[170px] w-[150px] py-[10px] font-bold border-2 rounded-full text-btn  border-primary hover:scale-[1.02] bg-primary hover:bg-white text-white hover:text-black'
                >
                  Profile Settings
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
