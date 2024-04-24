import React from "react";
import "./about.css";
import { homeAbout } from "../../dummydata";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="aboutback">
      <h1 className="aboutush1 ourcourses">ABOUT US</h1>
      <section className="aboutHome">
        <div className="container">
          <div className="left" data-aos="fade-right">
            <div className="vertical-line"></div>
            {homeAbout.map((val, index) => {
              if (index % 2 === 0) {
                return (
                  <div className="item flexSB" data-aos="fade-up" key={index}>
                    <div className="img item_img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="right" data-aos="fade-left">
            {homeAbout.map((val, index) => {
              if (index % 2 !== 0) {
                return (
                  <div className="item flexSB" data-aos="fade-up" key={index}>
                    <div className="img item_img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCard;
