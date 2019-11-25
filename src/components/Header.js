import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header(props) {
  const data = props.resumeData

  const socialLinks = data.socialLinks.map(link => {
    return (
      <li key={link.name}>
        <a href={link.url} target="_blank"><FontAwesomeIcon icon={['fab', link.name]} /></a>
      </li>
    )
  })

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
          <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
          <li><a className="smoothscroll" href="#about">About</a></li>
          <li><a className="smoothscroll" href="#resume">Resume</a></li>
          <li><a className="smoothscroll" href="#portfolio">Works</a></li>
          <li><a className="smoothscroll" href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {data.name}.</h1>
          <h3>I'm a Gold Coast based <span>{data.role}</span>. {data.roleDescription} <a className="smoothscroll" href="#about">Start scrolling</a> to learn more <a className="smoothscroll" href="#about">about me</a>.</h3>

          <hr />

          <ul className="social">
            {socialLinks}
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
      </p>
    </header>
  );
}
