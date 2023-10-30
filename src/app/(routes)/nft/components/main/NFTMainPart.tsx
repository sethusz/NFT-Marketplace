import Image from 'next/image';
import React from 'react';

import { MockNFTData } from '../../data/mockNft';
import Auction from './Auction';
import DataSection from './DataSection';
import Button from '@/components/Button';

import arrowIcon from '@/assets/icon/NFTArrowIcon.svg';
import CardFromOther from '@/components/NFTFromOthers';
import { TNft } from '../../types/nftTypes';

type Props = {};

const NFTMainPart = (props: Props) => {
	return (
		<div className='flex flex-col '>
			<Image
				src={MockNFTData.img}
				alt='nft image'
				className='w-full h-[560px] object-cover'
			/>
			<div className='my-10 mx-28 flex justify-between'>
				<DataSection {...MockNFTData} />
				<Auction />
			</div>
			<div className='my-20 mx-28 flex flex-col'>
				<div className='flex justify-between'>
					<h4 className='text-[38px] text-white font-bold'>More from this artist</h4>
					<Button
						title='Go To Artist Page'
						icon={arrowIcon}
                        iconStyles='group-hover:translate-x-1 transition-transform'
						styles='border px-[50px] py-[20px] border-[#A259FF] shadow-md transition-shadow ease-in-out duration-200 hover:shadow-[0_0_10px_#A239FF]'
					/>
				</div>
				<div className='flex flex-wrap   justify-center gap-[30px] mt-[80px]'>
					{Array(9)
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
			</div>
		</div>
	);
};

export default NFTMainPart;
