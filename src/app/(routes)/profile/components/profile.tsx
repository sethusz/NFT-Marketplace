'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import DiscordLogo from '@/assets/icon/DiscordLogo.svg';
import TwitterLogo from '@/assets/icon/TwitterLogo.svg';
import YoutubeLogo from '@/assets/icon/YoutubeLogo.svg';
import { jwtDecode } from 'jwt-decode';
import InstagramLogo from '@/assets/icon/InstagramLogo.svg';
import Link from 'next/link';
import useAutosizeTextArea from '@/components/useTextAreaHeight';

const getUserData = async () => {
	const localToken = JSON.stringify(localStorage.getItem('token'));
	const { _id } = jwtDecode(localToken) as { _id: string };

	try {
		const res = await fetch(`https://nft-backend-beryl.vercel.app/user/${_id}`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			cache: 'force-cache'
		});
		const data = await res.json()
		return data
	} catch (error) {
		console.log(error);
	}
};

const Profile = () => {
	const [userData, setUserData] = useState({
		userName: ''
	})
	const id = ['followers'];
	const [bioText, setBioText] = useState<string>('');
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const buttonStyles = `text-[16px] w-[300px] font-semibold text-center px-[80px] py-[20px] bg-[#A259FF] rounded-[20px]
  shadow-md transition-shadow ease-in-out duration-200 hover:shadow-[0_0_10px_#A239FF]`;



	useAutosizeTextArea(textAreaRef.current, bioText);

	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

		setBioText(e.target.value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter') {
			setBioText(e.currentTarget.value);
			e.preventDefault();
			textAreaRef.current?.blur();
		}
	};




	useEffect(() => {
		getUserData()
			.then((res) => setUserData(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<div className='ml-[30px]'>
				<div className='flex justify-between max-[800px]:flex-col'>
					<h1 className='text-[51px]  font-semibold max-[1100px]:text-[38px] max-[600px]:text-[28px]'>
						{/* {userData.userName ? userData.userName : 'Loading...'} */}
					</h1>

					<div className='flex flex-col p-[15px] rounded-[20px] h-fit'>
						<Link href='/uploadNft'>
							<button className={`${buttonStyles}`}>Upload NFT</button>
						</Link>
					</div>


				</div>

				<div className='flex justify-between'>
					<div className='flex flex-wrap gap-[30px]'>
						<ul className='flex flex-col '>
							<li>250k+</li>
							<li>Volume</li>
						</ul>
						<ul className='flex flex-col '>
							<li>50+</li>
							<li>NFTs Sold</li>
						</ul>
						<ul className='flex flex-col'>
							<li>3000+</li>
							<li>Following</li>
						</ul>
						<Link href={`/artist/${id}`}>
							<ul className='flex flex-col'>
								<li>3000+</li>
								<li>Followers</li>
							</ul>
						</Link>
					</div>
					<div className='flex flex-col p-[15px] rounded-[20px] h-fit'>
						<Link href='/createCollection'>
							<button className={`${buttonStyles}`}>Create Collection</button>
						</Link>
					</div>
				</div>

				<div className='my-[20px]'>
					<h3 className='text-[#858584] text-[22px]'>Bio</h3>
					<div className='flex gap-[20px]'>

						<textarea
							value={bioText}
							onChange={handleTextChange}
							onKeyDown={handleKeyDown}
							placeholder='Enter new text'
							ref={textAreaRef}
							className='p-[10px] focus:border-b-white
                          w-[95%] md:w-[550px] text-start overflow-hidden resize-none 
                          outline-none border pb-3 border-transparent bg-transparent'/>

					</div>
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
		</>
	);
};

export default Profile;
