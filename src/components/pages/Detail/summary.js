// import { useState } from 'react';
// import { MdOutlineCancel } from 'react-icons/md';
// import Link from 'next/link';
// import Image from 'next/image';
import React, { useState } from 'react';
import { SummaryData } from '@constants/mocks/others';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from '@constants/mocks/motion';

export default function Summary() {
  const [hoverId, setHoverId] = useState();
  return (
    <>
      <div className='dark:bg-gray-900 gap-10'>
        <h1 className='mt-4 text-subtitle'>Order Summary</h1>
        <div className='rounded-[10px] bg-white gap-10 p-4 '>
          <div className='flex justify-end'>
            <div className='p-4'>
              <div className=' gap-2'>
                <h1 className=''>
                  This page is the detailed summary of your order, it is not your invoice.
                </h1>
                <p className='pt-2 flex justify-end'>Price ex. GST (USD)</p>
              </div>
            </div>
          </div>
          <div className='bg-primary rounded-[10px] p-4'>
            <div>
              <h1 className='text-p'>Datacentre location</h1>
              <hr className='border-b border-gray-400 my-4' />
              <h1 className='text-p'>Singapore, Singapore</h1>
            </div>
          </div>
          <div className='ml-4'>
            <div className='p-4'>
              <div className=' gap-2'>
                <h1 className='text-title'>Starter</h1>
                <div className='flex justify-between'>
                  <button
                    type='button'
                    className='bg-secondary text-[14px] text-white px-4 py-2 rounded-full'
                  >
                    -77% the first 12 months
                    <p className='text-[12px]'>(New customer, 10 max)</p>
                  </button>
                  <div className='flex flex-col'>
                    <p className='text-[13px]  line-through'>US$ 4.20</p>
                    <p className='text-[13px] text-red-600'>US$ 0.97</p>
                    <p className='text-[13px] ml-2'>/month</p>
                  </div>
                </div>
                <hr className='border-b border-gray-400 my-4' />
              </div>
            </div>
          </div>
          <div className='md:py-[5px] py-[50px]  space-y-[20px] ml-4'>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='space-y-[11px]'
            />

            <motion.div
              variants={containerVariants}
              initial='hidden'
              viewport={{ once: true }}
              whileInView='show'
              className='grid grid-cols-1  justify-start gap-[10px] '
            >
              {SummaryData.map((load) => (
                <motion.div
                  variants={childVariants}
                  key={load.id}
                  onMouseOver={() => setHoverId(load.id)}
                  onMouseLeave={() => setHoverId(null)}
                  className=''
                >
                  <div className='px-[20px] rounded-t-[16px] bg-purple '>
                    <div className='md:h-[70px] h-[100px] flex flex-col items-start justify-start'>
                      <h3
                        className={cx(
                          'font-bold text-[12px] text-start line-clamp-2',
                          hoverId === load?.id ? 'text-primary' : 'text-primary'
                        )}
                      >
                        {load.title}
                      </h3>
                      <h3
                        className={cx(
                          ' text-[12px] text-start line-clamp-2',
                          hoverId === load?.id ? 'text-primary' : 'text-primary'
                        )}
                      >
                        {load.dsp}
                      </h3>
                    </div>
                    <hr className='border-b border-gray-400  w-4/5' />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className='p-4 py-[50px] '>
            <div>
              <h1 className='text-p'>Datacentre location</h1>
              <hr className='border-b border-gray-400 my-4' />
              <h1 className='text-[12px] text-red-600'>
                Special offer : 77% off on VPS Starter (for 12 months) for new customers only
              </h1>
            </div>
          </div>
          <div className='2xl:pl-[40px] py-4'>
            <hr className='border-gray-300 border-[1px] w-full' />
            <div className='flex justify-end '>
              <div className='flex flex-row gap-4'>
                <div className='flex flex-col justify-end p-4'>
                  <h1>Total ex. GST</h1>
                  <p>Including the first month of use</p>
                </div>
                <div className=' bg-primary w-[150px] flex items-center justify-center '>
                  US$ 0.97
                </div>
              </div>
            </div>
            <hr className='border-gray-300 border-[1px] w-full' />
          </div>
          <div className='2xl:pl-[40px] py-[10px]'>
            <div className='flex justify-end'>
              <div className='flex flex-row gap-4'>
                <div className='flex flex-col justify-end'>
                  <h1>Total ex. GST</h1>
                </div>
                <div className='  w-[100px] text-center '>US$ 0.97</div>
              </div>
            </div>
          </div>
          <div className='2xl:pl-[40px]'>
            <hr className='border-gray-300 border-[1px] w-full' />
            <div className='flex justify-end'>
              <div className='flex flex-row gap-4 '>
                <div className='flex flex-col justify-end p-4'>
                  <h1>Total ex. GST</h1>
                  <p>Including the first month of use</p>
                </div>
                <div className=' bg-red-600 w-[150px] flex items-center justify-center '>
                  US$ 0.97
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
