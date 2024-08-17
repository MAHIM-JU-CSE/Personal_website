import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Certificates.scss";
import { AppWrap, MotionWrap } from "../../wrapper";

import my_2022 from "../../assets/2022_my.png";
import team_2022 from "../../assets/2022_team.png";
import my_2024 from "../../assets/2024_my.png";
import team_2024 from "../../assets/2024_team.png";
import upc from "../../assets/upc.png";
import ncpc from "../../assets/ncpc.png";
import agoda from "../../assets/agoda.png";
import hackercup from "../../assets/hackercup.png";


const certificates = [
  {
    title: "International University Physics Competition 2021 Bronze Medal",
    institution: "Directed by Carroll College, Montana",
    date: "2021",
    image: upc,
  },
  {
    title: "Personal Certificate of 2024-ICPC Asia Dhaka Regional Prelim",
    institution: "Directed by ACM",
    date: "2024",
    image: my_2024,
  },
  {
    title: "Team Certificate of 2024-ICPC Asia Dhaka Regional Prelim",
    institution: "Directed by ACM",
    date: "2024",
    image: team_2024,
  },
  {
    title: "Personal Certificate of 2022-ICPC Asia Dhaka Regional Prelim",
    institution: "Directed by ACM",
    date: "2022",
    image: my_2022,
  },
  {
    title: "Team Certificate of 2022-ICPC Asia Dhaka Regional Prelim",
    institution: "Directed by ACM",
    date: "2021",
    image: team_2022,
  },
  {
    title: "National Collegiate Programming Contest (NCPC) 2023",
    institution: "NCPC Bangladesh",
    date: "2023",
    image: ncpc,
  },
  {
    title: "Meta Hackercup 2022 Qualification and Round 1",
    institution: "Organized by Meta",
    date: "2022",
    image: hackercup,
  },
  {
    title: "Codegoda Programming Contest 2022",
    institution: "Organized by Agoda",
    date: "2022",
    image: agoda,
  },

 
  // Add more certificates here
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <div>
        <h2 className="head-text">
          Certificates of <span>Recognition</span>
        </h2>

        <div className="certificates-container">
          <div className="certificates-grid">
            {certificates.map((certificate, index) => (
              <motion.div
                className="certificate-card"
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedCertificate(certificate)}
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                />
                <div className="certificate-info">
                  <h3>{certificate.title}</h3>
                  <p>{certificate.institution}</p>
                  <p>{certificate.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {selectedCertificate && (
            <div
              className="certificate-modal"
              onClick={() => setSelectedCertificate(null)}
            >
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                />
                <div className="modal-info">
                  <h3>{selectedCertificate.title}</h3>
                  <p>{selectedCertificate.institution}</p>
                  <p>{selectedCertificate.date}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Certificates, "app__certificates"),
  "certificates",
  "app__primarybg"
);
