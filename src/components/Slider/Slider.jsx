import React from "react";
import {useKeenSlider} from 'keen-slider/react'
import "keen-slider/keen-slider.min.css"
import './slide.css'

export default function Slider(){
  const [sliderRef]=useKeenSlider({
    loop:true,
  
    slides:{
        perView:2,
        spacing:19,
    },
  })

  return (
    <div className="flex-slider">
        <h2>Roadmap</h2>
        <span className="color-text">We Translate Your Dream Into Reality</span>
      <div ref={sliderRef} className="keen-slider wrapper-slides">
      <div className="keen-slider__slide number-slide1  card-slide">
        <img src="./img/icon-1.png" alt="" />
          <h3>Transaction</h3>
        <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
      </div>
      <div className="keen-slider__slide number-slide2 card-slide">
      <img src="./img/icon-3.png" alt="" />
          <h3>Currency Wallet</h3>
        <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
      </div>
      <div className="keen-slider__slide number-slide3 card-slide">
      <img src="./img/icon-4.png" alt="" />
          <h3>Bitcoin Investment</h3>
        <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
      </div>
      <div className="keen-slider__slide number-slide4 card-slide">
      <img src="./img/icon-5.png" alt="" />
          <h3>Currency Exchange</h3>
        <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
      </div>
      <div className="keen-slider__slide number-slide5 card-slide">
      <img src="./img/icon-6.png" alt="" />
          <h3>Bitcoin Escrow</h3>
        <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
      </div>
      <div className="keen-slider__slide number-slide6 card-slide">
      <img src="./img/icon-7.png" alt="" />
          <h3>Token Sale</h3>
        <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
      </div>
    </div>
    </div>
  )
}