import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div id="experience" className="experience-section">
      <h1 className="experience-title">Professional Experience</h1>
      <div className="experience-content">
        <div className="experience-item">
          <h2 className="company-name">Frontend Developer</h2>
          <p className="company-details">Oasis Infobyte (1 month)</p>
          <p className="technologies-used">Technologies Used: HTML, CSS, JavaScript</p>
          <p className="description">Developed and optimized user interfaces and web pages, focusing on responsive design and user experience.</p>
        </div>

        <div className="experience-item">
          <h2 className="company-name">Full Stack Developer</h2>
          <p className="company-details">Slasmark (3 months)</p>
          <p className="technologies-used">Technologies Used: HTML, CSS, JavaScript, Node.js, Express.js, MongoDB</p>
          <p className="description">Collaborated on the development of full-stack web applications, including both client-side and server-side coding.</p>
        </div>

        <div className="experience-item">
          <h2 className="company-name">MERN Stack Developer</h2>
          <p className="company-details">Brain O' Vision (2 months)</p>
          <p className="technologies-used">Technologies Used: MongoDB, Express.js, React, Node.js</p>
          <p className="description">Built and maintained web applications using the MERN stack, focusing on efficient database management and responsive UI/UX.</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
