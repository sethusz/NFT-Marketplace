import  HomePage from "./(routes)/home/page";
import {Space_Mono} from 'next/font/google'

const spaceMono = Space_Mono({weight: ['400'], subsets: ['latin']}) 

export default function MainPage() {
	return (
		<div className={spaceMono.className}>
			<HomePage />
		</div>
	);
}
