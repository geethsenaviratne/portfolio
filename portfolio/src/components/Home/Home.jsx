import React from 'react';
import './Home.css';
import profile_img from '../../assets/profile_img.jpg';
import { Link } from 'react-scroll';
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter
} from 'react-icons/fa';

const Home = () => {
  return (
    <div id="home" className="home1">
      {/* ✅ Dark overlay for background image */}
      <div className="overlay"></div>

      <div className="hello-animation">Hello!  </div>
      <h1>
        I'm <span>Geeth Seneviratne,</span>
      </h1>
      <p>
        I'm a second-year Computer Science Undergraduate at Sri Lanka Institute of
        Information Technology with technical skills to innovate and develop impactful solutions.
      </p>

      <div className="home1-action">
        <Link className="home1-connect" to="contact" smooth={true} duration={500} offset={-50}>
          Connect with Me
        </Link>
        <div className="home1-resume">My Resume</div>
      </div>

      <div className="social-container">
        <h4>Let's connect!</h4>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/geethseneviratne/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/share/1YfSjfV2Tu/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/invites/contact/?igsh=1vbja1sbj1gxj&utm_content=1ub3bq1" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/geethsenaviratne" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
