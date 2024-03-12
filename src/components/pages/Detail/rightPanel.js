/* eslint-disable eqeqeq */
// RightPanel.js
import React, { useState } from 'react';
import { ImageData, MonthlyData } from '@constants/mocks/others';
import { AiFillCheckCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from '@constants/mocks/motion';

export default function RightPanel({ apiData, pacakgeFun, ImageFun, MonthFun }) {
  const packages = apiData?.result.packages || [];
  const [hoverId, setHoverId] = useState();
  const [selectedId, setSelectedId] = useState(null);
  const [selectedId1, setSelectedId1] = useState(null);
  const handleSelectPackage = (item) => {
    pacakgeFun(item);
    setSelectedId(item.id);
  };
  const handleSelectImage = (item1) => {
    ImageFun(item1);
    setSelectedId1(item1.id);
  };
  const handleSelectMonth = (item2) => {
    MonthFun(item2);
  };

  return (
    <>
      <div className='gap-10'>
        <h1 className='mt-4 text-subtitle'>Config your Virtual Private Server</h1>
        <div className='rounded-[10px] bg-white gap-10 p-4 '>
          {/* VPS Monthly */}
          <div className=''>
            <div className='p-4'>
              <div className='flex items-center gap-2'>
                <AiOutlineShoppingCart className='text-title text-primary' />
                <h1 className='text-title text-primary'>Choose Your Period of Usage</h1>
              </div>
              <div>
                <p className='pt-2'>Choose month</p>
              </div>
            </div>
          </div>
          <div className='md:py-[10px] py-[50px] space-y-[30px]'>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              viewport={{ once: true }}
              whileInView='show'
              className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center gap-[20px]'
            >
              {MonthlyData.map((load) => (
                <motion.div
                  variants={childVariants}
                  key={load.id}
                  onClick={() => handleSelectMonth(load)}
                  onMouseOver={() => setHoverId(load.id)}
                  onMouseLeave={() => setHoverId(null)}
                  className='bg-white border-[2px] border-primary hover:text-black rounded-[20px] gap-[10px] flex flex-col justify-between drop-shadow-md cursor-pointer'
                >
                  <div className='px-[20px] rounded-t-[16px] bg-purple'>
                    <div className='md:h-[70px] h-[100px] flex items-center justify-center'>
                      <h3
                        className={cx(
                          'font-bold text-subtitle text-center line-clamp-2',
                          hoverId === load?.id ? 'text-primary' : 'text-primary'
                        )}
                      >
                        {load.title} month
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* VPS Instance Configuration */}
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
          <div className='md:py-[10px] py-[50px] space-y-[30px]'>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              viewport={{ once: true }}
              whileInView='show'
              className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center gap-[20px] cursor-pointer'
            >
              {packages.map((load) => (
                <motion.div
                  onClick={() => handleSelectPackage(load)}
                  variants={childVariants}
                  key={load.id}
                  className={`${
                    selectedId == load.id
                      ? 'bg-white font-bold scale-100 text-gray-800 border-secondary rounded-[10px] '
                      : 'text-black bg-primary border-primary rounded-[20px]'
                  } bg-gradient border-[2px]  gap-[10px] flex flex-col justify-between drop-shadow-md`}
                >
                  <div className='px-[20px] rounded-t-[16px] bg-purple'>
                    <div className='md:h-[70px] h-[100px] flex items-center justify-center'>
                      <h3
                        className={cx(
                          'font-bold text-subtitle text-center line-clamp-2',
                          hoverId === load?.id ? 'text-primary' : 'text-primary'
                        )}
                      >
                        {load.price} $ /month
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
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* Image Selection */}
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
          <div className='md:py-[10px] py-[50px] space-y-[30px]'>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              viewport={{ once: true }}
              whileInView='show'
              className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center gap-[20px]'
            >
              {ImageData.map((load) => (
                <motion.div
                  variants={childVariants}
                  key={load.id}
                  onClick={() => handleSelectImage(load)}
                  onMouseOver={() => setHoverId(load.id)}
                  onMouseLeave={() => setHoverId(null)}
                  className={`${
                    selectedId1 == load.id
                      ? 'bg-white font-bold scale-100 text-gray-800 border-secondary rounded-[10px] '
                      : 'text-black bg-primary border-primary rounded-[20px]'
                  } bg-gradient border-[2px] border-primary hover:text-black rounded-[20px] gap-[10px] flex flex-col justify-between drop-shadow-md cursor-pointer`}
                >
                  <div className='px-[20px] rounded-t-[16px] bg-purple'>
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

                  <div className='bg-primary rounded-b-[16px] hover:bg-primary text-secondary hover:text-secondary flex justify-center'>
                    <button
                      type='button'
                      className='text-btn hover:scale-110 transition-all px-[40px] py-[10px] rounded-full font-semibold'
                    >
                      Free
                    </button>
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
