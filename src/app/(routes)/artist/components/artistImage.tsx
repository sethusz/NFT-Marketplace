import imgArtistPlaceHolder from '@/assets/imgArtistPlaceHolder.png'
import bigAvatar from '@/assets/icon/bigAvatar.svg'
import Image from 'next/image'



export default function ArtistProfile() {

  return (
    <>
        <div className='relative'>
          <div className='mt-[-20px] '>
            <Image src={imgArtistPlaceHolder} alt='placeholder' className='w-full' />
          </div>
          <div>
            <Image src={bigAvatar} alt='avatar' className='bottom-[-15%] left-[100px] absolute' />
          </div>
        </div>
    </> ) }