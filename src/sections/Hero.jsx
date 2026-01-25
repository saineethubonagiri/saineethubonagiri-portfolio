import React from "react";
import "./Hero.css";
import profilePic from "../assets/profile-pic.png"; // replace with your picture
import githubIcon from "../assets/github.png"; // replace with your GitHub icon
import linkedinIcon from "../assets/linkedin.png"; // replace with your LinkedIn icon

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <p>Hello, I'm</p>
          <h1>Sai Neethu Bonagiri</h1>
          <h2>Backend-focused Software Engineer building real systems</h2>
          <div className="hero-buttons">
            <button onClick={() => window.open("/assets/resume.pdf")}>Resume</button>
            <button onClick={() => window.location.href="#contact"}>Contact</button>
          </div>
          <div className="hero-socials">
            <img
              src={githubIcon}
              alt="GitHub"
              onClick={() => window.open("https://github.com/saineethubonagiri")}
            />
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              onClick={() => window.open("https://linkedin.com/in/username")}
            />
          </div>
        </div>
        <div className="hero-pic">
          <img src={profilePic} alt="Sai Neethu Bonagiri" />
        </div>
      </div>
      <div className="scroll-down" onClick={() => window.location.href="#about"}>
        ⬇
      </div>
    </section>
  );
};

export default Hero;
