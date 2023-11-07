'use client';


import ArtistImage from './components/artistImage';
import ArtistNft from './components/artistNft';
import ArtistProfile from './components/artistProfile';
import { useAppSelector } from '@/lib/hooks/redux';


export default function ArtistPage() {
	return (
		<>
			<div className='w-full  '>
				<ArtistImage />
				<div
					className='mt-[60px] mx-28
                      max-[800px]:mx-0'
				>
					<ArtistProfile />
					<ArtistNft />
				</div>
			</div>
		</>
	);
}
