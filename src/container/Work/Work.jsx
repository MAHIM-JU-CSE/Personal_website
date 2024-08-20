import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

// Import the static image from the assets folder

import biofloc from "../../assets/biofloc.PNG";
import objectdetection from "../../assets/objectdetection.png";
import portfolio from "../../assets/portfolio.png";
import ai from "../../assets/ai.png";

// Hardcoded portfolio data with the same image
const works = [
  {
    title: "IoT Project",
    description:
      "This is an IoT-based water quality (pH, temperature, TDS, ammonia, Dissolved Oxygen) monitoring system for biofloc. Machine learning is also applied to take decision about the water quality.",
    imgUrl: biofloc,
    projectLink:
      "https://github.com/MAHIM-JU-CSE/Iot-based-biofloc-water-quality-monitoring-",
    codeLink:
      "https://github.com/MAHIM-JU-CSE/Iot-based-biofloc-water-quality-monitoring-",
    tags: ["IoT"],
  },
  {
    title: "Object Detection",
    description:
      "This is an object detection project using OpenCV, Tensorflow and cvlib. Underneath it uses YOLOv4 model trained on COCO dataset capable of detecting 80 common objects in context.",
    imgUrl: objectdetection,
    projectLink: "https://github.com/MAHIM-JU-CSE/Object_detection",
    codeLink: "https://github.com/MAHIM-JU-CSE/Object_detection",
    tags: ["Machine Learning"],
  },
  {
    title: "Portfolio",
    description:
      "This is a web project using Reactjs, Framer motion, SCSS, and Emailjs. The site is designed fully responsive using media query. It is made to represent my academic and professional details",
    imgUrl: portfolio,
    projectLink: "https://mahim-ju-cse.github.io/portfolio/",
    codeLink: "https://github.com/MAHIM-JU-CSE/portfolio",
    tags: ["Web App"],
  },
  {
    title: "Conversational AI",
    description:
      "This is a Conversational AI project leveraging the LLaMA 3.1 8B and Mistral 7B models, integrated through Ollama and OpenWebUI for robust and responsive natural language interactions.",
    imgUrl: ai,
    projectLink: "",
    codeLink: "",
    tags: ["Generative AI"],
  },
];

const Work = () => {
  const [filterWork, setFilterWork] = useState(works);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        Personal <span>Projects</span>
      </h2>

      <div className="app__work-filter">
        {["IoT", "Machine Learning", "Generative AI", "Web App", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "projects",
  "app__primarybg"
);
