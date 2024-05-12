import React from 'react';
import './abouthome.css'; 

export default function AboutCardHome() {
  return (
    <div className="about-section">
      {/* Section 1 */}
      
      <div className="ourmission-main">
        <div className="ourmission">
          <h3>Our Mission</h3>
          <p>
Sharpcode, an MSME and ISO registered startup, is dedicated to empowering students of all backgrounds with the latest technologies for successful careers. Our mission is to enable every individual to upskill at their own pace, creating a robust online learning ecosystem. Inclusivity is key at Sharpcode as we offer practical learning experiences that prepare our students for the job market. With industry experts guiding the way, flexible learning schedules, and a vibrant community, we provide the platform for you to unlock your potential in technology
          </p>
        </div>
      </div>
      <div className="about-recent-content">
        <h2>Recent Stats:</h2>
        <div className='recentdata'>
          <p>100% <span> Students First</span></p>
          <p>150+<span> Enrollments</span></p>
          <p>10+<span> Working on Live Projects</span></p>
          <p>10+ <span>Mentors</span></p>
        </div>
      </div>
      {/* Section 2 */}
      <div className="about-item about-item-alt">
        <div className="about-item-left">
          <img src={process.env.PUBLIC_URL + '/images/logo/ourstory.png'} alt="Stuani Logo" />
        </div>
        <div className="about-item-right">
          <h3>Our story</h3>
          <p>
SHARPCODE was born from a realization: countless students lacked practical skills in computer science, hindering their ability to secure internships, work on live projects, and craft compelling resumes and LinkedIn profiles. This gap led to challenges in securing placements, affecting the student community as a whole. With this insight, SHARPCODE emerged as a solution, aiming to bridge this crucial gap and empower students with the practical skills needed to excel in the industry.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="about-item">
        <div className="about-item-left">
          <img src={process.env.PUBLIC_URL + '/images/logo/stufir.png'} alt="Our Story Image" />
        </div>
        <div className="about-item-right">
          <h3>Students First</h3>
          <p>
At SHARPCODE, we understand that not every student has access to a structured learning guide. Many students juggle demanding schedules, participate in extracurricular activities, and even shoulder responsibilities for loved ones while pursuing their studies. Recognizing these challenges, we developed a self-paced learning internship program. This unique approach allows students to learn at their own pace, gaining valuable skills along the way. Upon completion, students are not only equipped with essential knowledge but are also eligible to work on live projects, preparing them for real-world challenges in their chosen field.
          </p>
        </div>
      </div>
    </div>
  );
}
