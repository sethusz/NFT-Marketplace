
import Image from 'next/image';
import Button from '@/components/Button';
import iconPlus from '@/assets/icon/iconPlus.svg';

import DiscordLogo from '@/assets/icon/DiscordLogo.svg';
import TwitterLogo from '@/assets/icon/TwitterLogo.svg';
import YoutubeLogo from '@/assets/icon/YoutubeLogo.svg';
import InstagramLogo from '@/assets/icon/InstagramLogo.svg';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux';
import { toggleFollowers } from '@/redux/features/popupSlice';

export default function ArtistProfile(props: { modal: React.ReactNode }) {
	// const { followers: popUpFollowers } = useAppSelector((state) => state.popUpReducer);
	const dispatch = useAppDispatch();

	return (
		<>
			<div className='ml-[30px]'>
				<div
					className='flex justify-between
                            max-[800px]:flex-col'
				>
					<h1
						className='text-[51px] font-semibold
                            max-[1100px]:text-[38px] max-[600px]:text-[28px]'
					>
						Name Avatar
					</h1>
					<Button
						title='Follow'
						icon={iconPlus}
						styles='w-[200px] border border-[#A259FF] 
                                                            max-[800px]:h-[60px] max-[800px]:mb-[30px]
                                                            max-[600px]:w-[145px] max-[600px]:h-[60px]'
					/>
				</div>

				<div className='flex gap-[30px]'>
					<ul className='flex flex-col '>
						<li>250k+</li>
						<li>Volume</li>
					</ul>
					<ul className='flex flex-col '>
						<li>50+</li>
						<li>NFTs Sold</li>
					</ul>
					<ul className='flex flex-col' onClick={() => dispatch(toggleFollowers())}>
							<li>3000+</li>
							<li>Followers</li>

					</ul>
				</div>
				
        {props.modal}

				<div className='my-[20px]'>
					<h3 className='text-[#858584] text-[22px]'>Bio</h3>
					<div>The internet's friendliest designer kid.</div>
				</div>

				<div>
					<h3 className='text-[#858584] text-[22px]'>Links</h3>
					<div className='flex gap-[10px]'>
						<Image
							src={DiscordLogo}
							alt='DiscordLogo'
						/>
						<Image
							src={TwitterLogo}
							alt='TwitterLogo'
						/>
						<Image
							src={YoutubeLogo}
							alt='YoutubeLogo'
						/>
						<Image
							src={InstagramLogo}
							alt='InstagramLogo'
						/>
					</div>
				</div>
			</div>

			<div className='w-[100%] my-[40px] border border-[#858584]'></div>

			{/* </div> */}
		</>
	);
}
