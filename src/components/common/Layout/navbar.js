import { navbarBtnsData } from '@constants';
import { localesData } from '@constants/mocks/locales';
import { tran } from '@utilities/i18n';
import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaCheck, FaEarthAsia } from 'react-icons/fa6';
import { HiOutlineMenu } from 'react-icons/hi';
import Support from '../Main/Support';

export default function Navbar() {
  const { asPath, locale } = useRouter();
  const { locale: trans } = tran(locale);

  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState('');
  const [showLocale, setShowLocale] = useState(false);
  const [showMenu, setShowMenu] = useState(null);
  const BlogBtn = () => {
    return (
      <div>
        <Link href='/login'>
          <a>
            <button
              type='button'
              className='bg-gradient-to-t bg-primary rounded-full text-button px-[20px] py-[2px] border-[3px] border-golden2 flex items-center gap-2'
            >
              <span className='uppercase text-white text-p font-bold pb-[3px]'>Log In</span>
            </button>
          </a>
        </Link>
      </div>
    );
  };
  return (
    <>
      <nav className='sticky top-0 z-30 bg-white'>
        <Support />
        <div className='container-full-px'>
          <div className='flex items-center justify-center lg:justify-between gap-x-[25px] py-2 md:py-0'>
            <div className='py-[10px] lg:py-[16px]'>
              <Link href='/'>
                <a>
                  <div className='w-[140px] md:w-[160px]'>
                    <Image
                      src='/assets/main/logo.png'
                      alt='logo'
                      layout='responsive'
                      width={1000}
                      height={512}
                    />
                  </div>
                </a>
              </Link>
            </div>

            <div className='hidden lg:block'>
              <ul className='flex items-center gap-[30px] relative'>
                {navbarBtnsData?.map(
                  (load) =>
                    load.show && (
                      <li key={load.title}>
                        <Link href={load.linkTo}>
                          <a
                            className={`text-navbar ${
                              load.linkTo === active && 'text-primary font-bold'
                            }`}
                          >
                            {trans.navbar[load.trans]}
                          </a>
                        </Link>
                      </li>
                    )
                )}
                <li>
                  <BlogBtn />
                </li>

                <li className='flex items-center gap-[18px]'>
                  <div className='flex items-center'>
                    <p>{localesData.find((ele) => ele.locale === locale).display}</p>
                  </div>
                  <div className='flex items-center'>
                    <p className='text-gray-500'>|</p>
                  </div>
                  <div className='flex items-center relative'>
                    <button
                      type='button'
                      className='text-gray-500'
                      onClick={() => setShowLocale(true)}
                    >
                      <FaEarthAsia />
                    </button>

                    {showLocale && (
                      <div className='absolute top-[50px] z-30 left-1/2 transform -translate-x-1/2 bg-gray-100 px-[10px] pb-[10px] pt-[10px] rounded-[10px]'>
                        <div className='arrow-up absolute -top-[15px] left-1/2 transform -translate-x-1/2' />
                        <ul className='space-y-[5px]'>
                          {localesData.map((load) => (
                            <li key={load.id}>
                              <Link href={asPath} locale={load.locale}>
                                <a>
                                  <button
                                    type='button'
                                    className={`text-16px px-[10px] rounded-[5px] flex items-center justify-between gap-[10px] w-full ${
                                      locale !== load.locale ? 'bg-transparent' : 'bg-gray-200'
                                    }`}
                                    onClick={() => setShowLocale(false)}
                                  >
                                    <span>{load.title}</span>
                                    <div>
                                      <FaCheck
                                        size={14}
                                        className={locale !== load.locale && 'text-transparent'}
                                      />
                                    </div>
                                  </button>
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='lg:hidden bg-primary'>
          <div className='container-full-px flex justify-between py-[5px]'>
            <div className='flex items-center gap-[10px]'>
              <div className='flex items-center'>
                <p className='text-white'>
                  {localesData.find((ele) => ele.locale === locale).display}
                </p>
              </div>
              <div className='flex items-center'>
                <p className='text-white'>|</p>
              </div>
              <div className='flex items-center relative'>
                <button type='button' className='text-white' onClick={() => setShowLocale(true)}>
                  <FaEarthAsia />
                </button>

                {showLocale && (
                  <div className='absolute top-[50px] z-30 left-1/2 transform -translate-x-1/2 bg-gray-100 px-[10px] pb-[10px] pt-[10px] rounded-[10px]'>
                    <div className='arrow-up absolute -top-[15px] left-1/2 transform -translate-x-1/2' />
                    <ul className='space-y-[5px]'>
                      {localesData.map((load) => (
                        <li key={load.id}>
                          <Link href={asPath} locale={load.locale}>
                            <a>
                              <button
                                type='button'
                                className={`text-16px px-[10px] rounded-[5px] flex items-center justify-between gap-[10px] w-full ${
                                  locale !== load.locale ? 'bg-transparent' : 'bg-gray-200'
                                }`}
                                onClick={() => setShowLocale(false)}
                              >
                                <span>{load.title}</span>
                                <div>
                                  <FaCheck
                                    size={14}
                                    className={locale !== load.locale && 'text-transparent'}
                                  />
                                </div>
                              </button>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className='flex items-center'>
              <button type='button' onClick={() => setShowMenu(true)} className='flex'>
                <HiOutlineMenu size={30} color='#fff' />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`block lg:hidden fixed z-50 top-0 w-full h-screen bg-white ${
            // eslint-disable-next-line no-nested-ternary
            showMenu !== null ? (showMenu ? 'menu-in' : 'menu-out') : 'hidden'
          }`}
        >
          <div className='text-black bg-white'>
            <div className='bg-primary py-2 flex justify-end px-[15px]'>
              <Hamburger toggled={showMenu} color='#fff' onToggle={() => setShowMenu(false)} />
            </div>
            <ul className='pt-[20px]'>
              {navbarBtnsData.map(
                (load) =>
                  load.show && (
                    <li key={load.title} className='px-[20px]'>
                      <div className='px-[20px] py-[10px] border-b-[1px]'>
                        <Link href={load.linkTo} locale={locale}>
                          <a>
                            <button type='button' onClick={() => setShowMenu(false)}>
                              {trans.navbar[load.trans]}
                            </button>
                          </a>
                        </Link>
                      </div>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </nav>{' '}
    </>
  );
}
