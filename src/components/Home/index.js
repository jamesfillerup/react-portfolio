import React from 'react'
import resume from '../../Assets/portfolio-resume.pdf'
import pflImg from '../../Assets/images/profile-img.PNG'
import codePrep from '../../Assets/images/code-prep.png'
import timeKiller from '../../Assets/images/time-killer-3000.png'
import stacked from '../../Assets/images/stacked.png'

function Cards(){
    return(
        <div>
            <header>
                <h1>
                <p >
                    Portfolio</p>
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

            <section class="hero">
                    <h2>James Fillerup</h2>
            </section>

            <section id="about-me" class="intro">
                <div class="flex-row left" >
                <img class="rounded" src= {pflImg} alt="" />
                    <div>
                        <h2 class="section-title primary-border">About Me</h2>
                        <br />
                        <p>
                        I have a passion for creating. For years I've been working manufacturing and I find that the functionality is of the greatest importance. I have now been extending that into a digital world. 
                        </p>
                    </div>
                </div>
            </section>

            <section id="my-work" class="flex-container">
                <div class="container">
                    <h1>My Work</h1>
                    <hr/>
                    <h2>Portfolio</h2>
                    <br/>
                    <div class="row">
                        <div class="container">
                            <div class="row g-3">
                                <div class="col-12 col-md-6 col-lg-4 mt-4">
                                    <div class=" card h-100">
                                        <div class="">
                                            <a href="https://Nesnah1307.github.io/time-killer-3000/">
                                                <img class="card-img-top img-center rounded mx-auto d-block" src= {timeKiller}
                                                    alt="" />
                                            </a>
                                            <div class="card-body">
                                                <h3>
                                                    Time Killer 3000
                                                </h3>
                                                <p>
                                                A web page for all things time wasting!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mt-4">
                                    <div class=" card h-100">
                                        <div class="">
                                            <a href="https://secure-inlet-25586.herokuapp.com/">
                                                <img class="card-img-top img-center rounded mx-auto d-block" src= {codePrep} 
                                                    alt="" />
                                            </a>
                                            <div class="card-body">
                                                <h3>
                                                    Code Prep!
                                                </h3>
                                                <p>
                                                    Code Prep is a way for you to find interview questions to practice on as well as to see others comments on interview challenges. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mt-4">
                                    <div class=" card h-100">
                                        <div class="">
                                            <a href="https://exercise-mernapp.herokuapp.com/">
                                                <img class="card-img-top img-center rounded mx-auto d-block" src= {stacked}
                                                    alt="" />
                                            </a>
                                            <div class="card-body">
                                                <h3>
                                                    Stacked
                                                </h3>
                                                <p>
                                                This is a simple exercise tracker for developers to promote better health. It tracks their exercises so that they can build their own routine.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact-card ">
                <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>
                <div class="row justify-content-center">
                    <div class="">
                        <form id="contact-form " name="contact-form " action="https://submit-form.com/3FV6S5i4" >
                            
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control"/>
                                        <label for="name" class="">Your name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" id="email" name="email" class="form-control"/>
                                        <label for="email" class="">Your email</label>
                                    </div>
                                </div>
                            </div>
            
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="text" id="subject" name="subject" class="form-control"/>
                                        <label for="subject" class="">Subject</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                        <label for="message">Your message</label>
                                    </div>
                                </div>
                            </div>

                            <div class="text-center text-md-left ml-3">
                                <button class="btn btn-primary" type="submit">Send</button>
                            </div>

                        </form>
                    </div>     
                </div>
            </section>


            <footer>
                <div>
                <p>Built by James Fillerup</p><br />
                &copy; 2022
                </div>
            </footer>
        </div>
    )
}

export default Cards