import { StaticImageData } from "next/image"

type TMockUser = {
    name: string,
    img: StaticImageData | string
}

type TLinks = {
    etherscan: string,
    original : string
}

export type TNft = {
    _id?: string,
    img: StaticImageData,
    title: string,
    price: number,
    highest_bid: number,
    date: string,   
    user:TMockUser,
    description: string[],
    links: TLinks,
    tags: string[]
}

