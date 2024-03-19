/* eslint-disable react/self-closing-comp */
import { navbarBtnsData } from '@constants';
import { getContacts } from '@utilities/dev';
import { tran } from '@utilities/i18n';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaTelegram } from 'react-icons/fa6';

export default function Footer() {
  const { locale } = useRouter();
  const { locale: trans } = tran(locale);

  return (
    <footer className='bg-primary'>
      <div className='container-fluid bg-footer-bg bg-cover bg-no-repeat bg-right'>
        <div className='container-full-px '>
          {/* <div className='flex justify-center lg:justify-start py-[20px] '>
            <Link href='/'>
              <a>
                <div className='w-[250px] lg:w-[300px]'>
                  <Image
                    src='/assets/main/logo.png'
                    alt='logo'
                    layout='responsive'
                    width={500}
                    height={500}
                  />
                </div>
              </a>
            </Link>
          </div> */}

          <div className=' flex justify-between pb-[40px] items-center'>
            <div className=' space-y-[20px]'>
              <ul className='flex flex-col lg:flex-row items-center gap-[20px]'>
                {navbarBtnsData.map((load) => (
                  <li
                    key={load.title}
                    className='text-white lg:border-r-[2px] border-white pr-[20px] last:border-0'
                  >
                    <Link href={load.linkTo} locale={locale}>
                      <a className='text-navbar'>{trans.navbar[load.trans]}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div>
                <ul className='flex flex-wrap justify-center lg:justify-start gap-[20px]'>
                  <li className='text-white flex items-center gap-[5px]'>
                    <div>
                      <FaTelegram size={30} />
                    </div>
                    <p className='text-li'>{getContacts.telegram.title}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='py-[10px] md:w-[100px] w-[150px]'>
              <Image
                src='/assets/main/telegram.png'
                alt='telegram'
                layout='responsive'
                width={303}
                height={303}
              />
            </div>
          </div>
        </div>
        <div className='border-t-[1px] border-black'>
          <div className='container-full-px py-[20px]'>
            <div className=' flex justify-between items-center'>
              <p className='text-black font-semibold text-16px text-center'>
                2024 Cambodia Academy of Digital Technology
              </p>
              <p className='text-black text-16px font-semibold text-center'>
                Contact：+8616793674330
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
