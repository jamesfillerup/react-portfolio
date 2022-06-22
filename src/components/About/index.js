import React from 'react'
// import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (

    // <section id="about-me" class="intro">
    //     <div class="flex-row left" >
    //         {/* <img src="./Assets/images/profile-img.PNG"  alt="profile-img"> */}
    //         <div>
    //             <h2 class="section-title primary-border">About Me</h2>
    //             <br />
    //             <p>
    //             I have a passion for creating. For years I've been working manufacturing and I find that the functionality is of the greatest importance. I have now been extending that into a digital world. 
    //             </p>
    //         </div>
    //     </div>
    // </section>


    <section className="my-5" >
      <h1 id="about">About Me</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p>
        I have a passion for creating. For years I've been working manufacturing and I find that the functionality is of the greatest importance. I have now been extending that into a digital world.
      </p>
      </div>
    </section>
  )
}

export default About