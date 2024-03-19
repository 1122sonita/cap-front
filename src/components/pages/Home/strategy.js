/* eslint-disable react/self-closing-comp */
// import { strategyData } from '@constants/mocks/homes';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from '@constants/mocks/motion';

export default function Strategy({ trans, apiData1 }) {
  const packages = apiData1?.result.recommended_packages || [];
  const selectedElements = packages.slice(0, 3);
  return (
    <Link href='/service'>
      <div className='md:space-y-[40px] space-y-[20px] md:py-[100px] py-[50px] cursor-pointer'>
        <div className='space-y-[20px] w-full max-w-[1000px] mx-auto text-primary'>
          <h2 className='text-title font-bold text-center'>{trans.home.strategy.title}</h2>
          <p className='text-p text-center text-black'>{trans.home.strategy.dsp}</p>
        </div>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          viewport={{ once: true }}
          whileInView='show'
          className='grid lg:grid-cols-3 px-8 gap-10 text-zinc-800 mt-10'
        >
          {selectedElements.map((load) => (
            <div className=''>
              <div className='flex flex-col items-center bg-gray-100 to-purple-100 p-8 rounded-lg shadow-lg relative border-8 border-primary max-w-sm'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  aria-hidden='true'
                  className='w-20 h-20 absolute -top-11 -left-11 fill-secondary'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <p className='mono text-sm absolute -top-4 bg-secondary text-zinc-100 py-0.5 px-2 font-bold tracking-wider rounded'>
                  POPULAR
                </p>
                <div>
                  <div className='flex gap-4 justify-center'>
                    <p className='font-extrabold text-3xl mb-2'>{load.name}</p>
                  </div>
                  <p className='opacity-60 text-center'></p>
                  <div className='flex gap-4 justify-center'>
                    <div className='flex flex-col items-center my-8'>
                      <p className='font-bold text-5xl'>{load.price}$</p>
                      <p className='opacity-60'>Per month</p>
                    </div>
                  </div>
                  <ul className='list-disc pl-6'>
                    <li className='opacity-60'>{load.cpu} vCPU </li>
                    <li className='opacity-60'>{load.memory} GB RAM</li>
                    <li className='opacity-60'>{load.storage} GB SSD</li>
                  </ul>
                  <button
                    type='button'
                    className='bg-blue-500 text-white rounded-lg py-2 px-4 mt-8'
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Link>
  );
}
