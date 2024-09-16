import React from 'react'
import './service.css'

const Service = () => {
    const data=[
        {
            src:'./img/icon-7.png',
            title:'Currency Wallet',
            text:'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo',
        },
        {
            src:'./img/icon-3.png',
            title:'Currency Transaction',
            text:'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo',
        },
        {
            src:'./img/icon-9.png',
            title:'Bitcoin Investment',
            text:'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo',
        },
        {
            src:'./img/icon-5.png',
            title:'Currency Exchange',
            text:'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo',
        },
        {
            src:'./img/icon-2.png',
            title:'Bitcoin Escrow',
            text:'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo',
        },
        {
            src:'./img/icon-8.png',
            title:'Token Sale',
            text:'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo',
        }
    ]
  return (
    <section className='services' id='service'>
        <h2>Services</h2>
        <p style={{textAlign:'center'}}>Buy, Sell And Exchange Cryptocurrency</p>
        <div className="grid-services">
            {data.map((item)=>{
                return <div className='card' key={item.title}>
                    <img src={item.src} alt="" />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            })}
        </div>
    </section>
  )
}

export default Service