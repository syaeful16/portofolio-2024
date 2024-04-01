import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useRef } from 'react'

const Experience = () => {
  const section = useRef()

  useGSAP(() => {

    var paragraphs = gsap.utils.toArray('.box-desc .desc-front');
    
    // gsap.set('svg', { y: 100})

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        pin: true,
        start: '50% 50%',
        end: 'bottom 50%',
        scrub: 1,
        snap: {
            snapTo: 'labels',
            duration: { min: 0.2, max: 3},
            delay: 1,
            ease: 'power3.inOut'
        },
        // markers: true
      }
    })

    paragraphs.forEach((val, i) => {
      t1.addLabel('start')
      .to(paragraphs[i], { width: '100%'})
    })

    // t1.addLabel('svg-show')
    // .to('svg', { y: 0 })
  }, [])

  return (
    <section ref={section} className='relative w-full h-screen bg-primary flex justify-center items-center text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-modern-era-medium'>
        <div className="w-4/5 hidden md:flex flex-col gap-2 2xl:gap-4">
          <div className="box-desc relative w-max">
            <p className='text-gray/40'>Proficient in developing websites from</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites'>Proficient in developing websites from</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40'>scratch, I excel in both frontend and backend.</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites'>scratch, I excel in both frontend and backend.</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40'>Additionally, I'm skilled in designing Instagram</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites'>Additionally, I'm skilled in designing Instagram</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40'>content for campuses and startups. With this</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites'>content for campuses and startups. With this</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40'>combination, I'm poised to deliver effective</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites'>combination, I'm poised to deliver effective</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40'>and engaging digital solutions for any project.</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites'>and engaging digital solutions for any project.</p>
          </div>
        </div>
        <div className="w-4/5 flex md:hidden flex-col gap-2 2xl:gap-4">
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>Proficient in developing</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>Proficient in developing</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>websites from scratch,</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>websites from scratch,</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>I excel in both frontend</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>I excel in both frontend</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>and backend. Additionally,</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>and backend. Additionally,</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>I'm skilled in designing</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>I'm skilled in designing</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>Instagram content for</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>Instagram content for</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>campuses and startups.</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>campuses and startups.</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>With this combination,</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>With this combination,</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>I'm poised to deliver</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites'>I'm poised to deliver</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>effective and engaging</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>effective and engaging</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>digital solutions for</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>digital solutions for</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>any project.</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>any project.</p>
          </div>
        </div>
    </section>
  )
}

export default Experience