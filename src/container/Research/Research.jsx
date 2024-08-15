import React from "react";
import { motion } from "framer-motion";
import "./Research.scss";
import { AppWrap, MotionWrap } from "../../wrapper";

const Research = () => {
  const publications = [
    {
      title:
        "Optimizing Fine-Tuning of Large Language Models Using Quantization and LoRA",
      authors: "Mahbub Islam Mahim, Jugal Krishna Das",
      details: "Journal of Electronics and Computer Science, Volume 16, 2024",
      abstract:
        "This paper presents an optimized fine-tuning process for large language models (LLMs) that combines Low-Rank Adaptation (LoRA) and Quantization. Traditional full fine-tuning methods are computationally expensive, requiring significant GPU memory, which limits their accessibility. In our approach, we first quantize the LLaMA-2 7B model and then apply LoRA fine-tuning to that quantized model. We demonstrate that the combination of quantization and LoRA significantly reduces GPU memory requirements while maintaining model performance. Through rigorous experiments, we successfully fine-tuned the 7B LLaMA-2 model using the CodeAlpaca-20k dataset with only 10.8 GB of GPU memory, compared to the 112 GB required by traditional methods. We further developed an inference system using this optimized fine-tuned model for practical deployment.",
      doi: "https://ecs.ju-journal.org/jujecs",
      status: "published",
    },

    {
      title: "Extending Higher Quality Details to Larger FoV Images",
      authors: "Fawwaz Mohammed Amin, Mahbub Islam Mahim, Hussain Md. Safwan",
      details: "Not decided yet",
      abstract:
        "This research addresses the challenge of maintaining high-quality image details when extending to larger fields of view (FoV) in photography.  ",
      doi: "https://ecs.ju-journal.org/jujecs",
      status: "in progress",
    },
  ];

  const statusIcons = {
    published: "✔️", // Published symbol
    "in progress": "⏳", // In progress symbol
  };

  return (
    <motion.div
      className="research-container"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h2 className="head-text">
        Research & <span>Publications</span>
      </h2>

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
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="publication-title">{publication.title}</h3>
            <p className="publication-authors">{publication.authors}</p>
            <p className="publication-details">{publication.details}</p>
            {publication.status && (
              <p
                className={`publication-status ${publication.status
                  .replace(" ", "-")
                  .toLowerCase()}`}
              >
                {publication.status === "published"
                  ? "Published"
                  : "In Progress"}{" "}
                {statusIcons[publication.status]}
              </p>
            )}
            {publication.abstract && (
              <p className="publication-abstract">{publication.abstract}</p>
            )}
            {publication.doi && (
              <a
                href={publication.doi}
                className="publication-doi"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Publication DOI
              </a>
            )}
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
