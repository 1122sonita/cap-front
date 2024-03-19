/* eslint-disable jsx-a11y/label-has-associated-control */

import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { FaPhoneAlt, FaRegUser } from 'react-icons/fa';
import { useState, React } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import CustomLayout from './layout';

const Account = ({ apiData, accessToken }) => {
  const userData = apiData?.result.user || [];
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState(userData);
  const [originalUserData, setOriginalUserData] = useState(userData);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setOriginalUserData(editedUserData);
    } else {
      setEditedUserData(originalUserData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({
      ...editedUserData,
      [name]: value,
    });
  };
  const handleCancel = () => {
    setIsEditing(false);
    setEditedUserData(originalUserData);
  };
  // const handleSubmit = () => {
  // Here you would typically send the edited data to the server or perform any necessary action
  //   console.log('Edited user data:', editedUserData);
  //   setIsEditing(false);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Display loading indicator using SweetAlert
      const timeoutId = setTimeout(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Your Profile have been update successfully!',
          icon: 'success',
          iconColor: 'green',
          width: '30%',
          confirmButtonText: 'OK',
          confirmButtonColor: '#3b82f6',
          customClass: {
            confirmButton: 'text-white font-semibold w-20 py-1 border-radius-full',
          },
        });
      }, 1500);
      Swal.fire({
        title: 'Loading...',
        text: 'Please wait...',
        width: '30%',
        allowOutsideClick: false, // Prevent closing by clicking outside
        didOpen: () => {
          Swal.showLoading(); // Start loading animation
        },
        willClose: () => {
          clearTimeout(timeoutId);
        },
      });
      const userId = userData.id; // Assuming your user object has an id property
      const endpoint = `${process.env.NEXT_PUBLIC_UPDATE_USER_PROFILE_API}/${userId}`;
      // Make an API call to update the profile
      const response = await fetch(endpoint, {
        method: 'POST', // or 'POST' if applicable
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          // Add any additional headers required, such as authorization token
        },
        body: JSON.stringify({
          name: editedUserData.name,
          email: editedUserData.email,
          phone_number: editedUserData.phone_number,
        }),
      });

      if (!response.ok) {
        console.error('Error changing password:', await response.text());
        throw new Error('Failed to update profile11');
      }

      const responseData = await response.json();
      if (responseData.code === 200) {
        // Handle successful response
        console.log('Profile updated successfully');
        // setIsEditing(false);
        // router.push('/account');
        setTimeout(() => {
          setIsEditing(false);
          router.push('/account');
          // Swal.close(); // Close the loading indicator
        }, 1000);
      } else {
        console.error('Error updating profile:');
      }
    } catch (error) {
      console.error('Error updating profile:', error.message);
      // Handle error
    }
  };
  return (
    <CustomLayout>
      <div>
        <h3 className='font-bold'>Profile</h3>
      </div>
      <div className='flex items-center justify-center'>
        <div className='w-1/3'>
          <div className='bg-white p-4 rounded-lg shadow-lg mt-8 '>
            <div className='flex items-center justify-center mb-4'>
              <FaRegUser className='w-12 h-12' />
            </div>

            {isEditing ? (
              <div>
                <div>
                  <h3 className='font-bold text-center mb-4'>Edit Profile</h3>
                </div>
                <form onSubmit={handleSubmit} className='px-2 text-sm'>
                  <div className='mb-4'>
                    <label htmlFor='name' className='block text-gray-700 font-semibold mb-2'>
                      Name
                      <span className='text-red-600'>*</span>
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={editedUserData.name}
                      onChange={handleChange}
                      className='border border-gray-300 rounded-md px-2 py-2 w-full'
                      placeholder='Enter your name'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='email' className='block text-gray-700 font-semibold mb-2'>
                      Email
                      <span className='text-red-600'>*</span>
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={editedUserData.email}
                      onChange={handleChange}
                      className='border border-gray-300 rounded-md px-2 py-2 w-full'
                      placeholder='Enter your email'
                    />
                  </div>
                  <div className='mb-5'>
                    <label
                      htmlFor='phone_number'
                      className='block text-gray-700 font-semibold mb-2'
                    >
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      id='phone_number'
                      name='phone_number'
                      value={editedUserData.phone_number}
                      onChange={handleChange}
                      className='border border-gray-300 rounded-md px-2 py-2 w-full'
                      placeholder='Enter your phone number'
                    />
                  </div>
                  <div className='flex justify-between'>
                    <button
                      type='button'
                      onClick={handleCancel}
                      className='bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold px-4 py-2 rounded-full'
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='bg-primary hover:bg-[#4b8bf3] text-white font-semibold px-4 py-2 rounded-full'
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div>
                <h1 className='text-2xl font-bold text-center mb-4'>{userData.name}</h1>
                <div className='flex items-center justify-center mb-4'>
                  <MdOutlineMarkEmailRead className='w-5 h-5' />
                  <p className='text-blue-500 ml-2'>{userData.email}</p>
                </div>
                <div className='flex items-center justify-center mb-4'>
                  <FaPhoneAlt className='w-5 h-5' />
                  <p className={`ml-2 ${userData.phone_number ? 'text-blue-500' : 'text-red-500'}`}>
                    {userData.phone_number ? userData.phone_number : 'N/A'}
                  </p>
                </div>
                <div className='flex items-center justify-center mt-4'>
                  <button
                    type='button'
                    onClick={handleEditToggle}
                    className='flex items-center bg-primary hover:bg-[#4b8bf3] text-white  py-1 px-4 rounded-full'
                  >
                    {/* <CiEdit className='w-5 h-5 mr-2' /> */}
                    Edit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </CustomLayout>
  );
};

export default Account;
