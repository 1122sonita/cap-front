import { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';

export default function RightPanel({ trans }) {
  const [isSubmit, setSubmit] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [input, setInput] = useState({
    name: '',
    contact: '',
    message: '',
  });

  const onHandleChange = (e) => {
    setInput((el) => ({
      ...el,
      [e.target.id]: e.target.value,
    }));
  };

  const sendMessage = async () => {
    if (input.name !== '' && input.contact !== '' && input.message !== '') {
      setLoading(true);
      try {
        const botToken = '6521340634:AAEHXGgReW8jVgxbeXGKzTUYOE3aYSmAdGA';
        const chatId = '-1001919142607';
        const messageS = `GoGo Marketing Customer Request\nName: ${input.name}\nContact Number: ${input.contact}\n Messages: ${input.message}`;

        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: messageS,
            parse_mode: 'HTML', // Change to 'Markdown' if needed
          }),
        });

        if (response.ok) {
          setSubmit(true);
          setInput({
            name: '',
            contact: '',
            message: '',
          });
          setSubmit(true);
          setLoading(false);
        }
      } catch (error) {
        console.error(`error ${error}`);
      }
    }
  };

  return (
    <>
      {isSubmit && (
        <div className='fixed top-0 left-0  w-screen h-screen z-50 bg-black/80 flex justify-center items-center '>
          <div className=' flex justify-center items-center bg-white w-[500px] h-[500px] rounded-lg relative'>
            <MdOutlineCancel
              onClick={() => setSubmit(false)}
              className=' absolute right-2 top-2 cursor-pointer text-30px hover:text-red-600 hover:scale-105 transition-all text-slate-500'
            />
            <div className=' space-y-[25px]'>
              <div className='flex justify-center items-center'>
                <div className=' w-[100px] '>
                  <Image
                    src='/assets/home/pop.png'
                    alt='logo'
                    layout='responsive'
                    width={185}
                    height={185}
                  />
                </div>
              </div>
              <div className=' text-center space-y-[15px]'>
                <h5 className=' text-purple-800 text-45px font-semibold'>
                  {trans.contact.cont.title}
                </h5>
                <p className=' text-20px'>{trans.contact.cont.dsp}</p>
              </div>

              <div className=' flex justify-between space-x-[40px]'>
                <Link href='/'>
                  <a>
                    <button
                      type='button'
                      className=' bg-purple-200 rounded-xl px-[15px] py-[9px] text-16px text-purple-800 font-bold hover:scale-105 transition-all'
                    >
                      {trans.contact.cont.btnTo}
                    </button>
                  </a>
                </Link>
                <button
                  type='button'
                  onClick={() => setSubmit(false)}
                  className='rounded-xl bg-amber-500 px-[15px] py-[9px] text-16px font-bold text-purple-800  hover:scale-105 transition-all'
                >
                  {trans.contact.cont.btnCon}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='h-full bg-white/90 rounded-[20px] px-[20px] md:px-[40px] py-[20px] space-y-[16px]'>
        <h1 className='text-title font-bold text-primary'>{trans.contact.rightPanel.title}</h1>

        <div className='space-y-[22px]'>
          <div>
            <label htmlFor='name'>
              <p className=' text-p'>
                {trans.contact.rightPanel.name}
                <span className=' text-red-600'>*</span>
              </p>
              <input
                required
                type='text'
                placeholder={trans.contact.form.name}
                className='w-full border-[1px] border-purple-300 rounded-md px-[10px] text-li placeholder:italic placeholder:font-extralight py-[9px]'
                id='name'
                value={input.name}
                onChange={(e) => onHandleChange(e)}
              />
            </label>
          </div>
          <div>
            <label htmlFor='contact'>
              <p className='text-p'>
                {trans.contact.rightPanel.contact.title}
                <span className=' text-red-600'>*</span>
              </p>
              <input
                required
                type='text'
                className='w-full text-li placeholder:italic placeholder:font-extralight  border-[1px]  border-purple-300 rounded-md px-[10px] py-[9px]'
                placeholder={trans.contact.form.username}
                id='contact'
                value={input.contact}
                onChange={(e) => onHandleChange(e)}
              />
              <p className='text-li text-gray-400'>{trans.contact.rightPanel.contact.ex}</p>
            </label>
          </div>
          <div>
            <label htmlFor='message'>
              <p className=' text-p'>
                {trans.contact.rightPanel.message}
                <span className=' text-red-600'>*</span>
              </p>
              <textarea
                required
                placeholder={trans.contact.form.message}
                rows={5}
                className='w-full border-[1px] text-li placeholder:italic placeholder:font-extralight border-purple-300 rounded-md px-[10px] py-[5px]'
                id='message'
                value={input.message}
                onChange={(e) => onHandleChange(e)}
              />
            </label>
          </div>

          <div>
            {!isLoading ? (
              <button
                type='button'
                onClick={() => sendMessage()}
                className='bg-secondary text-primary text-p font-semibold rounded-full hover:bg-primary hover:scale-110 transition-all hover:text-secondary px-[80px] py-[10px]'
              >
                {trans.contact.rightPanel.btn}
              </button>
            ) : (
              <button
                type='button'
                className='bg-secondary rounded-full text-p text-primary font-semibold px-[40px] py-[10px] flex justify-center items-center cursor-not-allowed'
                disabled
              >
                <svg
                  className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  />
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  />
                </svg>
                {trans.contact.cont.btnProcc}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
