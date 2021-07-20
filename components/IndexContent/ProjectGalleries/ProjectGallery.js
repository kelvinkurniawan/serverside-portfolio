import React, { Component } from "react";
import Portfolio from "../../../src/images/Portofolio-project.png";
import SistemPakar from "../../../src/images/sistem-pakar-project.png";
import Puinter from "../../../src/images/puinter-project.png";
import TODProject from "../../../src/images/Tod-project.png";
import WarungCrypto from "../../../src/images/warungcrypto.png";
import HazardReport from "../../../src/images/hazardreport.png";

export default class ProjectGallery extends Component {
  constructor(props) {
    super(props);
    const image = [
      {
        id: 1,
        image_name: "Portfolio Application",
        url: Portfolio,
        description:
          "Aplikasi Portofolio yang dibangun dengan menggunakan ReactJS",
      },
      {
        id: 2,
        image_name: "Puinter - Kelompok Belajar Online",
        url: Puinter,
        description:
          "Aplikasi Puinter merupakan platform dimana penggunanya dapat membentuk sebuah kelompok belajar secara online, dan saling berkomunikasi dalam aplikasi, aplikasi ini berawal dari keresahan pelajar didesa yang sulit untuk membangun relasi yang lebih luas, aplikasi ini menjadi juara pertama pada hackathon solo membangun 2018",
      },
      {
        id: 3,
        image_name: "Sistem Pakar Diagnosa Penyakit",
        url: SistemPakar,
        description:
          "Aplikasi ini merupakan aplikasi yang digunakan untuk mendiagnosa penyakit berdasarkan gejala - gejala yang dipilih",
      },
      {
        id: 4,
        image_name: "Turth or Dare Application",
        url: TODProject,
        description:
          "Aplikasi ini merupakan yang digunakan untuk bermain truth or dare secara online",
      },
      {
        id: 5,
        image_name: "WarungCrypto",
        url: WarungCrypto,
        description:
          "Aplikasi WarungCrypto merupakan aplikasi yang terinpirasi dari marketplace crypto yang dapat digunakan untuk melakukan transaksi crypto, warungcrypto menggunakan API pricelist dari coinmarketcap",
      },
      {
        id: 6,
        image_name: "HazardReport",
        url: HazardReport,
        description:
          "Aplikasi HazardReport merupakan aplikasi yang digunakan untuk melaporkan bahaya yang terjadi dalam sebuah perusahaan, aplikasi ini menggunakan SpringBoot dan menggunakan bahasa Java",
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
