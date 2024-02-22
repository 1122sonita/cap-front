import React from 'react';
import CustomLayout from './layout';

const Account = () => {
  const userData = {
    username: 'thida@456',
    fullName: 'Thida Neang',
    email: 'thida@gmail.com',
    bio: '💻 I thrive in the world of technology and love exploring the latest trends in [Your Industry]. From coding to designing, I enjoy creating innovative solutions that make a positive impact.',
    avatar: 'https://via.placeholder.com/150', // URL to user's avatar image
  };
  return (
    <CustomLayout>
      <div className='flex flex-col items-start w-1/3'>
        <div className='bg-white p-4 rounded-lg shadow-lg mt-8 text-center'>
          <img
            src={userData.avatar}
            alt={userData.username}
            className='rounded-full w-32 h-32 mx-auto mb-4'
          />
          <h1 className='text-2xl font-bold'>{userData.fullName}</h1>
          <p className='text-gray-600'>@{userData.username}</p>
          <p className='text-gray-700 mt-2'>{userData.bio}</p>
          <p className='text-blue-500 mt-2'>{userData.email}</p>
        </div>
      </div>
    </CustomLayout>
  );
};

export default Account;
