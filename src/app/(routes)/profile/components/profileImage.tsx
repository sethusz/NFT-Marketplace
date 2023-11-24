'use client';
import Image from 'next/image';
import { useRef, useState, ChangeEvent } from 'react';
import imgArtistPlaceHolder from '@/assets/imgArtistPlaceHolder.png'
import iconNoProfile from '@/assets/icon/iconNoProfile.svg'

export default function ProfileImage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const filePicker = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setSelectedImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePick = () => {
    if (filePicker.current) {
      filePicker.current.click();
    }
  };

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
            className='bottom-[-15%] left-[100px] absolute rounded-full object-cover
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
