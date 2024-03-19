import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Banner({ trans }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-[40px] gap-[20px] items-center'>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className='space-y-[20px] md:py-[40px] py-[20px]'
      >
        <h1 className='text-banner font-bold text-secondary text-center md:text-left'>
          {trans.about.title}
        </h1>
        <p className='text-li text-white text-center md:text-left whitespace-pre-wrap'>
          {trans.about.dsp}
        </p>
      </motion.div>
      <div className='py-[40px]'>
        <Image
          src='/assets/about/banner-1.png'
          alt='banner-1'
          layout='responsive'
          width={1119}
          height={1001}
        />
      </div>
    </div>
  );
}
