'use client'
import { Metadata } from 'next';
import FilterAndCards from './components/FilterAndCards';
import { useEffect, useState } from 'react';




export default function MarketPlacePage() {
	const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isScrolled) {
      window.scrollTo(0, 0);
      setIsScrolled(true);
      console.log(`isScrolled ${isScrolled}`)
    }

    if (isScrolled) {
      console.log(`isScrolled ${isScrolled}`)
    }

  }, [isScrolled]);
	
	return (
		<>

			<div className="flex justify-center">
				<div className="flex justify-center items-center my-10 bg-[#3B3B3B] w-fit p-[20px] rounded-md ">
					You will see your NFTs here
				</div>
			</div>
		</>
	);
}
