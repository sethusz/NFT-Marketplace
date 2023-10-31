'use client';

import React, { FC } from 'react';
import vfd from '@/assets/icon/MarketPlaceSearch.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TitleAndSearch: FC = () => {
	const path = usePathname();

	const qtyOfNFTs = 302;
	const qtyOfCollections = 67;

	const linksStyles = `text-white  py-3
    w-1/2 inline-block border-b 
     border-transparent items-center flex justify-center`;

	return (
		<>
			<div className='flex flex-col gap-8 my-10 md:my-20 mx-7 md:mx-16 lg:mx-28'>
				<div className='flex flex-col gap-3'>
					<h2 className='text-[2.3em] text-white font-bold'>Browse Marketplace</h2>
					<h5 className='text-[1em] text-white font-normal'>
						Browse through more than 50k NFTs on the NFT Marketplace.
					</h5>
				</div>
				<div className='flex w-full border border-[#3B3B3B] p-5 rounded-[20px]'>
					<input
						type='text'
						className=' flex-1 text-[.8em] text-white bg-transparent  outline-none'
						placeholder='Search your favourite NFTs'
					/>
					<Image
						src={vfd}
						width={24}
						height={24}
						alt='search button'
						className='hover:cursor-pointer hover:scale-[1.1] transition-transform'
					/>
				</div>
			</div>
			<div className='border-b  border-bgSecondaryGray'></div>
			<div className='flex text-base md:text-[22px]'>
				<Link
					href='/marketplace/nfts'
					className={`${linksStyles} ${
						path === '/marketplace/nfts' ? 'border-white' : ' opacity-60 '
					} `}
				>
					<span className='text-[1em] font-semibold mr-3'>NFTs</span>
					<span className='text-[.7em] font-normal px-[10px] py-[5px] rounded-[20px] bg-textGray'>
						{qtyOfNFTs}
					</span>
				</Link>
				<Link
					href='/marketplace/collections'
					className={`${linksStyles} ${
						path === '/marketplace/collections' ? 'border-white' : ' opacity-60 '
					} `}				>
					<span className='text-[1em] font-semibold mr-3'>Collections</span>
					<span className='text-[.7em] font-normal px-[10px] py-[5px] rounded-[20px] bg-textGray'>
						{qtyOfCollections}
					</span>
				</Link>
			</div>
		</>
	);
};

export default TitleAndSearch;
