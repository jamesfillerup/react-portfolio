import React from "react"
import projectData from "./card.json"

import bla from "../../assets/images/run-buddy.jpeg"
function Cards() {
    return (
        <section id="my-work" className="flex-container">
            <div className="container">
                <h1>My Work</h1>
                <br />
                <div className="row">
                    <div className="container">
                        <div className="row g-3">
                            {/* CARD MAP STARTS HERE */}
                            {projectData.map(project => (
                                <div className="col-12 col-md-6 col-lg-4 mt-4">
                                    <a href={project.link} className=" card h-100">

                                        <img className="card-img-top img-center rounded mx-auto d-block" src={bla}
                                        
                                            alt=""  />
                                        <div className="card-body">
                                            <h3>
                                                {project.title}
                                            </h3>
                                            <p>
                                                {project.description}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards