import React from 'react'
import Hero from '../Hero'
import Detail from '../Detail'
import Experience from '../Experience'
import ListExpand from '../ListExpand'
import Contact from '../Contact'

function LandingPage() {
  return (
    <main className='bg-primary'>
        <Hero/>
        <Detail/>
        <Experience/> 
        <ListExpand/>
        <Contact/>
    </main>
  )
}

export default LandingPage