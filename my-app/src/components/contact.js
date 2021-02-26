import React from 'react';


function Contact() {
    return (
      <div className="Contact">
        <section id="contact">
        <div className="form-wrapper">
            <header className="form-head">
                <h2>Contact</h2>
            </header>
            <form action="https://formspree.io/f/mrgorkdq" method="POST">
                <div className="name-form">
                    <label for="name">Name:</label>
                    <input type="text " name="name" required />
                </div>
                <div className="email-form">
                    <label for="email">Email:</label>
                    <input type="email" required name="email" />
                </div>
                <div className="textarea">
                    <textarea id="textarea" required name="textarea" rows="10" cols="100"></textarea>
                </div>
                <button type="submit" value="send">Submit</button>
            </form>
            </div>
        </section>
      </div>
    );
  }
  
  export default Contact;