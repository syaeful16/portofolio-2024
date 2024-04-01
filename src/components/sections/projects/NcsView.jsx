import React from 'react'
import BothLogo from '../../../assets/images/both_logo.png'
import slide1 from '../../../assets/images/slide1.png'
import slide2 from '../../../assets/images/slide2.png'
import slide3 from '../../../assets/images/slide3.png'
import slide4 from '../../../assets/images/slide4.png'
import leftIcon from '../../../assets/images/leftIcon.svg'
import { useState } from 'react'
import { useEffect } from 'react'

function NcsView() {
    const [slide, setSlide] = useState(0)
    let imageSlide = [slide1, slide2, slide3, slide4]

    const next = () => {
        setSlide((current) => (current === imageSlide.length - 1 ? 0 : current + 1))
    }

    const prev = () => {
        setSlide((current) => (current === 0 ? imageSlide.length - 1 : current - 1))
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSlide((current) => (current === imageSlide.length - 1 ? 0 : current + 1))
        }, 4000);
        
        return () => clearTimeout(timeout)
    }, [slide])
    
    return (
        <div className="grid md:grid-cols-1 xl:grid-cols-2 rounded-[2rem] md:rounded-2xl w-full h-[640px] md:h-auto bg-white">
            <div className="w-full h-full overflow-scroll pt-14 sm:pt-0 py-8 md:py-20 xl:py-10 px-8 md:px-32 xl:px-16 2xl:px-28">
                <img src={BothLogo} alt="logo hrdc" className='w-4/6 md:w-3/6 mb-8 xl:mb-4'/>
                <h1 className='text-4xl 2xl:text-5xl text-[#223164] font-bold mb-8'>Welcome to NCS</h1>
                <div className="w-full flex flex-col gap-4 2xl:gap-8 justify-center items-center">
                    <input type="text" className="w-full border border-gray rounded-md text-xs 2xl:text-sm py-2 px-4" placeholder='username'/>
                    <input type="password" className="w-full border border-gray rounded-md text-xs 2xl:text-sm py-2 px-4" placeholder='password'/>
                    <div className="w-full flex justify-between">
                        <div className="flex items-center">
                            <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-1" />
                            <label htmlFor="checked-checkbox" className="ms-2 text-[10px] md:text-xs 2xl:text-sm text-gray-900">Keep me logged in</label>
                        </div>
                        <span className='cursor-pointer text-right text-[10px] md:text-xs 2xl:text-sm'>Forgot your password?</span>
                    </div>
                    <div className="w-full md:w-4/5 flex flex-col gap-1 text-[10px] md:text-xs 2xl:text-sm">
                        <button className='w-full bg-[#F05222] text-white text-xs 2xl:text-base py-2 rounded-md'>Log in now</button>
                        <span className='text-gray'>Don't have an account?</span>
                        <span className='text-gray'>Register now as <span className='text-primary font-bold'>Employer | Training Provider</span></span>
                    </div>
                    <div className="w-full flex flex-col text-[10px] mt-4 md:text-xs 2xl:text-sm">
                        <h1 className='font-bold text-primary'>Important Notes:</h1>
                        <p className='text-gray'>Please keep your password confidential. Do not share the login details with unauthorized parties.</p>
                    </div>
                    <div className="w-full flex flex-col text-[10px] md:text-xs 2xl:text-sm">
                        <h1 className='font-bold text-primary'>Disclaimer:</h1>
                        <p className='text-gray'>PSMB shall not be liable for any loss or damage caused by the usage of any information obtained from this website. Copyright © 2023 PSMB All rights reserved. Best viewed using latest version of Microsoft Edge, Google Chrome and Mozilla Firefox with minimum resolution of 1024 x 769</p>
                    </div>
                </div>
            </div>
            <div className="relative hidden xl:block w-full h-full p-3">
                <div className="absolute z-10 left-0 px-10 w-full h-full flex justify-center items-center">
                    <div className="w-full flex justify-between">
                        <button onClick={prev} className='w-10 h-10 flex justify-center items-center bg-whites/20 rounded-full'>
                            <img src={leftIcon} alt="left" className='w-3'/>
                        </button>
                        <button onClick={next} className='w-10 h-10 flex justify-center items-center bg-whites/20 rounded-full'>
                            <img src={leftIcon} alt="right" className='w-3 rotate-180'/>
                        </button>
                    </div>
                </div>
                <div className="w-full h-full flex rounded-lg overflow-hidden">
                    {imageSlide.map((image, i) => {
                        return (
                            <img key={i} src={image} alt="slide1" className='w-full h-full object-cover rounded-lg transition-transform ease-in-out duration-500' style={{ transform: `translateX(-${slide * 100}%)`}}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default NcsView