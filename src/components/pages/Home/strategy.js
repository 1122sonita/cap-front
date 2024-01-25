import { strategyData } from '@constants/mocks/homes';
import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from '@constants/mocks/motion';

export default function Strategy({ trans }) {
  return (
    <div className='md:space-y-[40px] space-y-[20px] md:py-[100px] py-[50px]'>
      <div className='space-y-[20px] w-full max-w-[1000px] mx-auto text-primary'>
        <h2 className='text-title font-bold text-center'>{trans.home.strategy.title}</h2>
        <p className='text-p text-center'>{trans.home.strategy.dsp}</p>
      </div>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        viewport={{ once: true }}
        whileInView='show'
        className='grid grid-cols-2 lg:grid-cols-4 md:gap-[40px] gap-[5px]  py-[2px] '
      >
        {strategyData.map((load) => (
          <motion.div
            variants={childVariants}
            key={load.id}
            className='rounded-[10px] md:p-[20px] py-[10px] px-[10px] border-primary border-[2px]'
            style={{ backgroundColor: load.color }}
          >
            <p className='text-p text-center'>{trans.home.strategy[load.trans].title}</p>
            <p className='text-h1 font-bold text-primary text-center md:leading-10 leading-5'>
              {trans.home.strategy[load.trans].num}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
