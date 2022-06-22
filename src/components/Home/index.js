function Cards(){
    return(
        <div>
            <header>
        <h1>
        <a href="/">
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
                
                <a href="./Assets/css/portfolio-resume.pdf">Resume</a>
                </li>
            </ul>
        </nav>
    </header>

    <section class="hero">
            <h2>James Fillerup</h2>
    </section>

    <section id="about-me" class="intro">
        <div class="flex-row left" >
            <img src="./Assets/images/profile-img.PNG"  alt="profile-img"/>
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
                                    <a href="https://jamesfillerup.github.io/run-buddy/">
                                        <img class="card-img-top img-center rounded mx-auto d-block" src= "./Assets/images/run-buddy.jpeg"
                                            alt="" />
                                    </a>
                                    <div class="card-body">
                                        <h3>
                                            Run Buddy
                                        </h3>
                                        <p>
                                        This is a webpage for runners to get more training from a professional team of trainers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 mt-4">
                            <div class=" card h-100">
                                <div class="">
                                    <a href="https://Nesnah1307.github.io/time-killer-3000/">
                                        <img class="card-img-top img-center rounded mx-auto d-block" src= "./Assets/images/time-killer-3000.png"
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
                                        <img class="card-img-top img-center rounded mx-auto d-block" src= "./Assets/images/code-prep.png"
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
                                <div class=" ">
                                    <a href="https://jamesfillerup.github.io/run-buddy/">
                                        <img class="card-img-top img-center rounded mx-auto d-block" src= "./Assets/images/run-buddy.jpeg"
                                            alt="" />
                                    </a>
                                    <div class="card-body">
                                        <h3>
                                            Run Buddy
                                        </h3>
                                        <p>
                                        This is a webpage for runners to get more training from a professional team of trainers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 mt-4">
                            <div class=" card h-100">
                                <div class=" ">
                                    <a href="https://jamesfillerup.github.io/run-buddy/">
                                        <img class="card-img-top img-center rounded mx-auto d-block" src= "./Assets/images/run-buddy.jpeg"
                                            alt="" />
                                    </a>
                                    <div class="card-body">
                                        <h3>
                                            Run Buddy
                                        </h3>
                                        <p>
                                        This is a webpage for runners to get more training from a professional team of trainers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 mt-4">
                            <div class=" card h-100">
                                <div class=" ">
                                    <a href="https://jamesfillerup.github.io/run-buddy/">
                                        <img class="card-img-top img-center rounded mx-auto d-block" src= "./Assets/images/run-buddy.jpeg"
                                            alt="" />
                                    </a>
                                    <div class="card-body">
                                        <h3>
                                            Run Buddy
                                        </h3>
                                        <p>
                                        This is a webpage for runners to get more training from a professional team of trainers.
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