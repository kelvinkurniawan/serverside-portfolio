import React, { Component } from "react";
import Hackathon2018 from "../../../src/images/hackathon-2018.jpg";

export default class ActivityGallery extends Component {
  constructor(props) {
    super(props);

    const image = [
      {
        id: 1,
        image_name: "Hackathon Solo Membangun 2018",
        url: Hackathon2018,
        description:
          "Hackahton Solo Membangun 2018, merupakan acara hackathon yang diadakan disolo pada tahun 2018, program ini di ikuti oleh berbagai kalangan programmer baik beginner sampai dengan professional programmer, dalam acara ini kami diminta untuk membuat sebuah aplikasi yang dapat membangun kota solo, proses pembuatan aplikasi ini dilakukan secara marathon selama 24 jam, dan kemudian kami harus mempresentasikannya didepan juri Pada Kompetisi ini kami membuat aplikasi bernama puinter",
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
