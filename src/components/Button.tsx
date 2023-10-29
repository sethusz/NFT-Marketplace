import Image from 'next/image'
import React from 'react'

type Props = {
    title: string,
    styles?: string,
    iconStyles? : string,
    icon: string,

}

const Button = ({title, styles, icon, iconStyles}: Props) => {

    const baseStyles = `flex items-center justify-center gap-3 rounded-[20px] group  ${styles}`
    const iconStyle = `w-[20px] h-[20px] ${iconStyles}`

  return (
    <button className={baseStyles}>
        <Image src={icon}  alt='icon' className={iconStyle}/>
        <span className=' text-white'>{title}</span>
    </button>
  )
}

export default Button