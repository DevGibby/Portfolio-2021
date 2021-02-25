import React from 'react';
//images
import Stack from '../styles/images/html-css-js-sass-react.png';

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
                <h2>Hello! My name is Bill and I am a Web Developer</h2>
                <img src={Stack} alt="tech stack"/>
            </div>
          </div>
          <button id="topBtn" onClick={topFunction}>Top</button>
        </section>
      </div>
    );
  }
  
  export default Home;