import React from "react"
// import Hblog from "./Hblog"
// import HAbout from "./HAbout"
import Hero from "./hero/Hero"
// import Hprice from "./Hprice"
// import H from "./hero/h"
// import Slider from "./slieder/Slider"
import Slider2 from "./slieder/Slider2"
import AboutCard from "../about/AboutCard"
// import Testinomial from "../../testimonials/Testinomial"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <Slider2/>
      {/* <Testinomial/> */}
    </>
  )
}

export default Home
