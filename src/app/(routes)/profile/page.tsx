'use client';


import ProfileImage from './components/profileImage';
import ProfileNft from './components/profileNft';
import Profile from './components/profile';
import { useAppSelector } from '@/lib/hooks/redux';


export default function ArtistPage() {
	return (
		<>
			<div className='w-full  '>
				<ProfileImage />
				<div
					className='mt-[60px] mx-28
                      max-[800px]:mx-0'
				>
					<Profile />
					<ProfileNft />
				</div>
			</div>
		</>
	);
}
