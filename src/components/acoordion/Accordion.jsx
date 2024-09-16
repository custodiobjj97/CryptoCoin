import React, { useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"
import './accordion.css'
const Accordion = ({items}) => {
    const [active,setAcitve]=useState(0);

    const handleClick=(index)=>{
        setAcitve(index === active ? -1 : index)
    }
  return (
    <div className='accordion'>
        {items.map((item,index)=>{
            return <div key={index}>
                <div onClick={() => handleClick(index)} className='title-accordion'>
                    <h3>{item.title}</h3>
                    <p>{index === active ? <MdKeyboardArrowDown fontSize='2rem'/> : <MdKeyboardArrowUp fontSize='2rem'/>}</p>
                </div>
                {index === active && <div className='content-accordion'>{item.text}</div>}
            </div>
        })}
    </div>
  )
}

export default Accordion