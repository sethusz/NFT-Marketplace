'use client'
import { useState } from 'react';

import Image from "next/image";
import imgAuth from '@/assets/imgAuth.png'

export default function HomePage() {
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
    // Добавьте здесь логику для обработки отправки формы, например, отправку данных на сервер или валидацию.
  };

  return (
    <div className="flex gap-[60px] w-full mb-[-40px] mt-[-20px] text-white">

      <div >
        <Image src={imgAuth} alt="image" />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="font-semibold text-[51px]">Create account</h1>
        <div className="w-[460px]">Welcome! enter your details and start creating, collecting and selling NFTs.</div>


      <form onSubmit={handleSubmit} className="mt-4">
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
          Create account
        </button>
      </form>

      </div>
    </div>
  );
}
