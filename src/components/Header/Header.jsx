import React from "react";
import Profile from "../../assests/profile.jpg";
import { Link } from "react-router-dom";
import resume from "../../assests/Resume.pdf";
import Typewriter from "typewriter-effect";
import "./Header.css";

function Home() {
  return (
    <div className="Header">
      <div className="header-content row">
        <div className="column">
          <h1 className="greeting">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>{" "}
            I'M
          </h1>
          <h1 className="heading-name">
            <strong className="main-name">Bosi Bhashvika</strong>
          </h1>
          <div className="typewriter-container">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Computer Science Engineer",
                  "FRONT END DEVELOPER",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          <div className="actions">
            <Link to="/projects" className="btn">
              View Projects
            </Link>
            <a href={resume} className="btn">
              My Resume
            </a>
          </div>
        </div>
        <div className="column profile">
          <img src={Profile} alt="Profile" className="profile-img" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Home;
