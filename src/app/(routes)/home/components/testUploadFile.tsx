'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Image } from 'next/dist/client/image-component';
import CardFromOther from '@/components/NFTFromOthers';

type Props = {};

const TestUploadFile = (props: Props) => {
	const filePicker = useRef(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [someData, setsomeData] = useState({
		title: 'test17',
		description: 'testDescription',
		originLink: 'somelink',
		etherscanLink: 'someLink',
		tags: ['tag', 'tag2'],
		price: 12,
	});
	const [imageUrl, setImageUrl] = useState('');

    const [nftData, setNftData] = useState([])

	const handleCHange = (event: any) => {
		setSelectedFile(event.target.files[0]);
	};
	//?for useRef
	const handlePick = () => {
		//@ts-ignore
		filePicker.current.click();
	};
	//?uploading function
	const handleUpload = async () => {
		if (!selectedFile) {
			alert('Please select a file');
			return;
		}

		const formdata = new FormData();
		formdata.append('image', selectedFile);
		formdata.append('nftData', JSON.stringify(someData));

		const res = await fetch('http://localhost:5455/nfts/655a62e384cd425c2298b192', {
			method: 'POST',
			body: formdata,
		});
		const data = await res.json();
		setImageUrl(data.data.img);
	};

    //?function for getting all nfts
    const getAllNFts = async () => {
        const res = await fetch('http://localhost:5455/nfts/get/655a62e384cd425c2298b192?params=nftOwned')
        const data = await res.json()
        const filterOnlyWithPhotos = data.data.nftOwned.filter((obj:any) => obj.img)
        setNftData(filterOnlyWithPhotos)
    }

	return (
		<div className='my-10 rounded-md flex flex-col items-center justify-center gap-5 p-5'>
			<button
				onClick={handlePick}
				className='h-[5em] border border-dashed rounded-md hover:opacity-80 transition-opacity w-full'
			>
				Pick file
			</button>
			<input
				type='file'
				ref={filePicker}
				onChange={handleCHange}
				className='hidden'
				accept='image/*, .png, .jpg, .gif, .web'
			/>

			<button
				onClick={handleUpload}
				className='w-full bg-blue-400 px-4 py-2 rounded-md  hover:bg-blue-400/80  transition-colors '
			>
				Upload
			</button>
			<button
				onClick={getAllNFts}
				className='w-full bg-green-400 px-4 py-2 rounded-md  hover:bg-green-400/80  transition-colors '
			>
				Get all NFTS
			</button>
			<div className='flex flex-wrap gap-5 p-3'>
                {nftData.map((nft:any) => (
				<CardFromOther
                    key={nft._id}
					title={nft.title}
					user={{ img: '', name: 'Poka ne sdelali'}}
					price={nft.price}
					highest_bid={12}
					img={nft.img}
				/>
                ))}
			</div>
		</div>
	);
};

export default TestUploadFile;
