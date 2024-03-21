/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
// import AliceCarousel from 'react-alice-carousel';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Banner({ trans, apiData }) {
  const banners = apiData?.result.published_banners || [];
  const handlePrevClick = () => {};

  const handleNextClick = () => {};

  const renderPrevButton = () => {
    return (
      <button type='button' onClick={handlePrevClick}>
        <BsChevronLeft className='text-white hover:text-amber-400 hover:scale-110 relative lg:absolute left-[-50px] top-[50%] text-title font-bold' />
      </button>
    );
  };

  const renderNextButton = () => {
    return (
      <button type='button' onClick={handleNextClick}>
        <BsChevronRight className='text-white hover:text-amber-400 hover:scale-110 relative lg:absolute lg:right-[0px] right-[-50px] top-[50%] text-title font-bold' />
      </button>
    );
  };

  return (
    <>
      <div className='space-y-[40px] md:space-y-[24px] cursor-pointer  '>
        <Slider
          autoPlay
          autoPlayInterval={3000} // Set your desired interval in milliseconds
          infinite
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        >
          {banners.map((banner, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Link href={`/service?id=${banner.package_id}&promotion=${banner.promotion}`}>
              <div key={index} className='w-full md:p-[27px] relative'>
                <div className='flex flex-col lg:flex-row gap-[50px] md:gap-[30px] items-center'>
                  <div className='w-full space-y-[19px]'>
                    <h3 className='text-h1 font-bold text-secondary text-center md:text-left'>
                      {banner.title || trans.home.banner.title}
                    </h3>
                    <p className='whitespace-pre-wrap text-li text-white text-p'>
                      {banner.description || trans.home.banner.dsp}
                    </p>
                    <div className='top-[100px] right-[50px]   absolute'>
                      <div className='rounded-full'>
                        <Link href='/service'>
                          <a>
                            <p
                              type='button'
                              className=' bg-promotion rounded-full h-16 w-16 flex items-center justify-center text-white'
                            >
                              {banner.promotion || trans.home.banner.dsp}%
                            </p>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className='flex justify-center md:justify-start'>
                      <Link href='/service'>
                        <a>
                          <button
                            type='button'
                            className='bg-secondary text-subtitle py-[10px] px-[40px] hover:bg-primary hover:text-white hover:scale-110 transition-all text-white font-semibold rounded-[10px]'
                          >
                            {banner.btn || trans.home.banner.btn}
                          </button>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className='w-full lg:order-last order-first'>
                    <div className='space-x-[10px]'>
                      <div className='flex justify-center items-center'>
                        <div className='lg:w-full lg:h-[500px] h-full md:w-[430px] w-[300px]'>
                          <Image
                            src={banner.banner_image}
                            alt={`banner-${index + 1}`}
                            layout='responsive'
                            width={1317}
                            height={1196}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
}
