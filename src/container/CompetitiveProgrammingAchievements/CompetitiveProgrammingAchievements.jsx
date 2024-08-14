import React from "react";
import { motion } from "framer-motion";
import "./CompetitiveProgrammingAchievements.scss";
import { AppWrap, MotionWrap } from "../../wrapper";

import codeforces from "../../assets/codeforces.png";
import codechef from "../../assets/codechef.png";
import leetcode from "../../assets/leetcode.png";
import stopstalk from "../../assets/stopstalk.png";

const codingProfiles = [
  {
    name: "Codeforces",
    bgColor: "#1F8ACB",
    icon: codeforces,
    link: "https://codeforces.com/profile/Mahim",
  },
  {
    name: "CodeChef",
    bgColor: "#5B4638",
    icon: codechef,
    link: "https://www.codechef.com/users/mahim47",
  },
  {
    name: "LeetCode",
    bgColor: "#FFA116",
    icon: leetcode,
    link: "https://leetcode.com/u/Mahim47/",
  },
  {
    name: "StopStalk",
    bgColor: "#FFA116",
    icon: stopstalk,
    link: "https://www.stopstalk.com/user/profile/Mahim",
  },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const CompetitiveProgrammingAchievements = () => {
  return (
    <>
      <h2 className="head-text">
        Competitive Programming <span>Achievements</span>
      </h2>
      {/* <h2 className="head-text">Competitive Programming Achievements</h2> */}
      <motion.div
        className="app__competitive-programming-achievements"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div className="app__coding-profiles-list">
          {codingProfiles.map((profile) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="app__coding-profile-item app__flex"
              key={profile.name}
            >
              <a href={profile.link} target="_blank" rel="noopener noreferrer">
                <div className="profile-icon-container app__flex">
                  <img src={profile.icon} alt={profile.name} />
                </div>
                <p className="p-text">{profile.name}</p>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <ul className="app__achievements-list">
          <li>
            Competed in 3 <strong>ICPC</strong> Dhaka Regional prelims for
            2021-22, 2022-23, and 2023-24 with teams JU_NoName, JU_3AngryMen,
            and JU_Metamask.
          </li>
          <li>
            Ranked <strong>87th</strong> in NCPC 2023 prelims 2023 onsite
            contest with team JU_Anirbaaan. Standings:{" "}
            <a
              href="https://bapsoj.org/contests/ncpc-preliminary-ju-2023/standings"
              target="_blank"
              rel="noopener noreferrer"
            >
              NCPC 2023 Preli
            </a>
          </li>
          <li>
            Ranked <strong>146th</strong> in NCPC 2023 Final onsite contest with
            team JU_Anirbaaan. Standings:{" "}
            <a
              href="https://bapsoj.org/contests/ncpc-onsite-2023-hosted-by-ju/standings"
              target="_blank"
              rel="noopener noreferrer"
            >
              NCPC 2023 Final
            </a>
          </li>
          <li>
            Ranked <strong>16th</strong> in the MBSTU Inter Department
            Programming Contest 2021 Final with team JU_darkMatter. Standings:{" "}
            <a
              href="https://toph.co/contests/training/fyglvac/standings"
              target="_blank"
              rel="noopener noreferrer"
            >
              MBSTU 2021 Final
            </a>
          </li>
          <li>
            Earned <strong>Bronze Medal</strong> in the University Physics
            Competition 2021 (a research competition) (Team No: 233).{" "}
            <a
              href="http://www.uphysicsc.com/2021contest.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              UPC 2021 Final
            </a>
          </li>
          <li>
            Participated in Google Kick Start 2022 Round A, B, and E with global
            ranking <strong>4336, 1260,</strong> and <strong>3525</strong>{" "}
            respectively.
          </li>
          <li>
            Ranked 2nd in Bangladesh and 82nd globally out of 22,249
            participants in CodeChef Round 62. Standings:{" "}
            <a
              href="https://www.codechef.com/rankings/START62B?itemsPerPage=100&order=asc&page=1&sortBy=rank"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codechef Round 62
            </a>
          </li>
          <li>
            Ranked 4th in Bangladesh and 123rd globally out of 6,753
            participants in CodeChef Round 17. Standings:{" "}
            <a
              href="https://www.codechef.com/rankings/START17C?itemsPerPage=100&order=asc&page=1&sortBy=rank"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codechef Round 17
            </a>
          </li>
          <li>
            Ranked 14th in Bangladesh and 852nd globally out of 11,816
            participants in Codeforces Round 755 (Div. 2).{" "}
            <a
              href="https://codeforces.com/contest/1589/standings"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codeforces Round 755
            </a>
          </li>
          <li>
            Ranked 26th in Bangladesh and 551st globally out of 11,000+
            participants in Codeforces Round 792 (Div. 1 + Div. 2).{" "}
            <a
              href="https://codeforces.com/contest/1684/standings"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codeforces Round 792
            </a>
          </li>
          <li>
            Highest ratings: <strong>1568 </strong>on Codeforces (Specialist,
            handle:{" "}
            <a
              href="https://codeforces.com/profile/Mahim"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mahim
            </a>
            ) and <strong>1916</strong> on CodeChef (4*, handle:{" "}
            <a
              href="https://www.codechef.com/users/mahim47"
              target="_blank"
              rel="noopener noreferrer"
            >
              mahim47
            </a>
            ).
          </li>
          <li>
            Participated in over<strong> 185 online</strong> and over{" "}
            <strong>10 onsite</strong> contests and solved{" "}
            <strong>1540+ </strong> programming problems on different online
            judges. (
            <a
              href="https://www.stopstalk.com/user/profile/Mahim"
              target="_blank"
              rel="noopener noreferrer"
            >
              StopStalk Profile
            </a>
            ).
          </li>
          <li>
            Organizer, Problem Setter, and Judge for JU CSE 29’s Brain Muscle
            Checking Contest 2022 and Binary Brains Battle December 2022.
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(CompetitiveProgrammingAchievements, "app__about"),
  "achievements",
  "app__whitebg"
);
