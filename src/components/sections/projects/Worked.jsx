import React from 'react'
import code from '../../../assets/images/code.png'
import flow from '../../../assets/images/flow.png'
import { Link } from 'react-router-dom'
import ss_formbuilder from '../../../assets/images/ss_form_builder.png'
import slide1 from '../../../assets/images/slide1.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'


function Worked() {
  const sectionBox = useRef()
  const boxCode = useRef()
  const boxFlow = useRef()
  const boxForm = useRef()

  useGSAP(() => {
    const showBox = gsap.timeline({
      scrollTrigger: {
        trigger: sectionBox.current,
        start: 'top 60%',
        end: '40% 60%',
        scrub: 2,
        snap: {
          snapTo: 'labels',
          ease: 'power3.out'
        },
        markers: true
      }
    })

    showBox.addLabel('start')
    .from(boxCode.current, { y: 350 })
    .addLabel('start-boxFlow')
    .from(boxFlow.current, { y: 350 }, '-=.45')
    .addLabel('start-boxForm')
    .from(boxForm.current, { y: 400 }, '-=.4')

  })

  return (
    // bg-[#121212]
    <section ref={sectionBox} className='w-full py-10 flex justify-center items-center'>
        <div className="w-4/5">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-[1fr_14rem] xl:grid-cols-[1fr_24rem] 2xl:grid-cols-[1fr_34rem] gap-4 xl:gap-8">
                <div ref={boxCode} className="w-full flex flex-col bg-gradient-to-br from-primary from-[2%] p-4 xl:p-6 2xl:p-10 border border-whites/10 rounded-lg">
                  <h5 className='text-xs 2xl:text-sm text-[#9BCF53]'>{"{code}"}</h5>
                  <h1 className='text-whites text-xl md:text-lg xl:text-3xl 2xl:text-4xl font-modern-era-regular mt-2 mb-4 md:mb-8'>Create Plugin</h1>
                  <img src={code} alt="code" className='w-full object-contain' />
                </div>
                <div ref={boxFlow} className="w-full flex flex-col bg-gradient-90 from-primary from-5% p-5 md:p-4 xl:p-6 2xl:p-10 border border-whites/10 rounded-lg">
                    <h5 className='text-xs 2xl:text-sm text-[#9BCF53]'>{"{flow}"}</h5>
                    <h1 className='text-whites text-xl md:text-lg xl:text-3xl 2xl:text-4xl font-modern-era-regular mt-2 mb-8'>Create Flow Process</h1>
                    <img src={flow} alt="code" className='w-full h-24 xl:h-36 2xl:h-48 object-contain' />
                </div>
                <div ref={boxForm} className="w-full grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-8 md:gap-14 bg-gradient-90 from-primary from-5% p-5 md:p-4 border border-whites/10 rounded-lg">
                  <div className="w-full h-52 md:h-80 bg-whites rounded">
                    <img src={ss_formbuilder} alt="screenshot form builder" className='w-full h-full object-cover rounded-md'/>
                  </div>
                  <div className="flex flex-col justify-center py-0 pe-5 md:pe-10">
                    <h5 className='text-xs 2xl:text-sm text-[#9BCF53]'>{"{workflow}"}</h5>
                    <h1 className='text-whites text-xl md:text-lg xl:text-3xl 2xl:text-4xl font-modern-era-regular mt-2 mb-4 2xl:mb-8'>Form Builder</h1>
                    <p className='w-full text-sm md:text-xs xl:text-sm 2xl:text-lg text-wrap text-gray font-modern-era-regular selection:bg-whites'>The form builder is created simply by drag and drop, but we can freely customize the HTML, CSS, and JavaScript as we create a website. We can also create custom text field elements, password fields, and other fields such as HTML tags using Java.</p>
                    <Link to='https://www.joget.org/product/joget-dx/' target='blank' className='w-max text-whites text-sm md:text-xs xl:text-sm 2xl:text-base mt-8 2xl:mt-12 py-2 px-6 border border-whites/50 rounded-full flex gap-4 duration-300 group hover:bg-whites hover:text-primary hover:duration-300'>
                      See Joget DX
                      <svg className='w-3 2xl:w-4 fill-whites duration-300 group-hover:fill-primary group-hover:duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Worked