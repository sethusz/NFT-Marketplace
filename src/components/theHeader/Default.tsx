'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../Button';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

import logoUser from '@/assets/icon/logoUser.svg';


const Default = ({ isAuth }: { isAuth: string | null }) => {
	const [activeLink, setActiveLink] = useState('/');
	const router = useRouter(); 

	const linksArr = [
		{ title: 'Marketplace', src: '/marketplace/nfts' },
		{ title: 'Rankings', src: '/ranking' },
		{ title: 'Artist', src: '/artist/created' },
		{ title: 'Profile', src: '/profile' },
	];	

	const handleLogout = () => {
		localStorage.removeItem('token')
		
		router.refresh();
	};

	return (
		<>
			{linksArr.map((el) => (
				<Link
					href={el.src}
					key={el.title}
					className={`px-[20px] py-[12px] font-semibold  ${activeLink === el.src ? 'text-gray-600' : ''
						} 
					          hover:text-gray-500`}
					onClick={() => setActiveLink(el.src)}
				>
					{el.title}
				</Link>
			))}
			{isAuth ? (
				<div className='cursor-pointer' onClick={handleLogout}>
					Exit
				</div>
			) : (
				<>
					<Link href={'/signIn'}>
						<Button title='Sign In' icon={logoUser} styles=' py-[10px] px-[15px]' />
					</Link>

					<Link href={'/signUp'}>
						<Button
							title='Sign Up'
							icon={logoUser}
							styles='bg-[#A259FF] py-[10px] px-[15px]'
						/>
					</Link>
				</>
			)}
		</>
	);
};

export default Default;