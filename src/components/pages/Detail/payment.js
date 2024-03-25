/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import cookie from 'cookie';
import { useRouter } from 'next/router';
import BigNumber from 'bignumber.js';

export default function Payment({ selectedPackage, selectMonth, selectImage }) {
  // eslint-disable-next-line no-unused-vars
  const [step, setStep] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [success, setSuccess] = useState(false);
  const [fileName, setFileName] = useState('');
  const router = useRouter();
  const [image, setImage] = useState(null);

  const handleUpload = async (selectedFile) => {
    try {
      const apiEndpoint = process.env.NEXT_PUBLIC_INVOICE_URL;
      if (!selectedFile) {
        throw new Error('Please select a file to upload.');
      }

      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload invoice. Please try again later.');
      }

      const responseData = await response.json();

      if (responseData.code === 200) {
        setSuccess(true);
        alert('Invoice uploaded successfully!');
      } else {
        throw new Error('Error uploading invoice: ', responseData.message);
      }
    } catch (error) {
      console.error('Error uploading invoice:', error.message);
      alert(error.message);
    }
  };

  const handleFileChange = async (event) => {
    // await handleUpload(event.target.files[0]);
    setFileName(event.target.files?.[0]?.name);
    setImage(event.target.files[0]);
  };

  // let totalPrice = selectedPackage.price * selectMonth.title;
  const [totalPrice, setTotalPrice] = useState(null);

  const data = [
    {
      package_id: selectedPackage.id,
      package_name: selectedPackage.name,
      unit_price: selectedPackage.price,
      plan: selectMonth.title,
      os: selectImage.title,
    },
  ];
  useEffect(() => {
    if (router.query.id == selectedPackage.id && router.query.promotion) {
      const packagePrice = new BigNumber(selectedPackage.price);
      const promotion = new BigNumber(router.query.promotion).dividedBy(100);
      const discount = packagePrice.minus(packagePrice.times(promotion));

      setTotalPrice(discount.times(selectMonth.title).toNumber());
    } else {
      const packagePrice = new BigNumber(selectedPackage.price);
      setTotalPrice(packagePrice.times(selectMonth.title).toNumber());
    }
  }, [selectedPackage]);
  const handleCheckout = async () => {
    try {
      if (!fileName) {
        alert('Please upload the invoice before checking out.');
        return;
      }

      const apiEndpoint = process.env.NEXT_PUBLIC_CHECKOUT_URL;
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookie.parse(document.cookie).token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error fetching data from checkout API');
      }

      const responseData = await response.json();

      if (responseData.code === 200 && responseData.message === 'Checkout order successfully!') {
        setStep(2);
        console.log(responseData);

        console.log(!image);
        if (image) {
          const apiEndpoint2 = process.env.NEXT_PUBLIC_INVOICE_URL;
          const formData = new FormData();
          formData.append('image', image);

          const response2 = await fetch(apiEndpoint2, {
            method: 'POST',
            body: formData,
          });
          if (!response2.ok) {
            throw new Error('Failed to upload invoice. Please try again later.');
          }

          const responseData2 = await response2.json();

          console.log(responseData2);
          if (responseData2.code === 200) {
            router.push('/success');
            const orderId = responseData.result.order.id;
            const notificationEndpoint = `${process.env.NEXT_PUBLIC_NOTIFICATION_URL}?order_id=${orderId}`;
            const notificationResponse = await fetch(notificationEndpoint);

            if (!notificationResponse.ok) {
              throw new Error('Error sending push notification');
            }

            alert('Checkout successful!', responseData.message);
          } else {
            throw new Error('Error uploading invoice: ', responseData2.message);
          }
        }
      } else {
        alert('Checkout failed: ', responseData.message);
      }
    } catch (error) {
      console.error('Error during checkout:', error.message);
    }
  };

  return (
    <>
      <main>
        <section className='container-fluid  bg-cover bg-no-repeat'>
          <div className='container-full-px md:py-[100px] pt-[5px] pb-[100px]'>
            <div className='flex justify-center items-center  gap-[40px] '>
              <div className='h-full bg-white/90 rounded-[20px] px-[20px] md:px-[100px] py-[20px] space-y-[16px]'>
                <h1 className='text-title font-bold text-primary flex justify-center items-center'>
                  Payment
                </h1>
                <h1 className='text-title font-bold text-primary flex justify-center items-center'>
                  {totalPrice} $
                </h1>
                <p className='text-li  text-primary flex justify-center items-center'>
                  Please Scan the QR Code below to Pay
                </p>
                <div className=' flex justify-center '>
                  <div className='w-[200px] sm:w-[303px] '>
                    <Image src='/assets/main/pay.png' alt='telegram' width={403} height={403} />
                  </div>
                </div>
                <div className='space-y-[22px]'>
                <p className='text-li  text-primary flex justify-center items-center'>
                  Please Uplolad the receipt After your payment is successful
                </p>
                  <div>
                    <label
                      htmlFor='file-upload'
                      className='cursor-pointer underline text-primary font-bold hover:scale-300 flex justify-center items-center'
                    >
                      {fileName || 'Upload Invoice'}
                      <input
                        id='file-upload'
                        type='file'
                        accept='image/*'
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  {' '}
                  <div className='bg-primary mt-[30px] rounded-[10px] text-white hover:scale-110 flex justify-center'>
                    <button
                      type='button'
                      className='text-btn hover:scale-110 transition-all px-[40px] py-[10px] rounded-full font-semibold'
                      onClick={() => handleCheckout()}
                    >
                      Check out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}