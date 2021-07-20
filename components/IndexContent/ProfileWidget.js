import React, { Component } from "react";

import profile from "../../src/images/my_prof.png";

export default class ProfileWidget extends Component {
  render() {
    return (
      <div className='profile-card'>
        <div className='card'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-4 text-center'>
                <img
                  src={profile}
                  className='image-profile-widget'
                  alt='profiles'
                />
              </div>
              <div className='col-md-8'>
                <h5 className='card-title'>Kelvin Kurniawan Oktavianto</h5>
                <p className='card-text'>Software Enginering.</p>
                <div className='row'>
                  <a
                    href='https://www.instagram.com/indomierasakentang/'
                    className='btn ghost-button ghost-teal rounded responsive m-2 col'
                  >
                    <i className='fab fa-instagram' /> Instagram
                  </a>
                  <a
                    href='https://www.twitter.com/indomiekentang'
                    className='btn ghost-button ghost-teal rounded responsive m-2 col'
                  >
                    <i className='fab fa-twitter' /> Twitter
                  </a>
                  <a
                    href='https://www.linkedin.com/in/kelvinkurniawanoktavianto/'
                    className='btn ghost-button ghost-teal rounded responsive m-2 col'
                  >
                    <i className='fab fa-linkedin' /> Linkedin
                  </a>
                  <a
                    href='https://fb.me'
                    className='btn ghost-button ghost-teal rounded responsive m-2 col'
                  >
                    <i className='fab fa-facebook' /> Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
