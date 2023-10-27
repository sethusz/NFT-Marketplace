import Image from 'next/image';
import logo from '@/assets/icon/logoHeader.svg';
import Link from 'next/link';
import Button from '../Button';
import logoUser from '@/assets/icon/logoUser.svg'

type Props = {};

const TheHeader = (props: Props) => {
	const linksArr = [
		{ title: 'Marketplace', src: '/marketplace' },
		{ title: 'Rankings', src: '/ranking' },
		{ title: 'Artist', src: '/artist' },
	];

	return (
		<header className='flex justify-between mx-12 mt-2'>
			<div className='flex items-center justify-center'>
				<Image
					src={logo}
					alt='logo'
					width={32}
					height={32}
					className='mr-3'
				/>
				<h3 className='text-white'>NFT Marketplace</h3>
			</div>
			<div className='flex gap-[10px]'>
                {linksArr.map(el => (
                    <Link href={el.src} className='px-[20px] py-[12px] font-semibold text-white'>
                        {el.title}
                    </Link>
                ))}
                <Button title='Sign Up' icon={logoUser} styles='bg-[#A259FF] p-2'/>
            </div>
		</header>
	);
};

export default TheHeader;
