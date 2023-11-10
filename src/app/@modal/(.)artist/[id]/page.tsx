import Modal from '@/components/Modal';
import React from 'react';
import Image from 'next/image';
import iconSearch from '@/assets/icon/MarketPlaceSearch.svg';
import { StaticImageData } from "next/image"
import iconAvatar from '@/assets/icon/iconAvatar.svg'
export default async function Followers() {

  type TArtistInfo = {
    name: string,
    avatar: StaticImageData,

  }

  const ArtistInfo: TArtistInfo = {
    name: 'Name Artist',
    avatar: iconAvatar
  }


  return (
    <>
      <Modal>
        <div>
          <div className='flex justify-center mb-[10px]'>Followers</div>
          <div className="border-t-2 border-gray-500 w-[100%]"></div>
          <div className='flex gap-[10px] py-[10px] rounded-[20px]'>

            <Image
              src={iconSearch}
              width={24}
              height={24}
              alt='search button'
              className='hover:cursor-pointer hover:scale-[1.1] transition-transform'
            />

            <input
              type='text'
              className=' flex-1 text-[.8em] text-white bg-transparent  outline-none'
              placeholder='Search'
            />
          </div>

          <div className='flex flex-col gap-[15px]'>
            {Array(99)
              .fill(ArtistInfo)
              .map((el: TArtistInfo, i) => (
                <div key={i} className='flex gap-[20px]'>
                  <Image src={el.avatar} alt='test' className='w-[32px] h-[32px]' />
                  <div className='flex items-center'>{el.name}</div>
                  </div>
              ))}
          </div>
        </div>
      </Modal>
    </>
  )
}