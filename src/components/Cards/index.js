function Cards(){
    return(
        <section id="my-work" class="flex-container">
            <div class="container">
                <h1>My Work</h1>
                
                <h2>Portfolio</h2>
                <br/>
                <div class="row">
                    <div class="container">
                        <div class="row g-3">
                            <div class="col-12 col-md-6 col-lg-4 mt-4">
                                <div class=" card h-100">
                                    <div class="">
                                        {/* <a href="https://jamesfillerup.github.io/run-buddy/">
                                            <img class="card-img-top img-center rounded mx-auto d-block" src= "./Assets/images/run-buddy.jpeg"
                                                alt="" style="width:100%" />
                                        </a> */}
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
    )
}

export default Cards