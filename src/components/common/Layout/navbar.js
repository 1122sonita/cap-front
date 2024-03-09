/* eslint-disable no-unused-vars */
import { navbarBtnsData } from '@constants';
import { localesData } from '@constants/mocks/locales';
import { tran } from '@utilities/i18n';
import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { FaCheck, FaEarthAsia } from 'react-icons/fa6';
import { HiOutlineMenu } from 'react-icons/hi';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import { CgProfile } from 'react-icons/cg';
import { useAtom } from 'jotai';
import { loginState } from '@constants/jotai';
import Support from '../Main/Support';
import Social from './social';

export default function Navbar() {
  const { asPath, locale, reload } = useRouter();
  const [selectedImage, setSelectedImage] = useState('');
  const { locale: trans } = tran(locale);
  const [login, setLogin] = useAtom(loginState);

  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState('');
  const [showLocale, setShowLocale] = useState(true);
  const [showMenu, setShowMenu] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(null);

  useEffect(() => {
    const cookies = cookie.parse(document.cookie);
    const userToken = cookies.token;
    console.log('===== trgiger ====', userToken); // it's not trgigger here
    if (userToken) {
      setToken(userToken);
      try {
        const decodedToken = jwt.decode(userToken);
        const expirationTime = decodedToken.exp * 1000;
        const currentTime = new Date().getTime();
        if (currentTime < expirationTime) {
          setIsLoggedIn(true);
          reload(); // here
        }
      } catch (error) {
        console.error('Error decoding token:', error.message);
        // Handle error decoding token
      }
    }
  }, []);

  const handleUpload = (file) => {};

  const handleLogout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsLoggedIn(false);
    setToken(null);
    window.location.href = '/';
  };

  const BlogBtn = () => {
    if (token != null) {
      return (
        <div className='flex items-center gap-2'>
          <div className='relative'>
            <div className='rounded-full w-20 h-20 relative overflow-hidden flex justify-center items-center'>
              <CgProfile style={{ color: '#3b82f6', width: '40px', height: '40px' }} />
            </div>
            {/* <label htmlFor='upload' className='absolute bottom-0 right-0 cursor-pointer'>
              <input
                type='file'
                id='upload'
                className='hidden'
                onChange={(e) => handleUpload(e.target.files[0])}
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-white bg-gray-600 rounded-full p-1'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 2C5.03 2 1 6.03 1 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 15c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm3-8H7v1h6V9z'
                  clipRule='evenodd'
                />
              </svg>
            </label> */}
            <ul className=' drop-menu hover:bg-slate-100 hover:text-primary hover:font-bold mt-4 '>
              <li>
                <Link href='/account'>
                  <button type='button'>Profile</button>
                </Link>
              </li>
              <li>
                <button type='button' onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Link href='/login'>
          <a>
            <button
              type='button'
              className='bg-gradient-to-t bg-primary rounded-full text-button px-[20px] py-[2px] border-[3px] border-primary flex items-center gap-2'
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
        <Social />
        <Support />
        <div className='container-full-px'>
          <div className='flex items-center justify-center lg:justify-between gap-x-[25px] py-2 md:py-0'>
            <div className='py-[10px] lg:py-[16px]'>
              <Link href='/'>
                <a>
                  <div className='w-[140px] md:w-[100px]'>
                    <Image
                      src='/assets/main/logo.png'
                      alt='logo'
                      layout='responsive'
                      width={100}
                      height={100}
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
                      <li key={load.title} className='pt-[3px]'>
                        <div
                          className={`border-b-2 hover:border-primary ${
                            load.linkTo === asPath ? 'border-primary' : 'border-transparent'
                          }`}
                        >
                          <Link href={load.linkTo} locale={locale}>
                            <a
                              className={`text-20px hover:text-primary ${
                                load.linkTo === asPath ? 'text-primary font-bold' : 'text-gray1'
                              }`}
                            >
                              {trans.navbar[load.trans]}
                            </a>
                          </Link>
                        </div>
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
