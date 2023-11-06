'use client'
import { useState } from 'react';

export default function Fields() {
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

  const handleSubmit = (e: any) => {
    e.preventDefault();

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
