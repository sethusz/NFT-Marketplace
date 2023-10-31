'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { MockNFTData } from '../../nft/data/mockNft';
import { TNft } from '../../nft/types/nftTypes';
import { useWindowSize } from '@/hooks/useWindowSize';
import CardFromOther from '@/components/NFTFromOthers';

const FilterAndCards = () => {
	const [qtyOfCards, setqtyOfCards] = useState(5);
	const { width } = useWindowSize();
	useEffect(() => {
		if (width < 830) {
			setqtyOfCards(5);
		} else if (width >= 830 && width < 1200) {
			setqtyOfCards(8);
		} else if (width >= 1200) {
			setqtyOfCards(12);
		}
	}, [width]);

	return (
		<>
			<div className='mx-7 md:mx-16 lg:mx-28'>
			</div>
			<div className='bg-bgSecondaryGray pt-14 pb-14'>
				<div className='flex flex-wrap justify-center gap-[30px] mx-7 md:mx-16 lg:mx-28'>
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
								customBG='bg-[#2b2b2b]'
							/>
						))}
				</div>
			</div>
		</>
	);
};

export default FilterAndCards;
