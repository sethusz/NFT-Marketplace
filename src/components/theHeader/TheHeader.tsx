'use client';

import Image from 'next/image';
import logo from '@/assets/icon/logoHeader.svg';
import { useWindowSize } from '@/hooks/useWindowSize';
import Adaptive from './Adaptive';
import Default from './Default';
import Link from 'next/link';

type Props = {};

const TheHeader = (props: Props) => {
	
	const { width: windowWidth } = useWindowSize();


	return (
		<header className='flex w-full justify-between  items-center px-6 py-4 md:px-12 md:py-6' >
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
				{windowWidth <= 1050 ? <Adaptive /> : <Default />}
			</nav>
		</header>
	);
};

export default TheHeader;
