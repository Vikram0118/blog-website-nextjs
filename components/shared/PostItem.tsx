import Link from "next/link"
import Image from "next/image"
import getFormattedDate from "@/lib/getFormattedDate"
import React from "react"
import { Badge } from "../ui/badge"
import { Separator } from "../ui/separator"
import { Meta } from "@/types"

type Props = {
    post: Meta
}

export default function PostItem({ post }: Props) {
    const { id, title, description, date, tags } = post

    // console.log("tags:"+tags)

    const formattedDate = getFormattedDate(date)

    return (
        <li className="my-4 flex-row2 flex-between-start px-5 gap-1">
            <div className="flex-coloum-start gap-2">
                <Link className="heading3-title hover:underline" href={`/posts/${id}`}>{title}</Link>
                <p className="text-sm">{formattedDate}</p>
                <p className="heading4">{description}</p>

                {/* <ul className="flex flex-row flex-wrap">
                  {tags.map((tag, index) => {
                    return (
                        <div key={tag} className='flex flex-row items-center'>
                            <li key={tag} className={`flex-row2 px-[4px] py-[2px]`}>
                            <Image 
                                src= {`/assets/icons/${tag}.svg`}
                                width={20}
                                height={20}
                                quality={100}
                                priority={true}
                                alt='react'
                              />
                            <Badge variant="outline">{tag}</Badge>
                            </li>
                            {index < tags.length - 1 && <Separator className="h-5 border-gray-200 mx-3 my-[10px] border-[1px] gap-3" decorative orientation="vertical"/>}
                        </div> 
                    )
                  })}
                </ul> */}
            </div>
            {/* <Image 
                src= {`/assets/blog/${id}.jpeg`}
                width={300}
                height={300}
                quality={100}
                priority={true}
                alt={id}
                className="rounded-[3px]"
            /> */}
        </li>
    )
}