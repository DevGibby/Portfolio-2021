import React from 'react';
//images 
import Project1 from '../styles/images/marketplace.jpg.png';
import Project2 from '../styles/images/voyya-image.jpg.png';
import Project3 from '../styles/images/cjs-barber.png';

function Projects() {
    return (
      <div className="Projects">
        <section id="projects">
            <h3 className="projects-head">Projects</h3>
                <div className="projects-container">
                    <div className="project-wrapper">
                         <p>This Project is a ECommerce Marketplace design aimed at being functional all the way from item selection checkout using APIs such as the PayPal API for the checkout expierence and Okta some the customer can make a profile.
                         <a className="p-link" href="https://github.com/wgibson17/Marketplace-Design">Github Link</a> </p>
                        <a className="project-image-link" href="https://hopeful-bohr-73a5cc.netlify.app/" target="_blank"><img className="project-image" src={Project1} /></a>
                    </div>
                    <div className="project-wrapper">
                        <a className="project-image-link" href="https://voyya.netlify.app/" target="_blank"><img className="project-image" src={Project2} /></a>
                        <p>Voyya is a fake company I created. This project was to use Google Maps APIs to coordinate a trip with fellow Voyya users in an image slideshow. Goal for this project is to create a web/mobile app that user can use to coordinate day trips/bar
                         crawls with other users/friends<a className="p-link" href="https://github.com/wgibson17/Voyya">Github Link</a></p>
                    </div>
                    <div className="project-wrapper">
                         <p>CJ's Barber Shop is a website I built for my barber using his rustic style of his Shop. On the website I embeded an Instagram feed so that he could post his work and have it directly onto the site utilzing the Instagram/Facebook API.
                         <a className="p-link" href="https://github.com/wgibson17/Cjs-barber-shop-website">Github Link</a></p>
                         <a className="project-image-link" href="https://cjsmallbarbershop.netlify.app/" target="_blank"><img className="project-image" src={Project3} /></a>
                  </div>
                </div>
        </section>
     </div>
    );
  }
  
export default Projects;