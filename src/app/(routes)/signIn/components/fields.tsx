'use client'
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useAppDispatch } from '@/lib/hooks/redux';
import { signInToggle } from '@/redux/features/auth-slice';

export default function Fields() {

  const dispatch = useAppDispatch()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const userAuthString = Cookies.get('token');

	

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await fetch('https://nft-backend-beryl.vercel.app/user/signIn', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: formData.password,
          email: formData.email,
        }),
      });
  
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await res.json();
      dispatch(signInToggle())
      console.log(data);
      console.log(userAuthString)
    } catch (error) {
      console.error('Error:', error);
    }
  
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className='mb-[40px] flex flex-col justify-center items-center'>
  <form onSubmit={handleSubmit} className="mt-[16px]">

        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email Address'
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-[330px] border border-gray-300 rounded-3xl	text-black pl-[30px]"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-[330px] border border-gray-300 rounded-3xl text-black pl-[30px]"
          />
        </div>

          <button
            type="submit"
            className=" w-[330px] bg-[#A259FF] text-white p-2 rounded-3xl "
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </form>

    
    </div>
  );
}
