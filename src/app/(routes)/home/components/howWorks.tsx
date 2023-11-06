import Image from 'next/image'
import imgWallet from '@/assets/imgWallet.png'
import imgEarning from '@/assets/imgEarning.png'
import imgCollection from '@/assets/imgCollection.png'

export default function HowWorks() {

  const HOWSTART_DATA = [
    {
      image: imgWallet,
      title: 'Setup Your wallet',
      descr: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.'
    },
    {
      image: imgEarning,
      title: 'Create Collection',
      descr: 'Upload your work and setup your collection. Add a description, social links and floor price.'
    },
    {
      image: imgCollection,
      title: 'Start Earning',
      descr: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.'
    },
  ]
  return (
    <>
      <div className='max-[860px]:w-[315px]'>

        <h1 className='font-bold text-[38px] max-[1100px]:text-[28px]'>How It works</h1>
        <div className='mb-[50px] text-[22px] max-[1100px]:text-[16px]'>Find out how to get started</div>
        <div className='flex justify-center items-center flex-wrap gap-[30px]'>
        {HOWSTART_DATA.map((start, index) => (
          <>
            <div className='flex flex-col items-center text-center bg-[#3B3B3B] rounded-xl p-[20px]
            max-[1100px]:w-[210px] '>
              <Image src={start.image} alt='Wallet'  />
              <h1 className='font-semibold text-[22px]  
                            max-[1100px]:text-[16px]'>{start.title}</h1>
              <div className='w-[270px]
                               max-[1100px]:text-[12px] max-[1100px]:w-[170px]'>{start.descr}</div>
            </div>
          </>
        ))}
        </div>
      </div>
    </>
  );
}
