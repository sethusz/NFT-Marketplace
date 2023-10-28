import Button from "@/components/Button";
import logoRocket from '@/assets/icon/logoRocket.svg'
import Image from 'next/image'
import bigAvatar from '@/assets/icon/bigAvatar.svg'

export default function TopCreators() {
  const CREATOR_DATA = [
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
  return (
    <>
      <div className="text-white">

        <div>
          <h1 className="font-bold mb-[15px]">Top Creators</h1>
          <div className="flex justify-between">
            <div>Checkout Top Rated Creators on the NFT Marketplace </div>
            <Button title="View Rankings" icon={logoRocket} styles="border-2 border-[#A259FF] w-[247px] h-[60px] " />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 mt-[60px]">
          {CREATOR_DATA.map((creator, index) => (
            <div key={index} className="flex justify-center items-center bg-[#3B3B3B] w-[240px] h-[240px] rounded-2xl">
              <div className="absolute bg-[#2B2B2B] w-[30px] h-[30px] text-[#858584] text-center rounded-3xl mr-[180px] mb-[180px]">
                {creator.numberCreator}
              </div>
              <div className="flex flex-col items-center">
                <Image src={creator.imageAvatar} alt="Avatar" />
                <h1>{creator.creatorName}</h1>
                <div>
                  <span className="text-[#858584]"> Total Sales: </span>
                  {creator.totalSales} ETH
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
