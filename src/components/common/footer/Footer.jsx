import React from "react"
// import { blog } from "../../../dummydata"
import "./footer.css"


const Footer = () => {
  const date = new Date()
  const copyrightYear = date.getFullYear();
  return (
    <div className="footer__container">
      <footer>
        <div className='container '>
          <div className='box logop'>
            <h1>SHARP-CODE</h1>
            <span>THINK SHARP CODE SMART</span>
            <p className="footp">Never let University interfere with your education</p>

            <a href="https://www.linkedin.com/company/sharpcode01/" target="_blank" className='fab fa-linkedin icon'></a>
            <a href="https://www.instagram.com/sharp.code?igsh=cHVoeWFrOXFsbTl5" target="_blank" className='fab fa-instagram icon'></a>
            {/* <a className='fas fa-times-circle icon'></a> */}
          </div>

          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <a href="/abouthome"><li>About Us</li></a>
              <a href="/team"><li>Internship</li></a>
              <a href="/faq"><li>FAQ</li></a>
              <a href="/contact"><li>  Contact Us</li></a>
              <li><i className='fa fa-envelope'></i>  team@sharpcode.in</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <a href="/register"><li>Registration</li></a>
              <a href="/login"><li>Login</li></a>
              <a href="/update"><li>Update Details</li></a>
              <a href="/submission"><li>Task Submission</li></a>

            </ul>
          </div>
          <div className='box link'>
            <h3>About Us</h3>
            <ul>
              <a href="/privacy"><li>Privacy and Policy</li></a>
              <a href="/termandcondition"><li>Terms and conditions</li></a>
              <a href="/codeofconduct"><li>Code of Conduct</li></a>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©{copyrightYear} All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
