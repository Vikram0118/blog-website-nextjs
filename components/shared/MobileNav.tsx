import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"
import { socialLinks } from "@/constants"
import React from "react"
import Link from "next/link"


export default function MobileNav() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image 
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-4 bg-white md:hidden">
          <Image 
            src="/assets/logo.svg"
            alt="logo"
            width={40}
            height={30}
          />
          <Separator className="border border-gray-400" />
          <ul className="md:flex-between flex flex-col gap-3 w-full md:flex-row">
            {socialLinks.map((link, index) => {
              return (
                  <React.Fragment key={link.link}>
                      <li key={link.link}>
                          <Link href={link.link} className='heading1'>{link.label}</Link>
                      </li>
                  </React.Fragment> 
              )
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  )
}