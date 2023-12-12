import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import { Typewriter } from "react-simple-typewriter";
// import Typewriter from "typewriter-effect";

const MainBanner = () => {
  return (
    <>
      <div className="container-fluid main-banner-wrapper">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 typewriter">
            <div className="row">
              <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 title-typewritter ">
                <h2>With Test Yantra Global</h2>
                <span>
                  <Typewriter
                    words={[
                      "Accelerate Business Efficiency..",
                      "Achieve Digital Transformation..",
                      "Drive AI Automation Testing..",
                      "Build Custom Applications..",
                      "Realize Cost-Effective Testing..",
                      "Unify Web, Mobile, API, and DB Testing..",
                      "Access 1,000's of expert Test Engineers..",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={20}
                    delaySpeed={1000}
                  />
                </span>
              </div>
              <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12">
                <br />
                <p>
                  Test Yantra Global's 5,000+ employees provide a range of
                  innovative technology solutions to digitally transform your
                  organization.
                  </p>
                  <p>
                  From IT consulting, application design and development, to
                  automated AI enabled test management platform that unifies
                  web, android, iOS, API, and DB testing, we have the expertise,
                  technology, experience, and tools to help transform your
                  business.
                </p>
                <br />
                <div className="btn-box">
                  <Link href="/contact" className="btn btn-primary">
                    Get Started Free
                  </Link>
                  {/* <Link href="/contact" className="optional-btn">
                    <strong>Get Started Free</strong>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mainbannersize">
            <Swiper
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: false,
              }}
              modules={[Autoplay, Pagination]}
              className="home-slides"
              style={{ borderRadius: `2em` }}
            >
              <SwiperSlide>
                <div
                  className="main-banner"
                  style={{ backgroundImage: `url(/images/banner1.png)` }}
                >
                  <div className="container">
                    <div className="main-banner-content">
                      <h2>
                        Turn your Manual Testers <br /> into Automation Testers{" "}
                      </h2>
                      <ul>
                        <li>Easy to use</li>
                        <li>No code Natural Language Processing</li>
                        <li>Begin automating in hours</li>
                      </ul>

                      {/* BUTTON */}

                      {/* <div className="btn-box">
                        <Link href="#" className="btn btn-primary">
                          Free Trial
                        </Link>
                        <Link href="/contact" className="optional-btn">
                          Started Free
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="main-banner"
                  style={{ backgroundImage: `url(/images/banner2.png)` }}
                >
                  <div className="container">
                    <div className="main-banner-content">
                      <h2>
                        Automate Across Multiple Test <br />
                        Applications and Platforms
                      </h2>

                      <ul>
                        <li>Web automation </li>
                        <li>Android and iOS</li>
                        <li>Step based API's</li>
                      </ul>

                      {/* BUTTON  */}

                      {/* <div className="btn-box">
                        <Link href="#" className="btn btn-primary">
                          Schedule a Demo
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="main-banner"
                  style={{ backgroundImage: `url(/images/banner3.png)` }}
                >
                  <div className="container">
                    <div className="main-banner-content">
                      <h2>
                        Scalable On-Demand <br /> Test Management Platform
                      </h2>
                      <ul>
                        <li>Execute across cloud services </li>
                        <li>Automated test distribution</li>
                        <li>Emulators, simulators, and real devices</li>
                      </ul>

                      {/* BUTTON  */}

                      {/* <div className="btn-box">
                        <Link href="#" className="btn btn-primary">
                          Know More
                        </Link>
                        <Link href="/contact" className="optional-btn">
                          Get Started Free
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
