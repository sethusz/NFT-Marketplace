import Image from 'next/image'
import Button from '@/components/Button';
import iconEye from '@/assets/icon/iconEye.svg'
import logoUser from '@/assets/icon/logoUser.svg'
import imageNFT from '@/assets/nftPlaceholder.jpg'
import { MORENFT } from '../type/homeTypes';

export default function MoreNft() {


  const MORENFT_DATA:MORENFT[] = [
    {
      title: 'Distant Galaxy',
      imageNFT: imageNFT.src,
      logoUser: logoUser,
      userName: 'MoonDancer',
      priceETH: '0.333',
      pricewETH: '0.333'
    },
    {
      title: 'Distant Galaxy',
      imageNFT: imageNFT.src,
      logoUser: logoUser,
      userName: 'MoonDancer',
      priceETH: '0.333',
      pricewETH: '0.333'
    },
    {
      title: 'Distant Galaxy',
      imageNFT: imageNFT.src,
      logoUser: logoUser,
      userName: 'MoonDancer',
      priceETH: '0.333',
      pricewETH: '0.333'
    },
  ]

  return (

    <div className='text-white'>

      <div className=''>
        <h1 className='font-bold text-4xl mb-[10px]'>Discover More NFTs</h1>
        <div className='flex justify-between'>
          <div>Explore new trending NFTs</div>
          <Button title='See All' icon={iconEye} styles='border border-[#A259FF] w-[187px] h-[60px]' />
        </div>
      </div>

      <div className='flex gap-[30px] rounded-[20px] w-fit mt-[20px]'>
        {MORENFT_DATA.map((moreNft, index) => (
          <div className='hover:cursor-pointer hover:scale-[1.05]  transition-transform'>
            <Image src={moreNft.imageNFT} alt='nft image' width={330} height={295} className='object-cover rounded-t-[20px]' />

            <div className="bg-[#3b3b3b] flex flex-col gap-6 rounded-b-[20px] p-[25px]">

              <div className=" flex flex-col gap-2">
                <span className=' text-[22px] text-white font-semibold'>{moreNft.title}</span>
                <div className='flex items-center gap-3'>
                  <Image src={moreNft.logoUser} width={24} height={24} alt='user image' className='rounded-full' />
                  <p className='text-[16px] text-white font-normal'>{moreNft.userName}</p>
                </div>
              </div>
              <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <span className='text-sm text-textGray font-normal'>Price</span>
                    <span className='text-base text-white'>{moreNft.priceETH} ETH</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className='text-sm text-textGray font-normal self-end'>Highest Bid</span>
                    <span className='text-base text-white'>{moreNft.pricewETH} wETH</span>
                  </div>
                </div>
            </div>
            
          </div>
          
        ))}
        {/*        
              <div className="bg-[#3b3b3b] flex flex-col gap-6 rounded-b-[20px] p-[25px]">
              <Image src={moreNft.imageNFT} alt='nft image' className=' object-cover w-[330px] h-[295px] rounded-t-[20px]' />
                <div className="flex flex-col gap-2">
                  <span className=' text-[22px] text-white font-semibold'>{moreNft.title}</span>
                  <div className='flex items-center gap-3'>
                    <Image
                      src={moreNft.logoUser}
                      alt='user image'
                      className='w-[24px] h-[24px] rounded-full'
                    />
                    <p className='text-[16px] text-white font-normal'>{moreNft.userName}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <span className='text-sm text-textGray font-normal'>Price</span>
                    <span className='text-base text-white'>{moreNft.priceETH} ETH</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className='text-sm text-textGray font-normal self-end'>Highest Bid</span>
                    <span className='text-base text-white'>{moreNft.pricewETH} wETH</span>
                  </div>
                </div>
              </div> */}
        {/* </>
          ))} */}
      </div>
    </div>

  );
}
