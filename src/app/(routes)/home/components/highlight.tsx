import Image from 'next/image'
import imgHighlight from '@/assets/imgHighlight.png'
import iconAvatar from '@/assets/icon/iconAvatar.svg'
import iconEye from '@/assets/icon/iconEye.svg'
import Button from '@/components/Button';

export default function Highlight() {
  return (
    <>
      <div className='flex gap-[30px] justify-between max-[860px]:w-[315px]
			                max-[600px]:flex-col'>

        <div className='flex flex-col gap-[30px]'>
              <div className='flex gap-[15px] bg-[#3B3B3B] rounded-3xl pl-[15px] items-center w-[200px] h-[50px]'>
                  <Image src={iconAvatar} alt='Avatar'/>
                  <h2>Name artist</h2>
              </div>
              <h1 className='font-bold text-5xl'>Magic Mashrooms</h1>
              <Button title='See NFT' icon={iconEye} styles='bg-white w-[200px] h-[60px] max-[600px]:hidden' 
              stylesTitle='text-[#2B2B2B] font-semibold max-[600px]:hidden'/>
        </div>

        <div className='flex flex-col bg-[#3B3B3B] p-[30px] rounded-[20px] h-fit w-fit'>
			<h6 className='text-xs text-white font-normal mb-[10px]'>Auction ends in:</h6>
			<div className='flex justify-around mb-[30px]'>
				<div className='flex flex-col gap-3 '>
					<span className=' text-[38px] text-white font-bold'>59</span>
					<span className='text-xs text-white'>Hours</span>
				</div>
				<div className='text-[28px] text-white font-bold m-1'>:</div>
				<div className='flex flex-col gap-3'>
					<span className=' text-[38px] text-white font-bold'>59</span>
					<span className='text-xs text-white'>Minutes</span>
				</div>
				<div className='text-[28px] text-white font-bold m-1'>:</div>
				<div className='flex flex-col gap-3'>
					<span className=' text-[38px] text-white font-bold'>59</span>
					<span className='text-xs text-white'>Seconds</span>
				</div>
			</div>
		</div>
		<Button title='See NFT' icon={iconEye} styles=' hidden bg-white w-[200px] h-[60px] max-[600px]:flex' 
              stylesTitle='hidden text-[#2B2B2B] font-semibold max-[600px]:flex'/>
      </div>
    </>
  );
}
