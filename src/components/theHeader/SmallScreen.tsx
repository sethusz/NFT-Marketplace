'use client'
import React, { useEffect, useRef } from 'react';
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
  menuOpen: boolean;
}

const SmallScreen = ({ isAuth, activeLink, links, setMenuOpen, menuOpen }: SmallScreenProps) => {
  const dispatch = useAppDispatch();
  const menuRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(signInToggle());
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {

    const menuContainer = menuRef.current as HTMLElement | null;
  
    if (menuContainer && !menuContainer.contains(event.target as Node)) {
      setMenuOpen(false);

    }
  };

  useEffect(() => {

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  


  return (
    <>
<div className={`lg:hidden fixed top-0 right-0 bg-[#3B3B3B] h-full overflow-y-auto z-50 w-[300px]`} 
                        ref={menuRef}>

          <div className='flex justify-around items-center text-center mt-[20px] h-[70px]'>
          <h3 className='flex justify-center items-center text-[28px] font-semibold
				              max-[600px]:text-[22px]'>NFT Marketplace</h3>
            <div
              className={`lg:hidden block  cursor-pointer w-[15px] ${menuOpen ? 'transform rotate-80 translate-y-1' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}>
              <div className={`w-6 h-1 bg-white mb-1 transition-transform duration-300 transform ${menuOpen ? 'rotate-45 -translate-y-1' : ''}`} />
              <div className={`w-6 h-1 bg-white mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-1 bg-white transition-transform duration-300 transform ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </div>

          <div className="h-px bg-gray-500"></div>


          <div className="flex flex-col justify-center items-center gap-[10px] mt-[50px]">
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
                  <Button title="Sign In" icon={logoUser} styles="py-2 px-3" />
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
        </div>

    </>
  );
};

export default SmallScreen;