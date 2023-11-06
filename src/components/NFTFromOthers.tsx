import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { TNft } from '@/app/(routes)/nft/types/nftTypes'
import Link from 'next/link'

type Props = {
    img: StaticImageData,
    title: string,
    user: TNft['user'],
    price: number,
    highest_bid: number,
    customBG?: string
}

const CardFromOther = ({img, title, user, price, highest_bid, customBG}: Props) => {
  return (
    <div className='flex flex-col rounded-[20px] hover:cursor-pointer hover:scale-[1.05]  transition-transform'>
        <Image src={img} alt='nft image'  className=' object-cover w-[330px] h-[295px] rounded-t-[20px]'/>
        <div className="bg-[#3b3b3b] flex flex-col gap-6 rounded-b-[20px] p-[25px]">
            <div className="flex flex-col gap-2">
                <span className=' text-[22px] text-white font-semibold'>{title}</span>
                <div className='flex items-center gap-3'>
					<Image
						src={user.img}
						alt='user image'
						className='w-[24px] h-[24px] rounded-full'
					/>
					<p className='text-[16px] text-white font-normal'>{user.name}</p>
				</div>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                    <span className='text-sm text-textGray font-normal'>Price</span>
                    <span className='text-base text-white'>{price} ETH</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className='text-sm text-textGray font-normal self-end'>Highest Bid</span>
                    <span className='text-base text-white'>{highest_bid} wETH</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardFromOther