import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
import resume from '../../Assets/portfolio-resume.pdf'

function Nav() {
  return (
    <header>
      <h1>
        <a href="/" >
          Portfolio</a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#my-work">My Work</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
          <li>
            <a href= {resume} >Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;