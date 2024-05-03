import React from "react"
import "./Hero.css"
import { Link } from "react-router-dom"


const Hero = () => {

  return (
    <div className="herosection">
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <h3 className="line-1 anim-typewriter "> Welcome To Sharp-Code........</h3>
            <h1 >Don't let your university, become a barrier in your learning</h1>
            {/* <p >If you are after a New and Exciting learning Experience that can
              Help you reach your Goals and Unleash your full potential then
              come and be our Intern</p> */}
          </div>
        </div>
      </section>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

    </div>
  )
}

export default Hero
