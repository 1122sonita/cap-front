import { getContacts } from '@utilities/dev';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function LeftPanel({ trans }) {
  return (
    <div className='space-y-[57px] md:space-y-[150px] py-[40px]'>
      <div className='space-y-[39px] w-full max-w-[400px] mx-auto text-center'>
        <h1 className='text-h1 font-bold text-secondary'>{trans.contact.leftPanel.title}</h1>

        <ul className='space-y-[10px]'>
          <li>
            <p className='text-primary font-bold text-li'>
              {trans.contact.leftPanel.telegram}:{' '}
              <span className='font-bold text-p'>{getContacts.telegram.title}</span>
            </p>
          </li>
        </ul>
      </div>
      <div className=' flex justify-center '>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className=' w-[200px] sm:w-[303px] sm:mt-[-80px] mt-[-20px]'
        >
          <Image src='/assets/main/telegram.png' alt='telegram' width={303} height={303} />
        </motion.div>
      </div>
    </div>
  );
}
