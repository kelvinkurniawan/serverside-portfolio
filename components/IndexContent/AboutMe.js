import React, { Component } from "react";
import ProfileWidget from "./ProfileWidget";
import Link from "next/link";

export default class AboutMe extends Component {
  render() {
    return (
      <div className='section section-container'>
        <div className='container'>
          <div className='row no-gutters items-center'>
            <div
              className='col-md-6'
              data-aos='fade-left'
              data-aos-offset='300'
              data-aos-duration='1000'
            >
              <h3 className='section-title'>About Me</h3>
              <div className='row no-gutters mt-5 mb-5'>
                <div className='col'>
                  <ProfileWidget />
                </div>
              </div>
            </div>
            <div className='offset-md-1' />
            <div
              className='col-md-5'
              data-aos='fade-right'
              data-aos-offset='250'
              data-aos-duration='1000'
            >
              <div className='ExperienceWidget'>
                <h3 className='Experience-title text-center'>Hi there!</h3>
                <p>
                  I am an undergraduate student of Informatics Engineering at
                  Wacana Satya Christian University, I am very enthusiastic
                  about software engineering..
                </p>
                <Link href='/about'>
                  <a className='btn btn-see-more'>See More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
