/* eslint-disable react/self-closing-comp */
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
import { CgProfile } from 'react-icons/cg';
import { useAtom } from 'jotai';
import { loginState } from '@constants/jotai';
import Social from './social';

export default function Navbar() {
  const { asPath, locale, reload } = useRouter();
  const [selectedImage, setSelectedImage] = useState('');
  const { locale: trans } = tran(locale);
  const [login, setLogin] = useAtom(loginState);

  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState('');
  const [showLocale, setShowLocale] = useState(false);
  const [showMenu, setShowMenu] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(null);

  useEffect(() => {
    const cookies = cookie.parse(document.cookie);
    const userToken = cookies.token;
    const expDate = new Date(cookies.token_expired);
    if (userToken) {
      setToken(userToken);
      try {
        const currentTime = new Date();
        if (currentTime < expDate) {
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

  const handleLogout = async () => {
    try {
      const apiEndpoint = process.env.NEXT_PUBLIC_LOGOUT_URL;
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include the token in the authorization header
        },
      });

      if (!response.ok) {
        throw new Error('Error logging out. Please try again later.');
      }

      // Clear the token and logged-in state
      document.cookie = 'token=; token_exp=; path=/;';
      setIsLoggedIn(false);
      setToken(null);

      // Redirect to home page after logout
      window.location.href = '/';
    } catch (error) {
      console.error('Error during logout:', error.message);
      alert(error.message); // Display an error message if logout fails
    }
  };

  const BlogBtn = () => {
    if (token != null) {
      return (
        <div className='flex items-center gap-2'>
          <div className='relative'>
            <div className='rounded-full w-20 h-20 relative overflow-hidden flex justify-center items-center'>
              <CgProfile style={{ color: '#3b82f6', width: '40px', height: '40px' }} />
            </div>
            <ul className='drop-menu hover:bg-slate-100 hover:text-primary hover:font-bold mt-4 '>
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
              className='bg-primary  rounded-[10px] px-5 py-2 hover:scale-110 transition-all'
            >
              <span className='uppercase text-white text-base font-bold'>Log In</span>
            </button>
          </a>
        </Link>
      </div>
    );
  };
  return (
    <>
    {/* NavBar */}
      <nav className='sticky top-0 z-30  bg-white shadow-md shadow-[#0000001a]'>
        {/* Three social media on the left corner */}
        <Social />
        <div className='container-full-px'>
          <div className='flex items-center h-16 justify-center lg:justify-between gap-x-[25px] py-2 md:py-0'>
            {/* Logo */}
            <div className=''>
              <Link href='/'>
                <a className='flex flex-row items-center '>
                  <div className='w-24 h-24'>
                    <Image
                      src='/assets/main/logo1.png'
                      alt='logo'
                      layout='responsive'
                      width={0}
                      height={0}
                    />
                  </div>
                  <p className='text-primary text-2xl font-bold'>CloudBloc</p>
                </a>
              </Link>
            </div>

            <div className='hidden lg:block'>
              <ul className='flex items-center gap-[30px] relative'>
                {/* Navbar menu */}
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
                              className={`text-lg hover:text-primary ${
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
                {/* Log in button */}
                <li>
                  <BlogBtn />
                </li>
                {/* Change Language */}
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
      </nav>
    </>
  );
}
