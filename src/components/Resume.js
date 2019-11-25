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
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.
          </p>

          <div className="bars">
            <ul className="skills">
              <li>
                <span className="bar-expand photoshop" />
                <em>Photoshop</em>
              </li>
              <li>
                <span className="bar-expand illustrator" />
                <em>Illustrator</em>
              </li>
              <li>
                <span className="bar-expand wordpress" />
                <em>Wordpress</em>
              </li>
              <li>
                <span className="bar-expand css" />
                <em>CSS</em>
              </li>
              <li>
                <span className="bar-expand html5" />
                <em>HTML5</em>
              </li>
              <li>
                <span className="bar-expand jquery" />
                <em>jQuery</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
