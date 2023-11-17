'use client';

import Image from 'next/image';
import logo from '@/assets/icon/logoHeader.svg';
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux';
import { useEffect } from 'react';
import { signInToggle } from '@/redux/features/auth-slice';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import burgerIcon from '@/assets/icon/BurgerMenu.svg';
import SmallScreen from './SmallScreen';
import LargeScreen from './LargeScreen';



type Props = {};

const TheHeader = (props: Props) => {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);
	const dispatch = useAppDispatch()
	const { isAuth } = useAppSelector((state) => state.authReducer.value)

	const linksNoAuth = [
		{ title: 'Marketplace', src: '/marketplace' },
		{ title: 'Rankings', src: '/ranking' },
	];

	const linksAuth = [
		{ title: 'Marketplace', src: '/marketplace' },
		{ title: 'Rankings', src: '/ranking/today' },
		{ title: 'Artist', src: '/artist' },
		{ title: 'Profile', src: '/profile' },
	];

	const activeLink = isAuth
		? linksAuth.find((el) => pathname.startsWith(el.src))?.src || ''
		: linksNoAuth.find((el) => pathname === el.src)?.src || '';

	useEffect(() => {
		dispatch(signInToggle())
	}, [])

	return (
		<header className='flex w-full justify-between  items-center px-6 py-4 md:px-12 md:py-6 min-h-[100px]' >
			<Link href='/' className='flex items-center justify-center'>
				<Image
					src={logo}
					alt='logo'
					width={32}
					height={32}
					className='mr-3'
				/>
				<h3 className='text-white text-[28px] font-semibold 
				              max-[600px]:text-[22px]'>NFT Marketplace</h3>
			</Link>
			<nav className='flex gap-[10px] items-center'>

				<div
					className={`block lg:hidden cursor-pointer  ${menuOpen ? 'transform rotate-80 translate-y-1' : ''}`}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<div className={`w-6 h-1 bg-[#605f5f] mb-1 transition-transform duration-300 transform ${menuOpen ? 'rotate-45 -translate-y-1' : ''}`} />
					<div className={`w-6 h-1 bg-[#605f5f] mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
					<div className={`w-6 h-1 bg-[#605f5f] transition-transform duration-300 transform ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
				</div>




				<LargeScreen isAuth={isAuth} activeLink={activeLink} links={isAuth ? linksAuth : linksNoAuth} />

				{menuOpen && (
					<SmallScreen
						isAuth={isAuth}
						activeLink={activeLink}
						links={isAuth ? linksAuth : linksNoAuth}
						setMenuOpen={setMenuOpen}
					/>
				)}
			</nav>
		</header>
	);
};

export default TheHeader;
