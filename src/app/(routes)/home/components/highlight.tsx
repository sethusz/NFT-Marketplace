import Image from 'next/image'
import imgHighlight from '@/assets/imgHighlight.png'
import iconAvatar from '@/assets/icon/iconAvatar.svg'

export default function Highlight() {
  return (
    <>
      <div className=' text-white'>

        <div >
              <div className='flex gap-[15px] bg-[#3B3B3B] rounded-3xl pl-[15px] items-center w-[200px] h-[50px]'>
                  <Image src={iconAvatar} alt='Avatar'/>
                  <h2>Name artist</h2>
              </div>
        </div>
      </div>
    </>
  );
}
