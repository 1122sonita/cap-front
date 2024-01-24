import { businessData } from '@constants/mocks/about';
import Image from 'next/image';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from '@constants/mocks/motion';

export default function Business({ trans }) {
  return (
    <div className='md:space-y-[100px] space-y-[40px]'>
      <div className='text-center space-y-[10px]'>
        <h2 className='text-title font-bold text-primary'>{trans.about.business.title}</h2>
        <p className='text-p'>{trans.about.business.dsp}</p>
      </div>

      <motion.ul
        variants={containerVariants}
        initial='hidden'
        viewport={{ once: true }}
        whileInView='show'
        className='grid grid-cols-1 lg:grid-cols-8 lg:px-0 md:px-[100px] px-[30px]'
      >
        {businessData.map((load) =>
          !load.arrow ? (
            <motion.li variants={childVariants} key={load.id} className='col-span-2 h-full'>
              <div className='border-[1px] border-primary space-y-[20px] rounded-[10px] p-[20px] w-full h-full drop-shadow-md bg-gradient'>
                <div className='w-[100px] mx-auto'>
                  <Image
                    src={load.image.url}
                    alt={load.image.alt}
                    layout='responsive'
                    width={load.image.width}
                    height={load.image.height}
                  />
                </div>

                <div className='text-center space-y-[10px]'>
                  <h3 className='text-suptitle font-bold text-primary'>
                    {trans.about.business.cards[load.trans].title}
                  </h3>
                  <p className=' text-li'>{trans.about.business.cards[load.trans].dsp}</p>
                </div>
              </div>
            </motion.li>
          ) : (
            <li className='h-full flex items-center justify-center py-[20px]'>
              <FaArrowRightLong className='text-60px text-primary rotate-90 lg:rotate-0' />
            </li>
          )
        )}
      </motion.ul>
    </div>
  );
}
