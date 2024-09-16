import React from 'react'
import Accordion from '../acoordion/Accordion';
import './data.css'

const Data = () => {
    const data=[
        {
            title:'How to build a website ?',
            text:'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.'
        },
        {
            title:'How long will it take to get a new website ?',
            text:'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.'
        },
        {
           title:'Do you only create HTML websites ?',
           text:'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.' 
        },
        {
            title:'Will my website be mobile-friendly ?',
            text:'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.'
        },
        {
         title:'Will you maintain my site for me ?',
         text:'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.'
        }
    ]
  return (
    <div className='data' id='roadmap'>
        <h1>FAQs</h1>
        <h2 className='color-text'>Frequently Asked Questions</h2>
        <Accordion items={data}/>
    </div>
  )
}

export default Data