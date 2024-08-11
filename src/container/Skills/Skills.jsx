import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

// Import the static image from the assets folder
import about01 from '../../assets/about01.png';

// Static data for experiences and skills
const experiences = [
  {
    year: '5 April 2023 - Present',
    works: [
      {
        name: 'Software Engineer',
        company: 'Samsung R&D Institute Bangladesh',
        desc: '<br><b>1.</b> At Samsung R&D Institute Bangladesh, I am responsible for working on an internal web-based project designed to manage networking data. My role includes analyzing feature requirements, designing and developing features, and fixing bugs. Project stack: Spring Boot, React, and MongoDB to build a system with 7 modules that handle 3G, 4G, and 5G data. Additionally, I implement RabbitMQ for seamless inter-module communication and WebSocket for real-time analytics in the Data Integration and Management Studio (DIMS) project.<br><br><b>2.</b> I am also involved in a separate project developing a Knowledge Graph RAG (Retrieve and Generate) interface to enhance the management and relevance of private data. <br><br><b>3.</b> In addition to my primary project, I contribute to patent development with a focus on advancements in camera photography and generative AI.',
      },
      // Add more work experiences as needed
    ],
  },
  {
    year: 'Dec 2021 - April 2023',
    works: [
      {
        name: 'Competitive Programming Trainer (Teaching Assistant), Class Representative',
        company: 'Department of Computer Science & Engineering, Jahangirnagar University',
        desc: '<br><b>1.</b> From December 2021 to April 2023, I served as a Competitive Programming Trainer and Class Representative in the Department of Computer Science & Engineering at Jahangirnagar University.<br><br><b>2.</b> In this role, I trained junior students in C, C++, data structures, and algorithms to prepare them for programming contests. I managed regular training classes, organized practice contests, and monitored students performance. Additionally, I oversaw academic classes for my batch and coordinated departmental ceremonies and events.',
      },
      // Add more work experiences as needed
    ],
  },
];

const skills = [
  {
    name: 'JavaScript',
    bgColor: '#F7DF1E',
    icon: about01, // Using the static image for all icons
  },
  {
    name: 'React',
    bgColor: '#61DAFB',
    icon: about01, // Using the static image for all icons
  },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Job Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h2 className="bold-text">{work.name}</h2>
                      <h5>{work.company}</h5>
                      <div dangerouslySetInnerHTML={{ __html: work.desc }} className="p-text" />
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
