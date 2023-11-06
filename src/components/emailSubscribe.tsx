'use client'
import { useState } from 'react';



const EmailSubscribe = () => {
  const [email, setEmail] = useState('')

	const buttonStyles = `rounded-[20px] px-[40px] py-[15px] bg-[#A259FF] border-2
  border-transparent transition-colors text-white font-semibold hover:text-black hover:bg-white hover:border-[#A259FF] 
  max-[400px]:w-[100%]`;

  return (
    <div className='flex text-center rounded-[20px] items-center bg-white justify-between text-sm md:text-base
                    max-[400px]:bg-inherit max-[400px]:flex-col'>
      <input
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter your email here'
        className='bg-transparent p-[15px] outline-none text-black placeholder:text-black
                    max-[400px]:bg-white max-[400px]:rounded-[20px] max-[400px]:mb-[20px]
                    max-[400px]:w-[100%]'
      />
      <button
        className={buttonStyles}
      >
        Subscribe
      </button>
    </div>
  )
}

export default EmailSubscribe