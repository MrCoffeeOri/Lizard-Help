import React from 'react'
import './css/landingPage.css'

window.addEventListener("wheel", e => {
  if(e.deltaY > 0) {
    return
  }
})

export default () => {
  return (
    <div className="landing-page">
      <header>
        <img src="./public/logo.png" alt="LizardHelp Logo" />
        <div>
          <a href='#About'>
            <p>About</p>
            <div></div>
          </a>
          <a href='#Features'>
            <p>Features</p>
            <div></div>
          </a>
          <a href='#Contacts'>
            <p>Contacts</p>
            <div></div>
          </a>
          <a href=''>
            <p>Start now</p>
            <div></div>
          </a>
        </div>
      </header>
      <main>
        <section id='presentation'>
          <div>
            <h2>A complete Help Desk system that will generate more efficiency for your IT Support!</h2>
            <button>Start now!</button>
          </div>
          <img src="./public/management.png" />
        </section>
        <section>
          <h2 style={{ textAlign: 'center', padding: '0px 90px' }}>LizardHelp's Help Desk system <span className='marked'>organizes</span>, <span className='marked'>controls</span> and <span className="marked">optimizes</span> processes, centralizing all communication with the customer and all features are available for you to use as much as you want per agent.</h2>
        </section>
        <section>
          <h2>About Us</h2>
          <p>LizardHelp is your one-stop destination for all your helpdesk needs. Whether you're a business looking to improve customer support or an individual seeking technical assistance, we've got you covered.</p>
        </section>
        <section>
          <h2>Features</h2>
          <ul>
            <li>24/7 Customer Support</li>
            <li>Fast Response Times</li>
            <li>Expert Technicians</li>
            <li>Easy Ticketing System</li>
            <li>Secure Communication</li>
          </ul>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>Have a question or need assistance? Contact our support team at support@lizardhelp.com or call us at 1-800-LIZARD-HELP.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 LizardHelp. All rights reserved.</p>
      </footer>
    </div>
  );
};