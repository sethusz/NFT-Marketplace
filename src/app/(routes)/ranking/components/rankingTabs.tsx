'use client'
import Image from 'next/image'

import { useState } from 'react';
import { tabsRanking } from "../types/rankingDate";

import { MockNFTData } from '../../nft/data/mockNft';
import CardFromOther from '@/components/NFTFromOthers';
import { TNft } from '../../nft/types/nftTypes';

export default function RankingTabs() {

  const [activeTab, setActiveTab] = useState<number | null>(0);

  const handleTabClick = (index: number) => {
    if (activeTab === index) {
      setActiveTab(null);
    } else {
      setActiveTab(index);
    }
  };

  const Tabs = ({ label, index }: tabsRanking) => (
    <div
      className='flex flex-col items-center w-[33%] gap-[16px] cursor-pointer
      '
      onClick={() => handleTabClick(index)}
    >
      <div className="font-semibold text-[22px] flex gap-[15px]
                      max-[800px]:text-[16px]">
      {label}
      </div>
      <div className={` ${activeTab === index ? 'border h-0 w-[100%] border-[#858584]' : ''}`}></div>
    </div>
  );

  const tabsData: tabsRanking[] = [
    { label: '1d', index: 0 },
    { label: '7d',  index: 1 },
    { label: '30d',  index: 2 },
    { label: 'All Time',  index: 2 },
  ];


  return (
    <>
      <div className="flex  my-[60px] max-[550px]:mx-[20px]">
          {tabsData.map((data: tabsRanking, index: number) => (
            <Tabs key={index} label={data.label} index={index} />
          ))}
        </div>
    </> ) }