import Link from 'next/link';
import React from 'react';

type TAuctionTime = {
  button: boolean
};

const AuctionTime = ({ button }: TAuctionTime) => {

  const buttonStyles = `text-[16px]  font-semibold text-center px-[80px] py-[20px] bg-[#A259FF] rounded-[20px]
    shadow-md transition-shadow ease-in-out duration-200 hover:shadow-[0_0_10px_#A239FF]`

  return (
    <div className={`flex flex-col bg-[#3B3B3B] p-[30px] rounded-[20px] h-fit ${!button && 'w-[290px]'}`}>
      <h6 className='font-normal mb-[10px]'>Auction ends in:</h6>
      <div className='flex justify-around mb-[30px]'>
        <div className='flex flex-col gap-3 '>
          <span className=' text-[38px]  font-bold'>59</span>
          <span className='text-xs'>Hours</span>
        </div>
        <div className='text-[28px]  font-bold mt-1'>:</div>
        <div className='flex flex-col gap-3'>
          <span className=' text-[38px]  font-bold'>59</span>
          <span className='text-xs '>Minutes</span>
        </div>
        <div className='text-[28px]  font-bold mt-1'>:</div>
        <div className='flex flex-col gap-3'>
          <span className=' text-[38px] font-bold'>59</span>
          <span className='text-xs '>Seconds</span>
        </div>
      </div>
      {button &&
      <Link href='/nft/lot'>
        <button className={`${buttonStyles}`}>
          Place Bid
        </button>
        </Link>
      }
    </div>
  );
};

export default AuctionTime;
