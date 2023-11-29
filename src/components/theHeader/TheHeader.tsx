'use client';

import Image from 'next/image';
import logo from '@/assets/icon/logoHeader.svg';
import { useWindowSize } from '@/hooks/useWindowSize';
import Adaptive from './Adaptive';
import Default from './Default';

type Props = {};

const TheHeader = (props: Props) => {
	const { width: windowWidth } = useWindowSize();
	return (
		<header className='flex w-full justify-between  items-center px-6 py-4 md:px-12 md:py-6'>
			<div className='flex items-center justify-center'>
				<Image
					src={logo}
					alt='logo'
					width={32}
					height={32}
					className='mr-3'
				/>
				<h3 className='text-white'>NFT Marketplace</h3>
			</div>
			<nav className='flex gap-[10px] items-center'>
				{windowWidth <= 840 ? <Adaptive /> : <Default />}
			</nav>
		</header>
	);
};

export default TheHeader;
