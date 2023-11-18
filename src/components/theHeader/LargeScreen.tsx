import React from 'react';
import Link from 'next/link';
import Button from '../Button';
import iconExit from '@/assets/icon/iconExit.svg';
import { useAppDispatch } from '@/lib/hooks/redux';
import logoUser from '@/assets/icon/logoUser.svg';
import { signInToggle } from '@/redux/features/auth-slice';
import Image from 'next/image';

interface LargeScreenProps {
    isAuth: string | null;
    activeLink: string;
    links: { title: string; src: string }[];
    menuOpen: boolean;
}

const LargeScreen = ({ isAuth, activeLink, links, menuOpen } : LargeScreenProps) => {
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(signInToggle());
    };

    return (
        <div className='hidden lg:flex items-center space-x-4'>
            {isAuth ? (
                <>
                    {links.map((el) => (
                        <Link
                            key={el.title}
                            href={el.src}
                            className={`px-4 py-2 font-semibold ${activeLink === el.src ? 'text-gray-600' : ''} 
                            hover:text-gray-500`}
                        >
                            {el.title}
                        </Link>
                    ))}
                    <Image
                        src={iconExit}
                        alt="exit"
                        className="cursor-pointer hover:brightness-150"
                        onClick={handleLogout}
                    />
                </>
            ) : (
                <>
                    {links.map((el) => (
                        <Link
                            key={el.title}
                            href={el.src}
                            className={`px-4 py-2 font-semibold ${activeLink === el.src ? 'text-gray-600' : ''} 
                                hover:text-gray-500`}
                        >
                            {el.title}
                        </Link>
                    ))}
                    <Link href={'/signIn'}>
                        <Button title="Sign In" icon={logoUser} styles="py-2 px-3" />
                    </Link>
                    <Link href={'/signUp'}>
                        <Button title="Sign Up" icon={logoUser} styles="bg-[#A259FF] py-2 px-3" />
                    </Link>
                </>
            )}
        </div>
    );
};

export default LargeScreen;
