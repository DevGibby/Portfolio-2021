import React from 'react';

function Nav() {
    return (
      <div className="Nav">
        <header className="main-head">
            <h2 id="Logo">William "Bill" Gibson</h2>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
      </div>
    );
  }
  
  export default Nav;