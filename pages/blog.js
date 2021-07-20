import React, { Component } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import { Fade } from "reactstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };

    this.createMarkup = this.createMarkup.bind();
  }
  componentDidMount() {
    axios
      .get("https://blog.kelvink.id/wp-json/wp/v2/posts?per_page=30")
      .then((posts) => {
        this.setState({
          posts: posts.data,
        });
      });
  }

  createMarkup(html) {
    return { __html: html };
  }

  render() {
    let build;
    if (this.state.posts.length > 0) {
      build = (
        <div>
          <Head>
            <title>Blogs</title>
          </Head>
          <div className='main'>
            <Fade in>
              <Navbar isPages />
              <div
                className='content'
                id='content'
                style={{ overflow: "hidden", paddingTop: "100px" }}
              >
                <div className='container'>
                  <div className='row'>
                    {this.state.posts.map((post) => (
                      <div
                        className='col-lg-3 col-md-4 col-sm-12 d-flex mb-4'
                        key={post.id}
                      >
                        <div
                          className='post-card card'
                          data-aos='fade-up'
                          data-aos-duration='1000'
                        >
                          <Link
                            prefetch
                            as={`/blog/${post.slug}`}
                            href={`/single?slug=${post.slug}`}
                          >
                            <div className='thumb-replacement'>
                              <img
                                className='card-img-top thumbnail'
                                src={post.better_featured_image.source_url}
                                alt={post.title.rendered}
                                rel='prefetch'
                              />
                            </div>
                          </Link>
                          <div className='card-body'>
                            <h3 className='card-title'>
                              <Link
                                prefetch
                                as={`/blog/${post.slug}`}
                                href={`/single?slug=${post.slug}`}
                              >
                                <div className='post-link'>
                                  <div
                                    dangerouslySetInnerHTML={this.createMarkup(
                                      post.title.rendered
                                    )}
                                  />
                                </div>
                              </Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Footer />
            </Fade>
          </div>
        </div>
      );
    } else {
      build = (
        <div>
          <Head>
            <title>Loading..</title>
          </Head>
          <Loading />
        </div>
      );
    }

    return build;
  }
}
