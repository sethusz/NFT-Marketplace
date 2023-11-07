'use client'
import { useState } from 'react';
import { tabsData } from "../types/artistTypes";
import CardFromOther from '@/components/NFTFromOthers';


import { MockNFTData } from '@/app/(routes)/nft/data/mockNft'

import { TNft } from '@/app/(routes)/nft/types/nftTypes';

export default function ArtistNft() {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const handleTabClick = (index: number) => {
    if (activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }
  };

  const Tabs = ({ label, value, index }: tabsData) => (
    <div
      className='flex flex-col items-center w-[33%] gap-[16px]  
                max-[600px]:gap-[5px]'
      onClick={() => handleTabClick(index)}
    >
      <div className="flex font-semibold text-[22px] gap-[15px] 
                      max-[800px]:text-[16px]">
        {label}
        <div className="bg-[#858584] rounded-full w-[50px] text-[16px] font-normal flex justify-center items-center text-center
                        max-[600px]:hidden">
          {value}
        </div>
      </div>
      <div className={` ${activeTab === index ? 'border h-0 w-[100%] border-[#858584]' : ''}`}></div>
    </div>
  );

  const tabsData: tabsData[] = [
    { label: 'Created', value: 302, index: 0 },
    { label: 'Owned', value: 405, index: 1 },
    { label: 'Collection', value: 527, index: 2 },
  ];

  return (
    <>
      <div>
        <div className="flex gap-[60px] 
                        max-[600px]:gap-[25px]">
          {tabsData.map((data: tabsData, index: number) => (
            <Tabs key={index} label={data.label} value={data.value} index={index} />
          ))}
        </div>
        
        <div className='flex flex-wrap justify-center gap-[30px] my-[40px] mx-7 md:mx-16 lg:mx-28'>
          {Array(9)
            .fill(MockNFTData)
            .map((el: TNft, i) => (
              <CardFromOther
                title={el.title}
                img={el.img}
                user={el.user}
                price={el.price}
                highest_bid={el.highest_bid}
                key={i}
              />
            ))}
        </div>

      </div>
    </>
  );
}
