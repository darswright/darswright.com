import React from 'react';

export default function Resume(props) {
  const data = props.resumeData

  const education = data.education.map(item => {
    return (
      <div className="row item">
        <div className="twelve columns">
          <h3>{item.UniversityName}</h3>
          <p className="info">
            {item.specialisation} <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
          </p>
        </div>
      </div>
    )
  })

  const work = data.work.map(item => {
    return (
      <div className="row item">
        <div className="twelve columns">
          <h3>{item.CompanyName}</h3>
          <p className="info">
            {item.position} <span>&bull;</span> <em className="date">{item.startMonth} {item.startYear} - {item.endMonth} {item.endYear}</em>
          </p>

          <ul>
            {item.jobOutline.map(bullet => <li>{bullet}</li>)}
          </ul>
        </div>
      </div>
    )
  })

  const skills = data.skills.map(item => {
    const elClasses = `bar-expand ${item.class}`

    return (
      <li>
        <span className={elClasses} />
        <em>{item.skillname}</em>
      </li>
    )
  })

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {education}
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {work}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{data.skillsDescription}
          </p>

          <div className="bars">
            <ul className="skills">
              {skills}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
