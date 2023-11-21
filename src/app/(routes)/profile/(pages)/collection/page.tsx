'use client';

import { useState } from 'react';
import Image from 'next/image'
import { TNft } from './type';
import { MockCollectionData } from './collectionData';
import { MockNFTData } from '@/app/(routes)/nft/data/mockNft';
import Link from 'next/link';

export default function Collection() {
  const [qtyOfCards, setqtyOfCards] = useState(12);

  const collectionNft = (
    <Link href='/collection' className="flex flex-col rounded-[20px] hover:cursor-pointer hover:scale-[1.05] transition-transform">
      <Image src={MockCollectionData.img} alt="nft image" className="object-cover w-[350px] h-[170px] rounded-t-[20px]" />
      <div className="bg-[#2B2B2B] flex flex-col gap-6 rounded-b-[20px] p-[25px]">
        <div className="flex flex-col gap-2">

          <div className="flex items-center gap-3">
            <Image src={MockCollectionData.user.img} alt="user image" className="w-[36px] h-[36px] rounded-full" />
            <div className='flex flex-col'>
              <p className="text-[16px] text-white font-normal">{MockCollectionData.user.name}</p>

              {MockCollectionData.description.map((paragraph, index) => (
                <p key={index} className=' text-xs w-[200px]'>{paragraph.substring(0, 50)}...</p>
              ))}

            </div>
          </div>
        </div>

      </div>
    </Link>
  );


  return (
    <>
      <div className='mx-0 md:mx-16 lg:mx-28'>
      </div>
      <div className='bg-bgSecondaryGray pt-14 pb-14'>
        <div className='flex  flex-wrap justify-center gap-[30px] mx-7 md:mx-16 lg:mx-28'>
          {Array(qtyOfCards)
            .fill(MockNFTData)
            .map((el: TNft, i) => (
              <div key={i}>

                {collectionNft}
              </div>
            ))}
        </div>
      </div>
    </>
  );

}
