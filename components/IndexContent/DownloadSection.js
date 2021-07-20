import React, { Component } from "react";
import WorkSetup from "../../src/images/work-setup.jpg";

export default class DownloadSection extends Component {
  render() {
    return (
      <div className='section section-container'>
        <div className='section-bg-container'>
          <img src={WorkSetup} className='section-bg' alt='Background' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <div
                style={{
                  height: "400px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <a
                  className='btn ghost-button large rounded-lg'
                  href='https://drive.google.com/drive/folders/1R_dtJevQtmHN7kxPDExtsPhNXTF0GWPh?usp=sharing'
                >
                  Download CV & Certificates
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
