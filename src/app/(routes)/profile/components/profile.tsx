import React, { useState } from 'react';
import Image from 'next/image';
import DiscordLogo from '@/assets/icon/DiscordLogo.svg';
import TwitterLogo from '@/assets/icon/TwitterLogo.svg';
import YoutubeLogo from '@/assets/icon/YoutubeLogo.svg';
import InstagramLogo from '@/assets/icon/InstagramLogo.svg';
import Link from 'next/link';

const Profile = () => {
  const id = ['followers'];
  const [bioText, setBioText] = useState("The internet's friendliest designer kid.");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBioText(e.target.value);
  };

  return (
    <>
      <div className='ml-[30px]'>
        <div className='flex justify-between max-[800px]:flex-col'>
          <h1 className='text-[51px] font-semibold max-[1100px]:text-[38px] max-[600px]:text-[28px]'>
            Name Avatar
          </h1>
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

        <div className='my-[20px]'>
          <h3 className='text-[#858584] text-[22px]'>Bio</h3>
          <div className='flex gap-[20px]'>
            <input
              type="text"
              value={bioText}
              onChange={handleTextChange}
              placeholder="Enter new text"
              className="bg-[#3B3B3B] rounded-md p-2 w-[250px]"
            />
            <button onClick={() => setBioText(bioText)}>Change Bio</button>
          </div>
        </div>

        <div>
          <h3 className='text-[#858584] text-[22px]'>Links</h3>
          <div className='flex gap-[10px]'>
            <Image src={DiscordLogo} alt='DiscordLogo' />
            <Image src={TwitterLogo} alt='TwitterLogo' />
            <Image src={YoutubeLogo} alt='YoutubeLogo' />
            <Image src={InstagramLogo} alt='InstagramLogo' />
          </div>
        </div>
      </div>

      <div className='w-[100%] my-[40px] border border-[#858584]'></div>
    </>
  );
};

export default Profile;
