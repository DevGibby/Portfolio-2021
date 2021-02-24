import React from 'react';


function Contact() {
    return (
      <div className="Contact">
        <section id="contact">
        <div class="form-wrapper">
            <header class="form-head">
                <h2>Contact</h2>
            </header>
            <form action="https://formspree.io/f/mrgorkdq" method="POST">
                <div class="name-form">
                    <label for="name">Name:</label>
                    <input type="text " name="name" required />
                </div>
                <div class="email-form">
                    <label for="email">Email:</label>
                    <input type="email" required name="email" />
                </div>
                <div class="textarea">
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