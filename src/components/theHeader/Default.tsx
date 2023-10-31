import Link from 'next/link';
import React from 'react';
import Button from '../Button';

import logoUser from '@/assets/icon/logoUser.svg';

const Default = () => {
	const linksArr = [
		{ title: 'Marketplace', src: '/marketplace/nfts' },
		{ title: 'Rankings', src: '/ranking' },
		{ title: 'Artist', src: '/artist' },
	];

	return (
		<>
			{linksArr.map((el) => (
				<Link
					href={el.src}
					className='px-[20px] py-[12px] font-semibold text-white'
				>
					{el.title}
				</Link>
			))}
			<Button
				title='Sign Up'
				icon={logoUser}
				styles='bg-[#A259FF] py-[20px] px-[30px]'
			/>
		</>
	);
};

export default Default;
