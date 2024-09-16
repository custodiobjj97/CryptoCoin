import React from 'react'
import './token.css'

const Token = () => {
  return (
    <section className='token'>
        <h2>Token Sale</h2>
        <p className='color-text'>Token Sale Countdown</p>
        <div className="grid-prices">
            <div className="price">
                <h3>0</h3>
                <p className='color-text'>Days</p>
            </div>
            <div className="price">
              <h3>0</h3>
              <p className='color-text'>Hours</p>
            </div>
            <div className="price">
            <h3>0</h3>
            <p className='color-text'>Minutes</p>
            </div>
            <div className="price">
            <h3>0</h3>
            <p className='color-text'>Seconds</p>
            </div>
        </div>
        <a href="#" className='btn'>Buy Token</a>

        <div className="prices-icons">
            <img src="./img/payment-1.png" alt="" />
            <img src="./img/payment-2.png" alt="" />
            <img src="./img/payment-3.png" alt="" />
            <img src="./img/payment-4.png" alt="" />
        </div>
    </section>
  )
}

export default Token