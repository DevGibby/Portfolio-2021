import React from 'react';
//images
import Stack from '../styles/images/html-css-js-sass-react.png';

function Home() {
    return (
      <div className="Home">
        <section id="home">
          <div className="home-container">
            <div className="home-qoute">
                <h2>Hello! My name is Bill and I am a Web Developer </h2>
                <img src={Stack} alt="tech stack"/>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Home;