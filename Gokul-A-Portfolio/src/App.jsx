import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import ScrollUp from './Components/Scrollup/ScrollUp'
import Projects from './Components/Projects/Projects'


function App() {

  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />


      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
