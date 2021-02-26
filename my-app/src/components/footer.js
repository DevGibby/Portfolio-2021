import React from 'react';
/*images 
import Github from '../styles/images/githubwhite.png';
import Email from '../styles/images/email-icon-white.png';
import Linkedin from '../styles/images/linkedin.png';
import Twitter from '../styles/images/twitter_logo_white.png'; */
// icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedinIn , faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
      <div className="Footer">
         <footer>
            <div className="footer-wrapper">
                <ul>
                 <li>
                    <a href="mailto:gibsonrwailliam@outlook.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="footer-icon" size="4x"/></a>
                 </li>
                    <li>
                    <a href="https://github.com/DevGibby" target="_blank"><FontAwesomeIcon icon={faGithub} className="footer-icon" size="4x"/></a>
                 </li>
                    <li>
                    <a href="https://www.linkedin.com/in/william-gibson-868182104/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="footer-icon" size="4x"/></a>
                 </li>
                 <li>
                    <a href="https://twitter.com/DevGibby" target="_blank" ><FontAwesomeIcon className="footer-icon" icon={faTwitter} size="4x"/></a>
                </li>
                </ul>
            </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;