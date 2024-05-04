import React from "react";
import "./privacy.css";

export default function CodeOfConduct() {
  return (
    <div className="termsection">
      <header>
        <h2>
          <strong>Code of Conduct</strong>
        </h2>
      </header>

      <section className="termcontainer">
        <p>
          Our company values guide us in our day-to-day interactions and
          decision-making. Our open source projects are no exception. Trust,
          respect, collaboration, and transparency are core values we believe
          should live and breathe within our projects. Our community welcomes
          interns from around the world with different experiences, unique
          perspectives, and great ideas to share.
        </p>

        <h2>Our Pledge</h2>
        <p>
          In the interest of fostering an open and welcoming environment, we
          pledge to making participation in our project and our community a
          harassment-free experience for everyone, regardless of age, body size,
          disability, ethnicity, sex characteristics, gender identity and
          expression, level of experience, education, socio-economic status,
          nationality, personal appearance, race, religion, or sexual identity
          and orientation.
        </p>

        <h2>Our Standards</h2>
        <p>Examples of behavior that contributes to creating a positive environment include:</p>
        <ul>
          <li>Using welcoming and inclusive language</li>
          <li>Being respectful of differing viewpoints and experiences</li>
          <li>Gracefully accepting constructive criticism</li>
          <li>Attempting collaboration before conflict</li>
          <li>Focusing on what is best for the community</li>
          <li>Showing empathy towards other community members</li>
          <li>Adding your perspective and creativity to avoid duplicating the original work</li>
        </ul>
        <p>Examples of unacceptable behavior by interns include:</p>
        <ul>
          <li>Plagiarism, copying, or directly reproducing someone else's work</li>
          <li>Sharing falsified payment receipt screenshots</li>
          <li>Violence, threats of violence, or inciting others to commit self-harm</li>
          <li>The use of sexualized language or imagery and unwelcome sexual attention or advances</li>
          <li>Trolling, intentionally spreading misinformation, insulting/derogatory comments, and personal or political attacks</li>
          <li>Public or private harassment</li>
          <li>Publishing others' private information, such as a physical or electronic address, without explicit permission</li>
          <li>Abuse of the reporting process to intentionally harass or exclude others</li>
          <li>Advocating for, or encouraging, any of the above behavior</li>
          <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
        </ul>

        {/* Include other sections of your code of conduct similarly */}
      </section>
    </div>
  );
}
