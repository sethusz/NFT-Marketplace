

import Image from 'next/image'
import imgDigest from '@/assets/imgDigest.png'
import EmailSubscribe from '@/components/emailSubscribe';



export default function JoinDigest() {

  return (
    <>
      <div className='flex  gap-[70px] bg-[#3B3B3B] p-[50px] rounded-xl 
                      max-[950px]:flex-col max-[950px]:bg-[#2B2B2B]' >

        <div>
          <Image src={imgDigest} alt='Digest'  className='max-[950px]:w-[315px]'/>
        </div>

        <div className='flex flex-col justify-center'>
          <h1 className='font-bold text-[38px] w-[425px] max-[950px]:28px max-[950px]:w-[300px]'>Join our weekly digest</h1>
          <div className='mb-[40px] w-[425px] max-[950px]:w-[300px]'>Get exclusive promotions & updates straight to your inbox.</div>

          <EmailSubscribe />

        </div>
      </div>

    </>
  );
}
