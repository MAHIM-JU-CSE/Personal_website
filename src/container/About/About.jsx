import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

// Import images from the assets folder
import img1 from '../../assets/education.jpg';
import img2 from '../../assets/SW.jpg';
import img3 from '../../assets/research.png';
import img4 from '../../assets/icpc.png';

const abouts = [
  {
    title: 'Education',
    description: 'I completed my B.Sc. (Hons.) in Computer Science and Engineering from Jahangirnagar University, Dhaka, in 2021, graduating with a CGPA of 3.69 out of 4.0. During my undergraduate studies, I was awarded five scholarships-one for admission and four for academic excellence. I also completed my M.Sc. in Computer Science and Engineering with a CGPA of 3.8 out of 4.0. My academic journey began with a perfect GPA of 5.0 out of 5.0 in both my Higher Secondary Certificate (HSC) and Secondary School Certificate (SSC) exams.',
    imgUrl: img1,
  },
  {
    title: 'Software Engineer',
    description: 'As a Software Engineer at Samsung R&D Institute Bangladesh, I work on an internal web-based project for managing networking data, utilizing Spring Boot, React, and MongoDB. This project includes seven modules for handling 3G, 4G, and 5G data, with RabbitMQ facilitating inter-module communication and WebSocket providing real-time analytics in the Data Integration and Management System (DIMS) project. I have also worked on patent development, focusing on advancements in camera photography and generative AI. Additionally, I am working on a separate project involving a Knowledge Graph RAG interface to improve the retrieval and generation of information for private data.',
    imgUrl: img2,
  },
  {
    title: 'Research',
    description: 'In my research, I focus on making large language models more efficient and practical by exploring innovative techniques like model quantization and LoRA (Low-Rank Adaptation). My goal is to enhance how these models perform, making them more useful in real-world applications. I have been working with the LLaMA 2 and LLaMA 3 models to develop and test proof-of-concept solutions, pushing the boundaries of what these models can achieve. Beyond language models, I’m also involved in developing patents related to camera photography and generative AI. This work is about pushing the envelope in how we capture and create images, blending cutting-edge technology with creative solutions. Another exciting project I’m working on involves a Knowledge Graph RAG (Retrieve and Generate) interface. This project aims to improve how we handle and utilize private data by linking structured data with advanced language models, ultimately enhancing the accuracy and relevance of the information we generate.',
    imgUrl: img3,
  },
  {
    title: 'Competitive Programmer',
    description: 'I have competed in ICPC Dhaka Regional prelims for 2021-22, 2022-23, and 2023-24 with teams JU_NoName, JU_3AngryMen, and JU_Metamask. I achieved ranks of 87 in the NCPC 2023 prelims and 146 in the onsite contest with team JU_Anirbaaan. I also ranked 16th out of 62 teams in the MBSTU Inter Department Programming Contest 2021 (Team: JU_darkMatter). Additionally, I earned a Bronze Medal in the University Physics Competition 2021 (Team No: 233). My highest ratings are 1568 on Codeforces (Specialist, handle: Mahim) and 1916 on CodeChef (4*, handle: mahim47). Notable Bangladesh and global rankings include 14th in Bangladesh and 852nd globally in Codeforces Round 755 (Div. 2), 2nd in Bangladesh and 82nd globally in CodeChef Starters 62, 4th in Bangladesh and 123rd globally in CodeChef Starters 17, and 26th in Bangladesh and 551st globally in Codeforces Round 792 (Div. 1 + Div. 2). I’ve participated in over 160 online and over 10 onsite contests and solved 1500+ problems (stopstalk profile: https://www.stopstalk.com/user/profile/Mahim). I also served as Organizer, Problem Setter, and Judge for JU CSE 29’s Brain Muscle Checking Contest 2022 and Binary Brains Battle December 2022, both of which aimed to encourage junior students of Jahangirnagar University in problem-solving.',
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
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
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
