import React from 'react'
import './About.css';
import about from '../../assests/about.png'
const About = () => {
  return (
    <div class="About" id="about">
  <div class="about-content">
    <div class="row">
      <div class="column">
        <h1 class="about-heading">About Me</h1>
        <p class="about-description">
          Hello! I am <strong>Bosi Bhashvika</strong>,a dedicated and passionate Full Stack Developer with a strong interest in creating modern and innovative web applications. I am currently exploring the full stack development landscape, aiming to combine my front-end development skills with powerful back-end solutions to build dynamic, scalable, and user-friendly applications.
        </p>
        <p class="about-description">
        As a student of Computer Science, I am always eager to learn new technologies and refine my coding skills. I enjoy tackling complex problems, collaborating on projects, and engaging with the latest industry trends. My journey in development has fueled my enthusiasm for continuous improvement and professional growth.


        </p>
      </div>
      <div class="column about-profile">
        <img src={about} alt="Profile" class="profile-img" />
      </div>
    </div>
  </div>
</div>

  )
}

export default About