import React from 'react';
///images 
import Github from '../styles/images/githubwhite.png';
import Email from '../styles/images/email-icon-white.png';
import Linkedin from '../styles/images/linkedin.png';
import Twitter from '../styles/images/twitter_logo_white.png';

function Footer() {
    return (
      <div className="Footer">
         <footer>
            <div className="footer-wrapper">
                <ul>
                 <li>
                    <a href="mailto:gibsonrwailliam@outlook.com" target="_blank"><img src={Email} width="200px "/></a>
                 </li>
                    <li>
                    <a href="https://github.com/wgibson17" target="_blank"><img src={Github} width="200px" /></a>
                 </li>
                    <li>
                    <a href="https://www.linkedin.com/in/william-gibson-868182104/" target="_blank"><img src={Linkedin} width="200px"/></a>
                 </li>
                 <li>
                    <a href="https://twitter.com/DevGibby" target="_blank"><img src={Twitter} width="200px"/></a>
                </li>
                </ul>
            </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;