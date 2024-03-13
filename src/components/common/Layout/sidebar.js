import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className='bg-white h-screen border-r-2 border-gray-200'>
      <div className='p-4'>
        <ul className='flex flex-col py-4 space-y-2'>
          <li className='group'>
            <Link href='/account'>
              <a
                className={`
                  px-4 py-2 flex items-center text-sm font-medium rounded-md 
                  group-hover:bg-blue-100 group-hover:text-primary ${
                    router.pathname === '/account' ? 'bg-blue-600 text-white' : 'text-primary'
                  }
                `}
              >
                My Profile
              </a>
            </Link>
          </li>
          <li className='group'>
            <Link href='/account/change_password'>
              <a
                className={`
                  px-4 py-2 flex items-center text-sm font-medium rounded-md 
                  group-hover:bg-blue-100 group-hover:text-primary ${
                    router.pathname === '/account/change_password' ? 'bg-blue-600 text-white' : 'text-primary'
                  }
                `}
              >
                Change Password
              </a>
            </Link>
          </li>
          <li className='group'>
            <Link href='/account/order_history'>
              <a
                className={`
                  px-4 py-2 flex items-center text-sm font-medium rounded-md
                  group-hover:bg-blue-100 group-hover:text-primary ${
                    router.pathname === '/account/order_history'
                      ? 'bg-blue-600 text-white'
                      : 'text-primary'
                  }
                `}
              >
                Order History
              </a>
            </Link>
          </li>
          {/* Add more links for other sections */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
