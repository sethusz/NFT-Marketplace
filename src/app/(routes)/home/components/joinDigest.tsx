

import Image from 'next/image'
import imgDigest from '@/assets/imgDigest.png'
import EmailSubscribe from '@/components/emailSubscribe';



export default function JoinDigest() {

  return (
    <>
      <div className='flex  gap-[70px] bg-[#3B3B3B] p-[50px] rounded-xl 
                      max-[950px]:flex-col max-[950px]:bg-[#2B2B2B]' >

        <div>
          <Image src={imgDigest} alt='Digest' className='max-[950px]:w-[315px]
                                                          max-[600px]:w-[300px]'/>
        </div>

        <div className='flex flex-col justify-center'>
          <h1 className='font-bold text-[38px] w-[425px] 
                        max-[950px]:text-[28px] max-[950px]:w-[100%]
                        '>Join our weekly digest</h1>
          <div className='mb-[40px] w-[425px] max-[950px]:w-[100%]'>Get exclusive promotions & updates straight to your inbox.</div>

          <div className=''>
            <EmailSubscribe />
          </div>
        </div>
      </div>

    </>
  );
}
