import React from 'react';
import Image from 'next/image';

import NFTGlobe from '@/assets/icon/NFTGlobe.svg';
import { TNft } from '../../types/nftTypes';


const DataSection = ({ title, date, user, description, links, tags }: TNft) => {
	return (
		<div className='flex flex-col gap-7 lg:text-[22px] md:text-[16px]  lg:max-w-[605px] md:max-w-[365px]'>
			<div>
				<h2 className='text-[2.3em] font-semibold text-white mb-2'>{title}</h2>
				<p className=' text-[1em] text-textGray font-normal'>Minted on {date}</p>
			</div>
			<div className=' block sm:hidden'>
			</div>
			<div>
				<h6 className='font-bold text-textGray text-[1em] mb-2'>Created By</h6>
				<div className='flex items-center gap-3'>
					<Image
						src={user.img}
						alt='user image'
						className='w-[24px] h-[24px] rounded-full'
					/>
					<p className='text-[1em] text-white font-semibold'>{user.name}</p>
				</div>
			</div>
			<div className='flex flex-col gap-2'>
				<h6 className='text-[1em] text-textGray font-bold'>Description</h6>
				<div className='flex flex-col gap-7'>
					{description.map((description, i) => (
						<p
							className='text-[1em] text-white'
							key={i}
						>
							{description}
						</p>
					))}
				</div>
			</div>
			<div className='flex flex-col gap-[10px]'>
				<h6 className='text-[1em] text-textGray font-bold'>Details</h6>
				<ul className='flex flex-col gap-[10px]'>
					<li className='flex items-center gap-3'>
						<Image
							src={NFTGlobe}
							width={32}
							height={32}
							alt='link'
						/>
						<a
							href={links.etherscan}
							className='text-white text-[1em] font-normal'
						>
							View on Etherscan
						</a>
					</li>
					<li className='flex items-center gap-3'>
						<Image
							src={NFTGlobe}
							width={32}
							height={32}
							alt='link'
						/>
						<a
							href={links.original}
							className='text-white text-[1em] font-normal'
						>
							View on Original
						</a>
					</li>
				</ul>
			</div>
			<div className='flex flex-col gap-4'>
				<h6 className='text-[1em] text-textGray font-bold'>Tags</h6>
				<div className='flex gap-5 flex-wrap'>
					{tags.map((tag, i) => (
						<div
							className='text-[.7em] text-white bg-[#3B3B3B] rounded-[20px] px-[30px] py-3 font-semibold'
							key={i}
						>
							{tag}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DataSection;
