import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
// import CustomImage from "@/components/shared/CustomImage"

import { BlogPost, Meta } from "@/types"

type Filetree = {
    "tree": [
        {
            "path": string,
        }
    ]
}

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {

    try {
        // console.log(fileName)
        const res = await fetch(`https://raw.githubusercontent.com/Vikram0118/blogposts-mdx/main/${fileName}`, {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                'X-GitHub-Api-Version': '2022-11-28',
            }
        })

        if (!res.ok) return undefined

        const rawMDX = await res.text()

        if (rawMDX === '404: Not Found') return undefined

        const { frontmatter, content } = await compileMDX<{ title: string, date: string, tags: string[] }>({
            source: rawMDX,
            // components: {
            //     Video,
            //     CustomImage,
            // },
            options: {
                parseFrontmatter: true,
                mdxOptions: {
                    rehypePlugins: [
                        // rehypeHighlight,
                        rehypeSlug,
                        [rehypeAutolinkHeadings, {
                            behavior: 'wrap'
                        }],
                    ],
                },
            }
        })

        const id = fileName.replace(/\.mdx$/, '')

        const blogPostObj: BlogPost = { meta: { id, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags }, content }

        return blogPostObj
    } catch(error: any|unknown) {
        // console.log(fileName)
        console.log(error)
    }
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
    const res = await fetch('https://api.github.com/repos/Vikram0118/blogposts-mdx/git/trees/main?recursive=1', {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    })

    if (!res.ok) return undefined

    const repoFiletree: Filetree = await res.json() // repo file tree getting from github api response

    const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))

    // console.log(filesArray)

    const posts: Meta[] = []

    for (const file of filesArray) {
        const post = await getPostByName(file)
        if (post) {
            const { meta } = post
            posts.push(meta)
        }
    }

    return posts.sort((a, b) => a.date < b.date ? 1 : -1)
}