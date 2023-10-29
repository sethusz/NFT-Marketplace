import { TNft } from "../types/nftTypes";
import mockNFTImage from '@/assets/nftPlaceholder.jpg'
import mockUserImage from '@/assets/nftMockAvatar.jpg'

export const MockNFTData: TNft = {
    _id: '21213vfvd',
    img: mockNFTImage,
    title: 'The Orbitians',
    price: 1.63,
    highest_bid: 0.33,
    user: {
        img: mockUserImage,
        name: 'Orbitian'
    },
    date: 'Sep 30, 2022',
    description: [`The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain`, `There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.`, `They live in a metal space machines, high up in the sky and only have one foot on Earth.
    These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.`],
    links: {etherscan: 'https://etherscan.io/', original: 'https://tailwindcss.com/docs/background-image'},
    tags: ['Animation', 'illustration', 'moon', 'moon']
}