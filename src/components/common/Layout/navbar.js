import { navbarBtnsData } from '@constants';
import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
// import Social from './social';
// import Menu from './menu';
// import Display from '../Display';

const BlogBtn = () => {
  return (
    <div>
      <Link href='/blogs'>
        <a>
          <button
            type='button'
            className='bg-gradient-to-t from-red-900 to-primary rounded-full text-button px-[20px] py-[2px] border-[2px] border-golden2 flex items-center gap-2'
          >
            <span className='uppercase text-white text-p font-bold pb-[3px]'>Sign Up</span>
          </button>
        </a>
      </Link>
    </div>
  );
};

export default function Navbar() {
  const { asPath } = useRouter();

  const [showMenu, setShowMenu] = useState(null);

  return (
    <nav className='sticky top-0 bg-white z-40'>
      <div className='relative container-fluid'>
        <div className='container-full py-[10px]'>
          <div className='flex items-center justify-between'>
            <div>
              <Link href='/'>
                <a>
                  <div className='w-[140px] md:w-[250px]'>
                    <Image
                      src='/assets/main/logo-with-text-nobg.png'
                      alt='logo'
                      layout='responsive'
                      width={1649}
                      height={512}
                    />
                  </div>
                </a>
              </Link>
            </div>

            <div className='hidden lg:block relative'>
              <ul className='flex gap-[20px]'>
                {navbarBtnsData?.map(
                  (load) =>
                    load.show && (
                      <li key={load.title} className='pt-[3px]'>
                        <div
                          className={`border-b-2 hover:border-primary ${
                            load.linkTo === asPath ? 'border-primary' : 'border-transparent'
                          }`}
                        >
                          <Link href={load.linkTo}>
                            <a
                              className={`text-20px hover:text-primary ${
                                load.linkTo === asPath ? 'text-primary font-bold' : ''
                              }`}
                            >
                              {load.title}
                            </a>
                          </Link>
                        </div>
                      </li>
                    )
                )}
                <li>
                  <BlogBtn />
                </li>
              </ul>

              {/* <div className='absolute top-1/2 transform -translate-y-1/2 -right-36'>
                <BlogBtn />
              </div> */}
            </div>

            <div className='lg:hidden'>
              <Hamburger
                toggled={showMenu}
                color='#BE282F'
                size={24}
                onToggle={() => setShowMenu(true)}
              />
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden fixed z-50 top-0 w-full h-screen bg-black ${
            // eslint-disable-next-line no-nested-ternary
            showMenu !== null ? (showMenu ? 'menu-in' : 'menu-out') : 'hidden'
          }`}
        >
          <div className='text-white'>
            <div className='bg-primary py-2 flex justify-end px-[15px]'>
              <Hamburger toggled={showMenu} color='#fff' onToggle={() => setShowMenu(false)} />
            </div>
            <ul className='pt-[20px]'>
              {navbarBtnsData.map(
                (load) =>
                  load.show && (
                    <li key={load.title} className='px-[20px]'>
                      <div className='px-[20px] py-[10px] border-b-[1px]'>
                        <Link href={load.linkTo}>
                          <a>
                            <button type='button' onClick={() => setShowMenu(false)}>
                              {load.title}
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                  )
              )}

              <li className='px-[20px]'>
                <div className='px-[20px] py-[10px] border-b-[1px]'>
                  <Link href='/blogs'>
                    <a>
                      <button type='button' onClick={() => setShowMenu(false)}>
                        BLOG
                      </button>
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
