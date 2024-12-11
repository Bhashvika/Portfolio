import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact1">
            <div className="content">
                <h1>Connect with Me</h1>
                <p>Feel free to connect with me </p>
            </div>
            <div className="container">
                <div className="contact-info">
                    <div className="info-box">
                        <div className="icon"><FaMapMarkerAlt size={24} /></div>
                        <div className="text">
                            <h2>Address</h2>
                            <p>Venkatagiri, Tirupati, Andhra Pradesh</p>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="icon"><FaPhoneAlt size={24} /></div>
                        <div className="text">
                            <h2>Phone Number</h2>
                            <p>+91 9618487809</p>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="icon"><FaEnvelope size={24} /></div>
                        <div className="text">
                            <h2>Email</h2>
                            <p>bbhashvika2004@gmail.com</p>
                        </div>
                    </div>
                    <div className="info-box social-links">
                        <div className="icon"><FaGithub size={24} /></div>
                        <div className="text">
                            <h2>GitHub</h2>
                            <a href="https://github.com/Bhashvika" target="_blank" rel="noopener noreferrer">Visit My GitHub</a>
                        </div>
                    </div>
                    <div className="info-box social-links">
                        <div className="icon"><FaLinkedin size={24} /></div>
                        <div className="text">
                            <h2>LinkedIn</h2>
                            <a href="https://www.linkedin.com/in/bhashvika-bosi-425a25273/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </section>
    );
};

export default Contact;
