import { getPlayLink } from '@utilities/dev';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Safe() {
  return (
    <main>
      <div className='hidden xl:block'>
        <div className='relative'>
          <Image
            src='/assets/main/desktop.png'
            alt='desktop'
            layout='responsive'
            width={2161}
            height={1197}
          />

          <div className='absolute top-[37vw] left-[39vw]'>
            <Link href={getPlayLink()}>
              <a>
                <div className='relative min-w-[250px] w-[20vw] mt-[50px]'>
                  <Image
                    src='/assets/main/btn.gif'
                    alt='btn'
                    layout='responsive'
                    width={349}
                    height={158}
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden md:block xl:hidden'>
        <div className='relative'>
          <Image
            src='/assets/main/tab.png'
            alt='tab'
            layout='responsive'
            width={1251}
            height={1792}
          />

          <div className='absolute top-[110vw] left-1/2 transform -translate-x-1/2'>
            <Link href={getPlayLink()}>
              <a>
                <div className='relative min-w-[300px] w-[40vw]'>
                  <Image
                    src='/assets/main/btn.gif'
                    alt='btn'
                    layout='responsive'
                    width={349}
                    height={157}
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='md:hidden'>
        <div className='relative'>
          <Image
            src='/assets/main/mbl.png'
            alt='mbl'
            layout='responsive'
            width={586}
            height={1287}
          />

          <div className='absolute top-[170vw] left-1/2 transform -translate-x-1/2'>
            <Link href={getPlayLink()}>
              <a>
                <div className='relative min-w-[200px] w-[50vw]'>
                  <Image
                    src='/assets/main/btn.gif'
                    alt='btn'
                    layout='responsive'
                    width={197}
                    height={89}
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
