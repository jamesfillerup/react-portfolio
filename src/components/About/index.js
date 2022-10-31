import React from 'react'
// import coverImage from "../../assets/cover/cover-image.jpg";
import pflImg from '../../Assets/images/profile-img.png'
function About() {

  return (

  <section id="about-me" className="intro">
    <div className="flex-row left" >
      <img className="rounded" src= {pflImg} alt="" />
        <div>
          <h2 className="section-title primary-border">About Me</h2>
            <br />
            <p>
                I'm a product manager with many years of experience building strong teams that can problem solve and work well in a collaborative environment. 
            </p><br />
            <p>
                I have experience in the following roles: Project Management - Product Management - Quality Assurance Manager - Purchasing - Sales
            </p><br />
            <p>
                As a Frontend Developer I'm proficient in: React - JavaScript - Shopify Liquid - eCommerce - HandlebarsJS - HTML - CSS - Sequelize - MySQL - NodeJS
            </p>
        </div>
    </div>
  </section>
    
  )
}

export default About