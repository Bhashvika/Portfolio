import React from 'react'
import Header from '../../components/Header/Header'
import Projects from '../Projects/Projects'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import About from '../About/About'
import './Home.css';

const Home = () => {
  return (
    <div>
         <Header/>
         <About/>
         <Skills/>
         <Projects/>
         <Experience/>
         <Contact/>
    </div>
   
  )
}

export default Home