// import { useState } from 'react';
// import { MdOutlineCancel } from 'react-icons/md';
// import Link from 'next/link';
// import Image from 'next/image';
import React, { useState } from 'react';
import { mainData, ImageData } from '@constants/mocks/others';
import { AiFillCheckCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import cx from 'classnames';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from '@constants/mocks/motion';

export default function RightPanel({ trans }) {
  const [hoverId, setHoverId] = useState();
  return (
    <>
      <div className=' gap-10'>
        <h1 className='mt-4 text-subtitle'>Config your Virtul Private Server</h1>
        <div className='rounded-[10px] bg-white gap-10 p-4 '>
          <div className=''>
            <div className='p-4'>
              <div className='flex items-center gap-2'>
                <AiOutlineShoppingCart className='text-title text-primary' />
                <h1 className='text-title text-primary'>
                  Config your Virtual Private Server Instance
                </h1>
              </div>
              <p className='pt-2'>
                We offer a range of VPS instances, to suit your budget and requirements. Please
                select your preferred instance from the options below:
              </p>
            </div>
          </div>
          <div className='md:py-[10px] py-[50px]  space-y-[30px]'>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='space-y-[11px]'
            />

            <motion.div
              variants={containerVariants}
              initial='hidden'
              viewport={{ once: true }}
              whileInView='show'
              className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center gap-[20px] '
            >
              {mainData.map((load) => (
                <motion.div
                  variants={childVariants}
                  key={load.id}
                  onMouseOver={() => setHoverId(load.id)}
                  onMouseLeave={() => setHoverId(null)}
                  className='bg-gradient border-[2px] border-secondary hover:text-black  rounded-[20px] gap-[10px] flex flex-col justify-between drop-shadow-md'
                >
                  <div className='px-[20px] rounded-t-[16px] bg-purple '>
                    <div className='md:h-[70px] h-[100px] flex items-center justify-center'>
                      <h3
                        className={cx(
                          'font-bold text-subtitle text-center line-clamp-2',
                          hoverId === load?.id ? 'text-primary' : 'text-primary'
                        )}
                      >
                        {trans.other.main.cards[load.trans].title}
                      </h3>
                    </div>
                  </div>

                  <div className='px-[20px] py-[10px] h-full'>
                    <ul className='space-y-[10px]'>
                      {load.subTrans.map((load1) => (
                        <li key={load} className='flex gap-[10px]'>
                          <div className='flex-none pt-[6px]'>
                            <AiFillCheckCircle
                              className={cx(
                                'text-20px',
                                hoverId === load?.id ? 'text-primary' : 'text-primary'
                              )}
                            />
                          </div>
                          <div>
                            <p className='text-li'>
                              {trans.other.main.cards[load.trans].lists[load1]}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='bg-secondary  rounded-b-[16px] hover:bg-primary text-primary hover:text-secondary flex justify-center '>
                    <Link href='/detail'>
                      <button
                        type='button'
                        className=' text-btn  hover:scale-110 transition-all  px-[40px] py-[10px] rounded-full font-semibold'
                      >
                        {trans.other.main.btn}
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className=''>
            <div className='p-4'>
              <div className='flex items-center gap-2'>
                <AiOutlineShoppingCart className='text-title text-primary' />
                <h1 className='text-title text-primary'>Choose Your Image</h1>
              </div>
              <div>
                <p className='pt-2'>Operating system selection</p>
              </div>
            </div>
          </div>
          <div className='md:py-[10px] py-[50px]  space-y-[30px]'>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='space-y-[11px]'
            />

            <motion.div
              variants={containerVariants}
              initial='hidden'
              viewport={{ once: true }}
              whileInView='show'
              className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center gap-[20px] '
            >
              {ImageData.map((load) => (
                <motion.div
                  variants={childVariants}
                  key={load.id}
                  onMouseOver={() => setHoverId(load.id)}
                  onMouseLeave={() => setHoverId(null)}
                  className='bg-gradient border-[2px] border-secondary hover:text-black  rounded-[20px] gap-[10px] flex flex-col justify-between drop-shadow-md'
                >
                  <div className='px-[20px] rounded-t-[16px] bg-purple '>
                    <div className='md:h-[70px] h-[100px] flex items-center justify-center'>
                      <h3
                        className={cx(
                          'font-bold text-subtitle text-center line-clamp-2',
                          hoverId === load?.id ? 'text-primary' : 'text-primary'
                        )}
                      >
                        {load.title}
                      </h3>
                    </div>
                  </div>

                  <div className='bg-secondary  rounded-b-[16px] hover:bg-primary text-primary hover:text-secondary flex justify-center '>
                    <Link href='/detail'>
                      <button
                        type='button'
                        className=' text-btn  hover:scale-110 transition-all  px-[40px] py-[10px] rounded-full font-semibold'
                      >
                        Free
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
