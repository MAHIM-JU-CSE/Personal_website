import React from 'react';
import { BsTwitter, BsInstagram, BsGithub} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsGithub />
    </div>
    <div>
      <a href="https://www.facebook.com/osohaybalokmahim/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
      </a>
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
