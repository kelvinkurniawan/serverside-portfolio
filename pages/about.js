import React, { Component } from "react";
import Navbar from "../components/Navbar";
import emailjs from "emailjs-com";
import emailKey from "../emailKey";
import Footer from "../components/Footer";
import profile from "../src/images/my_prof.png";
import { Fade } from "reactstrap";
import ReCAPTCHA from "react-google-recaptcha";
import Head from "next/head";

const onSubmit = (e) => {
  e.preventDefault();
  recaptchaRef.current.execute();
  emailjs
    .sendForm(
      "service_68yetgl",
      emailKey.TEMPLATE_ID,
      e.target,
      emailKey.USER_ID
    )
    .then(
      (result) => {
        alert(
          "message sent, we will reply as soon as possible",
          "I'll get back to you shortly",
          result.text
        );
      },
      (error) => {
        alert("An error occured, Please try again later", error.text);
      }
    );
};

const onReCAPTCHAChange = (captchaCode) => {
  if (!captchaCode) {
    return;
  }

  alert(`Hey, ${email}`);

  recaptchaRef.current.reset();
};

const recaptchaRef = React.createRef();

export default class About extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>About Me</title>
        </Head>
        <div className='main'>
          <Fade in>
            <Navbar isPages />
            <div
              className='content'
              id='content'
              style={{
                paddingTop: "100px",
                marginBottom: "100px",
                overflow: "hidden",
              }}
            >
              <div className='container'>
                <div className='row'>
                  <div
                    className='col text-center'
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    data-aos-delay='50'
                    data-aos-once='true'
                  >
                    <img
                      src={profile}
                      className='image-profile-about'
                      alt='profiles'
                    />
                  </div>
                </div>
                <div className='row mt-5 items-center'>
                  <div
                    className='col-md-5'
                    data-aos='fade-right'
                    data-aos-duration='1000'
                    data-aos-delay='300'
                    data-aos-once='true'
                  >
                    <div className='about-title'>
                      <h3>Hey There!</h3>
                    </div>
                    <div className='about-description'>
                      <p>
                        I am an undergraduate student of Informatics Engineering
                        at Wacana Satya Christian University, I am very
                        enthusiastic about software engineering, currently I
                        focus on web development using php, MySQL, nodeJs and
                        mobile development using java, sometimes I use react
                        native for multi-platform programming
                      </p>
                      <p>
                        If you have an idea for a project you'd like to work on,
                        just use the contact form on this page and you can reach
                        me directly!
                      </p>
                      {/* <p>
                        <a href='https://something' className='link'>
                          Click here for a list of stuff I'm using.
                        </a>
                      </p> */}
                    </div>
                    <div className='action-container'>
                      <a
                        href='https://drive.google.com/drive/folders/1R_dtJevQtmHN7kxPDExtsPhNXTF0GWPh?usp=sharing'
                        className='btn ghost-button ghost-teal'
                      >
                        Download CV & Cerificates
                      </a>
                    </div>
                  </div>
                  <div className='offset-md-1' />
                  <div
                    className='col-md-6 mt-5'
                    data-aos='fade-left'
                    data-aos-duration='1000'
                    data-aos-delay='600'
                    data-aos-once='true'
                  >
                    <div className='contact-form'>
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        size='invisible'
                        sitekey='6LdWbagbAAAAACCiNSjukie8G8EGx4f0XffEzwcV'
                        onChange={onReCAPTCHAChange}
                      />
                      <h3 className='text-center'>Send Message</h3>
                      <form onSubmit={onSubmit}>
                        <div className='form-group'>
                          <input
                            className='form-control'
                            id='inputName'
                            name='name'
                            placeholder='Your Name'
                          />
                        </div>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            id='subject'
                            name='subject'
                            placeholder='Subject'
                          />
                        </div>
                        <div className='form-group'>
                          <textarea
                            id='inputMessage'
                            className='form-control'
                            placeholder='Your Message'
                            name='message'
                            rows='7'
                          />
                        </div>
                        <div className='text-right'>
                          <button type='submit' className='btn btn-danger'>
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </Fade>
        </div>
      </div>
    );
  }
}
