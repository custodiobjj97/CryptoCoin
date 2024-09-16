import React, { useContext, useEffect, useRef, useState } from 'react'
import {FaBars, FaSun, FaTimes} from 'react-icons/fa'
import './header.css'
import { ThemeColor } from '../Theme/Theme';
import { FaMoon } from 'react-icons/fa6';
const Header = () => {
    const navLinsk=['home','about','service','roadmap']
    const [active,setActive]=useState(false);
    const ref = useRef(null)
    const {theme,toggleTheme} = useContext(ThemeColor)

    const handleClick=()=>{
        setActive(!active)
    }
    const handleClickOutside=(event)=>{
        if(ref.current && !ref.current.contains(event.target)){
            setActive(false)
        }
    }
    const navLinkActive=(e)=>{
        e.preventDefault()
        const href = e.target.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({block: "start", behavior: "smooth" })
    }


    

    useEffect(()=>{
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    },[])

  return (
    <header>
        <a href="#" className='logo'>
            <img src="./img/icon-1.png" alt="" />
            <p>CryptoCoin</p>
        </a>

        <nav ref={ref}>
            <ul className={active ? 'list-menu active': 'list-menu'}>
                {navLinsk.map((item)=>{
                    return <li key={item}><a onClick={navLinkActive} key={item} href={`#${item}`}>{item}</a></li>
                })}
                <a onClick={toggleTheme} className='btn-toggle' href="#">{theme === "light" ? <FaSun color='#000'/> : <FaMoon color='#000'/>}</a>
            </ul>
        </nav>

        <div onClick={handleClick} className="toggle">
           { active ? <FaTimes/> : <FaBars/>}
        </div>
    </header>
  )
}

export default Header