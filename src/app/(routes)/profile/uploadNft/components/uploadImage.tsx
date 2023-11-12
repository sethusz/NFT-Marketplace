'use client'

import { useState } from 'react';
import Image from 'next/image';
import iconAvatar from '@/assets/icon/iconAvatar.svg'

const UploadImage = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const handleImageChange = (e: any) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				if (typeof reader.result === 'string' || reader.result instanceof ArrayBuffer) {
					setSelectedImage(reader.result as string);
				}
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<>
		<div className='flex flex-col gap-[15px]'>
		<div className='font-semibold text-[22px]'>Upload your NFT</div>
			{!selectedImage && (
				<>
					<div className='w-[300px] h-[300px] bg-[#3B3B3B] rounded-md border-dashed border-2 border-[#6e6d6d] p-[10px]'>
						<div className='flex flex-col gap-[15px] justify-center items-center h-full'>
							<Image src={iconAvatar} alt='icon' />
							<label htmlFor="image" className="font-medium cursor-pointer">
								Drop your NFT here or browse
								<input
									type="file"
									id="image"
									accept="image/*"
									onChange={handleImageChange}
									className="hidden"
								/>
							</label>
						</div>
					</div>
				</>
			)}

			{selectedImage && (
				<div className="w-[300px] h-[300px]">
					<img src={selectedImage} alt="Preview" className="max-w-full h-auto" />
				</div>
			)}
			</div>
		</>
	);
};

export default UploadImage;
