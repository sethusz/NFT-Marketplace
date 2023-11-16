'use client'
import { useState } from 'react';
import { tabsData } from "../types/artistTypes";
import CardFromOther from '@/components/NFTFromOthers';
import { usePathname } from 'next/navigation';


import { MockNFTData } from '@/app/(routes)/nft/data/mockNft'

import { TNft } from '@/app/(routes)/nft/types/nftTypes';
import Link from 'next/link';

export default function ArtistNft() {
  const [activeTab, setActiveTab] = useState<number | null>(0);
  const path = usePathname();

  const handleTabClick = (index: number) => {
    if (activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }
  };

  const linksStyles = `text-white  py-3
  w-1/2 inline-block border-b 
   border-transparent items-center flex justify-center`;



  return (
    <>
        <div className='flex text-base md:text-[22px]'>
          <Link
            href='/artist/created'
            className={`${linksStyles} ${path === '/artist/created' ? 'border-white' : ' opacity-60 '
              } `}
          >
            <span className='text-[1em] font-semibold mr-3'>Created</span>
            <span className='text-[.7em] font-normal px-[10px] py-[5px] rounded-[20px] bg-textGray
                            max-[500px]:hidden'>
              32
            </span>
          </Link>

          <Link
            href='/artist/owned'
            className={`${linksStyles} ${path === '/artist/owned' ? 'border-white' : ' opacity-60 '
              } `}				>
            <span className='text-[1em] font-semibold mr-3'>Owned</span>
            <span className='text-[.7em] font-normal px-[10px] py-[5px] rounded-[20px] bg-textGray
                              max-[500px]:hidden'>
              32
            </span>
          </Link>

          <Link
            href='/artist/collection'
            className={`${linksStyles} ${path === '/artist/collection' ? 'border-white' : ' opacity-60 '
              } `}				>
            <span className='text-[1em] font-semibold mr-3'>Collection</span>
            <span className='text-[.7em] font-normal px-[10px] py-[5px] rounded-[20px] bg-textGray
                            max-[500px]:hidden'>
              32
            </span>
          </Link>
        </div>
    </>
  );
}
