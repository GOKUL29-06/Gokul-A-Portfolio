import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        {/* Logo and Intro */}
        <div className="footer_intro">
          {/* <img
            src="https://your-logo-url.com/logo.png"  // replace with your logo URL
            alt="Gokul"
            className="footer_logo"
          /> */}


{/* <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}
{/* <svg fill="#000000" width="800px" height="800px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5_logos</title><path d="M256,32C132.26,32,32,132.26,32,256S132.26,480,256,480,480,379.74,480,256,379.74,32,256,32ZM171,353.89a15.48,15.48,0,0,1-13.46,7.65,14.91,14.91,0,0,1-7.86-2.16,15.48,15.48,0,0,1-5.6-21.21l15.29-25.42a8.73,8.73,0,0,1,7.54-4.3h2.26c11.09,0,18.85,6.67,21.11,13.13Zm129.45-50L200.32,304H133.77a15.46,15.46,0,0,1-15.51-16.15c.32-8.4,7.65-14.76,16-14.76h48.24l57.19-97.35h0l-18.52-31.55C217,137,218.85,127.52,226,123a15.57,15.57,0,0,1,21.87,5.17l9.9,16.91h.11l9.91-16.91A15.58,15.58,0,0,1,289.6,123c7.11,4.52,8.94,14,4.74,21.22l-18.52,31.55-18,30.69-39.09,66.66v.11h57.61c7.22,0,16.27,3.88,19.93,10.12l.32.65c3.23,5.49,5.06,9.26,5.06,14.75A13.82,13.82,0,0,1,300.48,303.92Zm77.75.11H351.09v.11l19.82,33.71a15.8,15.8,0,0,1-5.17,21.53,15.53,15.53,0,0,1-8.08,2.27A15.71,15.71,0,0,1,344.2,354l-29.29-49.86-18.2-31L273.23,233a38.35,38.35,0,0,1-.65-38c4.64-8.19,8.19-10.34,8.19-10.34L333,273h44.91c8.4,0,15.61,6.46,16,14.75A15.65,15.65,0,0,1,378.23,304Z"/></svg> */}

<svg className="footer_logo" width="36px" height="36px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#ffffff" fill="none"><line x1="24.03" y1="39.07" x2="22.37" y2="41.97" stroke-linecap="round" stroke-linejoin="round"/><line x1="34.86" y1="20.12" x2="26.05" y2="35.53" stroke-linecap="round" stroke-linejoin="round"/><line x1="34.19" y1="28.31" x2="42.17" y2="41.97" stroke-linecap="round" stroke-linejoin="round"/><line x1="29.39" y1="20.12" x2="32.16" y2="24.84" stroke-linecap="round" stroke-linejoin="round"/><line x1="19.54" y1="35.53" x2="34.39" y2="35.53" stroke-linecap="round" stroke-linejoin="round"/><line x1="44.71" y1="35.53" x2="38.41" y2="35.53" stroke-linecap="round" stroke-linejoin="round"/><rect x="10.23" y="10.23" width="43.55" height="43.55" rx="10.31" stroke-linecap="round" stroke-linejoin="round"/></svg>


          <p className="footer_description">
            Creating amazing digital experiences. Let's build something awesome together.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer_links">
          <h4 className="footer_section_title">Quick Links</h4>
          <ul className="footer_list">
            <li><a href="#home" className="footer_link">Home</a></li>
            <li><a href="#about" className="footer_link">About</a></li>
            <li><a href="#portfolio" className="footer_link">Projects</a></li>
            <li><a href="#contact" className="footer_link">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer_social">
          <h4 className="footer_section_title">Follow Me</h4>
          <div className="footer_social-links">
            <a href="https://linkedin.com/in/gokul2916" className="footer_social-link" target="_blank" rel="noopener noreferrer">
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="https://github.com/GOKUL29-06" className="footer_social-link" target="_blank" rel="noopener noreferrer">
              <i className="uil uil-github-alt"></i>
            </a>
            <a href="#" className="footer_social-link"  >
            <i class="uil uil-dribbble"></i>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="footer_contact">
          <h4 className="footer_section_title">Contact Me</h4>
          <p className="footer_contact-email">Email: gokul2916s@gmail.com</p>
        </div>

        {/* Footer Bottom */}
        <div className="footer_bottom">
          <p>&copy; 2024 Gokul. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
