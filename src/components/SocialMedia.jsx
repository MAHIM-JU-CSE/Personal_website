import React from 'react';
import {BsGithub} from 'react-icons/bs';
import { FaFacebookF, FaLinkedin, FaCode } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/mahbub-islam-mahim-4634a5154/" aria-label="Linkedin" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/osohaybalokmahim/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
      </a>
    </div>
    <div>
    <a href="https://github.com/MAHIM-JU-CSE" aria-label="Github" target="_blank" rel="noopener noreferrer">
      <BsGithub />
      </a>
    </div>
    <div>
    <a href="https://www.stopstalk.com/user/profile/Mahim" aria-label="Stopstalk" target="_blank" rel="noopener noreferrer">
    <FaCode />
      </a>
    </div>
  </div>
);

export default SocialMedia;
