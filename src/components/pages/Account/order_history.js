import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { CgNotes } from 'react-icons/cg';
import CustomLayout from './layout';

export default function OrderHistory({ apiData }) {
  console.log(apiData);
  return (
    <CustomLayout>
      <div className='container'>
        <div className='text-2xl text-primary font-bold'>All Products and Services</div>
        {orderDetails ? (
          <div className='mt-5'>
            <div className='max-w-full mx-auto relative'>
              <div className='overflow-x-auto'>
                <div className='shadow-xl rounded-lg overflow-hidden border border-gray-300'>
                  <table className='min-w-full bg-white border-collapse'>
                    <thead className='bg-gray-100'>
                      <tr>
                        <th className='py-2 px-4 border-b border-gray-300 uppercase'>Order No</th>
                        <th className='py-2 px-4 border-b border-gray-300 uppercase'>
                          Package Name
                        </th>
                        <th className='py-2 px-4 border-b border-gray-300 uppercase'>
                          Plan (month)
                        </th>
                        <th className='py-2 px-4 border-b border-gray-300 uppercase'>
                          Total Amount ($)
                        </th>
                        <th className='py-2 px-4 border-b border-gray-300 uppercase'>
                          Expired Date
                        </th>
                        <th className='py-2 px-4 border-b border-gray-300 uppercase'>Status</th>
                        <th className='py-2 px-4 border-b border-gray-300 uppercase'>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderDetails.map((order) => (
                        <tr className='text-center'>
                          <td className='py-2 px-4 border-b border-gray-300 text-primary font-bold'>
                            {order.id}
                          </td>
                          <td className='py-2 px-4 border-b border-gray-300'>
                            {order.order_details[0].package_name}
                          </td>
                          <td className='py-2 px-4 border-b border-gray-300'>
                            {order.order_details[0].plan}
                          </td>
                          <td className='py-2 px-4 border-b border-gray-300'>
                            {parseFloat(order.order_details[0].total_amount).toFixed(2)} $
                          </td>
                          <td className='py-2 px-4 border-b border-gray-300'>
                            {moment(order.order_details[0].expired_date).format('DD/MM/YYYY')}
                          </td>
                          <td className='py-2 px-4 border-b border-gray-300'>
                            {order.order_details[0].status}
                          </td>
                          <td className='py-2 px-4 border-b border-gray-300 align-middle'>
                            <div className=' flex justify-center'>
                              <Link href='/' className=''>
                                <CgNotes className='hover:text-[#5f61d1] cursor-pointer' />
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='mt-5'>
            <div className='max-w-full mx-auto relative'>
              <div
                role='status'
                className='max-w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700'
              >
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5' />
                    <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                  </div>
                  <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12' />
                </div>
                <div className='flex items-center justify-between pt-4'>
                  <div>
                    <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5' />
                    <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                  </div>
                  <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12' />
                </div>
                <div className='flex items-center justify-between pt-4'>
                  <div>
                    <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5' />
                    <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                  </div>
                  <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12' />
                </div>
                <div className='flex items-center justify-between pt-4'>
                  <div>
                    <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5' />
                    <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                  </div>
                  <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12' />
                </div>
                <div className='flex items-center justify-between pt-4'>
                  <div>
                    <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5' />
                    <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
                  </div>
                  <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12' />
                </div>
                <span className='sr-only'>Loading...</span>
              </div>

            <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
              <div className='text-center'>
                <div className='w-16 h-16 mx-auto'>
                  <Image
                    src='/assets/main/icons/not_found.png'
                    alt='not_found'
                    layout='responsive'
                    width={50}
                    height={50}
                  />
                </div>
                <h2 className='text-xl font-bold mb-2'>You do not have any products yet.</h2>
                <Link href='/service'>
                  <a>
                    <button
                      type='button'
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'
                    >
                      Go to Purchase
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}
