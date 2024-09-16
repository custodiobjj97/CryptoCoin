import React,{useEffect} from 'react'
import { FaCheck } from "react-icons/fa";
import {motion,useMotionValue,useTransform, animate} from 'framer-motion'
import './about.css'
const About = () => {
    const count= useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(()=>{
        const animation = animate(count, 123456, {duration: 5});
        return animation.stop
    },[])
    
  return (
    <section className='about' id='about'>
        <div className="about-image">
            <img src="./img/about.png" alt="" />
        </div>
        <div className="about-text">
        <h2>About Us</h2>
        <span className='color-text'>The Most Trusted Cryptocurrency Platform</span>
        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
        <ul className='list-about'>
            <li><FaCheck className='icon'/> Tempor erat elitr rebum at clita</li>
            <li><FaCheck className='icon'/> Tempor erat elitr rebum at clita</li>
            <li><FaCheck className='icon'/> Tempor erat elitr rebum at clita</li>
        </ul>
     
        
        <a href="#" className='btn'>Read More</a>
        </div>

        <div className='section-number'>
        <ul className='list-number'>
            <li>
                 <img src="./img/icon-10.png" alt="" />
                <motion.h1 className='h1-color'>{rounded}</motion.h1>
                <p>Today Transactions</p>
            </li>

            <li>
            <img src="./img/icon-9.png" alt="" />
                <motion.h1 className='h1-color'>{rounded}</motion.h1>
                <p>Monthly Transactions</p>
            </li>

            <li>
            <img src="./img/icon-2.png" alt="" />
                <motion.h1 className='h1-color'>{rounded}</motion.h1>
                <p>Total Transactions</p>
            </li>
            
            
        </ul>
        </div>
    </section>
  )
}

export default About