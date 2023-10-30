import imgArtistPlaceHolder from '@/assets/imgArtistPlaceHolder.png'
import bigAvatar from '@/assets/icon/bigAvatar.svg'
import Image from 'next/image'
import Button from '@/components/Button'
import iconPlus from '@/assets/icon/iconPlus.svg'

import DiscordLogo from '@/assets/icon/DiscordLogo.svg'
import TwitterLogo from '@/assets/icon/TwitterLogo.svg'
import YoutubeLogo from '@/assets/icon/YoutubeLogo.svg'
import InstagramLogo from '@/assets/icon/InstagramLogo.svg'


export default function ArtistProfile() {

  return (
    <>


          <div>
            <div className='flex justify-between'>
              <h1 className='text-[51px] font-semibold'>Name Avatar</h1>
              <Button title='Follow' icon={iconPlus} styles='w-[200px] border border-[#A259FF]' />
            </div>


            <div className="flex gap-[30px]">
              <ul className="flex flex-col ">
                <li>250k+</li>
                <li>Volume</li>
              </ul>
              <ul className="flex flex-col ">
                <li>50+</li>
                <li>NFTs Sold</li>
              </ul>
              <ul className="flex flex-col ">
                <li>3000+</li>
                <li>Followers</li>
              </ul>
            </div>

            <div className='my-[20px]'>
              <h3 className='text-[#858584] text-[22px]'>Bio</h3>
              <div>The internet's friendliest designer kid.</div>
            </div>

            <div>
              <h3 className='text-[#858584] text-[22px]'>Links</h3>
              <div className='flex gap-[10px]'>
              <Image src={DiscordLogo} alt='DiscordLogo' />
              <Image src={TwitterLogo} alt='TwitterLogo' />
              <Image src={YoutubeLogo} alt='YoutubeLogo' />
              <Image src={InstagramLogo} alt='InstagramLogo' />
              </div>
            </div>
          </div>

          <div className="w-[100%] my-[40px] border border-[#858584]"></div>
    

      {/* </div> */}


    </>
  )
}