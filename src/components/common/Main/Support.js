import Link from 'next/link';
import Image from 'next/image';
import { getPlayLink } from '@utilities/dev';

const Support = () => {
  return (
    <Link href={getPlayLink()}>
      <div className='  md:w-[100px] w-[70px] h-[70px] md:h-[100px] bg-center cursor-pointer fixed z-40 bottom-10 md:right-10 right-5 flex justify-center items-center rounded-full drop-shadow-lg hover:scale-105 transition-all'>
        <div className=' w-full'>
          <Image
            src='/assets/main/customer.png'
            alt='banner-1'
            layout='responsive'
            width={140}
            height={140}
          />
        </div>
      </div>
    </Link>
  );
};

export default Support;
