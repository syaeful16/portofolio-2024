import React from 'react'
import Button from './buttons/Button'

const Contact = (props) => {
  const pupil = document.getElementsByClassName('pupil')

  document.onmousemove = (e) => {
    const x = e.clientX * 100 / window.innerWidth + '%'
    const y = e.clientY * 100 / window.innerHeight + '%'

    for(let i = 0; i < 2; i++) {
      pupil[i].style.left = x
      pupil[i].style.top = y

      pupil[i].style.transform = `translate( -${x}, -${y})`
    }
  }
  return (
    <section className={`w-full h-auto py-20 flex flex-col justify-center items-center ${props.theme === 'dark' ? 'bg-[#121212]' : 'bg-primary'} gap-10 md:gap-16 px-3`}>
          <h1 className='text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl font-modern-era-regular text-whites text-center'>Let's create great cool.</h1>
          <div className="flex gap-4 md:gap-14">
            <div className="relative w-16 h-16 md:w-32 md:h-32 xl:w-36 xl:h-36 2xl:w-48 2xl:h-48 rounded-full bg-whites">
              <div className="pupil absolute w-5 h-5 md:w-8 md:h-8 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary"></div>
            </div>
            <div className="relative w-16 h-16 md:w-32 md:h-32 xl:w-36 xl:h-36 2xl:w-48 2xl:h-48 rounded-full bg-whites">
              <div className="pupil absolute w-5 h-5 md:w-8 md:h-8 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary"></div>
            </div>
          </div>
          <Button value='Contact me'/>
          <div className="w-4/5 mt-20 flex justify-between items-center font-modern-era-regular text-sm md:text-base text-whites">
            <div className="flex flex-col">
              <span>Syaefulloh Arnas</span>
              <span>Fullstack Web Developer</span>
            </div>
          </div>
    </section>
  )
}

export default Contact