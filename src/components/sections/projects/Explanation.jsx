import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useRef } from 'react'

function Explanation() {
    const section = useRef()

    useGSAP(() => {

        var paragraphs = gsap.utils.toArray('.box-desc .desc-front');
    
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
      })

  return (
    <section ref={section} className='relative w-full h-screen bg-[#121212] flex justify-center items-center text-[2rem] md:text-4xl xl:text-5xl 2xl:text-6xl font-modern-era-medium'>
        <div className="w-4/5 hidden md:flex md:flex-col md:gap-2 2xl:gap-4">
          <div className="box-desc relative w-max">
            <p className='text-gray/40 text-wrap'>HRDC is a website development</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites'>HRDC is a website development</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40'>project aimed at Malaysian</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites'>project aimed at Malaysian</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40'>government health workers,</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites'>government health workers,</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40'>designed to provide easy and</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites'>designed to provide easy and</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40'>efficient access to employees in</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites'>efficient access to employees in</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40'>a company.</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites'>a company.</p>
          </div>
        </div>
        <div className="w-4/5 flex flex-col md:hidden gap-1 md:gap-2 2xl:gap-4">
          <div className="box-desc relative w-max">
            <p className='text-gray/40 text-wrap leading-none'>HRDC is a website</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>HRDC is a website</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 text-wrap leading-none'>development project</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>development project</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>aimed at Malaysian</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>aimed at Malaysian</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>government health</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>government health</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>workers, designed to</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>workers, designed to</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>provide easy and</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>provide easy and</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>efficient access to</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>efficient access to</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>employees in a</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>employees in a</p>
          </div>
          <div className="box-desc relative w-max">
            <p className='text-gray/40 leading-none'>company.</p>
            <p className='desc-front absolute top-0 left-0 text-nowrap overflow-hidden w-0 text-whites leading-none'>company.</p>
          </div>
        </div>
    </section>
  )
}

export default Explanation