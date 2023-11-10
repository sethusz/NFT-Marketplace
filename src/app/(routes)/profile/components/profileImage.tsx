import imgArtistPlaceHolder from '@/assets/imgArtistPlaceHolder.png'
import bigAvatar from '@/assets/icon/bigAvatar.svg'
import Image from 'next/image'



export default function ProfileImage() {

  return (
    <>
        <div className='relative'>
          <div className='mt-[-20px] '>
            <Image src={imgArtistPlaceHolder} alt='placeholder' className='w-full' />
          </div>
          <div>
            <Image src={bigAvatar} alt='avatar' className='bottom-[-15%] left-[100px] absolute
                                                          max-[800px]:left-[30px]
                                                          max-[600px]:w-[100px] max-[600px]:h-[100px]
                                                          max-[600px]:bottom-[-35%]
                                                          max-[400px]:w-[70px] max-[400px]:h-[70px]' />
          </div>
        </div>
    </> ) }