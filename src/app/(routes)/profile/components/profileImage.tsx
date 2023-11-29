'use client';
import Image from 'next/image';
import { useRef, useState, ChangeEvent, SetStateAction, useLayoutEffect, useEffect } from 'react';
import imgArtistPlaceHolder from '@/assets/imgArtistPlaceHolder.png'
import iconNoProfile from '@/assets/icon/iconNoProfile.svg'

import axios from 'axios';
import { jwtDecode } from 'jwt-decode';



export default function ProfileImage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const filePicker = useRef<HTMLInputElement>(null);

  //fix it
  const localToken = JSON.stringify(localStorage.getItem('token'));
	const { _id } = jwtDecode(localToken) as { _id: string };

  /// asds

	const handleImageChange = (e: any) => {
		const file = e.target.files[0];
		// console.log(file)
		// setSelectedImage(file)

		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				if (typeof reader.result === 'string' || reader.result instanceof ArrayBuffer) {
          const privet = new FormData()
          privet.append('avatar', file)
          axios.patch(`https://nft-backend-beryl.vercel.app/user/photo/${_id}`, privet)
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
					setSelectedImage(reader.result as string);

				}
			};
			reader.readAsDataURL(file);
		}
	};

  const handlePick = () => {
		//@ts-ignore
		filePicker.current.click();
	};

// fix it
  useEffect(() => {
    const userid = _id

    

    if (userid) {
      axios.get(`https://nft-backend-beryl.vercel.app/user/${userid}`)
      .then((res) => {
        console.log(res)
        return setSelectedImage(res.data.data.avatarUrl)
      })
      .catch((err) => console.log(err))
    }
    
  }, [])

  console.log('image')



  return (
    <>
      <div className='relative'>
        <div className='mt-[-20px] '>
          <Image src={imgArtistPlaceHolder} alt='placeholder' className='w-full' />
        </div>
        <div>
          <Image
            src={selectedImage || iconNoProfile}
            alt='avatar'
            width={120}
            height={120}
            className='bottom-[-15%] left-[100px] absolute rounded-full object-contain
                                  max-[800px]:left-[30px]
                                  max-[600px]:w-[100px] max-[600px]:h-[100px]
                                  max-[600px]:bottom-[-35%]
                                  max-[400px]:w-[70px] max-[400px]:h-[70px]'
            onClick={handlePick}
          />
        </div>

        <input
          type='file'
          ref={filePicker}
          onChange={handleImageChange}
          className='hidden'
          accept='image/*, .png, .jpg, .gif, .web'
        />
      </div>
    </>
  );
}
