'use client'

import Link from 'next/link';
import UploadForm from './components/uploadForm';
import UploadImage from './components/uploadImage';
import arrow from '@/assets/icon/NFTArrowIcon.svg'
import Image from 'next/image';
import { useState } from 'react';

const UploadNft = () => {

	const [imgData, setImgData] = useState<FormData | null>(null)
	const [nftData, setNftData] = useState(null)


	return (
		<div className='w-full'>
			<Link href='/profile' className='flex gap-[15px] ml-[50px] w-fit
			                                max-[1150px]:mb-[30px]'>
				<Image src={arrow} alt='icon' className="transform rotate-180 w-[32px] h-[32px]" style={{ filter: 'invert(50%)' }} />
				<div className='font-semibold text-[22px]'>Profile</div>
			</Link>

			<div className="mb-[40px] flex justify-center gap-[100px]
			                max-[900px]:flex-col max-[900px]:items-center">
				<UploadImage setImgData={setImgData}/>
				<UploadForm imgData={imgData} />
			</div>

		</div>

	);
};

export default UploadNft;
