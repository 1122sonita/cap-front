import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CustomLayout from './layout';
import { MdOutlinePassword } from 'react-icons/md';
import { useState } from 'react';
import cookie from 'cookie';

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    old_password: '',
    new_password: '',
    new_password_confirmation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    setFormData({ old_password: '', new_password: '', new_password_confirmation: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    try{
      const endpoint = process.env.NEXT_PUBLIC_CHANGE_PASSWORD_API;

      console.log(endpoint);
      if (formData.new_password !== formData.new_password_confirmation) {
        throw new Error("Confirm password doesn't match");
      }
  
      // Send form data to server (replace with your actual API call)
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        Authorization: `Bearer ${cookie.parse(document.cookie).token}`, 
      },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Handle successful password change (e.g., show success message)
        console.log('Password changed successfully!');
        setFormData({ old_password: '', new_password: '', new_password_confirmation: '' });
        // You might want to redirect to a different page or reset the form
      } else {
        // Handle failed password change (e.g., show error message)
        console.error('Error changing password:', await response.text());
      }
    }catch (error) {
      console.error('Error during sign up:', error.message);
    }
  };

  return (
    <CustomLayout>
      <div className='flex items-center justify-center'>
        <div className='w-1/3'>
          <div className='bg-white p-4 rounded-lg shadow-lg mt-8 '>
            <div className='flex items-center justify-center mb-2'>
              <MdOutlinePassword className='w-12 h-12' />
            </div>
            <div>
              <h3 className='font-bold text-center mb-4'>Change Password</h3>
            </div>
            <form onSubmit={handleSubmit} className='px-2 text-sm'>
              <div className='mb-4'>
                <label htmlFor='old_password' className='block text-gray-700 font-semibold mb-2'>
                  Old Password
                  <span className='text-red-600'>*</span>
                </label>
                <input
                  required
                  type='password'
                  placeholder='Enter your old password'
                  className='border border-gray-300 rounded-md px-2 py-2 w-full'
                  id='old_password'
                  name='old_password'
                  value={formData.old_password}
                  onChange={handleChange}
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='new_password' className='block text-gray-700 font-semibold mb-2'>
                  New Password
                  <span className='text-red-600'>*</span>
                </label>
                <input
                  required
                  type='password'
                  placeholder='Enter your new password'
                  className='border border-gray-300 rounded-md px-2 py-2 w-full'
                  id='new_password'
                  name='new_password'
                  value={formData.new_password}
                  onChange={handleChange}
                />
              </div>
              <div className='mb-5'>
                <label htmlFor='new_password_confirmation' className='block text-gray-700 font-semibold mb-2'>
                  Confirm New Password
                  <span className='text-red-600'>*</span>
                </label>
                <input
                required
                type='password'
                placeholder='Re-enter new password'
                className='border border-gray-300 rounded-md px-2 py-2 w-full'
                id='new_password_confirmation'
                name='new_password_confirmation'
                value={formData.new_password_confirmation}
                onChange={handleChange}
              />
              </div>
              <div className='flex justify-between'>
                <button
                  type='button'
                  onClick={handleCancel}
                  className='bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold px-4 py-2 rounded-md'
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='bg-secondary hover:bg-[#F6AF3B] text-white font-semibold px-4 py-2 rounded-md'
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}
