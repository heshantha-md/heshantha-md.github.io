import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import Chip from '@mui/material/Chip';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - Present"
            iconStyle={{ background: '#861DBB', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <a href="https://www.linkedin.com/in/heshantha-don/" target="_blank" rel="noreferrer"><h3 className="vertical-timeline-element-title">Looking for my next opportunity</h3></a>
            <p>
              Career Break
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - 2024"
            iconStyle={{ background: '#861DBB', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <a href="https://www.alten.co.uk/" target="_blank" rel="noreferrer"><h3 className="vertical-timeline-element-title">Alten Group</h3></a>
            <h4 className="vertical-timeline-element-subtitle">London, United Kingdom</h4>
            <p>
              iOS Developer{" "}
                <Chip className='chipDark' label="Swift" />{" "}
                <Chip className='chipDark' label="UIKit" />
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2023"
            iconStyle={{ background: '#861DBB', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <a href="https://plc.pearson.com/" target="_blank" rel="noreferrer"><h3 className="vertical-timeline-element-title">Pearson</h3></a>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
              iOS Developer{" "}
                <Chip className='chipDark' label="Swift" />{" "}
                <Chip className='chipDark' label="SwiftUI" />
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2021"
            iconStyle={{ background: '#861DBB', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <a href="https://www.epictechnology.lk/" target="_blank" rel="noreferrer"><h3 className="vertical-timeline-element-title">Epic Technology</h3></a>
            <h4 className="vertical-timeline-element-subtitle">Colombo, Sri Lanka</h4>
            <p>
              iOS Developer{" "}
                <Chip className='chipDark' label="Swift" />{" "}
                <Chip className='chipDark' label="Obje-C" />{" "}
                <Chip className='chipDark' label="UIKit" />
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      <div className="items-container">
        <h1>Education History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2016-2018"
            iconStyle={{ background: '#861DBB', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <a href="https://www.londonmet.ac.uk/courses/undergraduate/software-engineering-top-up---beng-hons/" target="_blank" rel="noreferrer"><h3 className="vertical-timeline-element-title">London Metropolitan University</h3></a>
            <h4 className="vertical-timeline-element-subtitle">Online</h4>
            <p>
              BEng. (Hons) in Software Engineering{" "}
                <Chip className='chipDark' label="Bachelor’s Degree" />{" "}
                <Chip className='chipDark' label="Top-Up" />
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014-2016"
            iconStyle={{ background: '#861DBB', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <a href="https://qualifications.pearson.com/en/about-us/qualification-brands/btec.html" target="_blank" rel="noreferrer"><h3 className="vertical-timeline-element-title">Pearson qualifications</h3></a>
            <h4 className="vertical-timeline-element-subtitle">Online</h4>
            <p>
              HNDip. Computing and System Development{" "}
                <Chip className='chipDark' label="Foundation Degree" />
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008-2011"
            iconStyle={{ background: '#861DBB', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <a href="https://maliyadeva.lk/" target="_blank" rel="noreferrer"><h3 className="vertical-timeline-element-title">Maliyadeva College</h3></a>
            <h4 className="vertical-timeline-element-subtitle">Kurunegala, Sri Lanka</h4>
            <p>
              G.C.E (Advance Level){" "}
                <Chip className='chipDark' label="High School" />
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;