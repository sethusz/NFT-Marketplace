'use client'
import { useState } from 'react';



const EmailSubscribe = () => {
  const [email, setEmail] = useState('')

	const buttonStyles = `rounded-[20px] px-[40px] py-[15px] bg-[#A259FF] border-2
  border-transparent transition-colors text-white font-semibold hover:text-black hover:bg-white hover:border-[#A259FF]`;

  return (
    <div className='flex text-center rounded-[20px] items-center bg-white justify-between'>
      <input
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter your email here'
        className='bg-transparent p-[15px] outline-none text-black placeholder:text-black'
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