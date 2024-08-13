import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

import react from '../../assets/react.png';
import springboot from '../../assets/springboot.png';
import cpp from '../../assets/cpp.png';
import git from '../../assets/git.png';
import python from '../../assets/python.png'
import redux from '../../assets/redux.png'
import typescript from '../../assets/typescript.png'
import html from '../../assets/html.png'
import javascript from '../../assets/javascript.png'
import llama from '../../assets/llama.png'
import GenerativeAI from '../../assets/reduxdd.png'
import java from '../../assets/java.png'

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
    ],
  },
  {
    year: 'Dec 2021 - April 2023',
    works: [
      {
        name: 'Teaching Assistant (Competitive Programming Trainer, Class Representative)',
        company: 'Department of Computer Science & Engineering, Jahangirnagar University',
        desc: `<br>
          <ul>
            <li>Trained junior students in C, C++, data structures, and algorithms for programming contests.</li>
            <li>Served as Organizer, Problem Setter, and Judge for practice contests.</li>
            <li>Coordinated academic activities and events for my batch.</li>
          </ul>
        `,
      },
    ],
  },
];

const skills = [
  {
    name: 'Spring Boot',
    bgColor: '#F7DF1E',
    icon: springboot,
  },
  {
    name: 'React',
    bgColor: '#61DAFB',
    icon: react,
  },
  {
    name: 'C++',
    bgColor: '#61DAFB',
    icon: cpp,
  },
  {
    name: 'Git',
    bgColor: '#61DAFB',
    icon: git,
  },
  {
    name: 'Python',
    bgColor: '#61DAFB',
    icon: python,
  },
  {
    name: 'Redux',
    bgColor: '#61DAFB',
    icon: redux,
  },
  {
    name: 'Typescript',
    bgColor: '#61DAFB',
    icon: typescript,
  },
  {
    name: 'Javascript',
    bgColor: '#61DAFB',
    icon: javascript,
  },
  {
    name: 'HTML',
    bgColor: '#61DAFB',
    icon: html,
  },
  {
    name: 'LLM',
    bgColor: '#61DAFB',
    icon: llama,
  },
  {
    name: 'Generative AI',
    bgColor: '#61DAFB',
    icon: GenerativeAI,
  },
  {
    name: 'java',
    bgColor: '#61DAFB',
    icon: java,
  },
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
              <div className="app__flex">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
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
                      <h4>{work.company}</h4>
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
