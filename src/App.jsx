import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Scroll from './components/Scroll/Scroll'
import About from './components/About/About'
import Why from './components/Why/Why'
import Service from './components/service/Service'
import Slider from './components/Slider/Slider'
import Token from './components/Token/Token'
import Accordion from './components/acoordion/Accordion'
import Data from './components/Data/Data'
import Footer from './components/footer/Footer'


function App() {
 

  return (
    <>
      <Header/>
      <Scroll children={<Home/>}/>
      <Scroll children={<About/>} />
      <Scroll children={<Why/>}/>
      <Scroll children={<Service/>} />
      <Scroll children={<Slider/>}/>
      <Scroll children={<Token/>} />
      <Scroll children={<Data/>}/>
      <Footer/>
    </>
  )
}

export default App
