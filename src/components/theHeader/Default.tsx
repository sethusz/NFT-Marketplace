'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../Button';
import iconExit from '@/assets/icon/iconExit.svg'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux';
import logoUser from '@/assets/icon/logoUser.svg';
import { signInToggle } from '@/redux/features/auth-slice';
import { usePathname } from 'next/navigation'
import Image from 'next/image';


const Default = ({ isAuth }: { isAuth: string | null }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const pathname = usePathname()

  const linksNoAuth = [
    { title: 'Marketplace', src: '/marketplace/nfts' },
    { title: 'Rankings', src: '/ranking' },
  ];

  const linksAuth = [
    { title: 'Marketplace', src: '/marketplace/nfts' },
    { title: 'Rankings', src: '/ranking' },
    { title: 'Artist', src: '/artist' },
    { title: 'Profile', src: '/profile' },


  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(signInToggle());
    router.refresh();
  };

  const activeLink = isAuth
    ? linksAuth.find((el) => pathname.startsWith(el.src))?.src || ''
    : linksNoAuth.find((el) => pathname === el.src)?.src || '';

  return (
    <>
      {isAuth ? (
        <>
          {linksAuth.map((el) => (
            <Link
              href={el.src}
              key={el.title}
              className={`px-[20px] py-[12px] font-semibold ${activeLink === el.src ? 'text-gray-600' : ''}
                        hover:text-gray-500`}
            >
              {el.title}
            </Link>
          ))}
          <Image src={iconExit} alt='exit'  className='cursor-pointer hover:brightness-150'
                                            onClick={handleLogout} />
        </>
      ) : (
        <>
          {linksNoAuth.map((el) => (
            <Link
              href={el.src}
              key={el.title}
              className={`px-[20px] py-[12px] font-semibold ${activeLink === el.src ? 'text-gray-600' : ''}
                              hover:text-gray-500`}
            >
              {el.title}
            </Link>
          ))}
          <Link href={'/signIn'}>
            <Button title='Sign In' icon={logoUser} styles='py-[10px] px-[15px]' />
          </Link>
          <Link href={'/signUp'}>
            <Button title='Sign Up' icon={logoUser} styles='bg-[#A259FF] py-[10px] px-[15px]' />
          </Link>
        </>
      )}
    </>
  );
};

export default Default;

