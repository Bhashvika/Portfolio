import React, { useState } from 'react';
import './Navbar.css';
import { Link as RouterLink } from 'react-router-dom'; // React Router Link
import { Link as ScrollLink } from 'react-scroll'; // Scroll Link for smooth scrolling
import logo from '../../images/logo.jpeg';

const Navbar = () => {
    const [link, setLink] = useState("HOME");

    return (
        <>
        <div className="nav">
            <div className="nav-left">
                <div className="logo">
                    <img src={logo} alt="" width="70px" style={{borderRadius: "50%"}} />
                </div>
            </div>

            <div className="navbar-right">
                <ul>
                    {/* Use RouterLink for separate pages */}
                    <RouterLink to='/' id="link" onClick={() => setLink("HOME")} className={link === 'HOME' ? "active" : ""}>
                        HOME
                    </RouterLink>
                    <ScrollLink to='about' smooth={true} duration={500} onClick={() => setLink("ABOUT")} className={link === 'ABOUT' ? "active" : ""}>
                        ABOUT
                    </ScrollLink>
                    {/* Use ScrollLink for sections within the home page */}
                    <ScrollLink to='skills' smooth={true} duration={500} onClick={() => setLink("SKILLS")} className={link === 'SKILLS' ? "active" : ""}>
                        SKILLS
                    </ScrollLink>

                    <ScrollLink to='projects' smooth={true} duration={500} onClick={() => setLink("PROJECTS")} className={link === 'PROJECTS' ? "active" : ""}>
                        PROJECTS
                    </ScrollLink>

                    <ScrollLink to='experience' smooth={true} duration={500} onClick={() => setLink("EXPERIENCE")} className={link === 'EXPERIENCE' ? "active" : ""}>
                        EXPERIENCE
                    </ScrollLink>

                    <ScrollLink to='contact' smooth={true} duration={500} onClick={() => setLink("CONTACT")} className={link === 'CONTACT' ? "active" : ""}>
                        CONTACT
                    </ScrollLink>
                </ul>
            </div>
        </div>
        <hr />
        </>
        
    );
};

export default Navbar;
