import Image from 'next/image'
import { skills } from '@/constants'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'

export default function IntroCard() {
  return (
    <>
      <div className='border-[1px] rounded-[3px] w-full flex flex-coloum md:flex-row2 gap-3 py-8 px-6 bg-white'>

      <Image 
        // src='/assets/vikram.jpeg'
        src='/assets/blog/ssg-ssr.jpeg'
        width={250}
        height={200}
        quality={100}
        className='rounded-full mx-auto shadow-lg'
        priority={true}
        alt='vikram'/>
        <div className='flex-coloum-start w-full gap-1'>
          <p className='heading4'>Welcome! I m <span className='intro-bold'>Vikram P.</span></p>
          <p className='heading4'>I'm a <span className='intro-bold'>Information Technology Undergrad - PTU'24.</span></p>
          <p className='heading4'>I develop super fast <span className='intro-bold'>Web Applications</span> where scalabilty and performance take center stage. I also find joy in <span className='intro-bold'>Video Games</span>.</p>

          <ul className="flex flex-row flex-wrap">
            {skills.map((skill, index) => {
              return (
                  <div key={skill.name} className='flex flex-row items-center'>
                      <div key={skill.name} className='flex-row2 px-[4px] py-[2px]'>
                        <Image 
                          src= {`${skill.icon}`}
                          width={20}
                          height={20}
                          quality={100}
                          priority={true}
                          alt={skill.name}
                        />
                      <Badge variant="outline">{skill.name}</Badge>
                      </div>
                      {index < skills.length - 1 && <Separator className="h-5 mx-3 border-gray-200 my-[10px] border-[1px] gap-3" decorative orientation="vertical"/>}
                  </div> 
              )
            })}
          </ul>
          <p className='heading4'>Shoot me an Email if you want to connect - <span className='font-normal'>vikrampalani0107@gmail.com</span></p>
        </div>
      </div>
    </>
  )
}