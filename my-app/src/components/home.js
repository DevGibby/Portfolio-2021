import React from 'react';

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Home() {

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
    return (
      <div className="Home">
        <section id="home">
          <div className="home-container">
            <div className="home-qoute">
                <h2>Hello! My name is Bill and I am a Web Developer!</h2>
            </div>
          </div>
          <button id="topBtn" onClick={topFunction}><FontAwesomeIcon className="topBtn-icon" icon={faChevronUp} size="2x"/></button>
        </section>
      </div>
    );
  }
  
  export default Home;