import React from 'react'
import Teams from '../Teams'
import NcsView from '../sections/projects/NcsView'
import Explanation from '../sections/projects/Explanation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import Worked from '../sections/projects/Worked'
import Creating from '../sections/projects/Creating'
import Contact from '../Contact'

function Projects() {
    const sectionHero = useRef()
    const title = useRef()
    const box1 = useRef()
    const box2 = useRef()
    const window = useRef()

    useGSAP(() => {
        const timelineHero = gsap.timeline()

        timelineHero.from(window.current, {
            y: 340,
            duration: 1.4,
            ease: 'power3.out'
        })
        .from(box1.current, {
            y: 200,
            duration: 1.2,
            ease: 'power3.out'
        })
        .from(box2.current, {
            y: 200,
            duration: 1.2,
            ease: 'power3.out'
        }, "-=1")
        .from(title.current, {
            y: 300,
            delay: .2,
            duration: 1.3,
            ease: 'power4.out',
            skewY: 9,
            stagger: {
                amount: .4
            }
        }, '-=2')
    })

    return (
        <main className='bg-[#121212]'>
            <section className='relative w-full py-24 2xl:py-32 flex justify-center items-center'>
                <div className="w-4/5">
                    <div className="w-full h-auto grid md:grid-cols-[1fr_60%] xl:grid-cols-[1fr_45%] 2xl:grid-cols-[1fr_40%] gap-6 xl:gap-8 mb-8">
                        <div className="overflow-hidden py-2">
                            <h1 ref={title} className='font-modern-era-medium text-whites text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl'>HRD<span className='text-[#F05222]'>corp</span><br/> Project</h1>
                        </div>
                        <div className="w-full h-full flex gap-3 md:gap-4 xl:gap-8 justify-end overflow-hidden">
                            <div ref={box1} className="w-full h-full flex flex-col gap-4 xl:gap-6 bg-gradient-to-br from-primary from-5% py-4 px-4 xl:px-8 border border-whites/10 rounded-lg">
                                <Teams/>
                                <p className='text-whites leading-tight text-wrap text-sm md:text-xs xl:text-sm 2xl:text-base font-modern-era-light'>We collaborated with the Malaysian team to create a government website.</p>
                            </div>
                            <div ref={box2} className="w-auto h-full flex justify-center items-center gap-6 bg-gradient-to-br from-primary from-5% py-4 px-4 xl:px-8 border border-whites/10 rounded-lg">
                                <span className='text-8xl 2xl:text-9xl'>🤝</span>
                            </div>
                        </div>
                    </div>
                    <div ref={window} className="relative w-full h-auto border border-whites/40 rounded-[2.5rem] md:rounded-3xl mt-1 md:pt-5 xl:pt-2 2xl:pt-4 py-3 md:pb-5 xl:pb-3 px-3 md:px-5 xl:px-3">
                        <div className="absolute z-10 left-0 top-0 w-full h-10 flex justify-center">
                            <div className="w-1/2 bg-[#121212] border-l border-r border-b rounded-br-2xl rounded-bl-2xl"></div>
                        </div>
                        <div className="hidden lg:flex gap-2 ps-4 py-4">
                            {[...Array(3)].map((_, i) => {
                                return (
                                    <div key={i} className="w-3 h-3 2xl:w-4 2xl:h-4 border border-whites/40 rounded-full"></div>
                                )
                            })}
                        </div>
                        <NcsView/>
                    </div>
                </div>
            </section>
            <Explanation/>
            <Worked/>
            <Creating/>
            <Contact theme='dark'/>
        </main>
    )
}

export default Projects