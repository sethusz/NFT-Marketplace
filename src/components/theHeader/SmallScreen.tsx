'use client'
import React from 'react';
import Link from 'next/link';
import Button from '../Button';
import iconExit from '@/assets/icon/iconExit.svg';
import { useAppDispatch } from '@/lib/hooks/redux';
import logoUser from '@/assets/icon/logoUser.svg';
import { signInToggle } from '@/redux/features/auth-slice';
import Image from 'next/image';

interface SmallScreenProps {
  isAuth: string | null;
  activeLink: string;
  links: { title: string; src: string }[];
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SmallScreen = ({ isAuth, activeLink, links, setMenuOpen }: SmallScreenProps) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(signInToggle());
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="lg:hidden absolute mt-[15px] flex flex-col justify-center items-center top-16 left-0 right-0 bg-[#3B3B3B] h-[100%] z-10 ">
      {isAuth ? (
        <>
          {links.map((el) => (
            <Link
              key={el.title}
              href={el.src}
              className={`block px-4 py-2 font-semibold ${activeLink === el.src ? 'text-gray-600' : ''} 
                                  hover:text-gray-500`}
              onClick={handleLinkClick} 
            >
              {el.title}
            </Link>
          ))}
          <div
            className="block px-4 py-2 font-semibold cursor-pointer hover:text-gray-500"
            onClick={() => {
              handleLogout();
              handleLinkClick(); 
            }}
          >
            <Image src={iconExit} alt="exit" />
          </div>
        </>
      ) : (
        <>
          {links.map((el) => (
            <Link
              key={el.title}
              href={el.src}
              className={`block px-4 py-2 font-semibold ${activeLink === el.src ? 'text-gray-600' : ''} 
                                    hover:text-gray-500`}
              onClick={handleLinkClick} 
            >
              {el.title}
            </Link>
          ))}
          <Link href={'/signIn'} passHref>
            <Button title="Sign In" icon={logoUser} styles="py-2 px-3"/>
          </Link>
          <Link href={'/signUp'} passHref>
            <Button
              title="Sign Up"
              icon={logoUser}
              styles="bg-[#A259FF] py-2 px-3"
              
            />
          </Link>
        </>
      )}
    </div>
  );
};

export default SmallScreen;
