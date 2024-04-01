import LandingPage from './components/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import Projects from './components/pages/Projects'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Design from './components/pages/Design'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'auto'})
  }, [pathname])

  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='design' element={<Design/>}/>
    </Routes>
  )
}

export default App
