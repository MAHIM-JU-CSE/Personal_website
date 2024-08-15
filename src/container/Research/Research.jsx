import { AppWrap, MotionWrap } from "../../wrapper";
import React from 'react';
import { motion } from 'framer-motion';
import './Research.scss';

const Research = () => {
  const publications = [
    {
      title: 'Optimizing Fine-Tuning of Large Language Models Using Quantization and LoRA',
      authors: 'M. Islam, A. Rahman, T. Hossain',
      details: 'Proceedings of the 15th International Conference on Artificial Intelligence, 2024.',
      abstract: 'This paper explores the combination of model quantization and LoRA to optimize the fine-tuning process of large language models, reducing computational cost while maintaining accuracy.',
      doi: 'https://doi.org/10.1000/ai2024.001',
      status: 'published',
    },
    {
      title: 'A Novel Approach to Knowledge Graph Retrieval with Reinforcement Learning',
      authors: 'M. Islam, S. Ahmed, N. Karim',
      details: 'Journal of Machine Learning Research, vol. 22, no. 3, pp. 123-145, 2023.',
      abstract: 'This research introduces a reinforcement learning-based approach to enhance knowledge graph retrieval, achieving higher precision and recall in complex queries.',
      doi: 'https://doi.org/10.1000/jmlr2023.002',
      status: 'in progress',
    },
    {
      title: 'Real-Time Data Integration and Management for 5G Networks',
      authors: 'M. Islam, L. Tanvir, A. Zaman',
      details: 'IEEE Transactions on Networking, vol. 30, no. 7, pp. 1012-1025, 2023.',
      abstract: 'This study presents a real-time data integration framework for managing 5G network data, improving latency and throughput in large-scale deployments.',
      doi: 'https://doi.org/10.1000/ieee2023.003',
      status: 'published',
    },
  ];

  return (
    <motion.div 
      className="research-container"
      initial={{ opacity: 0, x: -100 }} // Starts off-screen to the left
      animate={{ opacity: 1, x: 0 }} // Moves to the original position
      transition={{ duration: 1, ease: 'easeOut' }} // Smooth animation
    >
      <h2 className="head-text">Research & <span>Publications</span></h2>
      <motion.div 
        className="publications-list"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {publications.map((publication, index) => (
          <motion.div
            className="publication-item"
            key={index}
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 100 }, // Coming from bottom
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="publication-title">{publication.title}</h3>
            <p className="publication-authors">{publication.authors}</p>
            <p className="publication-details">{publication.details}</p>
            <p className={`publication-status ${publication.status.replace(' ', '-').toLowerCase()}`}>
              {publication.status === 'published' ? 'Published' : 'In Progress'}
            </p>
            <p className="publication-abstract">{publication.abstract}</p>
            <a href={publication.doi} className="publication-doi" target="_blank" rel="noopener noreferrer">
              View Publication DOI
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AppWrap(
  MotionWrap(Research, "app__testimonial"),
  "research",
  "app__primarybg"
);
