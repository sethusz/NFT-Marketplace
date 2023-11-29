'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { MockNFTData } from '../../data/mockNft';
import Auction from './Auction';
import DataSection from './DataSection';
import Button from '@/components/Button';

import arrowIcon from '@/assets/icon/NFTArrowIcon.svg';
import CardFromOther from '@/components/NFTFromOthers';
import { TNft } from '../../types/nftTypes';
import { useWindowSize } from '@/hooks/useWindowSize';

type Props = {};

const NFTMainPart = () => {
	const [qtyOfCards, setqtyOfCards] = useState(2);
	const { width } = useWindowSize();
	useEffect(() => {
		if (width < 830) {
			setqtyOfCards(2);
		} else if (width >= 830 && width < 1200) {
			setqtyOfCards(6);
		} else if (width >= 1200) {
			setqtyOfCards(9);
		}
	}, [width]);

	return (
		<div className='flex flex-col '>
			<Image
				src={MockNFTData.img}
				alt='nft image'
				className='w-full h-[375px] md:h-[560px] object-cover'
			/>
			<div className='my-10  mx-7 md:mx-16 lg:mx-28 flex justify-between'>
				<DataSection {...MockNFTData} />
				<div className='hidden md:block'>
					<Auction />
				</div>
			</div>
			<div className='my-20 mx-7 md:mx-16 lg:mx-28 flex flex-col lg:text-[22px] md:text-[16px]'>
				<div className='flex md:justify-between '>
					<h4 className='text-[1.7em]  text-white m-auto sm:m-0  font-bold capitalize'>More from this artist</h4>
					<div className="hidden sm:block">
					<Button
						title='Go To Artist Page'
						icon={arrowIcon}
						iconStyles='group-hover:translate-x-1 transition-transform'
						styles='border px-[50px] py-[20px] border-[#A259FF] shadow-md transition-shadow ease-in-out duration-200 hover:shadow-[0_0_10px_#A239FF]'
					/>
					</div>
				</div>
				<div className='flex flex-wrap  justify-center gap-[30px] mt-[80px]'>
					{Array(qtyOfCards)
						.fill(MockNFTData)
						.map((el: TNft, i) => (
							<CardFromOther
								title={el.title}
								img={el.img}
								user={el.user}
								price={el.price}
								highest_bid={el.highest_bid}
								key={i}
							/>
						))}
				</div>
				<div className="block mt-10 m-auto sm:hidden w-full ">
					<Button
						title='Go To Artist Page'
						icon={arrowIcon}
						iconStyles='group-hover:translate-x-1 transition-transform'
						styles='border px-[50px] py-[20px] w-full border-[#A259FF] shadow-md transition-shadow ease-in-out duration-200 hover:shadow-[0_0_10px_#A239FF]'
					/>
					</div>
			</div>
		</div>
	);
};

export default NFTMainPart;
