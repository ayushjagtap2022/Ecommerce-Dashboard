import React from 'react'
import '../css/Footer.css'
export const Footer = () => {
  return (
    <>
  
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="column">
              <h3>About Us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper tellus et odio placerat, at semper arcu venenatis.</p>
            </div>
            <div className="column">
              <h3>Quick Links</h3>
              <ul >
                <li ><a href="#" className='color'>Home</a></li>
                <li><a href="#" className='color' >About</a></li>
                <li><a href="#" className='color'>Services</a></li>
                <li><a href="#" className='color'>Contact</a></li>
              </ul>
            </div>
            <div className="column">
              <h3>Follow Us</h3>
              <ul className="social-icons">
                <li><a href="#"><img src="/img/flower.jpg" alt="Facebook"/></a></li>
                <li><a href="#"><img src="instagram-icon.png" alt="Instagram"/></a></li>
                <li><a href="#"><img src="linkedin-icon.png" alt="LinkedIn"/></a></li>
                <li><a href="#"><img src="twitter-icon.png" alt="Twitter"/></a></li>
              </ul>
            </div>
          </div>
          <center className="copyright">&copy; 2023 Your Company. All rights reserved.</center>
        </div>
      </footer>
    </>
  )
}
export default Footer