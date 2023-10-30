'use client'
import { useState } from 'react';

import Image from 'next/image';
import logo from '@/assets/icon/logoHeader.svg';
import discrordLogo from '@/assets/icon/DiscordLogo.svg';
import instagramLogo from '@/assets/icon/InstagramLogo.svg';
import twitterLogo from '@/assets/icon/TwitterLogo.svg';
import youtubeLogo from '@/assets/icon/YoutubeLogo.svg';
import EmailSubscribe from '../emailSubscribe';

type Props = {};

const TheFooter = (props: Props) => {

  const [email, setEmail] = useState('')

	return (
		<footer className='text-[#CCC] font-mono mt-[40px] w-full bg-[#3B3B3B] p-[30px] '>
			<div className='flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between w-[80%] md:m-auto  max-w-[1050px] '>
				<ul className='flex flex-col gap-2'>
					<li className='flex items-center'>
						<Image
							src={logo}
							alt='logo'
							width={32}
							height={32}
							className='mr-3'
						/>
						<h3 className='text-white font-bold'>NFT Marketplace</h3>
					</li>
					<li className=''>NFT marketplace UI created with Anima for Figma.</li>
					<li>Join our community</li>
					<li className='flex gap-1'>
						<Image
							src={discrordLogo}
							alt='logo'
							width={32}
							height={32}
						/>
						<Image
							src={instagramLogo}
							alt='logo'
							width={32}
							height={32}
						/>
						<Image
							src={twitterLogo}
							alt='logo'
							width={32}
							height={32}
						/>
						<Image
							src={youtubeLogo}
							alt='logo'
							width={32}
							height={32}
						/>
					</li>
				</ul>

				<ul className='flex flex-col gap-2'>
					<li className='text-white font-bold'>Explore</li>
					<li>Marketplace</li>
					<li>Rankings</li>
				</ul>

				<ul className='flex flex-col gap-6'>
					<li className='text-white font-bold'>Join our weekly digest</li>
					<li className=' max-w-xs '>
						Get exclusive promotions & updates straight to your inbox.
					</li>
					<li className='w-fit'>
					<EmailSubscribe />
					</li>
				</ul>
			</div>

			<div className='mx-auto my-auto border-t border-solid border-[#858584] mt-4 mdL  max-w-[1050px]' >
				<div className='mt-4 text-xs'>Ⓒ NFT Market. Use this template freely.</div>
			</div>
		</footer>
	);
};

export default TheFooter;
