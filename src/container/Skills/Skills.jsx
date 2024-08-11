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
        desc: `<br>
          <ul>
            <li>Responsible for working on an internal web-based project designed to manage networking data.</li>
            <li>Analyze feature requirements, design and develop features, and fix bugs.</li>
            <li>Utilize Spring Boot, React, and MongoDB to build a system with 7 modules handling 3G, 4G, and 5G data.</li>
            <li>Implement RabbitMQ for seamless inter-module communication.</li>
            <li>Incorporate WebSocket for real-time analytics in the Data Integration and Management Studio (DIMS) project.</li>
            <li>Involved in developing a Knowledge Graph RAG (Retrieve and Generate) interface to enhance management and relevance of private data.</li>
            <li>Contribute to patent development focused on advancements in camera photography and generative AI.</li>
          </ul>
        `,
      },
      // Add more work experiences as needed
    ],
  },,
  {
    year: 'Dec 2021 - April 2023',
    works: [
      {
        name: 'Competitive Programming Trainer (Teaching Assistant), Class Representative',
        company: 'Department of Computer Science & Engineering, Jahangirnagar University',
        desc: `<br>
          <ul>
            <li>Trained students in C, C++, data structures, and algorithms for programming contests.</li>
            <li>Organized practice contests and coordinated academic activities and events.</li>
          </ul>
        `,
      },
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
