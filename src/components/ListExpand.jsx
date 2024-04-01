import React from 'react'
import dosai from '../assets/images/dosai.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const ListExpand = () => {
    const container = useRef()
    const listBox = useRef()

    const listData = [
        {
            'path': 'projects',
            'img': dosai,
            'title': 'Project'
        },
        {
            'path': 'design',
            'img': dosai,
            'title': 'Design'
        },
        {
            'path': 'projects',
            'img': dosai,
            'title': 'Activity'
        }
    ]
    
    useGSAP(() => {
        let timelineAnim = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 50%",
                end: "top 50%",
                snap: {
                    snapTo: 'labels',
                    duration: { min: 0.2, max: 3},
                    delay: 1,
                    ease: 'power3.inOut'
                },
                // markers: true
            }
        })

        timelineAnim.addLabel('show-line')
        .from(listBox.current, {
            opacity: 0
        })
        .addLabel('show-text')
        .from('.text-list', .8, { 
            y: 120,
            ease: 'power4.inOut',
            skewY: 10,
            stagger: {
                amount: 0.5
            }
         })
    })

    return (
        <section ref={container} className='relative w-full h-auto md:h-screen py-32 md:py-0 flex justify-center items-center bg-whites overflow-hidden'>
                <div ref={listBox} className="w-4/5 h-full text-primary flex flex-col justify-center">
                    <h1 className='font-modern-era-medium text-primary/50 text-base'>SELECT</h1>
                    {listData.map((list, i) => {
                        return (
                            <Link key={i} to={list.path} className='listing border-t border-solid border-primary/20 '>
                                <div className="relative group h-max flex items-center justify-between font-modern-era-light text-4xl xl:text-6xl 2xl:text-8xl py-4 xl:py-6 2xl:py-10 px-4 md:px-20">
                                    <div className="flex items-center gap-8 overflow-hidden">
                                        <div className="w-40 -ml-40 hidden md:inline transition-all duration-300 ease-in group-hover:ml-0 group-hover:transition-all group-hover:duration-300 group-hover:ease-in h-full rounded bg-white">
                                            <img src={list.img} alt="Detection of strawberry plant diseases" className='w-full h-auto rounded object-cover'/>
                                        </div>
                                        <div className="overflow-hidden py-2">
                                            <h1 className='text-list inline-block'>{list.title}</h1>
                                        </div>
                                    </div>
                                    <div className="">
                                        <svg className='w-10 md:w-16 h-auto opacity-20 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 group-hover:ease-in' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve">
                                            <g fill="none" stroke="#1F1F1F" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2">
                                                <path d="M15 1L31 1 31 17"></path><path d="M31 1L1 31"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}

                    {/* <Link to="/projects">
                    <div className="relative group h-max flex items-center justify-between font-modern-era-light text-6xl 2xl:text-8xl xl:py-8 2xl:py-10 px-20 border-t border-b border-primary/20 cursor-pointer">
                        <div className="flex items-center gap-8 overflow-hidden">
                            <div className="w-40 -ml-40 transition-all duration-300 ease-in group-hover:ml-0 group-hover:transition-all group-hover:duration-300 group-hover:ease-in h-full rounded bg-white">
                                <img src={dosai} alt="Detection of strawberry plant diseases" className='w-full h-auto rounded object-cover'/>
                            </div>
                            <div className="overflow-hidden py-2">
                                <h1 className='text-list inline-block'>Project</h1>
                            </div>
                        </div>
                        <div className="">
                            <svg className='w-16 h-auto opacity-20 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 group-hover:ease-in' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32" xml:space="preserve">
                                <g fill="none" stroke="#1F1F1F" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2">
                                    <path d="M15 1L31 1 31 17"></path><path d="M31 1L1 31"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    </Link> */}
                    {/* <Link to="/design">
                    <div className="relative group h-max flex items-center justify-between font-modern-era-light text-6xl 2xl:text-8xl py-10 px-20 border-t border-b border-primary/20 cursor-pointer">
                        <div className="flex items-center gap-8 overflow-hidden">
                            <div className="w-40 -ml-40 transition-all duration-300 ease-in group-hover:ml-0 group-hover:transition-all group-hover:duration-300 group-hover:ease-in h-full rounded bg-white">
                                <img src={dosai} alt="Detection of strawberry plant diseases" className='w-full h-auto rounded object-cover'/>
                            </div>
                            <div className="overflow-hidden py-2">
                                <h1 className='text-list inline-block'>Design</h1>
                            </div>
                        </div>
                        <div className="">
                            <svg className='w-16 h-auto opacity-20 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 group-hover:ease-in' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32" xml:space="preserve">
                                <g fill="none" stroke="#1F1F1F" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2">
                                    <path d="M15 1L31 1 31 17"></path><path d="M31 1L1 31"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    </Link> */}
                    {/* <div className="relative group h-max flex items-center justify-between font-modern-era-light text-6xl 2xl:text-8xl py-10 px-20 border-t border-b border-primary/20 cursor-pointer">
                        <a href="#" className='absolute left-0 w-full h-full'></a>
                        <div className="flex items-center gap-8 overflow-hidden">
                            <div className="w-40 -ml-40 transition-all duration-300 ease-in group-hover:ml-0 group-hover:transition-all group-hover:duration-300 group-hover:ease-in h-full rounded bg-white">
                                <img src={dosai} alt="Detection of strawberry plant diseases" className='w-full h-auto rounded object-cover'/>
                            </div>
                            <div className="overflow-hidden py-2">
                                <h1 className='text-list inline-block'>Activity</h1>
                            </div>
                        </div>
                        <div className="">
                            <svg className='w-16 h-auto opacity-20 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 group-hover:ease-in' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32" xml:space="preserve">
                                <g fill="none" stroke="#1F1F1F" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2">
                                    <path d="M15 1L31 1 31 17"></path><path d="M31 1L1 31"></path>
                                </g>
                            </svg>
                        </div>
                    </div> */}
                </div>
        </section>
    )
}

export default ListExpand