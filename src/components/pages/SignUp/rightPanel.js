import { useState } from 'react';
import axios from 'axios';

export default function RightPanel({ trans }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const { name, email, phoneNumber, password, confirmPassword } = formData;

      // Check if confirm password matches password
      if (confirmPassword !== password) {
        throw new Error("Confirm password doesn't match");
      }

      const response = await axios.post(process.env.NEXT_PUBLIC_SIGNUP_URL, {
        name,
        email,
        phone_number: phoneNumber,
        password,
        password_confirmation: confirmPassword,
        role: 'user',
      });

      if (response.data.code === 200) {
        setSuccessMessage('Sign up successful!');
        setErrorMessage('');
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: '',
        });
      }
    } catch (error) {
      console.error('Error during sign up:', error.message);
      setErrorMessage(error.response?.data?.message || 'Sign up failed');
    }
  };

  return (
    <>
      <div className='h-full bg-white/90 rounded-[20px] px-[20px] md:px-[100px] py-[20px] space-y-[16px]'>
        <h1 className='text-title font-bold text-primary'>{trans.signup.rightPanel.title}</h1>

        <div className='space-y-[22px]'>
          <div>
            <label htmlFor='name'>
              <p className='text-p'>
                Name
                <span className='text-red-600'>*</span>
              </p>
              <input
                required
                type='text'
                placeholder='name'
                className='w-full text-li placeholder:italic placeholder:font-extralight border-[1px] border-purple-300 rounded-md px-[10px] py-[9px]'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor='email'>
              <p className='text-p'>
                {trans.signup.form.email}
                <span className='text-red-600'>*</span>
              </p>
              <input
                required
                type='email'
                placeholder={trans.signup.form.email}
                className='w-full text-li placeholder:italic placeholder:font-extralight border-[1px] border-purple-300 rounded-md px-[10px] py-[9px]'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor='phoneNumber'>
              <p className='text-p'>
                PhoneNumber
                <span className='text-red-600'>*</span>
              </p>
              <input
                required
                type='tel'
                placeholder='phoneNumber'
                className='w-full text-li placeholder:italic placeholder:font-extralight border-[1px] border-purple-300 rounded-md px-[10px] py-[9px]'
                id='phoneNumber'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor='password'>
              <p className='text-p'>
                {trans.signup.rightPanel.contact.title}
                <span className='text-red-600'>*</span>
              </p>
              <input
                required
                type='password'
                placeholder={trans.signup.form.password}
                className='w-full text-li placeholder:italic placeholder:font-extralight border-[1px] border-purple-300 rounded-md px-[10px] py-[9px]'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor='confirmPassword'>
              <p className='text-p'>
                {trans.signup.form.confirm}
                <span className='text-red-600'>*</span>
              </p>
              <input
                required
                type='password'
                placeholder={trans.signup.form.confirm}
                className='w-full text-li placeholder:italic placeholder:font-extralight border-[1px] border-purple-300 rounded-md px-[10px] py-[9px]'
                id='confirmPassword'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className='flex justify-center items-center gap-4'>
            <button
              type='button'
              onClick={handleSubmit}
              className='bg-secondary text-primary text-p font-semibold rounded-full hover:bg-primary hover:scale-110 transition-all hover:text-secondary px-[80px] py-[10px] justify-center items-center'
            >
              {trans.contact.rightPanel.btn}
            </button>
          </div>

          {errorMessage && <p className='text-red-600'>{errorMessage}</p>}
          {successMessage && <p className='text-green-600'>{successMessage}</p>}
        </div>
      </div>
    </>
  );
}
