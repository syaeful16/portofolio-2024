import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
import { useRef } from 'react'
import photoHero from '../assets/images/photo-hero.png'
import { useEffect } from 'react'
import { useState } from 'react'


gsap.registerPlugin(ScrollTrigger) 

export default function Hero() {
    const groupTitle = useRef()
    const title = useRef()
    const container = useRef()
    const box2 = useRef()

    const skills = ['Web Designer', 'Fullstack Developer', 'Content Creator']

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        // Menambahkan event listener untuk mendeteksi perubahan ukuran jendela
        window.addEventListener('resize', handleResize);
        const timeOut = setTimeout(() => {
    
            const titleElement = document.getElementById("title");
            if (titleElement) {
                const titleWidth = titleElement.offsetWidth;
                const box2Element = document.getElementById('box-2');
                if (box2Element) {
                box2Element.style.width = titleWidth + 'px';
                }
            }
        }, 200)

        return() => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeOut)
        }
    }, [windowWidth])
    
    useGSAP(() => {
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                // pin: true,
                start: '50% 50%',
                end: '80% 50%',
                scrub: 1,
                snap: {
                    snapTo: 'labels',
                    duration: { min: 0.2, max: 3},
                    delay: 0.2,
                    ease: 'power1.inOut'
                },
                // markers: true
            }
        })

        gsap.from(title.current, 1.8, {
            y: 370,
            ease: 'power4.out',
            delay: .3,
            skewY: 7,
            stagger: {
                amount: 0.4
            }
        })

        t1.addLabel("start")
        .to(groupTitle.current, { y: 300})
        // .addLabel("scale")
        // .to(title.current, { scale: 0.5 })

        gsap.from(box2.current, 2, {
            autoAlpha: 0,
            delay: 0.5
        })

    }, [])

    return (
        <section className='relative w-full h-screen flex justify-center bg-whites' ref={container}>
            <div id='group-title' ref={groupTitle} className="group-title relative mt-24 md:mt-60 lg:mt-16 2xl:mt-20 h-max">
                <div id='box-2' ref={box2} className="flex justify-between p-2">
                    {skills.map((item, i) => {
                        return (
                            <h3 key={i} className='font-modern-era-regular leading-none text-center md:text-start text-sm lg:text-lg 2xl:text-xl text-secondary'>{item}</h3>
                        )
                    })}
                </div>
                <div className="overflow-hidden" id='box'>
                    <h1 id='title' className='text-7xl md:text-9xl xl:text-[9rem] 2xl:text-[16rem] uppercase font-anton inline-block leading-none text-primary' ref={title}>Portofolio</h1>
                </div>
            </div>
            {/* w-[26%] 2xl:w-[35%] */}
            <img src={photoHero} alt="my photo" className='absolute z-10 bottom-0 w-full md:h-[70vh] lg:h-[80vh] object-contain'/>
        </section>
    )
}
