import React from 'react';
import './footer.css'
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
        <div className='container-footer'>
            <div className='flex-footer'>
                <div className="col-footer-1">
                 <h3 className='color-text icon-footer'> <img src="./img/icon-1.png" alt="" /> CryptoCoin</h3>
                 <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                </div>
                <div className="col-footer">
                    <h2>Newsletter</h2>
                    <p>Clita erat ipsum et lorem et sit, sed stet lorem sit clita.</p>
                    <form className='form-footer' action="#">
                        <input type="text" placeholder='Your Email' />
                        <button>signUp</button>
                    </form>
                </div>
            </div>
            <div className='grid-footer'>
                <div className="col-footer">
                  <h3>Get In Touch</h3>
                <ul>
                    <li>123 Street, New York, USA</li>
                    <li>+012 345 67890</li>
                    <li>info@example.com</li>
                </ul>
                </div>
                <div className="col-footer">
                    <h3>Our Services</h3>
                    <ul>
                        <li><a href="#">Currency Wallet</a></li>
                        <li><a href="#">Currency Transaction</a></li>
                        <li><a href="#">Bitcoin Investment</a></li>
                        <li><a href="#">Token Sale</a></li>
                    </ul>
                </div>
                <div className="col-footer">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Contatc Us</a></li>
                        <li><a href='#'>Our Services</a></li>
                        <li><a href="#">Term & Condition</a></li>
                    </ul>
                </div>
                <div className='icon-footer'>
                    <FaLinkedin/>
                    <FaTwitter/>
                    <FaInstagram/>
                    <FaYoutube/>
                </div>
            </div>
            
        </div>
        <div className='copy'>
            <p>© Your Site Name, All Right Reserved. Designed By HTML Codex Distributed By ThemeWagon</p>
    </div>
    </footer>
  )
}

export default Footer