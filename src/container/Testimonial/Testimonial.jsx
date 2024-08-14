import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
// Import the static image from the assets folder
import "./Testimonial.scss";

import samsung from "../../assets/samsungresearchbangladesh_logo.jpg";
import ju from "../../assets/logo-ju.png";
import Mushfique_Sir from "../../assets/Mushfique_Sir.jpg";
import rafsan_sir from "../../assets/rafsan_sir.jpg";
import jugal_sir from "../../assets/jugal_sir.jpg";
import marufbhai from "../../assets/marufbhai.jpg";

// Static data for testimonials and brands
const testimonials = [
  {
    name: "Dr. Md Musfique Anwar",
    mail: "manwar@juniv.edu",
    company:
      "Professor, Department of Computer Science and Engineering, Jahangirnagar University",
    feedback:
      "Mahim is not only a dedicated student in my university courses but also a valued collaborator in our research. His keen understanding of complex topics, combined with his proactive approach to learning, has been evident both in the classroom and our research endeavors. Mahim’s ability to apply theoretical knowledge to practical challenges and his teamwork skills have significantly enriched our work. I have no doubt that his talent and commitment will drive his continued success.",
    image: Mushfique_Sir,
    link: "https://juniv.edu/teachers/musfique.anwar",
  },
  {
    name: "Dr. Jugal Krishna Das",
    mail: "cedas@juniv.edu",
    company:
      "Professor, Department of Computer Science and Engineering, Jahangirnagar University",
    feedback:
      "Mahbub Islam Mahim is a remarkable individual who consistently brings both insight and energy to every task he undertakes. In my experience as both his teacher and research collaborator, I've been impressed by his ability to navigate challenging concepts with ease and his relentless pursuit of excellence. Mahbub’s approach to learning is both methodical and innovative, and his contributions to our research have been invaluable. His collaborative nature and commitment to growth make him a standout in any academic or professional setting",
    image: jugal_sir,
    link: "https://juniv.edu/teachers/cedas",
  },
  {
    name: "Md. Rafsan Jani",
    mail: "rafsan@juniv.edu",
    company:
      "Assistant Professor, Department of Computer Science and Engineering, Jahangirnagar University",
    feedback:
      "I have had the pleasure of supervising Mahim in competitive programming. He has participated in numerous international and national onsite and online contests, consistently showcasing exceptional problem-solving skills and a keen analytical mind. His dedication and performance in these competitions highlight his commitment and ability to excel in challenging environments. Mahim is a standout student with a bright future ahead.",
    image: rafsan_sir,
    link: "https://juniv.edu/teachers/rafsan",
  },
  {
    name: "Md Marufur Rahman",
    mail: "maruf_csdu@yahoo.com",
    company:
      "Project Lead, Samsung R&D Institute Bangladesh",
    feedback:
      "Working with Mahim has been a remarkable experience. His technical expertise and problem-solving skills are top-notch. Mahim approaches each challenge with enthusiasm and a unique perspective, consistently delivering high-quality results. His commitment and innovative thinking make him an invaluable member of our team at Samsung R&D Institute Bangladesh.",
    image: marufbhai,
    link: "https://www.linkedin.com/in/mdmarufurrahman/",
  },
  // Add more testimonials as needed
];

const brands = [
  { _id: "1", name: "Brand A", imgUrl: samsung },
  { _id: "2", name: "Brand B", imgUrl: ju },
  // Add more brands as needed
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
             
                <div>
                <a
                href={testimonials[currentIndex].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                  <h4 className="bold-text">
                    {testimonials[currentIndex].name}
                  </h4>
                  <h5 className="p-text">
                    {testimonials[currentIndex].company}
                  </h5>
                  </a>
                  <h5 className="p-text">
                    Email: {testimonials[currentIndex].mail}
                  </h5>
                </div>
             
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
