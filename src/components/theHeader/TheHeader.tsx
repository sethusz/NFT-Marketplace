import Image from 'next/image';
import logo from '@/assets/icon/logoHeader.svg';
import Link from 'next/link';
import Button from '../Button';

type Props = {};

const TheHeader = (props: Props) => {
	const linksArr = [
		{ title: 'Marketplace', src: '/' },
		{ title: 'Rankings', src: '/home' },
		{ title: 'Marketplace', src: '/about' },
	];

	return (
		<header className='flex justify-between'>
			<div className='flex items-center justify-center'>
				<Image
					src={logo}
					alt='logo'
					width={32}
					height={32}
				/>
				<h3>NFT Marketplace</h3>
			</div>
			<div className='flex gap-[10px]'>
                {linksArr.map(el => (
                    <Link href={el.src} className='px-[20px] py-[12px] font-semibold text-white'>
                        {el.title}
                    </Link>
                ))}
                <Button title='title' icon=''/>
            </div>
		</header>
	);
};

export default TheHeader;
