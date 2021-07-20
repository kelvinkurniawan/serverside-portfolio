import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import profile from "../src/images/my_prof.png";
import { Fade } from "reactstrap";
import Head from "next/head";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const data = this.props.data;
    return (
      <div>
        <Head>
          <title>{data.title}</title>
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
                      alt='profiles'
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className='row mt-5 items-center'>
                  <div
                    className='col-md-12'
                    data-aos='fade-right'
                    data-aos-duration='1000'
                    data-aos-delay='300'
                    data-aos-once='true'
                  >
                    <div className='about-title'>
                      <h3>Title</h3>
                    </div>
                    <div className='about-description'>
                      <p>Description</p>
                    </div>
                    <div className='action-container'>
                      <a
                        href='https://something'
                        className='btn ghost-button ghost-teal'
                      >
                        Go back
                      </a>
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
