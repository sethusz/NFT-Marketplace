'use client'
import Image from 'next/image'
import imageHeader from '@/assets/imageTestCollection.jpg'
import iconAvatar from '@/assets/icon/bigAvatar.svg'
import NftImage from '@/assets/imgNft.png'
import Link from 'next/link';
import { MockNFTData } from '../nft/data/mockNft';
import { TNft } from './type';
import { MockCollectionData } from './collectionData';
import iconEth from '@/assets/icon/iconEth.svg'
import { useWindowSize } from '@/lib/hooks/useWindowSize'

const createCollection = () => {
  const { width } = useWindowSize();

  const collectionNft = (
    <Link href='/collection' className="flex flex-col rounded-[20px] hover:cursor-pointer hover:scale-[1.05] transition-transform">
      <Image src={MockCollectionData.img} alt="nft image" className="object-cover w-[300px] h-[220px] rounded-t-[20px]" />
      <div className="bg-[#2B2B2B] flex flex-col gap-6 rounded-b-[20px] p-[25px]">
        <div className="flex flex-col gap-2">

          <div className="flex flex-col gap-3">

            <div className='flex flex-col'>
              <p className="text-[16px] text-white font-normal">{MockCollectionData.user.name}</p>
              <p className='text-[#808080]'>Collection Name</p>
            </div>

            <div className='flex flex-col gap-[5px]'>
              <p className='text-[12px] text-[#808080]'>Price</p>
              <div className='flex gap-[5px]'>
                <Image src={iconEth} alt='ETH' height={20} width={20} />
                <p>99</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Link>
  )



  return (
    <div className='w-full'>

      <Image src={imageHeader} alt='test' className='h-[300px]' />

      <div className='flex justify-between'>

            <div className='flex items-center gap-[30px] m-[40px]'>
              <Image src={iconAvatar} alt='test' className='mb-[20px]' />
              <div className='flex flex-col gap-[10px]'>
                <div className='text-[28px]'>Collection Name</div>
                <div className='w-[300px] text-[#808080] text-[15px]'>Here will be a description of this collection in order to find out more about it</div>
              </div>
            </div>


        <div className='m-[40px]'>
          <ul className='flex flex-col'>
              <li>Total Price</li>
              <li className='flex gap-[5px]'>
                <Image src={iconEth} alt='ETH' width={20} height={20}/>
                <div>99</div>
                </li>
          </ul>
        </div>
      </div>

      <div className='bg-bgSecondaryGray pt-14 pb-14'>
        <div className='flex  flex-wrap justify-center gap-[30px] mx-7 md:mx-16 lg:mx-28'>
          {Array(10)
            .fill(MockNFTData)
            .map((el: TNft, i) => (
              <div key={i}>

                {collectionNft}
              </div>
            ))}
        </div>
      </div>
    </div >
  );
};

export default createCollection;
