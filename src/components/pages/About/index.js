import BtnCount from '@components/common/Main/BtnCount';
import { gamesData } from '@constants/mocks-unsafe/games';
import { getGameLink } from '@utilities/dev';
import Image from 'next/image';
import React from 'react';

const container = {
  full: 'px-5 xl:px-0 w-full xl:w-4/5 max-w-[1440px] mx-auto',
  fluid: 'w-full max-w-[1440px] mx-auto',
};

export default function About() {
  return (
    <main>
      <section className='bg-[url(/assets/unsafe/bg-1.png)] bg-cover bg-no-repeat xl:bg-contain xl:bg-repeat'>
        <div className={`${container.full} pt-[10vw] md:pt-[70px] relative`}>
          <div className='flex justify-center items-center top-0 w-full'>
            <div className='w-full md:w-[500px] mx-auto'>
              <Image
                src='/assets/unsafe/title-1.png'
                alt='title-1'
                layout='responsive'
                width={346}
                height={100}
              />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
            <div>
              <Image
                src='/assets/unsafe/girl.png'
                alt='girl'
                layout='responsive'
                width={828}
                height={666}
              />
            </div>
            <div className='relative mb-[120px]'>
              <p className='text-white text-[25px] text-center md:text-[19px] lg:text-[25px]'>
                贏得大獎，創造屬於你的傳奇 無論你是高手還是新手，在我們的平台上都可以找到你的遊戲
                歡樂城邀請你，贏取豐厚獎金！
              </p>
              <BtnCount url={getGameLink()}>
                <div className='absolute -bottom-[50vw] md:-bottom-[25vw] xl:-bottom-[350px] 2xl:-bottom-[350px] w-full px-[50px]'>
                  <div>
                    <Image
                      src='/assets/unsafe/btn-2.png'
                      alt='btn-2'
                      layout='responsive'
                      width={690}
                      height={696}
                    />
                  </div>
                </div>
              </BtnCount>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[url(/assets/unsafe/bg-2.png)] bg-contain bg-no-repeat pt-[50px]'>
        <div className={container.full}>
          <div className='relative pt-[40vw] md:pt-[250px] px-[60px] xl:px-0'>
            <div className='absolute left-0 top-0 w-full'>
              <div className='w-[50vw] md:w-[350px] mx-auto'>
                <Image
                  src='/assets/unsafe/title-2.png'
                  alt='title-2'
                  layout='responsive'
                  width={689}
                  height={673}
                />
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              {gamesData.map((load) => (
                <div key={load.id}>
                  <BtnCount url={getGameLink()}>
                    <div className='pb-[3px] bg-yellow-500 rounded-lg'>
                      <div className='relative'>
                        <Image
                          src={load.image.url}
                          alt={load.title}
                          layout='responsive'
                          width={612}
                          height={410}
                          className='rounded-lg'
                        />

                        <div className='absolute left-0 bottom-0 p-5'>
                          <p className='text-white text-[20px] md:text-[50px]'>{load.title}</p>
                        </div>
                      </div>
                    </div>
                  </BtnCount>
                </div>
              ))}
            </div>
          </div>

          <BtnCount url={getGameLink()}>
            <div className='mx-auto w-full md:w-[400px] px-[50px] md:p-0'>
              <div>
                <Image
                  src='/assets/unsafe/btn-2.png'
                  alt='btn-2'
                  layout='responsive'
                  width={690}
                  height={696}
                />
              </div>
            </div>
          </BtnCount>
        </div>
      </section>
    </main>
  );
}
