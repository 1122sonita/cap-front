/* eslint-disable react/self-closing-comp */
import { providerData } from '@constants/mocks/homes';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from '@constants/mocks/motion';

export default function Provider({ trans }) {
  return (
    <div className='md:space-y-[40px] space-y-[20px] md:py-[100px] py-[40px]'>
      <div className='space-y-[20px] w-full max-w-[900px] mx-auto text-black'>
        <h2
          className='text-title text-primary
         font-bold text-center'
        >
          {trans.home.provider.title}
        </h2>
        <p className='text-p text-center'>{trans.home.provider.dsp}</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        viewport={{ once: true }}
        whileInView='show'
        className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'
      >
        {providerData.map((load) => (
          <div id='features' className='container    mx-auto '>
            <div className=''>
              <div className='relative overflow-hidden rounded-lg border  border-primary border-[4px] shadow-lg bg-background p-2'>
                <div className='flex h-[220px] flex-col justify-center rounded-md p-6'>
                  <div className='w-1/3 lg:max-w-[120px] max-w-[100px]  '>
                    <div className=' items-center'>
                      <Image
                        src={load.image.url}
                        alt={load.image.alt}
                        layout='responsive'
                        width={257}
                        height={257}
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <h3 className='font-bold'>{trans.home.provider[load.trans].title}</h3>
                    <p className='text-sm text-muted-foreground'>
                      {trans.home.provider[load.trans].dsp}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
