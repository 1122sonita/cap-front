import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { getPlayLink } from '@utilities/dev';

export default function SubProvider({ trans }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center'>
      <div className='py-[40px]'>
        <Image
          src='/assets/about/contact.png'
          alt='contact'
          layout='responsive'
          width={1119}
          height={1001}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: 'spring' }}
        viewport={{ once: true }}
        className='space-y-[20px] md:py-[40px] py-[20px] lg:px-[100px] px-[5px]'
      >
        <h2 className='text-subtitle font-bold text-primary text-center leading-8'>
          {trans.about.provider.subTitle}
        </h2>

        <div className='flex justify-center'>
          <Link href={getPlayLink()}>
            <a>
              <button
                type='button'
                className='bg-secondary hover:bg-primary hover:text-secondary hover:scale-110 transition-all font-semibold text-p py-[10px] px-[40px] text-primary rounded-full'
              >
                {trans.about.provider.subBtn}
              </button>
            </a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
