import Image from 'next/image';
import imgNft from '@/assets/imgNft.png';
import iconAvatar from '@/assets/icon/iconAvatar.svg';
import { NFT } from '@/app/(routes)/home/type/homeTypes';

const NFT_DATA: NFT[] = [
  {
    title: 'DSGN Animals',
    artistName: 'Name Artist',
    likesCount: 1025,
    imageAvatar: iconAvatar.src,
    imageNft: imgNft.src,
  },
  {
    title: 'DSGN Animals',
    artistName: 'Name Artist',
    likesCount: 1025,
    imageAvatar: iconAvatar.src,
    imageNft: imgNft.src,
  },
  {
    title: 'DSGN Animals',
    artistName: 'Name Artist',
    likesCount: 1025,
    imageAvatar: iconAvatar.src,
    imageNft: imgNft.src,
  },
];

export default function TrendingCollection() {
  return (
    <>
      <div className='text-white'>
        <div>
          <h1 className='font-bold text-4xl'>Trending Collection</h1>
          <h3>Checkout our weekly updated trending collection.</h3>
        </div>

        <div className='flex gap-[30px] justify-center'>
          {NFT_DATA.map((nft, index) => (
            <div key={index} className='mt-[60px]'>
              <Image src={nft.imageNft} alt="nft" width={330} height={330}/>
              <div className='flex mt-[10px] gap-[15px]'>
                <Image src={nft.imageNft} alt="nft" width={100} height={100} />
                <Image src={nft.imageNft} alt="nft" width={100} height={100} />
                <div className='flex justify-center items-center bg-[#A259FF] w-[100px] h-[100px] rounded-md'>
                  {nft.likesCount}+
                </div>
              </div>
              <div className='flex flex-col gap-[10px] mt-[15px]'>
                <h1>{nft.title}</h1>
                <div className="flex gap-[12px]">
                  <Image src={nft.imageAvatar} alt='Avatar' width={24} height={24}/>
                  <div>{nft.artistName}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
