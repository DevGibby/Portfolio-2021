import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

//images 
import Project1 from '../styles/images/marketplace.jpg.png';
import Project2 from '../styles/images/photoSite.png';
import Project3 from '../styles/images/cjs-barber.png';
import Project4 from'../styles/images/invoiceapp.png';

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  },{});
  
    return (
      <div className="Projects">
        <section id="projects">
            <h2 className="projects-head">Projects</h2>
                <div className="projects-container">
                 <div data-aos="slide-left" className="project-wrapper">
                        <a className="project-image-link" href="https://bg-photo-site.netlify.app/" target="_blank"><img className="project-image" src={Project2} /></a>
                        <p>Sal Vespucci's photo site is a basic mock website for Sal's photography business built in React.<a className="p-link" href="https://github.com/DevGibby/React-Photo-Site" target="_blank">Github Link</a></p>
                    </div>
                 <div className="project-wrapper" data-aos="slide-right">
                  <a className="project-image-link" href="https://wrg-invoice-app.netlify.app/" target="_blank"><img className="project-image" src={Project4} /></a>
                         <p>This Project is a Full Stack React Application built with the MERN stack. Users can log, edit and/or delete invoices they've created for their company/business.
                         <a className="p-link" href="https://github.com/DevGibby/React-Invoice-App" target="_blank">Github Link</a> </p>
                        
                    </div>
                    <div className="project-wrapper" data-aos="slide-left">
                         <p>This Project is a ECommerce Marketplace built in React and aimed at being functional all the way from item selection checkout using APIs such as the PayPal API for the checkout expierence and Okta some the customer can make a profile.
                         <a className="p-link" href="https://github.com/DevGibby/Marketplace-Design"target="_blank">Github Link</a> </p>
                        <a className="project-image-link" href="https://hopeful-bohr-73a5cc.netlify.app/" target="_blank"><img className="project-image" src={Project1} /></a>
                    </div>
                    <div className="project-wrapper" data-aos="slide-right">
                         <p>CJ's Barber Shop is a website I built for my barber using his rustic style of his Shop. On the website I embeded an Instagram feed so that he could post his work and have it directly onto the site utilzing the Instagram/Facebook API.
                         <a className="p-link" href="https://github.com/DevGibby/Cjs-barber-shop-website"target="_blank">Github Link</a></p>
                         <a className="project-image-link" href="https://cjsmallbarbershop.netlify.app/" target="_blank"><img className="project-image" src={Project3} /></a>
                  </div>
                </div>
        </section>
     </div>
    );
  }
  
export default Projects;