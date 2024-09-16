import React from 'react'
import './home.css'
const Home = () => {
  return (
    <section className='home' id='home'> 
      <div className="home-text">
        <h1>Make Better Life With<br/> 
        Trusted CryptoCoin</h1>
        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
        Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        <a href="#" className='btn'>explore more</a>
      </div>
      <div className="home-image">
        <img src="./img/hero-1.png" alt="" />
      </div>
    </section>
  )
}

export default Home