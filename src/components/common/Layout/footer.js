import { getPlayLink } from '@utilities/dev';
import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-footer'>
      <div className='container-full'>
        <div className='flex items-center justify-center gap-2 flex-wrap text-white py-4'>
          <p className='text-center text-white'>©2023 - All Rights Reserved. Website Design : </p>
          <a href={getPlayLink()} className='font-bold'>
            WG滙遊會
          </a>
        </div>
      </div>
    </footer>
  );
}
