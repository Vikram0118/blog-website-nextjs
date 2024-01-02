import Image from 'next/image'
import { skills } from '@/constants'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'

export default function IntroCard() {
  return (
    <>
      <section className='border-[1px] rounded-[3px] w-full flex flex-coloum md:flex-row2 gap-5 py-8 px-6 bg-white'>
        
        <div className='flex-coloum-start w-full gap-4'>
          <div className='heading4 flex flex-col gap-2'>
            <p>Hello there! I'm <span className='intro-bold underline'>Vikram P.</span></p>
            <p>I'm a <span className='intro-bold'>Information Technology Undergrad</span>- PTU'24 </p>
            <p>I develop super fast <span className='intro-bold'>Web Applications</span> where scalabilty and performance take center stage. I document my learnings and knowledge here. I also find joy in <span className='intro-bold'>Video Games</span>.</p>
          </div>

          <ul className="flex flex-row flex-wrap">
            {skills.map((skill, index) => {
              return (
                  <li key={skill.name} className='flex flex-row items-center'>
                      <div key={skill.name} className='flex-row2 mx-1 py-[2px] my-2 md:border-[1px] md:rounded-xl md:px-2 md:border-gray-300'>
                        <Image 
                          src= {`${skill.icon}`}
                          width={20}
                          height={20}
                          quality={100}
                          priority={true}
                          alt={skill.name}
                        />
                      <Badge variant="outline" className='icons-name'>{skill.name}</Badge>
                      </div>
                      {index < skills.length - 1 && <Separator className="h-5 mx-[2px] md:mx-2 border-gray-200 border-[1px]" decorative orientation="vertical"/>}
                  </li> 
              )
            })}
          </ul>
          <p className='heading5'>Shoot me an Email if you want to connect - <span className='intro-bold underline'>vikrampalani0107@gmail.com</span></p>
        </div>
      </section>
    </>
  )
}