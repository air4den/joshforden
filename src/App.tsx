// import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Experience from './components/Experience';
import Skills from './components/Skills'
import Projects from './components/Projects';
import About from './components/About';

import {useState, useEffect} from 'react';

import './App.css'

const SECTIONS: Record<string, string> = {
  hero: '~',
  about: '~/about',
  experience: '~/experience',
  projects: '~/projects'
}

export default function App() {
  const [currentSection, setCurrentSection ] = useState('Home')
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
    const onScroll = () => {
      const thirdY = window.innerHeight / 3
      let closestId = sections[0].id
      let closestDist = Infinity

      sections.forEach(sec => {
        const rect = sec.getBoundingClientRect()
        const secMid = (rect.top + rect.height) / 2
        const dist = Math.abs(secMid - thirdY)
        if (dist < closestDist) {
          closestDist = dist
          closestId = sec.id
        }
      })
      const title = SECTIONS[closestId] || closestId
      setCurrentSection(title)
    }
    window.addEventListener('scroll', onScroll, {passive: true})
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <>
      <header>
        <Navbar currentSection={currentSection}/>
      </header>
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        {/* <Projects /> */}

      </main>
      <footer>
        <p>
          © {new Date().getFullYear()} Josh Forden. All Rights Reserved. <br/>
          Built with 🫶🏻 in Atlanta, GA. YNWA. THWg 🐝.
        </p>
      </footer>
    </>
  );
}