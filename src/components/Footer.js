import React from 'react'
import { Link } from 'gatsby'

import './stylesheets/libraries/fontawesome-free-5.11.2-web/css/all.css'

const Footer = () =>
  <footer className="footer">
    <div>
      <h5>CONTACT</h5>
      <p>
        If you'd like to work together, feel free to <Link to="/hire">hire me</Link>.
      </p>

      <div className='social-icons'>
        <a target='_blank' href="https://github.com/seeyouspacecowboy"><i title="Github" className="fab fa-github fa-2x"></i></a>
        <a target='_blank' href="https://codepen.io/mohammedchisti"><i title="Code Pen" className="fab fa-codepen fa-2x"></i></a>
        <a target='_blank' href="https://twitter.com/mohammedchisti"><i title="Twitter" className="fab fa-twitter fa-2x"></i></a>
        <a target='_blank' href="https://twitter.com/mohammedchisti"><i title="Resume" class="far fa-file fa-2x"></i></a>

      </div>

      <div>
        © { new Date().getFullYear() } Mohammed Chisti. All rights reserved.
      </div>
    </div>
    <div className="subscribe">
      <h5>SUBSCRIBE</h5>
      <p>
        If you enjoyed anything on my site and want to keep getting updates,
        feel free to subscribe.
      </p>
      <input className='dark' type="text" name="" value="" placeholder="Enter your email"/>
      <button className="dark" type="button" name="button">Subscribe</button>
    </div>
  </footer>

export default Footer
