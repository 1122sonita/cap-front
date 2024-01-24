import React from 'react';
import App from './socail';

export default function Channel({ trans }) {
  return (
    <div className='md:space-y-[70px] space-y-[30px]'>
      <div className='text-center space-y-[10px] md:px-[50px] px-[1px]'>
        <h2 className='text-title font-bold text-primary'>{trans.about.channels.title}</h2>
        <p className='text-p'>{trans.about.channels.dsp}</p>
      </div>

      <App />
    </div>
  );
}
