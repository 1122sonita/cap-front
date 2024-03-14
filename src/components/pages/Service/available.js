/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import cx from 'classnames';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from '@constants/mocks/motion';
import { useRouter } from 'next/router';

export default function Available({ trans, apiData }) {
  const packages = apiData?.result.packages || [];
  const [selectedId, setSelectedId] = useState(null);
  const [promotion, setPromotion] = useState();
  const [hoverId, setHoverId] = useState();
  // const isPromotionEligible = (packageId) => {
  //   return packageId; // Example: Promote every second package
  // };
  const router = useRouter();
  useEffect(() => {
    const { id } = router.query;
    const promotiondiscount = router.query.promotion;
    setSelectedId(+id);
    setPromotion(promotiondiscount);
  }, []);

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
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center gap-[20px] relative'
      >
        {packages.map((load) => (
          <Link href={`/detail?id=${load.id}`} key={load.id}>
            <motion.div
              variants={childVariants}
              key={load.id}
              onMouseOver={() => setHoverId(load.id)}
              onMouseLeave={() => setHoverId(null)}
              onClick={() => setSelectedId(load.id)}
              className={`${
                selectedId === load.id
                  ? 'bg-white font-bold scale-100 text-gray-800 border-secondary rounded-[10px] '
                  : 'text-black bg-primary border-primary rounded-[20px]'
              } bg-gradient border-[2px]  gap-[10px] flex flex-col justify-between drop-shadow-md`}
            >
              {load.id == selectedId && promotion && (
                <div className='absolute right-0 top-0 h-16 w-16'>
                  <div className='absolute transform rotate-45 bg-secondary text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]'>
                    {promotion}% off
                  </div>
                </div>
              )}
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

              <div className='bg-primary hover:scale-100  rounded-b-[16px] hover:bg-primary text-white hover:text-secondary flex justify-center cursor-pointer '>
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
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
