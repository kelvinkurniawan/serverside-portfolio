import React, { Component } from "react";
import Portfolio from "../../../src/images/Portofolio-project.png";
import TODProject from "../../../src/images/Tod-project.png";

export default class DummyGallery extends Component {
  constructor(props) {
    super(props);
    const image = [
      {
        image_name: "Portfolio Application",
        url: Portfolio,
        description:
          "Aplikasi Portofolio yang dibangun dengan menggunakan ReactJS",
      },
      {
        image_name: "Turth or Dare Application",
        url: TODProject,
        description:
          "Aplikasi ini merupakan yang digunakan untuk bermain truth or dare secara online",
      },
    ];

    this.state = {
      image,
    };
  }
  render() {
    let build;
    if (this.state.image.length > 0) {
      let delay = 700;
      build = this.state.image.map((res) => (
        <div
          className='col-md-3 mb-3'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay={(delay += 100)}
          key={res.image_name}
        >
          <div
            className='project-link custom-tooltip'
            href='/'
            data-text={res.description}
          >
            <img
              src={res.url}
              className='project-image'
              alt={res.image_name}
              rel='prefetch'
            />
            <div className='project-caption'>
              <p>{res.image_name}</p>
            </div>
          </div>
        </div>
      ));
    } else {
      build = (
        <div className='col-md-12 text-center'>There is No Available!</div>
      );
    }

    return build;
  }
}
