import React from 'react';

type Props = {};

const Auction = (props: Props) => {

    const buttonStyles = `text-[16px] text-white font-semibold text-center px-[80px] py-[20px] bg-[#A259FF] rounded-[20px]
    shadow-md transition-shadow ease-in-out duration-200 hover:shadow-[0_0_10px_#A239FF]`

	return (
		<div className='flex flex-col bg-[#3B3B3B] p-[30px] rounded-[20px] h-fit'>
			<h6 className='text-xs text-white font-normal mb-[10px]'>Auction ends in:</h6>
			<div className='flex justify-around mb-[30px]'>
				<div className='flex flex-col gap-3 '>
					<span className=' text-[38px] text-white font-bold'>59</span>
					<span className='text-xs text-white'>Hours</span>
				</div>
				<div className='text-[28px] text-white font-bold mt-1'>:</div>
				<div className='flex flex-col gap-3'>
					<span className=' text-[38px] text-white font-bold'>59</span>
					<span className='text-xs text-white'>Minutes</span>
				</div>
				<div className='text-[28px] text-white font-bold mt-1'>:</div>
				<div className='flex flex-col gap-3'>
					<span className=' text-[38px] text-white font-bold'>59</span>
					<span className='text-xs text-white'>Seconds</span>
				</div>
			</div>
			<button className={`${buttonStyles}`}>
				Place Bid
			</button>
		</div>
	);
};

export default Auction;
