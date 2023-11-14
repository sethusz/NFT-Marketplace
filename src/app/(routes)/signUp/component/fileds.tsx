'use client'
import { useState } from 'react';

export default function Fields() {
  const [formData, setFormData] = useState({
    userName: '',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await fetch('http://localhost:5455/user/signUp', {
        method: 'POST',
        credentials: 'include', // Important for cookies
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: formData.userName,
          password: formData.password,
          email: formData.email,
        }),
      });
  
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  
    setFormData({
      userName: '',
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
            id="userName"
            name="userName"
            placeholder='Username'
            value={formData.userName}
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
