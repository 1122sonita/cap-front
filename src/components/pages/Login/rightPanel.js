export default function RightPanel({ trans }) {
  return (
    <>
      <div className='h-full bg-white/90 rounded-[20px] px-[20px] md:px-[100px] py-[20px] space-y-[16px]'>
        <h1 className='text-title font-bold text-primary'>{trans.login.rightPanel.title}</h1>

        <div className='space-y-[22px]'>
          <div>
            <label htmlFor='name'>
              <p className=' text-p'>
                {trans.login.rightPanel.name}
                <span className=' text-red-600'>*</span>
              </p>
              <input
                required
                type='text'
                placeholder={trans.login.form.name}
                className='w-full border-[1px] border-purple-300 rounded-md px-[10px] text-li placeholder:italic placeholder:font-extralight py-[9px]'
                id='email'
                value=''
                onChange=''
              />
            </label>
          </div>
          <div>
            <label htmlFor='contact'>
              <p className='text-p'>
                {trans.login.rightPanel.contact.title}
                <span className=' text-red-600'>*</span>
              </p>
              <input
                required
                type='text'
                className='w-full text-li placeholder:italic placeholder:font-extralight  border-[1px]  border-purple-300 rounded-md px-[10px] py-[9px]'
                placeholder={trans.login.form.username}
                id='contact'
                value=''
                onChange=''
              />
            </label>
          </div>

          <div className='flex justify-center items-center gap-4'>
            <button
              type='button'
              onClick=''
              className='bg-secondary text-primary text-p font-semibold rounded-full hover:bg-primary hover:scale-110 transition-all hover:text-secondary px-[80px] py-[10px] justify-center items-center'
            >
              {trans.contact.rightPanel.btn}
            </button>
            {/* ) : (
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
              {trans.login.cont.btnProcc}
            </button> */}
            <div className=' cursor-pointer underline text-primary font-bold'>
              <p> Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
