import Image from 'next/image'
import React from 'react'

type Props = {
    title: string,
    styles?: string,
    stylesTitle?: string
    iconStyles? : string,
    icon: string,

}

const Button = ({title, styles, stylesTitle,  icon, iconStyles}: Props) => {

    const baseStyles = `flex items-center justify-center gap-3 rounded-[20px] group 
                        shadow-md transition-shadow ease-in-out duration-200 hover:shadow-[0_0_10px_#A239FF] 
                        ${styles}`
    const iconStyle = `w-[20px] h-[20px] ${iconStyles}`
    const titleStyle = stylesTitle ? stylesTitle : "text-white";
  return (
    <button className={baseStyles}>
        <Image src={icon}  alt='icon' className={iconStyle}/>
        <span className={titleStyle}>{title}</span>
    </button>
  )
}

export default Button