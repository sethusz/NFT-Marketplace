import Button from '@/components/Button';
import iconEye from '@/assets/icon/iconEye.svg'
import { MockNFTData } from '../../nft/data/mockNft';
import CardFromOther from '@/components/NFTFromOthers';
import { TNft } from '../../nft/types/nftTypes';

export default function MoreNft() {

  return (

    <div className='max-[860px]:w-[315px]'>

      <div className=''>
        <h1 className='font-bold text-4xl mb-[10px]
                                  max-[700px]:text-2xl'>Discover More NFTs</h1>
        <div className='flex justify-between'>
          <div>Explore new trending NFTs</div>
          <Button title='See All' icon={iconEye} styles='border border-[#A259FF] w-[187px] h-[60px]
                                                        max-[700px]:hidden          ' />
        </div>
      </div>

      <div className='flex flex-wrap justify-center items-center gap-[30px] rounded-[20px] w-fit mt-[20px]'>
      {Array(3)
						.fill(MockNFTData)
						.map((el: TNft, i) => (
							<CardFromOther
								title={el.title}
								img={el.img}
								user={el.user}
								price={el.price}
								highest_bid={el.highest_bid}
								key={i}
							/>
						))}  
             <Button title='See All' icon={iconEye} styles='hidden border border-[#A259FF] w-[330px] h-[60px]
                                                            max-[700px]:flex' />    
      </div>
    </div>

  );
}
