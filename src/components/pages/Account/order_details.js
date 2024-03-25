import React from 'react';
import CustomLayout from './layout';

const OrderDetailsPage = ({ order }) => {
  return (
    <CustomLayout>
      <div className='container mx-auto'>
        <h1 className='text-2xl font-bold'>Order Details</h1>
        <p>Order ID: {order.id}</p>
        <p>Package Name: {order.order_details[0].package_name}</p>
        {/* Display other order details */}
      </div>
    </CustomLayout>
  );
};

export default OrderDetailsPage;