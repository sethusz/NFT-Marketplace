'use client';

import Login from '@/app/@modal/view2/page';
import ArtistImage from './components/artistImage';
import ArtistNft from './components/artistNft';
import ArtistProfile from './components/artistProfile';
import { useAppSelector } from '@/lib/hooks/redux';
import Modal from '@/components/Modal';

export default function ArtistPage() {
	const state = useAppSelector((state) => state.popUpReducer.followers);

	return (
		<>
			<div className='w-full  '>
				<ArtistImage />
				<div
					className='mt-[60px] mx-28
                      max-[800px]:mx-0'
				>
					<ArtistProfile modal={<Login />} />
					<ArtistNft />
				</div>
			</div>
		</>
	);
}
