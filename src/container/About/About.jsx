import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

// Import images from the assets folder
import img1 from '../../assets/about01.png';
import img2 from '../../assets/about01.png';
import img3 from '../../assets/about01.png';
import img4 from '../../assets/about01.png';

const abouts = [
  {
    title: 'Research and Development',
    description: 'Innovative solutions through continuous research and development.',
    imgUrl: img1,
  },
  {
    title: 'Advanced Technology',
    description: 'Utilizing cutting-edge technology for superior performance.',
    imgUrl: img2,
  },
  {
    title: 'Customer Focus',
    description: 'Prioritizing customer needs in all our innovations.',
    imgUrl: img3,
  },
  {
    title: 'Sustainability',
    description: 'Committed to sustainable and eco-friendly practices.',
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
