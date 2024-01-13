import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 md:gap-[40px] gap-[5px] items-center'>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className='space-y-[20px] py-[20px]'
      >
        <h1 className='text-h1 font-bold text-white text-center md:text-left'>
          Hosting your Applicaiton through our Cloud Service
        </h1>
        <p className='text-subtitle text-white text-center md:text-left'>
          Ignite Brand Influence, Master Digital Trends. Our Professional Team Will Propel Your
          Application hosting
        </p>
        <div className='flex justify-center md:justify-start'>
          <Link href='/service'>
            <a>
              <button
                type='button'
                className='bg-golden1 text-subtitle py-[10px] px-[40px] hover:bg-primary hover:text-secondary hover:scale-110 transition-all text-primary font-semibold rounded-full'
              >
                Buy Now
              </button>
            </a>
          </Link>
        </div>
      </motion.div>
      <div className='pb-[40px]'>
        <Image
          src='/assets/home/banner.png'
          alt='banner-1'
          layout='responsive'
          width={1317}
          height={1196}
        />
      </div>
    </div>
  );
}
