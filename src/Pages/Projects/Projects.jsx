import React from 'react';
import './Projects.css';
import book from '../../images/booklogo.jpeg'; // Replace with actual path
import food from '../../images/food.jpeg'; // Replace with actual path
import task from '../../images/task.png'; // Replace with actual path
import ecommerce from '../../images/ecommerce.jpeg'; // Replace with actual path
import keylogger from '../../images/keylogger.jpeg'; // Replace with actual path
import doctor from '../../images/doctor.jpeg';
const Projects = () => {
  // Add URLs for GitHub repositories
  const projectLinks = {
    bookStore: 'https://github.com/Bhashvika/Bookstore-Management-System', 
    foodApp: 'https://github.com/Bhashvika/Food-Ordering-App-Full-Stack', 
    ecommerceApp: 'https://github.com/Bhashvika/E-commerce', 
    taskApp: 'https://github.com/Bhashvika/todomernstack', 
    keyloggerDemo: 'https://github.com/Bhashvika/KeyLogger',
     doctorApp:'https://github.com/Bhashvika/Doctor-Appointment-Booking-Application'
  };

  return (
    <>
      <h1 style={{textAlign:'center'}}>My Recent Works</h1>
      <p  style={{textAlign:'center'}}>Here are a few projects I've worked on recently.</p>
      <div id="projects">
        <div className="project-item">
          <img src={book} alt="Book Store Management App" width={250} />
          <h2>Book Store Management App</h2>
          <p>Manage book inventory and sales efficiently. 
          Easy-to-use interface for adding and editing book data.</p>
          <p>Technologies: React, Node.js, MongoDB</p>
          <div className="project-buttons">
            <button className="code-button" onClick={() => window.open(projectLinks.bookStore, '_blank')}>Code</button>
            <button className="demo-button">Demo</button>
          </div>
        </div>

        <div className="project-item">
          <img src={food} alt="Food Ordering App" width={250} />
          <h2>Food Ordering App</h2>
          <p>Order food from local restaurants with a few clicks. 
          Responsive design for optimal use on any device.</p>
          <p>Technologies: React, Express.js, MongoDB</p>
          <div className="project-buttons">
            <button className="code-button" onClick={() => window.open(projectLinks.foodApp, '_blank')}>Code</button>
            <button className="demo-button">Demo</button>
          </div>
        </div>

        <div className="project-item">
          <img src={ecommerce} alt="Ecommerce App" width={250} />
          <h2>Ecommerce App</h2>
          <p>Comprehensive e-commerce platform for shopping online.  
          Features include product listings, cart, and payment processing.</p>
          <p>Technologies: React, Node.js, MongoDB, Express.js</p>
          <div className="project-buttons">
            <button className="code-button" onClick={() => window.open(projectLinks.ecommerceApp, '_blank')}>Code</button>
            <button className="demo-button">Demo</button>
          </div>
        </div>

        <div className="project-item">
          <img src={task} alt="Task Management App" width={250} />
          <h2>Task Management App</h2>
          <p>Organize daily tasks for better productivity.    
          Allows creation, updates, and tracking of tasks.</p>
          <p>Technologies: React, Express.js, Node.js,css</p>
          <div className="project-buttons">
            <button className="code-button" onClick={() => window.open(projectLinks.taskApp, '_blank')}>Code</button>
            <button className="demo-button">Demo</button>
          </div>
        </div>
        <div className="project-item">
          <img src={doctor} alt="Doctor Appointment App" width={250} />
          <h2>Doctor Appointment Booking App</h2>
          <p>
            A web application that simplifies the process of scheduling medical appointments. Users can book appointments, view available time slots, and manage their schedules. Doctors can log in to access patient information and manage their appointments.
          </p>
          <p>Technologies Used: MongoDB, Express.js, React, Node.js</p>
          <div className="project-buttons">
            <button className="code-button" onClick={() => window.open(projectLinks.doctorApp, '_blank')}>Code</button>
            <button className="demo-button" >Demo</button>
          </div>
        </div>

        <div className="project-item">
          <img src={keylogger} alt="Keylogger Demo" width={250} />
          <h2>Keylogger Demo</h2>
          <p>Educational tool to understand input event handling.
          Demonstrates basic keylogging functionality.</p>
          <p>Technologies: html,css,JavaScript,node</p>
          <div className="project-buttons">
            <button className="code-button" onClick={() => window.open(projectLinks.keyloggerDemo, '_blank')}>Code</button>
            <button className="demo-button">Demo</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
