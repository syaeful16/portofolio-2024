import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

function Detail() {
  const container = useRef()
  const group = useRef()

  const skills = ['HTML/CSS', 'Tailwindcss', 'Bootstrap', 'JavaScript', 'Nodejs', 'React', 'PHP', 'Laravel', 'MySQL', 'Java', 'RestAPI', 'Golang']
  const design = ['UI/UX Website', 'Content Creator Instagram Feed', 'UI/UX Mobile']

  useGSAP(() => {
    gsap.from(group.current, {
      y: 300,
      scrollTrigger: {
        trigger: container.current,
        start: "20% 80%",
        end: "70% 80%",
        scrub: 1,
        // markers: true
      }
    })

    gsap.to([".mq-inner"], {
      xPercent: 100,
      repeat: -1,
      duration: 40,
      ease: "linear"
    }).totalProgress(0)

    gsap.to(".mq-inner2", {
      xPercent: -100,
      repeat: -1,
      duration: 40,
      ease: "linear"
    }).totalProgress(0)
  })

  return (
    <section ref={container} className='relative w-full h-[80vh] md:h-[70vh] lg:h-screen uppercase text-whites pt-40 lg:pt-20 2xl:pt-36 bg-primary overflow-hidden'>
      <div ref={group} className="flex flex-col items-center">
        <h1 className="font-modern-era-regular text-sm 2xl:text-lg text-whites mb-6 2xl:mb-8">who i am</h1>
        <h1 className='font-anton text-4xl md:text-7xl lg:text-8xl 2xl:text-9xl'>i am developer</h1>
        {/* before:block before:absolute before:-z-10 before:-inset-1 before:-skew-y-3 before:bg-secondary */}
        <h1 className="w-max relative font-anton text-4xl md:text-7xl lg:text-8xl 2xl:text-9xl">website and Designer</h1>
        <p className='font-modern-era-light w-4/5 md:w-3/5 text-center text-xs md:text-sm 2xl:text-lg mt-6 2xl:mt-10'>MY NAME IS <span className='font-modern-era-medium'>SYAEFULLOH ARNAS</span> AND I AM A BACHELOR GRADUATE IN INFORMATICS ENGINEERING AT THE TELKOM INSTITUTE OF TECHNOLOGY PURWOKERTO. I like learning new things related to programming, during my studies I studied as a <span className='font-modern-era-medium'>fullstack developer</span></p>
      </div>
      <div className="absolute z-20 shadow-xl md:rotate-[8deg] xl:rotate-6 2xl:rotate-[8deg] -left-10 bottom-16 md:-bottom-6 lg:-bottom-4 2xl:-bottom-32 overflow-hidden flex gap-2 xl:gap-4 2xl:gap-8 font-anton text-xl md:text-3xl 2xl:text-5xl text-primary py-2 md:py-3 2xl:py-4 bg-greenlight">
        <div className="mq-inner -translate-x-full flex w-fit gap-2 xl:gap-4 2xl:gap-8">
          {skills.map((each, i) => (
            <div key={i} className="mq-part flex items-center flex-shrink-0 gap-2 xl:gap-4 2xl:gap-8">
              <h1>{each}</h1>
              <span>*</span>
            </div>
          ))}
        </div>
        <div className="mq-inner -translate-x-full flex w-fit gap-2 xl:gap-4 2xl:gap-8">
          {skills.map((each, i) => (
            <div key={i} className="mq-part flex items-center flex-shrink-0 gap-2 xl:gap-4 2xl:gap-8">
              <h1>{each}</h1>
              <span>*</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mq w-[120%] absolute z-10  md:-rotate-[8deg] lg:-rotate-6 2xl:-rotate-[8deg] -left-7 bottom-0 md:bottom-32 lg:bottom-24 2xl:bottom-36 overflow-hidden flex gap-2 xl:gap-4 2xl:gap-8 font-anton text-xl md:text-3xl 2xl:text-5xl text-whites py-2 md:py-3 2xl:py-4 bg-secondary">
        <div className="mq-inner2 flex flex-shrink-0 gap-2 xl:gap-4 2xl:gap-8">
          {design.map((item, i) => (
            <div key={i} className="flex items-center gap-2 xl:gap-4 2xl:gap-8">
              <h1>{item}</h1>
              <span>*</span>
            </div>
          ))}
          {design.map((item, i) => (
            <div key={i} className="flex items-center gap-2 xl:gap-4 2xl:gap-8">
              <h1>{item}</h1>
              <span>*</span>
            </div>
          ))}
        </div>
        <div className="mq-inner2 flex flex-shrink-0 gap-2 xl:gap-4 2xl:gap-8">
          {design.map((item, i) => (
            <div key={i} className="flex items-center gap-2 xl:gap-4 2xl:gap-8">
              <h1>{item}</h1>
              <span>*</span>
            </div>
          ))}
          {design.map((item, i) => (
            <div key={i} className="flex items-center gap-2 xl:gap-4 2xl:gap-8">
              <h1>{item}</h1>
              <span>*</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Detail