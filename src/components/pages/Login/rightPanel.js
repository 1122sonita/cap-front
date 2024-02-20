/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cookie from 'cookie'; // Import cookie library

export default function LoginForm({ trans }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const apiEndpoint = process.env.NEXT_PUBLIC_LOGIN_URL;
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Error fetching data from login API');
      }

      const responseData = await response.json();

      if (responseData.code === 200 && responseData.result.token) {
        // Set cookie with token
        document.cookie = cookie.serialize('token', responseData.result.token, {
          maxAge: responseData.result.expiresIn, // Set expiration time
          path: '/', // Set cookie path
        });
        alert('Login successful!');
        console.log(cookie.parse(document.cookie).token); // Get token from cookie
        // router.push('/');
        setIsLoggedIn(true);
        // router.reload();
        window.location.href = '/';
      } else {
        setErrorMessage(responseData.message || 'An error occurred during login.');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setErrorMessage('An error occurred during login. Please try again.');
    }
  };

  return (
    <>
      <div className='h-full bg-white/90 rounded-[20px] px-[20px] md:px-[100px] py-[20px] space-y-[16px]'>
        <h1 className='text-title font-bold text-primary'>{trans.login.rightPanel.title}</h1>

        <div className='space-y-[22px]'>
          <div>
            <label htmlFor='email'>
              <p className='text-p'>
                {trans.login.rightPanel.name}
                <span className='text-red-600'>*</span>
              </p>
              <input
                required
                type='email'
                placeholder={trans.login.form.name}
                className='w-full border-[1px] border-purple-300 rounded-md px-[10px] text-li placeholder:italic placeholder:font-extralight py-[9px]'
                id='email'
                value={email}
                onChange={handleEmailChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor='password'>
              <p className='text-p'>
                {trans.login.rightPanel.contact.title}
                <span className='text-red-600'>*</span>
              </p>
              <input
                required
                type='password'
                placeholder={trans.login.form.username}
                className='w-full text-li placeholder:italic placeholder:font-extralight border-[1px]  border-purple-300 rounded-md px-[10px] py-[9px]'
                id='password'
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
          </div>

          <div className='flex justify-center items-center gap-4'>
            {isLoggedIn ? (
              <div>
                <Image
                  src='/path/to/profile-image.jpg'
                  alt='Profile Image'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            ) : (
              <Link href='/'>
                <button
                  type='button'
                  onClick={handleSubmit}
                  className='bg-secondary text-primary text-p font-semibold rounded-full hover:bg-primary hover:scale-110 transition-all hover:text-secondary px-[80px] py-[10px] justify-center items-center'
                >
                  {trans.contact.rightPanel.btn}
                </button>
              </Link>
            )}
            <div className='cursor-pointer underline text-primary font-bold hover:scale-300'>
              <Link href='/signup'>
                <a>Sign Up</a>
              </Link>
            </div>
          </div>

          {errorMessage && <p className='text-green-600'>{errorMessage}</p>}
        </div>
      </div>
    </>
  );
}
