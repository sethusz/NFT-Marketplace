import iconAvatar from '@/assets/icon/iconAvatar.svg'
import Image from 'next/image'
import { RankingItem } from '../../types/rankingDate';
import TableHeader from '../../components/tableHeader';

export default function RankingInfo() {

  const itemsTab: RankingItem =
  {
    name: "Jaydon Ekstrom",
    id: 1,
    change: "+1.41%",
    nftsSold: 602,
    volume: "12.4 ETH"
  }
    ;

  return (
    <div className='flex flex-col gap-[20px] mb-[40px]
                      max-[550px]:mx-[20px]'>
      

      <TableHeader />
      
      {Array(9)
        .fill(itemsTab)
        .map((el, index) => (
          <div key={index} className="flex justify-between bg-[#3B3B3B] rounded-full p-[15px]">
            <div className="flex gap-[20px] items-center ml-10">
              <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#2B2B2B] rounded-full 
                        max-[1100px]:bg-[#3B3B3B]">
                {el.id}
              </div>
              <div className='flex gap-[15px] items-center
                        '>
                <Image src={iconAvatar} alt='avatar' width={60} height={60} className='h-[60px]' />
                <div className='mr-[20px] 
                          max-[800px]:ml-[20px]
                          max-[700px]:w-[20px]'>{el.name}</div>
              </div>
            </div>

            <div className="flex gap-[80px] items-center mr-[120px]">
              <div className='text-[#00AC4F] max-[800px]:hidden'>{el.change}</div>
              <div className='max-[1100px]:hidden'>{el.nftsSold}</div>
              <div className='max-[700px]:ml-[100px]'>{el.volume}</div>
            </div>
          </div>
        ))}

    </div>

  );
}
