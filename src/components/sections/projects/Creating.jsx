import React from 'react'

function Creating() {
  return (
    <section className='w-full md:h-auto xl:h-screen md:pt-24 xl:pt-0 max-h-screen flex justify-center items-center'>
        <div className="w-4/5 py-28 xl:py-16 2xl:py-36 flex flex-col justify-center">
            <div className="flex flex-col font-modern-era-medium text-whites text-[2rem] md:text-5xl 2xl:text-7xl uppercase">
                <div className="wrapper flex gap-4 leading-none">
                    <h1>Create</h1>
                    <div className="words w-fit h-7 md:h-10 2xl:h-[58px] flex flex-col uppercase overflow-hidden">
                        <span className='bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent'>simple</span>
                        <span className='bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent'>fast</span>
                        <span className='bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent'>Efficient</span>
                        <span className='bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent'>simple</span>
                    </div>
                </div>
                <h1>Website</h1>
            </div>
            <p className='text-sm 2xl:text-lg text-gray font-modern-era-regular md:w-3/5 xl:w-2/5'>In simple terms, the flow of web development is simple like that, but each project has a different level so there is more customization.</p>
            <div className="w-full grid grid-cols-[2rem_1fr] md:grid-cols-none grid-rows-none md:grid-rows-[1fr_2rem] gap-3 justify-center items-center mt-16">
                <div className="w-full grid grid-rows-3 md:grid-rows-none grid-cols-none md:grid-cols-3 basis-auto xl:gap-32">
                    <div className="flex flex-1 flex-col gap-2 md:gap-4">
                        <h1 className='font-modern-era-regular text-2xl xl:text-3xl leading-none 2xl:text-4xl text-whites'>Create Flow <br/> Process</h1>
                        <p className='text-gray font-modern-era-light text-sm 2xl:text-base text-wrap'>The beginning of website creation in Joget DX makes the flow process provided in it.</p>
                    </div>
                    <div className="flex flex-1 flex-col text-left md:text-center gap-2 md:gap-4">
                        <h1 className='font-modern-era-regular text-2xl xl:text-3xl leading-none 2xl:text-4xl text-whites'>Create or <br/> Customize Forms</h1>
                        <p className='text-gray font-modern-era-light text-sm 2xl:text-base text-wrap'>Create or customize the form if needed and insert the form into the Joget DX flow.</p>
                    </div>
                    <div className="flex flex-1 flex-col text-left md:text-right gap-2 md:gap-4">
                        <h1 className='font-modern-era-regular text-2xl xl:text-3xl leading-none 2xl:text-4xl text-whites'>Deploy <br/> Website</h1>
                        <p className='text-gray font-modern-era-light text-sm 2xl:text-base text-wrap'>After creating the process flow and forms, you can immediately deploy if the web application is ready to use.</p>
                    </div>
                </div>
                <div className="w-full h-full md:h-8 order-first md:order-none relative flex flex-col justify-center">
                    <div className="w-full h-full grid grid-rows-3 md:hidden items-center justify-center">
                        <div className="relative w-full h-full flex flex-col items-center">
                            <div className="absolute z-10 w-4 h-4 rounded-full bg-whites"></div>
                            <div className="w-[1px] h-full bg-whites"></div>
                        </div>
                        <div className="relative w-full h-full flex flex-col items-center">
                            <div className="absolute left-0 top-0 z-10 w-4 h-4 rounded-full bg-whites"></div>
                            <div className="w-[1px] h-full bg-whites"></div>
                        </div>
                        <div className="w-full h-full flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-whites"></div>
                        </div>
                    </div>
                    <hr className='hidden md:inline border border-whites border-dashed border-spacing-[1rem]'/>
                    <div className="absolute z-10 w-full h-full hidden md:flex items-center justify-between">
                        {[...Array(3)].map((_, i) => {
                            return (
                                <div key={i} className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 rounded-full bg-whites text-center"></div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Creating