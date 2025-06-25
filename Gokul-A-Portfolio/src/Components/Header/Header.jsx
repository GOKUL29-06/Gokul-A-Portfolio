import React, { useState } from 'react'
import './Header.css'


const Header = () => {

    // change Background Header

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");

        // when the scroll is higher than 200 viewport height, add the scroll-header Class to a  tag with the header tag

        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header")
    })

    // Toggle Menu

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    return (

        <header className='header'>
            <nav className='nav container'>
                {/* <a href="#" className="nav_logo">Gokul</a> */}
                
                <svg fill="#000000" width="40px" height="40px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5_logos</title><path d="M256,32C132.26,32,32,132.26,32,256S132.26,480,256,480,480,379.74,480,256,379.74,32,256,32ZM171,353.89a15.48,15.48,0,0,1-13.46,7.65,14.91,14.91,0,0,1-7.86-2.16,15.48,15.48,0,0,1-5.6-21.21l15.29-25.42a8.73,8.73,0,0,1,7.54-4.3h2.26c11.09,0,18.85,6.67,21.11,13.13Zm129.45-50L200.32,304H133.77a15.46,15.46,0,0,1-15.51-16.15c.32-8.4,7.65-14.76,16-14.76h48.24l57.19-97.35h0l-18.52-31.55C217,137,218.85,127.52,226,123a15.57,15.57,0,0,1,21.87,5.17l9.9,16.91h.11l9.91-16.91A15.58,15.58,0,0,1,289.6,123c7.11,4.52,8.94,14,4.74,21.22l-18.52,31.55-18,30.69-39.09,66.66v.11h57.61c7.22,0,16.27,3.88,19.93,10.12l.32.65c3.23,5.49,5.06,9.26,5.06,14.75A13.82,13.82,0,0,1,300.48,303.92Zm77.75.11H351.09v.11l19.82,33.71a15.8,15.8,0,0,1-5.17,21.53,15.53,15.53,0,0,1-8.08,2.27A15.71,15.71,0,0,1,344.2,354l-29.29-49.86-18.2-31L273.23,233a38.35,38.35,0,0,1-.65-38c4.64-8.19,8.19-10.34,8.19-10.34L333,273h44.91c8.4,0,15.61,6.46,16,14.75A15.65,15.65,0,0,1,378.23,304Z"/></svg>

                <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className='nav_item'>
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ?
                                "nav_link active-link" : "nav_link "}>
                                <i className="uil uil-estate nav_icon"></i>Home
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ?
                                "nav_link active-link" : "nav_link "}>
                                <i className="uil uil-user nav_icon"></i>About
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ?
                                "nav_link active-link" : "nav_link "}>
                                <i className="uil uil-file-alt nav_icon"></i>Skills
                            </a>
                        </li>

                        {/* <li className='nav_item'>
                            <a href="#services" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ?
                                "nav_link active-link" : "nav_link "}>
                                <i className="uil uil-briefcase-alt nav_icon"></i>Service
                            </a>
                        </li> */}

                        <li className='nav_item'>
                            <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ?
                                "nav_link active-link" : "nav_link "}>
                                <i className="uil uil-scenery nav_icon"></i>Projects
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ?
                                "nav_link active-link" : "nav_link "}>
                                <i className="uil uil-message nav_icon"></i>
                                Contact
                            </a>
                        </li>
                    </ul>


                    <i class="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
                </div>


                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>

            </nav>
        </header>
    )
}

export default Header