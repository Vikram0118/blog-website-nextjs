
import { socialLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import { Separator } from '../ui/separator';

export default function NavItems() {

  return (
    <ul className="flex-between-row gap-6 w-full">
      {socialLinks.map((link, index) => {
        return (
            <React.Fragment key={link.link}>
                <li key={link.link}>
                    <Link href={link.link} className='heading3 flex-row2 items-center gap-1'>
                      <Image 
                        src= {`${link.icon}`}
                        width={30}
                        height={30}
                        quality={100}
                        priority={true}
                        alt='react'
                      />
                      {link.label} 
                    </Link>
                </li>
                {index < socialLinks.length - 1 && <Separator className="h-6 mx-0 my-[15px] border" decorative orientation="vertical"/>}
            </React.Fragment> 
        )
      })}
    </ul>
  )
}