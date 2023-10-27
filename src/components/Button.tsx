import Image from 'next/image'
import React from 'react'

type Props = {
    title: string,
    styles?: string,
    icon: string,

}

const Button = ({title, styles, icon}: Props) => {

    const baseStyles = ` bg-[##A259FF] flex items-center justify-center gap-3 rounded-md  ${styles}`

  return (
    <button className={baseStyles}>
        <Image src={icon} width={20} height={20} alt='icon'/>
        <span className=' text-white'>{title}</span>
    </button>
  )
}

export default Button