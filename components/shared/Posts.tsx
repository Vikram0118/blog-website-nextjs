import { getPostsMeta } from "@/lib/post"
import PostItem from "./PostItem";
import { Separator } from "../ui/separator";
import React from "react";
import 'highlight.js/styles/srcery.css'

export default async function Posts() {

  const posts = await getPostsMeta();

  posts?.forEach(post => {
    post.id = post.id.split('/')[1];
  });

  console.log(posts)

  if(!posts) {
    return <p className=" mt-10 text-center mt-30">Sorry :( No posts found</p>
  }

  return (
    <section className="flex flex-col justify-start w-full">
        <ul className="px-3">
            {posts.map((post, index) => (
              <React.Fragment key={post.id}>
                <PostItem post={post} />
                {index < posts.length - 1 && ( 
                    <Separator className=" my-[25px] border" decorative orientation="horizontal"/>
                )}
              </React.Fragment>
            ))}
        </ul>
    </section>
  )
}

