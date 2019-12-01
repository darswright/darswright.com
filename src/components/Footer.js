import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(props) {
  const data = props.resumeData
  const year = new Date().getFullYear();

  const socialLinks = data.socialLinks.map(link => {
    return (
      <li key={link.name}>
        <a href={link.url} target="_blank"><FontAwesomeIcon icon={['fab', link.name]} /></a>
      </li>
    )
  })

  return (
    <footer>
      <div class="row">
        <div class="twelve columns">
          <ul class="social-links">
            {socialLinks}
          </ul>

          <ul class="copyright">
            <li>&copy; Copyright {year} DarsWright</li>
            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
          </ul>
        </div>
        
        <div id="go-top">
          <a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a>
        </div>
      </div>
    </footer>
  )
}