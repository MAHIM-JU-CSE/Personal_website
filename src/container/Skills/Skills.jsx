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
    year: '2023',
    works: [
      {
        name: 'Frontend Developer',
        company: 'Tech Company',
        desc: 'Developed several user-friendly web applications using React and other modern technologies.',
      },
      // Add more work experiences as needed
    ],
  },
  {
    year: '2022',
    works: [
      {
        name: 'Junior Developer',
        company: 'Another Tech Company',
        desc: 'Worked on various projects involving web development and bug fixes.',
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
      <h2 className="head-text">Skills & Experiences</h2>

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
                style={{ backgroundColor: skill.bgColor }}
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
                      <h5 className="p-text">{work.company}</h5>
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
