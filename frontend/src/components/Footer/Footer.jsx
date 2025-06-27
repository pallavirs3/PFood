import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>PFood is more than just a food delivery service — it's a vision brought to life by Pallavi R S, a passionate creator dedicated to combining technology and taste. <br />This platform was created to make high-quality food easily accessible to everyone. <br /> Every feature is designed with users in mind — from browsing the menu to placing an order. <br /> PFood aims to make your mealtime not just convenient, but memorable. </p>
            <div className="footer-social-icons">
               <a href="https://github.com/pallavirs3"> <img src={assets.facebook_icon} alt="" /> </a>
                <a href="https://x.com/PallaviRS33?t=51eSxzL9kfXau_-F2p56fA&s=08"> <img src={assets.twitter_icon} alt="" /> </a>
                 <a href="https://www.linkedin.com/in/pallavi-r-s-7234a820b/">  <img src={assets.linkedin_icon} alt="" /> </a>
               
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>genzmonkess108@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2025 PFood - Built with ❤️ by Pallavi R S. All rights reserved.</p>
    </div>
  )
}

export default Footer
