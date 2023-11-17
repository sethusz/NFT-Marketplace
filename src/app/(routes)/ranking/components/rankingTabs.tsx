// 'use client'
// import Image from 'next/image'

// import { useState } from 'react';
// import { tabsRanking } from "../types/rankingDate";

// import { MockNFTData } from '../../nft/data/mockNft';
// import CardFromOther from '@/components/NFTFromOthers';
// import { TNft } from '../../nft/types/nftTypes';

// export default function RankingTabs() {

//   const [activeTab, setActiveTab] = useState<number | null>(0);

//   const handleTabClick = (index: number) => {
//     if (activeTab === index) {
//       setActiveTab(null);
//     } else {
//       setActiveTab(index);
//     }
//   };

//   const Tabs = ({ label, index }: tabsRanking) => (
//     <div
//       className='flex flex-col items-center w-[33%] gap-[16px] cursor-pointer
//       '
//       onClick={() => handleTabClick(index)}
//     >
//       <div className="font-semibold text-[22px] flex gap-[15px]
//                       max-[800px]:text-[16px]">
//       {label}
//       </div>
//       <div className={` ${activeTab === index ? 'border h-0 w-[100%] border-[#858584]' : ''}`}></div>
//     </div>
//   );

//   const tabsData: tabsRanking[] = [
//     { label: '1d', index: 0 },
//     { label: '7d',  index: 1 },
//     { label: '30d',  index: 2 },
//     { label: 'All Time',  index: 2 },
//   ];


//   return (
//     <>
//       <div className="flex  my-[60px] max-[550px]:mx-[20px]">
//           {tabsData.map((data: tabsRanking, index: number) => (
//             <Tabs key={index} label={data.label} index={index} />
//           ))}
//         </div>
//     </> ) }

'use client'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function ArtistNft() {
  const [activeTab, setActiveTab] = useState<number | null>(0);
  const path = usePathname();


  const linksStyles = `text-white  py-3
  w-1/2 inline-block border-b 
   border-transparent items-center flex justify-center`;



  return (
    <>
        <div className='flex my-[20px] text-base md:text-[22px]'>
          <Link
            href='/ranking/today'
            className={`${linksStyles} ${path === '/ranking/today' ? 'border-white' : ' opacity-60 '
              } `}
          >
            <span className='text-[1em] font-semibold mr-3'>1d</span>
          </Link>

          <Link
            href='/ranking/week'
            className={`${linksStyles} ${path === '/ranking/week' ? 'border-white' : ' opacity-60 '
              } `}				>
            <span className='text-[1em] font-semibold mr-3'>7d</span>
          </Link>

          <Link
            href='/ranking/month'
            className={`${linksStyles} ${path === '/ranking/month' ? 'border-white' : ' opacity-60 '
              } `}				>
            <span className='text-[1em] font-semibold mr-3'>30d</span>
          </Link>

          <Link
            href='/ranking/allTime'
            className={`${linksStyles} ${path === '/ranking/allTime' ? 'border-white' : ' opacity-60 '
              } `}				>
            <span className='text-[1em] font-semibold mr-3'>All time</span>
          </Link>
        </div>
    </>
  );
}
