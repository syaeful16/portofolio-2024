import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
import { useRef } from 'react'
import Contact from '../Contact'

import studentStaff from '../../assets/images/student_staff.png'
import timOtakKanan from '../../assets/images/tim_otak_kanan.png'
import bisaAiImg from "../../assets/images/Bisa-Bussines.png"
import mbkm from "../../assets/images/penggerak_mbkm.png"


gsap.registerPlugin(ScrollTrigger) 

function Design() {
    let title = useRef()

    useGSAP(() => {
        let block = document.querySelectorAll('.block-img')
        let duration = 0.5
        let stagger = duration
        let repeatDelay = 0.045 * (block.length - 1)

        let titleTimeline = gsap.timeline()

        titleTimeline.from(title.current, {
            y: -400,
            duration: 2,
            opacity: 0,
            ease: "power3.out"
        })

        gsap.from(".block-img", {
            scale: 0,
            duration: 4.5,
            top: '50%',
            left: '50%',
            transform: 'translateZ(-200px)',
            ease: "power3.out",
            stagger: {
                each: duration,
                repeat: -1,
                repeatDelay: repeatDelay
            }
        })

        let mm = gsap.matchMedia()

        mm.add('(min-width: 768px)', () => {
            // Detail Activity Organization
            const details = gsap.utils.toArray(".desktop-content:not(:first-child)")
            console.log(details)
            const photos = gsap.utils.toArray(".desktop-photo:not(:first-child)")
            console.log(photos)
    
            gsap.set(photos, {yPercent:101})
            const allPhotos = gsap.utils.toArray(".desktop-photo")
    
            ScrollTrigger.create({
                trigger:"#gallery",
                start:"top top",
                end:"bottom bottom",
                pin:".left"
            })
    
            details.forEach((detail, index)=> {
                let headline = detail.querySelector("h1")
                let animation = gsap.timeline()
                .to(photos[index], {yPercent:0})
                .set(allPhotos[index], {autoAlpha:0})
                ScrollTrigger.create({
                    trigger:headline,
                    start:"top 80%",
                    end:"top 50%",
                    animation:animation,
                    scrub:true,
                    markers:false
                })
            })
        })

    })

    return (
        <main>
            <section className='relative w-screen h-screen bg-red-300'>
                <div className="gallery absolute z-10 w-full h-full bg-[#121212] overflow-hidden">
                    <div className="block-img block-2"></div>
                    <div className="block-img block-1"></div>
                    <div className="block-img block-3"></div>
                    <div className="block-img block-4"></div>
                    <div className="block-img block-5"></div>
                    <div className="block-img block-6"></div>
                    <div className="block-img block-7"></div>
                    <div className="block-img block-8"></div>
                    <div className="block-img block-9"></div>
                    <div className="block-img block-10"></div>
                    <div className="block-img block-11"></div>
                    <div className="block-img block-12"></div>
                    <div className="block-img block-13"></div>
                    <div className="block-img block-14"></div>
                    <div className="block-img block-15"></div>
                    <div className="block-img block-16"></div>
                    <div className="block-img block-17"></div>
                    <div className="block-img block-18"></div>
                    <div className="block-img block-19"></div>
                </div>
                <div className="absolute top-0 left-0 z-20 w-screen h-screen flex justify-center items-center">
                    <div ref={title} className="text-center">
                        <h1 className='text-whites text-xl normal-case'>Hello World!</h1>
                        <h1 className='drop-shadow-lg text-[2.5rem] md:text-7xl lg:text-8xl font-bold font-modern-era-medium bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent uppercase tracking-wide leading-none'>Social media <br/> content design</h1>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 z-20 w-full h-40 bg-gradient-to-t from-[#121212]"></div>
                <div className="absolute top-0 left-0 z-20 w-full h-40 bg-gradient-to-b from-[#121212]"></div>
            </section>
            <section className='w-full h-full flex justify-center bg-[#121212] py-20'>
                <div className="w-4/5 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
                    <div className="">
                        <h6 className='text-sm md:text-lg text-whites font-modern-era-light'>Curious</h6>
                        <h1 className='text-5xl md:text-7xl lg:text-8xl text-[#b2e69d] uppercase font-bold font-modern-era-medium leading-none'>
                            <span className='hidden lg:inline'>About <br/>Me</span>
                            <span className='inline lg:hidden'>About Me</span>
                        </h1>
                    </div>
                    <div className="text-whites flex flex-col gap-4 text-sm md:text-base">
                        <p>I started learning design since high school, when I joined Graphic Design extracurricular. Learning to <span className='text-[#f5ef8c]'>manipulate photos</span> and <span className='text-[#f5ef8c]'>vectorize photos using Phsotoshop.</span></p>
                        <p>After graduating, I continued my education at Telkom Institute of Technology Purwokerto in the field of Informatics Engineering, during my lectures I began to learn <span className='text-[#f5ef8c]'>UI / UX web and mobile design</span>.</p> 
                        <p>Besides that, I also participated in campus activities as a <span className='text-[#f5ef8c]'>Content Design Creator</span> in <span className='text-[#50d8ba]'>Tim Otak Kanan</span>, <span className='text-[#50d8ba]'>Student Staff</span>, <span className='text-[#50d8ba]'>Bisa AI</span>, and <span className='text-[#50d8ba]'>Student Activator of Merdeka Learning Campus.</span></p>
                    </div>
                </div>
            </section>
            <section className='w-screen h-auto md:h-screen flex items-center justify-center py-12 md:py-0 bg-[#121212]'>
                <div className="w-4/5 h-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
                    <div className="w-full h-full">
                        <h6 className='text-sm md:text-lg text-whites font-modern-era-light'>Design Using</h6>
                        <h1 className='text-5xl md:text-7xl lg:text-8xl font-modern-era-medium text-[#b2e69d] uppercase font-bold'>Tools</h1>
                    </div>
                    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 text-whites gap-8 md:gap-16">
                        <div className="w-full h-40 md:h-60">
                            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className='w-8 md:w-10 aspect-square'>    <path d="M 5 3 C 3.9 3 3 3.9 3 5 L 3 19 C 3 20.1 3.9 21 5 21 L 19 21 C 20.1 21 21 20.1 21 19 L 21 5 C 21 3.9 20.1 3 19 3 L 5 3 z M 7.7285156 8 L 9.5878906 8 C 11.913891 8 12.193359 10.140469 12.193359 10.605469 C 12.193359 12.465469 10.891641 13.115234 9.6816406 13.115234 L 8.5644531 13.115234 L 8.5644531 15.068359 C 8.5644531 15.530359 8.1905156 15.90625 7.7285156 15.90625 C 7.2665156 15.90625 6.890625 15.530359 6.890625 15.068359 L 6.890625 8.8378906 C 6.890625 8.3758906 7.2665156 8 7.7285156 8 z M 8.5644531 9.3027344 L 8.5644531 11.814453 L 9.6816406 11.814453 C 10.425641 11.814453 10.611328 11.256469 10.611328 10.605469 C 10.612328 9.9534687 10.333641 9.3027344 9.6816406 9.3027344 L 8.5644531 9.3027344 z M 15.169922 9.953125 C 15.995922 9.953125 16.593359 10.245266 16.943359 10.697266 C 17.295359 11.151266 16.966578 11.8125 16.392578 11.8125 L 16.296875 11.8125 C 16.026875 11.8125 15.759063 11.665109 15.664062 11.412109 C 15.581062 11.192109 15.417922 11.068359 15.169922 11.068359 C 14.890922 11.068359 14.611328 11.254953 14.611328 11.626953 C 14.611328 12.556953 17.308594 12.277219 17.308594 14.324219 C 17.308594 15.721219 15.913922 16 15.169922 16 C 14.284922 16 13.663688 15.637437 13.304688 15.148438 C 12.968687 14.691437 13.296281 14.046875 13.863281 14.046875 C 14.131281 14.046875 14.392188 14.190453 14.492188 14.439453 C 14.646187 14.825453 15.023922 14.882813 15.169922 14.882812 C 15.541922 14.882812 15.820313 14.696219 15.820312 14.324219 C 15.820312 13.487219 13.121094 13.581703 13.121094 11.720703 C 13.121094 10.325703 14.424922 9.953125 15.169922 9.953125 z"/></svg>
                            <h1 className='text-xl md:text-2xl my-2'>Adobe Photoshop</h1>
                            <p className='text-sm md:text-base text-gray leading-tight'>I use Photoshop for photo editing purposes such as manipulation and creating vectors from a photo. I also use it to create product packaging mockups.</p>
                        </div>
                        <div className="w-full h-40 md:h-60">
                            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className='w-8 md:w-10 aspect-square'><path d="M 5 3 C 3.9 3 3 3.9 3 5 L 3 19 C 3 20.1 3.9 21 5 21 L 19 21 C 20.1 21 21 20.1 21 19 L 21 5 C 21 3.9 20.1 3 19 3 L 5 3 z M 9.5371094 8 L 9.8847656 8 C 10.247766 8 10.570547 8.2321719 10.685547 8.5761719 L 12.789062 14.888672 C 12.971062 15.435672 12.564281 16 11.988281 16 L 11.974609 16 C 11.595609 16 11.262156 15.746859 11.160156 15.380859 L 10.878906 14.363281 L 8.5429688 14.363281 L 8.2617188 15.380859 C 8.1597188 15.746859 7.8272656 16 7.4472656 16 C 6.8712656 16 6.4645312 15.437625 6.6445312 14.890625 L 8.734375 8.578125 C 8.849375 8.232125 9.1731094 8 9.5371094 8 z M 9.7070312 10.164062 L 8.9160156 13.015625 L 10.5 13.015625 L 9.7070312 10.164062 z M 15.734375 10.59375 C 17.263375 10.59375 17.720703 12.080688 17.720703 12.929688 C 17.721703 12.930687 17.779125 13.685547 16.828125 13.685547 L 14.767578 13.685547 C 14.815578 14.036547 14.959266 14.317297 15.197266 14.529297 C 15.435266 14.740297 15.736609 14.871703 16.099609 14.845703 C 16.305609 14.830703 16.523563 14.774219 16.726562 14.699219 C 16.734562 14.696219 16.739094 14.702172 16.746094 14.701172 C 16.794094 14.688172 16.840578 14.671875 16.892578 14.671875 C 17.207578 14.671875 17.464844 14.927188 17.464844 15.242188 C 17.464844 15.483187 17.313563 15.687484 17.101562 15.771484 C 17.099563 15.773484 17.098703 15.78025 17.095703 15.78125 C 16.754703 15.90425 16.324906 16 16.003906 16 C 15.200906 16 14.547969 15.759344 14.042969 15.277344 C 13.538969 14.795344 13.283203 14.152609 13.283203 13.349609 L 13.283203 13.210938 C 13.283203 12.672937 13.575375 10.59375 15.734375 10.59375 z M 15.605469 11.767578 C 15.147469 11.767578 14.765625 12.210937 14.765625 12.710938 L 16.386719 12.710938 C 16.385719 12.245938 16.084469 11.767578 15.605469 11.767578 z"/></svg>
                            <h1 className='text-xl md:text-2xl my-2'>Adobe After Effect</h1>
                            <p className='text-sm md:text-base text-gray leading-tight'>Ea nostrud velit irure et consectetur nulla dolore sunt proident dolor ea. Ea eiusmod ea velit consectetur veniam anim. Elit ad id dolore consequat magna cillum velit aute voluptate.</p>
                        </div>
                        <div className="w-full h-40 md:h-60">
                            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className='w-8 md:w-10 aspect-square'><path d="M 5 3 C 3.898438 3 3 3.898438 3 5 L 3 19 C 3 20.101563 3.898438 21 5 21 L 19 21 C 20.101563 21 21 20.101563 21 19 L 21 5 C 21 3.898438 20.101563 3 19 3 Z M 15.5 7.5 C 16 7.5 16.40625 7.90625 16.40625 8.40625 C 16.40625 8.90625 16 9.3125 15.5 9.3125 C 15 9.3125 14.59375 8.90625 14.59375 8.40625 C 14.59375 7.90625 15 7.5 15.5 7.5 Z M 9.6875 7.90625 L 11.3125 7.90625 L 14 16.40625 L 12.09375 16.40625 L 11.59375 14.6875 L 9.3125 14.6875 L 8.8125 16.40625 L 7 16.40625 Z M 14.6875 10.09375 L 16.40625 10.09375 L 16.40625 16.40625 L 14.6875 16.40625 Z M 10.5 10.1875 L 9.6875 13.1875 L 11.3125 13.1875 Z"/></svg>
                            <h1 className='text-xl md:text-2xl my-2'>Adobe Illustrator</h1>
                            <p className='text-sm md:text-base text-gray leading-tight'>Ea nostrud velit irure et consectetur nulla dolore sunt proident dolor ea. Ea eiusmod ea velit consectetur veniam anim. Elit ad id dolore consequat magna cillum velit aute voluptate.</p>
                        </div>
                        <div className="w-full h-40 md:h-60">
                            <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className='w-8 md:w-10 aspect-square'><path d="M8.537 24L8.537 24c-1.933 0-3.5-1.567-3.5-3.5l0 0c0-1.933 1.567-3.5 3.5-3.5h3.5v3.5C12.037 22.433 10.47 24 8.537 24zM16.5 8H13V1h3.5C18.433 1 20 2.567 20 4.5l0 0C20 6.433 18.433 8 16.5 8zM8.5 8H12V1H8.5C6.567 1 5 2.567 5 4.5l0 0C5 6.433 6.567 8 8.5 8zM8.5 16H12V9H8.5C6.567 9 5 10.567 5 12.5l0 0C5 14.433 6.567 16 8.5 16zM16 9A3 3 0 1016 15 3 3 0 1016 9z"/></svg>
                            <h1 className='text-xl md:text-2xl my-2'>Figma</h1>
                            <p className='text-sm md:text-base text-gray leading-tight'>Ea nostrud velit irure et consectetur nulla dolore sunt proident dolor ea. Ea eiusmod ea velit consectetur veniam anim. Elit ad id dolore consequat magna cillum velit aute voluptate.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='gallery' className='w-full bg-[#121212] grid grid-cols-1 md:grid-cols-2 px-10 md:px-20 lg:px-40'>
                <div className="left w-full h-screen hidden md:flex flex-col justify-center">
                    <div className="desktop-photos relative w-[40vw] md:h-2/5 lg:h-1/2 overflow-hidden">
                        <div className="desktop-photo absolute w-full h-full bg-[#4F50B7] py-10 rounded-3xl">
                            <img src={studentStaff} alt="Student Staff" className='w-full h-full object-contain'/>
                        </div>
                        <div className="desktop-photo absolute w-full h-full bg-[#FE3843] py-10 rounded-3xl">
                            <img src={timOtakKanan} alt="Tim Otak Kanan" className='w-full h-full object-contain'/>
                        </div>
                        <div className="desktop-photo absolute w-full h-full bg-[#FFE991] py-10 rounded-3xl">
                            <img src={bisaAiImg} alt="Bisa AI" className='w-full h-full object-contain'/>
                        </div>
                        <div className="desktop-photo absolute w-full h-full bg-[#F0F0F0] py-10 rounded-3xl">
                            <img src={mbkm} alt="Bisa AI" className='w-full h-full object-contain'/>
                        </div>
                    </div>
                </div>
                <div className="right w-full">
                    <div className="mobile-content w-full flex-1 gap-16 inline-grid md:hidden py-20">
                        <div className="flex flex-col">
                            <div className="w-full h-56 bg-[#4F50B7] rounded-xl py-2">
                                <img src={studentStaff} alt="Student Staff" className='w-full h-full object-contain'/>
                            </div>
                            <div className="flex flex-col justify-center gap-2 mt-6">
                                <h1 className='text-whites text-2xl font-modern-era-medium'>Student Staff</h1>
                                <p className='text-gray text-sm font-modern-era-regular leading-tight'>Aliqua commodo ad culpa ad anim qui eiusmod eu non culpa veniam. Elit commodo cupidatat enim tempor labore aliquip minim ipsum dolore cupidatat. Ex elit excepteur ut eu magna. Id do mollit consequat tempor ad labore excepteur veniam non. Ipsum dolore ex cillum et exercitation qui sit duis consequat nulla. Duis culpa laboris officia voluptate officia.</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-full h-56 bg-[#FE3843] rounded-xl py-2">
                                <img src={timOtakKanan} alt="Student Staff" className='w-full h-full object-contain'/>
                            </div>
                            <div className="flex flex-col justify-center gap-2 mt-6">
                                <h1 className='text-whites text-2xl font-modern-era-medium'>Tim Otak Kanan</h1>
                                <p className='text-gray text-sm font-modern-era-regular leading-tight'>Aliqua commodo ad culpa ad anim qui eiusmod eu non culpa veniam. Elit commodo cupidatat enim tempor labore aliquip minim ipsum dolore cupidatat. Ex elit excepteur ut eu magna. Id do mollit consequat tempor ad labore excepteur veniam non. Ipsum dolore ex cillum et exercitation qui sit duis consequat nulla. Duis culpa laboris officia voluptate officia.</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-full h-56 bg-[#FFE991] rounded-xl py-2">
                                <img src={bisaAiImg} alt="Student Staff" className='w-full h-full object-contain'/>
                            </div>
                            <div className="flex flex-col justify-center gap-2 mt-6">
                                <h1 className='text-whites text-2xl font-modern-era-medium'>Bisa AI</h1>
                                <p className='text-gray text-sm font-modern-era-regular leading-tight'>Aliqua commodo ad culpa ad anim qui eiusmod eu non culpa veniam. Elit commodo cupidatat enim tempor labore aliquip minim ipsum dolore cupidatat. Ex elit excepteur ut eu magna. Id do mollit consequat tempor ad labore excepteur veniam non. Ipsum dolore ex cillum et exercitation qui sit duis consequat nulla. Duis culpa laboris officia voluptate officia.</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-full h-56 bg-[#F0F0F0] rounded-xl py-2">
                                <img src={mbkm} alt="Student Staff" className='w-full h-full object-contain'/>
                            </div>
                            <div className="flex flex-col justify-center gap-2 mt-6">
                                <h1 className='text-whites text-2xl font-modern-era-medium'>Mahasiswa Penggerak MBKM</h1>
                                <p className='text-gray text-sm font-modern-era-regular leading-tight'>Aliqua commodo ad culpa ad anim qui eiusmod eu non culpa veniam. Elit commodo cupidatat enim tempor labore aliquip minim ipsum dolore cupidatat. Ex elit excepteur ut eu magna. Id do mollit consequat tempor ad labore excepteur veniam non. Ipsum dolore ex cillum et exercitation qui sit duis consequat nulla. Duis culpa laboris officia voluptate officia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="desktop-contents w-full h-auto md:px-10 lg:px-20 hidden md:inline-grid">
                        <div className="desktop-content min-h-screen flex flex-col justify-center gap-4">
                            <h1 className='text-whites text-5xl font-modern-era-medium'>Student Staff</h1>
                            <p className='text-gray text-sm lg:text-lg font-modern-era-regular leading-tight'>Aliqua commodo ad culpa ad anim qui eiusmod eu non culpa veniam. Elit commodo cupidatat enim tempor labore aliquip minim ipsum dolore cupidatat. Ex elit excepteur ut eu magna. Id do mollit consequat tempor ad labore excepteur veniam non. Ipsum dolore ex cillum et exercitation qui sit duis consequat nulla. Duis culpa laboris officia voluptate officia.</p>
                        </div>
                        <div className="desktop-content min-h-screen flex flex-col justify-center gap-4">
                            <h1 className='text-whites text-5xl font-modern-era-medium'>Tim Otak Kanan</h1>
                            <p className='text-gray text-lg font-modern-era-regular leading-tight'>Aliqua commodo ad culpa ad anim qui eiusmod eu non culpa veniam. Elit commodo cupidatat enim tempor labore aliquip minim ipsum dolore cupidatat. Ex elit excepteur ut eu magna. Id do mollit consequat tempor ad labore excepteur veniam non. Ipsum dolore ex cillum et exercitation qui sit duis consequat nulla. Duis culpa laboris officia voluptate officia.</p>
                        </div>
                        <div className="desktop-content min-h-screen flex flex-col justify-center gap-4">
                            <h1 className='text-whites text-5xl font-modern-era-medium'>Bisa AI</h1>
                            <p className='text-gray text-lg font-modern-era-regular leading-tight'>Aliqua commodo ad culpa ad anim qui eiusmod eu non culpa veniam. Elit commodo cupidatat enim tempor labore aliquip minim ipsum dolore cupidatat. Ex elit excepteur ut eu magna. Id do mollit consequat tempor ad labore excepteur veniam non. Ipsum dolore ex cillum et exercitation qui sit duis consequat nulla. Duis culpa laboris officia voluptate officia.</p>
                        </div>
                        <div className="desktop-content min-h-screen flex flex-col justify-center gap-4">
                            <h1 className='text-whites text-5xl font-modern-era-medium'>Mahasiswa Penggerak MBKM</h1>
                            <p className='text-gray text-lg font-modern-era-regular leading-tight'>Aliqua commodo ad culpa ad anim qui eiusmod eu non culpa veniam. Elit commodo cupidatat enim tempor labore aliquip minim ipsum dolore cupidatat. Ex elit excepteur ut eu magna. Id do mollit consequat tempor ad labore excepteur veniam non. Ipsum dolore ex cillum et exercitation qui sit duis consequat nulla. Duis culpa laboris officia voluptate officia.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Contact theme='dark'/>
        </main>
    )
}

export default Design