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

                <ul className="flex flex-row flex-wrap">
                    {tags.map((tag, index) => {
                      return (
                          <li key={tag} className='flex flex-row items-center'>
                              <div key={tag} className='flex-row2 mx-1 py-[2px] my-2 md:border-[1px] md:rounded-xl md:px-2 md:border-gray-300'>
                                <Image 
                                  src= {`/assets/icons/${tag}.svg`}
                                  width={20}
                                  height={20}
                                  quality={100}
                                  priority={true}
                                  alt={tag}
                                />
                              <Badge variant="outline" className='icons-name'>{tag}</Badge>
                              </div>
                              {index < tags.length - 1 && <Separator className="h-5 mx-[2px] md:mx-2 border-gray-200 border-[1px]" decorative orientation="vertical"/>}
                          </li> 
                      )
                    })}
                  </ul>
            </div>
        </li>
    )
}