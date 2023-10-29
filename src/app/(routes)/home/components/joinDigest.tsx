

import Image from 'next/image'
import imgDigest from '@/assets/imgDigest.png'
import EmailSubscribe from '@/components/emailSubscribe';



export default function JoinDigest() {

  return (
    <>
      <div className='flex justify-between text-white' >

        <div>
          <Image src={imgDigest} alt='Digest' />
        </div>

        <div className='flex flex-col justify-center'>
          <h1 className='font-bold text-[38px] w-[425px]'>Join our weekly digest</h1>
          <div className='mb-[40px] w-[425px]'>Get exclusive promotions & updates straight to your inbox.</div>

          <EmailSubscribe />

        </div>
      </div>

    </>
  );
}
