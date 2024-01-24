import { servicesData } from '@constants/mocks/about';
import Image from 'next/image';
import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { motion } from 'framer-motion';

export default function Why({ trans }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-[100px] gap-[40px] items-center'>
      <div className='space-y-[20px] md:py-[40px] py-[10px]'>
        <div className='bg-gradient drop-shadow-md rounded-[20px] space-y-[20px] p-[20px] md:p-[40px]'>
          <motion.h1 className='text-title font-bold text-primary text-center md:text-left'>
            {trans.about.service.title.split('').map((letter, index) => (
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.ul
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, type: 'spring' }}
            className='space-y-[16px]'
          >
            {servicesData.map((load) => (
              <li key={load.id} className='flex gap-[10px] text-24px'>
                <div className='flex-none text-primary pt-[8px]'>
                  <BsCheck2Circle className='font-bold' />
                </div>
                <div>
                  <p className='text-li'>{trans.about.service.lists[load]}</p>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
      <div className='py-[40px]'>
        <Image
          src='/assets/about/why-1.png'
          alt='why-1'
          layout='responsive'
          width={1119}
          height={1001}
        />
      </div>
    </div>
  );
}
