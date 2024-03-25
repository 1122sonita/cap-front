import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { CgNotes } from 'react-icons/cg';
import CustomLayout from './layout';
import cookie from 'cookie';

export default function OrderHistory({ apiData }) {
  console.log(apiData);
  let orderDetails = '';
  if (apiData.code === 200) {
    orderDetails = apiData.result.Orders;
  }
  console.log(orderDetails);
   // Define a function to determine the background color based on the status
   const getStatusColor = (status) => {
    switch (status) {
        case 'pending':
            return 'text-gray-800 font-bold border-gray-600'; // Change to your desired color
        case 'in progress':
            return 'text-yellow-800 font-bold border-yellow-600'; // Change to your desired color
        case 'delivered':
            return 'text-green-800 font-bold border-green-600'; // Change to your desired color
        default:
            return 'text-red-800 font-bold border-red-600'; // Change to your desired color or default background
    }
};
  return (
    <CustomLayout userData={cookie.parse(document.cookie).username}>
      <div className='container'>
        <div className='text-2xl text-primary font-bold'>All Products and Services</div>
        {orderDetails ? (
          <div className='mt-5'>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow-md rounded-lg overflow-hidden'>
                  <table className='min-w-full'>
                    <thead className='bg-gray-100'>
                      <tr className=''>
                      <th className='px-5 py-3 border-b-2 text-center border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider'>No</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider'>Order_No</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                          Package Name
                        </th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                          Plan (month)
                        </th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                          Total Amount ($)
                        </th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                          Expired Date
                        </th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider'>Status</th>
                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider'>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderDetails.map((order, index) => {
                        const isLastOrder = index === orderDetails.length - 1;
                        const rowClassName = isLastOrder ? '' : 'border-b border-gray-200';
                        const statusColorClass = getStatusColor(order.order_details[0].status);
                        return (
                        <tr className='text-center'>
                          <td className={`px-5 py-5 bg-white text-sm ${rowClassName}`}>
                            {index +1 }
                          </td>
                          <td className={`px-5 py-5 bg-white text-sm text-primary font-bold ${rowClassName}`}>
                            {order.id}
                          </td>
                          <td className={`px-5 py-5 bg-white text-sm ${rowClassName}`}>
                            {order.order_details[0].package_name}
                          </td>
                          <td className={`px-5 py-5 bg-white text-sm ${rowClassName}`}>
                            {order.order_details[0].plan}
                          </td>
                          <td className={`px-5 py-5 bg-white text-sm ${rowClassName}`}>
                            {parseFloat(order.order_details[0].total_amount).toFixed(2)} $
                          </td>
                          <td className={`px-5 py-5 bg-white text-sm ${rowClassName}`}>
                            {moment(order.order_details[0].expired_date).format('DD/MM/YYYY')}
                          </td>
                          <td className={`px-5 py-5 bg-white text-sm ${rowClassName}`}>
                          <div class={`p-1 text-xs border-2 rounded font-bold capitalize ${statusColorClass}`}>{order.order_details[0].status}</div>
                            
                          </td>
                          <td className={`px-5 py-5 bg-white text-sm align-middle ${rowClassName}`}>
                            <div className=' flex justify-center'>
                              <Link href="/" className=''>
                                <CgNotes className='hover:text-[#565658] cursor-pointer w-6 h-6' />
                              </Link>
                            </div>
                          </td>
                        </tr>
                        
                      )})}
                    </tbody>
                  </table>
                  {/* <div class='px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          '>
                      <span class='text-xs xs:text-sm text-gray-900'>
                        Showing 1 to 4 of 50 Entries
                      </span>
                      <div class='inline-flex mt-2 xs:mt-0'>
                        <button class='text-sm text-indigo-50 transition duration-150 hover:bg-blue-600 bg-primary font-semibold py-2 px-4 rounded-l'>
                          Prev
                        </button>
                        &nbsp; &nbsp;
                        <button class='text-sm text-indigo-50 transition duration-150 hover:bg-blue-600 bg-primary font-semibold py-2 px-4 rounded-r'>
                          Next
                        </button>
                      </div>
                    </div> */}
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
        )}
      </div>
    </CustomLayout>
  );
}
