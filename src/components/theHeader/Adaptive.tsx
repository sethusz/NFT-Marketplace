'use client';

import burgerIcon from '@/assets/icon/BurgerMenu.svg'
import Image from 'next/image';

import { useState } from 'react';


const Adaptive = () => {
	const [isPopUpOpen, setIsPopUpOpen] = useState(false);

	return <>
    {isPopUpOpen ? (
        <div className=""></div>
    ) : (
        <Image src={burgerIcon} alt='menu' width={24} height={24}></Image>
    )}
    </>;
};

export default Adaptive;
