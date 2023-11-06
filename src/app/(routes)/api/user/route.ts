import { NextRequest, NextResponse } from "next/server"
import prisma from '../../../../../prisma/client'
import { User } from "@prisma/client"

//create nft
export const POST = async (req: NextRequest) => {
    try {        
        const data: User = await req.json() 
        const createdUser = await prisma.user.create({ data })
        return NextResponse.json({ ok: true, data: createdUser }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ ok: false, message: "User not created", error }, { status: 400 })
    }
}