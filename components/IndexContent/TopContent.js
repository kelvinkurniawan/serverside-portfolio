import React from "react";
import imageTop from "../../src/images/prof.png";

export default class TopContent extends React.Component {
  render() {
    return (
      <div className='top-content'>
        <div className='inner-bg'>
          <div className='container'>
            <div className='row items-center'>
              <div className='col-md-5 col-sm-12'>
                <div
                  className='text-title'
                  data-aos='zoom-in'
                  data-aos-duration='1000'
                >
                  <h3 className='text-white'>My Name is</h3>
                  <h3 className='text-white'>Kelvin Kurniawan Oktavianto</h3>
                </div>
                <div
                  data-aos='zoom-in-up'
                  data-aos-delay='900'
                  data-aos-duration='1000'
                >
                  <div className='text-description'>
                    <p className='text-white'>
                      Welcome to my Portofolio page, find out more about me and
                      my project. <br />I like to see the sky and are interested
                      in programming
                    </p>
                  </div>
                  <div className='button-container'>
                    <a
                      className='btn ghost-button'
                      href='https://linkedin.com/in/kelvinkurniawanoktavianto'
                    >
                      Contact Me Now
                    </a>
                  </div>
                </div>
              </div>
              <div className='offset-md-1' />
              <div className='col-md-6 col-sm-12'>
                <div
                  className='imageTop-container'
                  data-aos='fade-left'
                  data-aos-delay='400'
                  data-aos-duration='1000'
                >
                  <img
                    src={imageTop}
                    className='imageTop'
                    alt="Kelvin's Profile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pacman animated swing delay-2s' />
      </div>
    );
  }
}
