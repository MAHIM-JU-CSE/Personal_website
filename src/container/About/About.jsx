import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

import img1 from '../../assets/education.jpg';
import img2 from '../../assets/SW.jpg';
import img3 from '../../assets/research.png';
import img4 from '../../assets/icpc.png';

const abouts = [
  {
    title: 'Education',
    description: 'I completed my B.Sc. (Hons.) in Computer Science and Engineering from Jahangirnagar University, Dhaka, in 2021, graduating with a CGPA of <strong>3.69 out of 4.0</strong>. During my undergraduate studies, I was awarded <strong>five scholarships</strong>—one for admission and four for academic excellence. I also completed my M.Sc. in Computer Science and Engineering with a CGPA of <strong>3.8 out of 4.0</strong>. My academic journey began with a perfect GPA of <strong>5.0 out of 5.0</strong> in both my Higher Secondary Certificate (HSC) and Secondary School Certificate (SSC) exams.',
    imgUrl: img1,
  },
  {
    title: 'Software Engineer',
    description: 'As a Software Engineer at Samsung R&D Institute Bangladesh, I work on an internal web-based project that manages networking data using <strong>Spring Boot, React, and MongoDB</strong>. This project includes seven modules designed to handle 3G, 4G, and 5G data. RabbitMQ facilitates inter-module communication, while WebSocket enables real-time analytics. Additionally, I am also working on a separate project involving a <strong>Knowledge Graph RAG interface</strong> to enhance the retrieval and generation of information for private data. I have also contributed to <strong>patent</strong> development for Samsung, aligning business objectives with innovative solutions.',
    imgUrl: img2,
  },
  {
    title: 'Research',
    description: 'In my research, I focus on making large language models more efficient and practical by exploring innovative techniques like <strong>model quantization</strong> and <strong>LoRA (Low-Rank Adaptation)</strong> and <strong>Knowledge Graph RAG</strong>. My goal is to enhance how these models perform, making them more useful for both private and public data in real-world applications. I have been working with the <strong>LLaMA 2 and LLaMA 3 models</strong> to develop and test proof-of-concept solutions, pushing the boundaries of what these models can achieve. I’m also involved in developing patents related to <strong>camera photography (enhance photo quality)</strong> using <strong>generative AI</strong>. This work is about pushing the envelope in how we capture and create images with higher quality details, blending cutting-edge technology with creative solutions.',
    imgUrl: img3,
  },
  {
    title: 'Competitive Programmer',
    description: 'I have competed in ICPC Dhaka Regional prelims for <strong>2021-22, 2022-23, and 2023-24</strong> with teams JU_NoName, JU_3AngryMen, and JU_Metamask. I ranked <strong>87th</strong> in NCPC 2023 prelims and <strong>146th</strong> in the onsite contest with team JU_Anirbaaan. Notable achievements include <strong>16th</strong> in the MBSTU Inter Department Programming Contest 2021 with team JU_darkMatter and a <strong>Bronze Medal</strong> in the research based University Physics Competition 2021.My highest ratings are <strong>1568 on Codeforces</strong> (Specialist, handle: <a href="https://codeforces.com/profile/Mahim" target="_blank">Mahim</a>) and <strong>1916 on CodeChef</strong> (4*, handle: <a href="https://www.codechef.com/users/mahim47" target="_blank">mahim47</a>). I’ve participated in over 180 online and 10 onsite contests, solving 1500+ problems (profile: <a href="https://www.stopstalk.com/user/profile/Mahim" target="_blank">Mahim</a>). I also organized and judged programming contests at Jahangirnagar University.',
    imgUrl: img4,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text"><span>Strong Research</span> <br />means  <span>Stronger Innovation</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ x: [-100, 0], opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }} dangerouslySetInnerHTML={{ __html: about.description }}></p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
