import React, { useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import cx from 'classnames';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from '@constants/mocks/motion';

export default function Available({ trans, apiData }) {
  const packages = apiData?.result.packages || [];

  const [hoverId, setHoverId] = useState();

  return (
    <div className='md:py-[100px] py-[50px] md:space-y-[113px] space-y-[30px]'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='space-y-[11px]'
      >
        <h2 className='text-title font-bold text-primary text-center'>{trans.other.main.title}</h2>
        <p className='text-p text-center whitespace-pre-wrap'>{trans.other.main.dsp}</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        viewport={{ once: true }}
        whileInView='show'
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center gap-[20px] '
      >
        {packages.map((load) => (
          <motion.div
            variants={childVariants}
            key={load.id}
            onMouseOver={() => setHoverId(load.id)}
            onMouseLeave={() => setHoverId(null)}
            className='bg-gray-100 border-[2px] border-secondary hover:text-black  rounded-[20px] gap-[10px] flex flex-col justify-between drop-shadow-md'
          >
            <div className='px-[20px] rounded-t-[16px] bg-purple '>
              <div className='md:h-[70px] h-[100px] flex items-center justify-center'>
                <h3
                  className={cx(
                    'font-bold text-subtitle text-center line-clamp-2',
                    hoverId === load?.id ? 'text-primary' : 'text-primary'
                  )}
                >
                  {load.name}
                </h3>
              </div>
            </div>
            <div className='px-[20px] rounded-t-[16px] bg-purple '>
              <div className='md:h-[70px] h-[100px] flex items-center justify-center'>
                <h3
                  className={cx(
                    'font-bold text-[50px] text-center line-clamp-2',
                    hoverId === load?.id ? 'text-primary' : 'text-primary'
                  )}
                >
                  {load.price} $
                </h3>
              </div>
            </div>

            <div className='px-[20px] py-[10px] h-full'>
              <ul className='space-y-[10px]'>
                <li className='flex gap-[10px]'>
                  <div className='flex-none pt-[6px]'>
                    <AiFillCheckCircle
                      className={cx(
                        'text-20px',
                        hoverId === load?.id ? 'text-primary' : 'text-primary'
                      )}
                    />
                  </div>
                  <div>
                    <p className='text-li'>{load.cpu} vCPU </p>
                  </div>
                </li>
                <li className='flex gap-[10px]'>
                  <div className='flex-none pt-[6px]'>
                    <AiFillCheckCircle
                      className={cx(
                        'text-20px',
                        hoverId === load?.id ? 'text-primary' : 'text-primary'
                      )}
                    />
                  </div>
                  <div>
                    <p className='text-li'>{load.memory} GB RAM</p>
                  </div>
                </li>
                <li className='flex gap-[10px]'>
                  <div className='flex-none pt-[6px]'>
                    <AiFillCheckCircle
                      className={cx(
                        'text-20px',
                        hoverId === load?.id ? 'text-primary' : 'text-primary'
                      )}
                    />
                  </div>
                  <div>
                    <p className='text-li'>{load.storage} GB SSD</p>
                  </div>
                </li>
                <li className='flex gap-[10px]'>
                  <div className='flex-none pt-[6px]'>
                    <AiFillCheckCircle
                      className={cx(
                        'text-20px',
                        hoverId === load?.id ? 'text-primary' : 'text-primary'
                      )}
                    />
                  </div>
                  <div>
                    <p className='text-li'>{load.description}</p>
                  </div>
                </li>
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
  );
}
