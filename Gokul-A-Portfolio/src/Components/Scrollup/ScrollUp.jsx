import React from 'react'
import './ScrollUp.css'

const ScrollUp = () => {

    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");

        // when the scroll is higher than 560 viewport height, add the show-scroll Class to a  tag with the scroll-top class

        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll")
    })
    return (

        <a href="#" className="scrollup">
            <i class="uil uil-arrow-up scrollup_icon"></i>
        </a>
    )
}

export default ScrollUp