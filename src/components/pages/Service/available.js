/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import cx from 'classnames';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from '@constants/mocks/motion';
import { useRouter } from 'next/router';
import { useRouter } from 'next/router';

export default function Available({ trans, apiData }) {
  const packages = apiData?.result.packages || [];
  const [selectedId, setSelectedId] = useState(null);
  const [promotion, setPromotion] = useState();
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
  const calculateDiscountedPrice = (price, discount) => {
    return price - price * (discount / 100);
  };

  const isDiscounted = (load) => {
    return load.id == selectedId && promotion;
  };

  return (
    <section className='py-6 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 cursor-pointer'>
      <div className=' px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl'>
        <div className='flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200'>
          <h2
            id='pricing'
            className='box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-primary border-solid sm:text-4xl md:text-4xl text'
          >
            {trans.other.main.title}
          </h2>
          <p className='box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl' />
        </div>
        <div
          id='pricing'
          className='grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3 '
        >
          {/* Price 1 */}
          {packages.map((load) => (
            <Link href={`/detail?id=${load.id} &promotion=${promotion}`} key={load.id}>
              <motion.div
                variants={childVariants}
                key={load.id}
                onMouseOver={() => setHoverId(load.id)}
                onMouseLeave={() => setHoverId(null)}
                onClick={() => setSelectedId(load.id)}
                className={`${
                  selectedId === load.id
                    ? 'bg-white font-bold scale-100 text-gray-800 border-secondary rounded-[10px] '
                    : 'text-black'
                } `}
              >
                <div className='relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border shadow-lg gap-4  lg:mr-6 sm:my-0 sm:p-6 md:my-8 md:p-8 border-primary cursor-pointer'>
                  {load.id == selectedId && promotion && (
                    <div className='absolute right-0 top-0 h-16 w-16'>
                      <div className='absolute transform rotate-45 bg-secondary text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]'>
                        {promotion}% off
                      </div>
                    </div>
                  )}
                  <h3 className='m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl'>
                    {load.name}
                  </h3>
                  <div className='flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200'>
                    {isDiscounted(load) ? (
                      <div className='inline-block flex-col justify-center align-middle'>
                        <div className='flex justify-end align-bottom'>
                          <p className='box-border m-0 self-end text-6xl font-semibold leading-none border-solid text-primary line-through'>
                            ${load.price}
                          </p>
                          <p
                            className='box-border m-0 self-end border-solid'
                            style={{ borderImage: 'initial' }}
                          >
                            / month
                          </p>
                        </div>

                        <p className='flex justify-center box-border m-0 text-2xl font-semibold leading-none border-solid text-red-700'>
                          $ {calculateDiscountedPrice(load.price, promotion)}
                        </p>
                      </div>
                    ) : (
                      <div className='inline-block flex-col justify-center align-middle'>
                        <div className='flex justify-end align-bottom'>
                          <p className='box-border m-0 text-6xl font-semibold leading-none border-solid text-primary '>
                            ${load.price}
                          </p>
                          <p
                            className='box-border self-end m-0 border-solid'
                            style={{ borderImage: 'initial' }}
                          >
                            / month
                          </p>
                        </div>
                        <p className='flex justify-center box-border m-0 text-2xl font-semibold leading-none border-solid opacity-0'>
                          $ {calculateDiscountedPrice(load.price, promotion)}
                        </p>
                      </div>
                    )}
                  </div>
                  <ul className='flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200'>
                    <li className='inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid'>
                      <svg
                        className='w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      {load.cpu} vCPU
                    </li>

                    <li className='inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid'>
                      <svg
                        className='w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      {load.memory} GB RAM
                    </li>

                    <li className='inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid'>
                      <svg
                        className='w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      {load.storage} GB SSD
                    </li>
                    <li className='inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid'>
                      <svg
                        className='w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      {load.description}
                    </li>
                  </ul>
                  <a
                    href='#'
                    className='inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg'
                  >
                    Buy Now
                  </a>
                </div>
              </motion.div>
            </Link>
          ))}
          {/* Price 2 */}
          {/* Price 3 */}
        </div>
      </div>
    </section>
  );
}
