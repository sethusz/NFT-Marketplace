import type { Metadata } from 'next';
import { Space_Mono, Work_Sans } from 'next/font/google';
import './globals.css';
import TheFooter from '@/components/theFooter/TheFooter';
import TheHeader from '@/components/theHeader/TheHeader';

const spaceMono = Space_Mono({ weight: ['400','700'], subsets: ['latin'] });
const workSans = Work_Sans({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {

	

	return (
		<html lang='en'>
			<body className={`${spaceMono.className}, ${workSans.className}`}>
				<TheHeader />
				<div className='flex justify-center'>{children}</div>
				<TheFooter />
			</body>
		</html>
	);
}
