import { providerData } from '@constants/mocks/about';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cx from 'classnames';
import { getPlayLink } from '@utilities/dev';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from '@constants/mocks/motion';

export default function Provider({ trans }) {
  return (
    <div className='space-y-[40px]'>
      <div className='space-y-[20px] w-full max-w-[900px] mx-auto text-black'>
        <h2 className='text-title font-bold text-center'>{trans.about.provider.title}</h2>
        <p className='text-p text-center'>{trans.about.provider.dsp}</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        viewport={{ once: true }}
        whileInView='show'
        className={cx(
          'w-full max-w-[1000px] mx-auto pt-[40px]',
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[60px]'
        )}
      >
        {providerData.map((load) => (
          <motion.div
            variants={childVariants}
            key={load.id}
            className={cx(
              'bg-gradient hover:text-black drop-shadow-md rounded-[10px]',
              'flex flex-col items-center justify-between gap-[20px]',
              'py-[20px] md:py-[20px] px-[20px] md:px-[20px] '
            )}
          >
            <div className='w-1/3 lg:max-w-[140px] max-w-[100px] -top-[40px] absolute'>
              <Image
                src={load.image.url}
                alt={load.image.alt}
                layout='responsive'
                width={257}
                height={257}
              />
            </div>
            <div className='flex flex-col justify-between gap-[20px]  h-full pt-[80px]'>
              <div>
                <p className='text-li text-center'>{trans.about.provider[load.trans].title}</p>
              </div>

              <div className='flex flex-wrap justify-center'>
                <Link href={getPlayLink()}>
                  <a>
                    <button
                      type='button'
                      className='bg-secondary hover:bg-primary hover:text-secondary hover:scale-110 transition-all text-p  text-center w-full rounded-full py-[5px] px-5 text-primary font-semibold'
                    >
                      {trans.about.provider.btn}
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
