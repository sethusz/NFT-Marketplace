import Button from "@/components/Button";
import logoRocket from '@/assets/icon/logoRocket.svg'
import imgPlaceHolder from '@/assets/imgPlaceHolder.png'
import iconAvatar from '@/assets/icon/iconAvatar.svg'
import Image from 'next/image'

export default function HeroSection() {
	return (
		<>

		  <div className="flex w-[1050px] gap-[60px]  
			                max-[1100px]:w-[690px]
											max-[860px]:flex-col max-[860px]:w-[315px]
											"> 

				<div className="flex flex-col gap-[25px]
				                max-[900px]:w-[330px] 
												max-[500px]:w-[300px]">
					<h1 className="text-5xl 
					              max-[900px]:text-4xl 
												max-[500px]:text-3xl">Discover digital art & Collect NFTs</h1>
					<div className="">NFT marketplace UI created with Anima for Figma.
						Collect, buy and sell art from more than 20k NFT artists.
					</div>
					<Button title='Get Started' icon={logoRocket} styles='bg-[#A259FF] py-[20px] px-[30px] w-[224px] 
					                                                      max-[860px]:w-[100%]' />
					<div className="flex gap-[30px]">
						<ul className="flex flex-col ">
							<li>240k+</li>
							<li>Total Sale</li>
						</ul>
						<ul className="flex flex-col ">
							<li>100k+</li>
							<li>Auctions</li>
						</ul>
						<ul className="flex flex-col ">
							<li>240k+</li>
							<li>Artists</li>
						</ul>
					</div>
				</div>

				 <div className="
				                ">
					<Image src={imgPlaceHolder} alt='PlaceHolder' className="max-[860px]:w-[315px]"/>
					<div className="bg-[#3B3B3B] rounded-md p-[20px] ">
						<h3 className="mb-[10px]">Space Walking</h3>
						<div className="flex gap-[12px] ">
							<Image src={iconAvatar} alt='Avatar' />
							<div>Name Artist</div>
						</div>
					</div>
				</div> 

			 </div> 
		</>
	);
}
