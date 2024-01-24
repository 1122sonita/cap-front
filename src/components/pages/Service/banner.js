import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Banner({ trans }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-[40px] items-center'>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className='space-y-[20px] py-[50px]'
      >
        <h1 className='text-banner font-bold text-secondary text-center md:text-left  '>
          {trans.other.title}
        </h1>
        <p className='text-title text-white text-center md:text-left leading-8 font-bold '>
          {trans.other.dsp}
        </p>
      </motion.div>
      <div className='py-[40px]'>
        <Image
          src='/assets/service/banner-1.png'
          alt='banner-1'
          layout='responsive'
          width={1305}
          height={1050}
        />
      </div>
    </div>
  );
}
