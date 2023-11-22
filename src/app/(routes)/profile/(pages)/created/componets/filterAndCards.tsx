'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';


import { useWindowSize } from '@/lib/hooks/useWindowSize';
import CardFromOther from '@/components/NFTFromOthers';
// import { MockNFTData } from '@/app/(routes)/nft/data/mockNft';
import { TNft } from '../../collection/type';

const FilterAndCards = () => {
	const [qtyOfCards, setqtyOfCards] = useState(5);
	const { width } = useWindowSize();
	const [allNft, setAllNFT] = useState([])

	useEffect(() => {
		if (width < 830) {
			setqtyOfCards(5);
		} else if (width >= 830 && width < 1200) {
			setqtyOfCards(8);
		} else if (width >= 1200) {
			setqtyOfCards(12);
		}
	}, [width]);

	useEffect(() => {

		fetch('http://localhost:5455/nfts/get/655a62e384cd425c2298b192?params=nftCreated')
			.then(async (response) => {

				const data = await response.json();
				const filterOnlyWithPhotos = data.data.nftCreated.filter((obj: any) => obj.img)

				setAllNFT(filterOnlyWithPhotos)
				console.log(allNft)
			})
			.catch((error) => {
				console.log(error);
			})
	}, [])



	return (
		<>
			<div className='mx-0 md:mx-16 lg:mx-28'>
			</div>
			<div className='bg-bgSecondaryGray pt-14 pb-14'>
				<div className='flex  flex-wrap justify-center gap-[30px] mx-7 md:mx-16 lg:mx-28'>

					{allNft.map((nft: any) => (
						<CardFromOther
							key={nft._id}
							title={nft.title}
							user={{ img: '', name: 'Poka ne sdelali' }}
							price={nft.price}
							highest_bid={12}
							img={nft.img}
						/>
					))}


					{/* {Array(qtyOfCards)
						.fill(allNft)
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
						))} */}
				</div>
			</div>
		</>
	);
};

export default FilterAndCards;
