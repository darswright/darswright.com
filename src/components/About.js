import React from 'react';

import profilePic from '../images/profilepic.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function About(props) {
  const data = props.resumeData

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilePic} alt={data.name} />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{data.aboutme}</p>

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{data.name}</span><br />
                <span>{data.address}</span><br />
                <span>{data.email}</span>
              </p>
            </div>

            <div className="columns download">
              <p>
                <a href={data.resumeDownload} className="button">
                  <FontAwesomeIcon icon={faDownload} /> Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
