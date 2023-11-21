import { TNft } from "./type";
import mockNFTImage from '@/assets/nftPlaceholder.jpg'
import mockUserImage from '@/assets/nftMockAvatar.jpg'

export const MockCollectionData: TNft = {
  _id: '21213vfvd',
  img: mockNFTImage,
  title: 'The Orbitians',
  price: 1.63,
  highest_bid: 0.33,
  user: {
    img: mockUserImage,
    name: 'Title collection'
  },
  date: 'Sep 30, 2022',
  description: [`The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain`],
  links: { etherscan: 'https://etherscan.io/', original: 'https://tailwindcss.com/docs/background-image' },
  tags: ['Animation', 'illustration', 'moon', 'moon']
}
