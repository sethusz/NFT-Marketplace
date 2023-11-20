import { StaticImageData } from "next/image"

export type TNft = {
  _id?: string,
  img: StaticImageData,
  title: string,
  price: number,
  highest_bid: number,
  date: string,
  user: TMockUser,
  description: string[],
  links: TLinks,
  tags: string[]
}

 type TMockUser = {
  name: string,
  img: StaticImageData
}

type TLinks = {
  etherscan: string,
  original: string
}