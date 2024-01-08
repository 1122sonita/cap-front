import React, { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function BtnCount({ url, children }) {
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    const data = await fetch('/api/count-click').then((res) => res.json());

    if (data.status === 'ok') {
      window.location.replace(url);
      setLoading(false);
    }
  };
  return (
    <>
      {loading && (
        <div className='fixed top-0 left-0 z-50 w-screen h-screen bg-black/30'>
          <div className='w-full h-full flex justify-center items-center'>
            <div className='flex flex-col items-center gap-4'>
              <AiOutlineLoading3Quarters color='#fff' className='animate-spin' size={40} />
              <p className='text-white'>Loading...</p>
            </div>
          </div>
        </div>
      )}
      <button type='button' onClick={() => submit()} className='w-full'>
        {children}
      </button>
    </>
  );
}
