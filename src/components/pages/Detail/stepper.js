/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useRouter } from 'next/router';
import RightPanel from './rightPanel';
import Summary from './summary';
import Payment from './payment';

export default function Stepper({ trans, apiData }) {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedPackag, setSelectedPackage] = useState({});
  const [selectedImage, setSelectedImage] = useState({});
  const [selectedMonth, setSelectedMonth] = useState({});
  const router = useRouter();

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    if (activeStep === 1) {
      // Navigate back to the service page if on the first step
      router.push('/service');
    } else {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const pacakgeFun = (selectItem) => {
    setSelectedPackage(selectItem);
  };
  const ImageFun = (selectImage) => {
    setSelectedImage(selectImage);
  };
  const MonthFun = (selectMonth) => {
    setSelectedMonth(selectMonth);
  };

  return (
    <div className=''>
      <div>
        <div className='after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-white'>
          <ol className='grid grid-cols-3 text-sm font-medium text-gray-500'>
            <li className='relative flex justify-start text-blue-600'>
              <span
                className={`${
                  activeStep > 1 ? 'text-white bg-primary' : 'bg-gray-600 text-white'
                } absolute -bottom-[1.75rem] start-0 rounded-full `}
              >
                <svg
                  className='h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>

              <span className={`${activeStep > 1 ? 'text-primary ' : ' text-gray-600'}  `}>
                Select
              </span>

              <svg
                className='size-6 sm:hidden'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'
                />
              </svg>
            </li>

            <li className='relative flex justify-center text-blue-600'>
              <span
                className={`${
                  activeStep > 2 ? 'text-white bg-primary' : 'bg-gray-600 text-white'
                } absolute -bottom-[1.75rem] start-0 rounded-full `}
              >
                <svg
                  className='h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>

              <span className={`${activeStep > 2 ? 'text-primary ' : ' text-gray-600'}  `}>
                Summary
              </span>

              <svg
                className='mx-auto size-6 sm:hidden'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </li>

            <li className='relative flex justify-end'>
              <span
                className={`${
                  activeStep > 3 ? 'text-white bg-primary' : 'bg-gray-600 text-white'
                } absolute -bottom-[1.75rem] start-0 rounded-full `}
              >
                <svg
                  className='h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>

              <span className={`${activeStep > 3 ? 'text-primary ' : ' text-gray-600'}  `}>
                Payment
              </span>
              <svg
                className='size-6 sm:hidden'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                />
              </svg>
            </li>
          </ol>
        </div>
      </div>
      <div className='flex justify-center items-center flex-row'>
        {/* <ul className='relative flex flex-row gap-x-2 w-full justify-center'>
          <li className='shrink basis-0 flex-1 group'>
            <div className=' min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle'>
              <span
                className={`${
                  activeStep > 1 ? 'text-white bg-primary' : 'bg-white font-medium text-gray-800'
                } w-7 h-7 flex justify-center items-center flex-shrink-0 rounded-full dark:bg-gray-700 dark:text-white`}
              >
                1
              </span>
              <div className='ms-2 w-[40px] h-[2px] flex-1 bg-white group-last:hidden dark:bg-gray-700' />
            </div>
            <div className='mt-3'>
              <span className='block text-sm  text-primary font-bold dark:text-white'>Select</span>
            </div>
          </li>
          <li className='shrink basis-0 flex-1 group'>
            <div className='min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle'>
              <span
                className={`${
                  activeStep > 2 ? 'text-white bg-primary' : 'bg-white font-medium text-gray-800'
                } w-7 h-7 flex justify-center items-center flex-shrink-0 rounded-full dark:bg-gray-700 dark:text-white`}
              >
                2
              </span>
              <div className='ms-4 w-full h-[2px] flex-1 bg-white group-last:hidden dark:bg-gray-700' />
            </div>
            <div className='mt-3'>
              <span className='block text-sm text-primary font-bold dark:text-white'>Summary</span>
            </div>
          </li>
          <li className='shrink basis-0 flex-1 group'>
            <div className='min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle'>
              <span
                className={`${
                  activeStep > 3 ? 'text-white bg-primary' : 'bg-white font-medium text-gray-800'
                } w-7 h-7 flex justify-center items-center flex-shrink-0 rounded-full dark:bg-gray-700 dark:text-white`}
              >
                3
              </span>
            </div>
            <div className='mt-3'>
              <span className='block text-sm text-primary font-bold dark:text-white'>Payment</span>
            </div>
          </li>
        </ul> */}
      </div>

      <div>
        {/* Render content based on activeStep */}
        {activeStep === 1 && (
          <div className='grid grid-cols-1  gap-[40px]  md:py-[100px] '>
            <RightPanel
              trans={trans}
              apiData={apiData}
              pacakgeFun={pacakgeFun}
              ImageFun={ImageFun}
              MonthFun={MonthFun}
            />
          </div>
        )}
        {activeStep === 2 && (
          <div className='grid grid-cols-1  gap-[40px]  md:py-[100px] '>
            <Summary
              trans={trans}
              selectedPackage={selectedPackag}
              selectImage={selectedImage}
              selectMonth={selectedMonth}
            />
          </div>
        )}
        {activeStep === 3 && (
          <div className='grid grid-cols-1  gap-[40px]  md:py-[100px] '>
            <Payment
              trans={trans}
              selectedPackage={selectedPackag}
              selectMonth={selectedMonth}
              selectImage={selectedImage}
            />
          </div>
        )}
        {activeStep === 4 && (
          <div className='flex justify-center items-center'>
            {' '}
            <div className='bg-primary mt-[30px] rounded-[10px] hover:bg-primary text-secondary hover:text-secondary flex justify-center'>
              <button
                type='button'
                className='text-btn hover:scale-110 transition-all px-[40px] py-[10px] rounded-full font-semibold'
              >
                Check out
              </button>
            </div>
          </div>
        )}
      </div>
      <div className='mt-4 flex justify-between'>
        <button
          type='button'
          onClick={handlePrev}
          className='px-4 py-2 bg-gray-300 rounded-[10px] mr-2 flex justify-center items-center gap-2 cursor-pointer hover:scale-100'
        >
          <AiOutlineArrowLeft />
          Previous
        </button>
        <div className='flex justify-end '>
          {activeStep < 3 && (
            <button
              type='button'
              onClick={handleNext}
              className='px-4 py-2 bg-blue-500 text-white rounded-[10px] flex justify-center items-center gap-2 cursor-pointer hover:scale-100'
            >
              Next
              <AiOutlineArrowRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
