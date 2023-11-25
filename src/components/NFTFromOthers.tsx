'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { TNft } from '@/app/(routes)/nft/types/nftTypes'
import Link from 'next/link'
import threeDots from '@/assets/icon/iconDots.svg'
import { ContextMenu } from './ContextMenu'

type Props = {
    img: StaticImageData | string,
    title: string,
    user: TNft['user'],
    price: number,
    highest_bid: number,
    customBG?: string
}

interface IContextMenu {
    isOpen: boolean
    x: number;
    y: number;
}

interface IContextMenuTwo {
    x: number;
    y: number;
}


const CardFromOther = ({ img, title, user, price, highest_bid }: Props) => {
    const [contextMenu, setContextMenu] = useState<IContextMenu | null>(null);
    const [contextMenuTwo, setContextMenuTwo] = useState<IContextMenuTwo | null>(null);



    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();

        if (!contextMenu) {
            setContextMenu({ isOpen: true, x: event.clientX + 10, y: event.clientY + -20 });
            setContextMenuTwo({ x: event.clientX + 200, y: event.clientY });
        }

    };

    const closeContextMenu = () => {
        setContextMenu(null);
    };


    const [imgState, setImgState] = useState(false);



    return (
        <div className='flex flex-col rounded-[20px]  hover:cursor-pointer'>
            <Image src={img} alt='nft image' width={330} height={295} className=' object-cover w-[330px] h-[295px] rounded-t-[20px]' />
            <div className="bg-[#2B2B2B] flex flex-col gap-6 rounded-b-[20px] p-[25px]">
                <div className="flex flex-col gap-2">
                    <div className='flex justify-between'>
                        <span className=' text-[22px] text-white font-semibold'>{title}</span>
                        <Image src={threeDots} alt='dots' className='transform transition-transform 
                                                                    hover:scale-110 hover:cursor-context-menu'

                            onClick={(e) => handleContextMenu(e)} />

                        {contextMenu && (
                            <>
                                <ContextMenu isOpen={contextMenu.isOpen} onClose={closeContextMenu} setImgState={setImgState} 
                                x={contextMenu.x} y={contextMenu.y}>

                                    <button
                                       >Add to collection
                                    </button>

                                </ContextMenu>

                                {imgState && (
                                    <ContextMenu isOpen={contextMenu.isOpen} onClose={closeContextMenu} setImgState={setImgState}
                                        x={contextMenuTwo.x} y={contextMenu.y}>
                                        <div className='flex flex-col'>
                                            <button>Two</button>
                                            <button>Two</button>
                                            <button>Two</button>
                                            <button>Two</button>
                                        </div>
                                    </ContextMenu>
                                )}

                            </>
                        )}

                    </div>
                    <div className='flex items-center gap-3'>
                        <Image
                            src={user.img}
                            alt='user image'
                            className='w-[24px] h-[24px] rounded-full'
                            width={24}
                            height={24}
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