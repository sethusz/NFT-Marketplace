'use client'
import { useState } from 'react';

import Image from "next/image";
import imgAuth from '@/assets/imgAuth.png'
import AuthLayout from '@/components/AuthLayout';

export default function Fields() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className='mb-[40px] flex flex-col justify-center items-center'>
      <form onSubmit={handleSubmit} className="mt-[16px]">
        <div className="mb-4">
          <input
            type="text"
            id="username"
            name="username"
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}

            required
            className="mt-1 p-2 w-[330px]  border border-gray-300 rounded-3xl	 text-black pl-[30px]"
          />
        </div>



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

        <div className="mb-4">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-[330px] border border-gray-300 rounded-3xl	text-black pl-[30px]"
          />
        </div>

        <button
          type="submit"
          className=" w-[330px] bg-[#A259FF] text-white p-2 rounded-3xl "
        >
          Sign Up
        </button>
      </form>


    </div>
  );
}
