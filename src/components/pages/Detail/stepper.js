import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import RightPanel from './rightPanel';
import Summary from './summary';

export default function Stepper({ trans }) {
  const [activeStep, setActiveStep] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  return (
    <div className=''>
      <ul className='relative flex flex-row gap-x-2  '>
        <li className='shrink basis-0 flex-1 group'>
          <div className=' min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle'>
            <span
              className={`${
                activeStep > 1 ? 'text-white bg-primary' : 'bg-white font-medium text-gray-800'
              } w-7 h-7 flex justify-center items-center flex-shrink-0 rounded-full dark:bg-gray-700 dark:text-white`}
            >
              1
            </span>
            <div className='ms-2 w-full h-[2px] flex-1 bg-white group-last:hidden dark:bg-gray-700' />
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
            <div className='ms-2 w-full h-[2px] flex-1 bg-white group-last:hidden dark:bg-gray-700' />
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
            <div className='ms-2 w-full h-[2px] flex-1 bg-white group-last:hidden dark:bg-gray-700' />
          </div>
          <div className='mt-3'>
            <span className='block text-sm text-primary font-bold dark:text-white'>
              Confirmation
            </span>
          </div>
        </li>
        <li className='shrink basis-0 flex-1 group'>
          <div className='min-w-[28px] min-h-[28px] w-full inline-flex items-center text-xs align-middle'>
            <span
              className={`${
                activeStep > 4 ? 'text-white bg-primary' : 'bg-white font-medium text-gray-800'
              } w-7 h-7 flex justify-center items-center flex-shrink-0 rounded-full dark:bg-gray-700 dark:text-white`}
            >
              4
            </span>
            <div className='ms-2 w-full h-[2px] flex-1 bg-white group-last:hidden dark:bg-gray-700' />
          </div>
          <div className='mt-3'>
            <span className='block text-sm text-primary font-bold dark:text-white'>Payment</span>
          </div>
        </li>
      </ul>
      <div>
        {/* Render content based on activeStep */}
        {activeStep === 1 && (
          <div className='grid grid-cols-1  gap-[40px]  md:py-[100px] '>
            <RightPanel trans={trans} />
          </div>
        )}
        {activeStep === 2 && (
          <div className='grid grid-cols-1  gap-[40px]  md:py-[100px] '>
            <Summary trans={trans} />
          </div>
        )}
        {activeStep === 3 && <div>Step 3 Content</div>}
        {activeStep === 4 && <div>Step 4 Content</div>}
      </div>
      <div className='mt-4 flex justify-between'>
        <button
          type='button'
          onClick={handlePrev}
          disabled={activeStep === 1}
          className='px-4 py-2 bg-white rounded-full flex items-center space-x-2'
        >
          <AiOutlineArrowLeft />
          <span>Previous</span>
        </button>
        <button
          type='button'
          onClick={handlePrev}
          disabled={activeStep === 1}
          className='px-4 py-2 bg-primary rounded-full flex items-center space-x-2'
        >
          <span>Next</span>
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}
