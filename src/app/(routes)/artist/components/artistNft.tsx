'use client'
import { useState } from 'react';
import { tabsData } from "../types/artistTypes";



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
      className='flex flex-col items-center w-[33%] gap-[16px] cursor-pointer'
      onClick={() => handleTabClick(index)}
    >
      <div className="font-semibold text-[22px] flex gap-[15px]">
        {label}
        <div className="bg-[#858584] rounded-full w-[50px] text-[16px] font-normal flex justify-center items-center text-center">
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
        <div className="flex gap-[60px]">
          {tabsData.map((data: tabsData, index: number) => (
            <Tabs key={index} label={data.label} value={data.value} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
