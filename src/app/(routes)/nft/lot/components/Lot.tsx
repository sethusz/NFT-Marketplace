import imgNft from '@/assets/imgNft.png'
import Image from 'next/image';
import Link from 'next/link';
import { MockNFTData } from '../../data/mockNft';
import AuctionTime from '@/components/auctionTime';
import { TNft } from '../../types/nftTypes';


interface IAuctionData {
  title: string;
  description: string;
}

interface IBid {
  id: string;
  user: {
    username: string;
  };
  createdAt: string;
}

const Lot = () => {


  return (
    <>
      <div className="flex  gap-[60px] justify-between mb-[40px]
                      max-[1200px]:flex-col">

        <div className="flex flex-col gap-[30px] rounded  bg-cover bg-center
                        max-[1200px]:justify-center max-[1200px]:items-center">
          <Image src={imgNft} alt="watch" className="w-[290px] " />
          <AuctionTime button={false} />
          <div className="flex justify-center mt-[20px]">
            <button className="flex items-center justify-center  text-base p-2 bg-[#A259FF] rounded-xl w-[100%] h-[50px]
                                hover:bg-[#403e3e]
                                max-[1200px]:w-[300px]">
              <div>Outbid</div>
              <div className="ml-2">20 $</div>
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between mb-6">
            <div className=" text-2xl">
              <div className="mb-6 text-[38px] fold-semibold">{MockNFTData.title}</div>
              <div>
                <h6 className='font-semibold text-textGray text-[22px] mb-2'>Created By</h6>
                <div className='flex items-center gap-3'>
                  <Image
                    src={MockNFTData.user.img}
                    alt='user image'
                    className='w-[24px] h-[24px] rounded-full'
                  />
                  <p className='text-[20px] text-white font-semibold'>{MockNFTData.user.name}</p>
                </div>
              </div>
            </div>
          </div>

          <div className='text-base w-[400px] overflow-auto
                          max-[600px]:w-[300px]'>
            {MockNFTData.description}
          </div>



        </div>

        <div className="flex flex-col items-center bg-[#3B3B3B] rounded-md w-[350px] h-[500px] py-[20px]
                      max-[600px]:w-[300px]">
          <div className='mb-[20px]'>Members:</div>

          <div className='bg-[#2B2B2B] rounded-xl h-fit overflow-auto'>
            {Array(10)
              .fill(MockNFTData)
              .map((el: TNft, i) => (
                <div className="flex justify-around items-center w-[330px] h-[40px]
                                max-[600px]:w-[280px]" key={i}>
                  <div className='flex items-center gap-3'>
                    <Image
                      src={MockNFTData.user.img}
                      alt='user image'
                      className='w-[24px] h-[24px] rounded-full'
                    />
                    <p className='font-base'>{MockNFTData.user.name}</p>
                  </div>
                  <div className="">22$</div>
                </div>
              ))}
          </div>

        </div>
        
        </div>
    </>
  )
}

export default Lot;