import Button from "@/components/Button";
import logoRocket from '@/assets/icon/logoRocket.svg'
import Image from 'next/image'
import bigAvatar from '@/assets/icon/bigAvatar.svg'
import { CREATOR } from "../type/homeTypes";

const CREATOR_DATA: CREATOR[] = [
  {
    totalSales: 35,
    creatorName: 'Name creator',
    numberCreator: 1,
    imageAvatar: bigAvatar,
  },
  {
    totalSales: 35,
    creatorName: 'Name creator',
    numberCreator: 2,
    imageAvatar: bigAvatar,
  },
  {
    totalSales: 35,
    creatorName: 'Name creator',
    numberCreator: 3,
    imageAvatar: bigAvatar,
  },

  {
    totalSales: 35,
    creatorName: 'Name creator',
    numberCreator: 4,
    imageAvatar: bigAvatar,
  },

  {
    totalSales: 35,
    creatorName: 'Name creator',
    numberCreator: 5,
    imageAvatar: bigAvatar,
  },
  {
    totalSales: 35,
    creatorName: 'Name creator',
    numberCreator: 6,
    imageAvatar: bigAvatar,
  },
  {
    totalSales: 35,
    creatorName: 'Name creator',
    numberCreator: 7,
    imageAvatar: bigAvatar,
  },
  {
    totalSales: 35,
    creatorName: 'Name creator',
    numberCreator: 8,
    imageAvatar: bigAvatar,
  },

  {
    totalSales: 35,
    creatorName: 'Name creator',
    numberCreator: 9,
    imageAvatar: bigAvatar,
  },

  {
    totalSales: 35,
    creatorName: 'Name creator',
    numberCreator: 10,
    imageAvatar: bigAvatar,
  },

  {
    totalSales: 35,
    creatorName: 'Name creator',
    numberCreator: 11,
    imageAvatar: bigAvatar,
  },

  {
    totalSales: 35,
    creatorName: 'Name creator',
    numberCreator: 12,
    imageAvatar: bigAvatar,
  },
];


export default function TopCreators() {

  return (
    <>
      <div className="max-[860px]:w-[315px]
                        max-[750px]:flex  max-[750px]:flex-col max-[750px]:items-center">

        <div>
          <h1 className="font-bold mb-[15px] text-4xl max-[750px]:text-2xl">Top Creators</h1>
          <div className="flex justify-between">
            <div>Checkout Top Rated Creators on the NFT Marketplace </div>
            <Button title="View Rankings" icon={logoRocket} styles="border-2 border-[#A259FF] w-[247px] h-[60px]
                                                                    max-[750px]:hidden" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5 mt-[60px]
                        max-[1100px]:grid-cols-2
                        max-[750px]:grid-cols-1
                        ">
          {CREATOR_DATA.map((creator, index) => (
            <div
              key={index}
              className={`flex  justify-center items-center bg-[#3B3B3B] w-[240px] h-[240px] rounded-2xl
           hover:cursor-pointer hover:scale-[1.05]  transition-transform
            max-[1100px]:w-[330px]  max-[1100px]:h-[100px] 
        
           ${index >= 6 && 'max-[1100px]:hidden'}`}
            >

              <div className="flex min-[1100px]:flex-col  min-[1100px]:items-center
                              max-[1100px]:flex max-[1100px]:gap-[20px]">

                <div className="absolute bg-[#2B2B2B] w-[30px] h-[30px] text-[#858584] text-center rounded-3xl mr-[180px] mb-[180px]">
                  {creator.numberCreator}
                </div>

                <Image src={creator.imageAvatar} alt="Avatar" className="max-[1100px]:w-[80px] max-[1100px]:h-[80px]" />
                <div className="max-[1100px]:flex max-[1100px]:flex-col max-[1100px]:justify-center">
                <h1>{creator.creatorName}</h1>
                <div className="">
                  <span className="text-[#858584]"> Total Sales: </span>
                  {creator.totalSales} ETH
                </div>
                </div>
              </div>
            </div>
          ))}
          <Button title="View Rankings" icon={logoRocket} styles="hidden border-2 border-[#A259FF] w-[100%] h-[60px] 
                                                                  max-[750px]:flex" />
        </div>

      </div>
    </>
  );
}
