
import React, { ReactNode } from 'react';
import Image from "next/image";
import imgAuth from '@/assets/imgAuth.png'

type AuthLayoutProps = {
  children: ReactNode,
  title:string,
  descr?: string
}

export default function AuthLayout({ children, title, descr  }: AuthLayoutProps) {

  return (
    <div className="flex gap-[60px] w-full
                    max-[800px]:flex-col">
      <div >
        <Image src={imgAuth} alt="image" className='max-[1050px]:w-[400px]
                                                    max-[800px]:w-[100%]
                                                    max-[800px]:h-[300px]' />
      </div>

      <div className="flex flex-col justify-center
      max-[800px]:justify-center
      max-[800px]:items-center">
        <h1 className="font-semibold text-[51px] text-center
                      max-[1100px]:text-[38px]
                      max-[600px]:text-[28px]">{title}</h1>
        <div className="w-[460px] text-center
                        max-[1100px]:w-[325px]">Welcome! enter your details and start creating, collecting and selling NFTs.</div>

        {children}
      </div>
    </div>
  );
}
