import iconArt from '@/assets/imgCategories/iconArt.svg'
import iconCollectibles from '@/assets/imgCategories/iconCollectibles.svg'
import iconMusic from '@/assets/imgCategories/iconMusic.svg'
import iconPhotography from '@/assets/imgCategories/iconPhotography.svg'
import iconSport from '@/assets/imgCategories/iconSport.svg'
import iconUtility from '@/assets/imgCategories/iconUtility.svg'
import iconVideo from '@/assets/imgCategories/iconVideo.svg'
import iconWorlds from '@/assets/imgCategories/iconWorlds.svg'
import imgArt from '@/assets/imgCategories/imgArt.png'
import imgCollectibles from '@/assets/imgCategories/imgCollectibles.png'
import imgMusic from '@/assets/imgCategories/imgMusic.png'
import imgPhotography from '@/assets/imgCategories/imgPhotography.png'
import imgSport from '@/assets/imgCategories/imgSport.png'
import imgUtility from '@/assets/imgCategories/imgUtility.png'
import imgVideo from '@/assets/imgCategories/imgVideo.png'
import imgWorlds from '@/assets/imgCategories/imgWorlds.png'

import Image from 'next/image'

const CATEGORIES_DATA = [
  {
    name: 'Art',
    img: imgArt,
    icon: iconArt
  },
  {
    name: 'Collectibles',
    img: imgCollectibles,
    icon: iconCollectibles
  },
  {
    name: 'Music',
    img: imgMusic,
    icon: iconMusic
  },
  {
    name: 'Photography',
    img: imgPhotography,
    icon: iconPhotography
  },
  {
    name: 'Video',
    img: imgVideo,
    icon: iconVideo
  },
  {
    name: 'Utility',
    img: imgUtility,
    icon: iconUtility
  },
  {
    name: 'Sport',
    img: imgSport,
    icon: iconSport
  },
  {
    name: 'Virtual Worlds',
    img: imgWorlds,
    icon: iconWorlds
  },
];

export default function BrowseCategories() {
  return (
    <>
      <div className='text-white'>
        <h1 className='font-bold mb-[20px]'>Browse Categories</h1>

        <div>
          <div>
            <div className='grid grid-cols-4 gap-3'>
              {CATEGORIES_DATA.map((categories, index) => (
                <>
                  <div className="flex items-center">
                    <div className="relative">
                      <Image src={categories.img} alt="art" width={240} height={240} className="blur-sm" />
                      <Image src={categories.icon} alt="art" width={100} height={100} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

                      <div className='bg-[#3B3B3B] w-[240px] h-[76px] rounded-b-xl flex items-center'>
                        <div className="ml-[20px]">{categories.name}</div>
                      </div>
                    </div>
                  </div>
                </>
              ))}

            </div>

          </div>
        </div>
      </div>
    </>
  );
}