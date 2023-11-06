import { NextRequest, NextResponse } from "next/server"
import prisma from '../../../../../prisma/client'
import { NFT } from "@prisma/client"

//create nft
export const POST = async (req: NextRequest) => {
    try {        
        const data: NFT = await req.json() 
        const createdNft = await prisma.nFT.create({ data })
        return NextResponse.json({ ok: true, data: createdNft }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ ok: false, message: "NFT not created", error }, { status: 400 })
    }
}

export const GET =async (req: NextRequest, res: NextResponse) => {
    return NextResponse.json({message: 'нічого немає'})
}