import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div class="row">
        <div class="twelve columns">
          <ul class="social-links">
            <li><a href="#"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={['fab', 'codepen']} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
          </ul>

          <ul class="copyright">
            <li>&copy; Copyright {year} DarsWright</li>
            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
          </ul>
        </div>
        <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a></div>
      </div>
    </footer>
  )
}