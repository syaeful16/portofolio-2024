import React from 'react'

const Button = (props) => {
  return (
    <a href="#" className='group'>
        <div className='relative w-52 h-12 2xl:w-60 2xl:h-16 flex justify-center items-center border border-whites rounded-full text-xl 2xl:text-2xl text-white font-modern-era-regular px-4 2xl:px-6 py-1 2xl:py-2 bg-transparent overflow-hidden'>
            <div className='absolute z-20 flex items-center gap-6 duration-300 group-hover:text-primary group-hover:duration-300'>
                <span>
                    {props.value}
                </span>
                <svg className='w-4 2xl:w-6 fill-whites duration-300 group-hover:fill-primary group-hover:duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
            </div>
            <div className="absolute z-10 left-0 top-0 w-full h-full bg-whites rounded-full -translate-x-full transition-transform ease-in-out duration-300 group-hover:translate-x-0 group-hover:transition-transform group-hover:ease-in-out group-hover:duration-300"></div>
        </div>
    </a>
  )
}

export default Button