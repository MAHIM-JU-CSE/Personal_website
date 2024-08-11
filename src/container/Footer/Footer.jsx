import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_ln9yflj', 'template_lcfc03u', e.target, 'HRo90jsM2_Wh0GTHP')
      .then((result) => {
        console.log(result.text);
        setLoading(false);
        setIsFormSubmitted(true);
      }, (error) => {
        console.log(error.text);
        setLoading(false);
      });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & ping me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:mahim.stu20171@juniv.edu" className="p-text">mahim.stu20171@juniv.edu</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+8801982474475" className="p-text">+8801982474475</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="p-text">{!loading ? 'Send Message' : 'Sending...'}</button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
