'use client'

import { SetStateAction, useRef, useState } from 'react';
import Image from 'next/image';
import iconAvatar from '@/assets/icon/iconAvatar.svg'

type TProps = {
	setImgData: React.Dispatch<SetStateAction<FormData | null>>
}

const UploadImage = ({ setImgData }: TProps) => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const filePicker = useRef(null);

	const handleImageChange = (e: any) => {
		const file = e.target.files[0];
		// console.log(file)
		// setSelectedImage(file)

		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				if (typeof reader.result === 'string' || reader.result instanceof ArrayBuffer) {
					setSelectedImage(reader.result as string);
					setImgData(file)
				}
			};
			reader.readAsDataURL(file);
		}
	};

	const handlePick = () => {
		//@ts-ignore
		filePicker.current.click();
	};

	return (
		<>
			<div className='flex flex-col gap-[15px]'>
				<div className='font-semibold text-[22px]'>Upload your NFT</div>
				{!selectedImage && (
					<>
						<div className='w-[300px] h-[300px] bg-[#3B3B3B] cursor-pointer rounded-md border-dashed border-2 border-[#6e6d6d] p-[10px]'
						                  onClick={handlePick}>
							<div className='flex flex-col gap-[15px] justify-center items-center h-full'>
								<Image src={iconAvatar} alt='icon' />
								<label className="font-medium" >
									Drop your NFT here or browse
								</label>

								<input
										type='file'
										ref={filePicker}
										onChange={handleImageChange}
										className='hidden'
										accept='image/*, .png, .jpg, .gif, .web'
									/>
							</div>
						</div>
					</>
				)}

				{selectedImage && (
					<div className="w-[300px] h-[300px]">
						<Image src={selectedImage} alt="Preview" width={300} height={300} className="max-w-full h-auto" />
					</div>
				)}
			</div>
		</>
	);
};

export default UploadImage;
