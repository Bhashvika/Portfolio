import React from 'react';
import './Skills.css';
import htmlIcon from '../../images/html-icon.png'; // Replace with actual path
import cssIcon from '../../images/css-icon.png'; // Replace with actual path
import jsIcon from '../../images/js-icon.png'; // Replace with actual path
import reactIcon from '../../images/react-icon.png'; // Replace with actual path
import nodeIcon from '../../images/node-icon.png'; // Replace with actual path
import mongoIcon from '../../images/mongo-icon.png'; // Replace with actual path
import mysqlIcon from '../../images/mysql-icon.png'; // Replace with actual path
import javaIcon from '../../images/java-icon.png'; // Replace with actual path
import BootstrapIcon from '../../images/bootstrap-icon.png'; // Replace with actual path
import ExpressIcon from '../../images/express-icon.png'; // Replace with actual path
import githubIcon from '../../images/github-icon.png'; // Replace with actual path
import postmanIcon from '../../images/postman-icon.png'; // Replace with actual path
import vscodeIcon from '../../images/vscode-icon.png'; // Replace with actual path
import gitIcon from '../../images/git-icon.png'; // Replace with actual path
import eclipseIcon from '../../images/eclipse-icon.png'; // Replace with actual path
import api from '../../images/api.png';
const Skills = () => {
  return (
    <div id="skills">
      <div className="technical-skills">
        <h2 className="section-heading">Skillset I Work With</h2>
        <div className="skills-container">
          <div className="skill-item">
            <img src={htmlIcon} alt="HTML" className="skill-icon" />
            <p className="skill-name">HTML</p>
          </div>
          <div className="skill-item">
            <img src={cssIcon} alt="CSS" className="skill-icon" />
            <p className="skill-name">CSS</p>
          </div>
          <div className="skill-item">
            <img src={jsIcon} alt="JavaScript" className="skill-icon" />
            <p className="skill-name">JavaScript</p>
          </div>
          <div className="skill-item">
            <img src={reactIcon} alt="React" className="skill-icon" />
            <p className="skill-name">React</p>
          </div>
          <div className="skill-item">
            <img src={nodeIcon} alt="Node.js" className="skill-icon" />
            <p className="skill-name">Node.js</p>
          </div>
          <div className="skill-item">
            <img src={mongoIcon} alt="MongoDB" className="skill-icon" />
            <p className="skill-name">MongoDB</p>
          </div>
          <div className="skill-item">
            <img src={mysqlIcon} alt="MySQL" className="skill-icon" />
            <p className="skill-name">MySQL</p>
          </div>
          <div className="skill-item">
            <img src={javaIcon} alt="Java" className="skill-icon" />
            <p className="skill-name">Java</p>
          </div>
          <div className="skill-item">
            <img src={ExpressIcon} alt="Express.js" className="skill-icon" />
            <p className="skill-name">Express.js</p>
          </div>
          <div className="skill-item">
            <img src={BootstrapIcon} alt="Bootstrap" className="skill-icon" />
            <p className="skill-name">Bootstrap</p>
          </div>
          <div className="skill-item">
            <img src={api} alt="api" className="skill-icon" />
            <p className="skill-name">Rest Api</p>
          </div>
        </div>
        <h2 className="section-heading">Tools I Use</h2>
        <div className="skills-container">
          <div className="skill-item">
            <img src={githubIcon} alt="GitHub" className="skill-icon" />
            <p className="skill-name">GitHub</p>
          </div>
          <div className="skill-item">
            <img src={postmanIcon} alt="Postman" className="skill-icon" />
            <p className="skill-name">Postman</p>
          </div>
          <div className="skill-item">
            <img src={vscodeIcon} alt="VS Code" className="skill-icon" />
            <p className="skill-name">VS Code</p>
          </div>
          <div className="skill-item">
            <img src={gitIcon} alt="Git" className="skill-icon" />
            <p className="skill-name">Git</p>
          </div>
          <div className="skill-item">
            <img src={eclipseIcon} alt="Eclipse" className="skill-icon" />
            <p className="skill-name">Eclipse</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
