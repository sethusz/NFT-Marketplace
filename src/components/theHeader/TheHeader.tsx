'use client';

import Image from 'next/image';
import logo from '@/assets/icon/logoHeader.svg';
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import Adaptive from './Adaptive';
import Default from './Default';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux';
import { useEffect } from 'react';
import { signInToggle } from '@/redux/features/auth-slice';

type Props = {};

const TheHeader = (props: Props) => {
	
	const dispatch = useAppDispatch()

	const { width: windowWidth } = useWindowSize();

	const {isAuth} = useAppSelector((state) => state.authReducer.value)

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
				{windowWidth <= 1050 ? <Adaptive /> : <Default isAuth={isAuth} />}
			</nav>
		</header>
	);
};

export default TheHeader;
