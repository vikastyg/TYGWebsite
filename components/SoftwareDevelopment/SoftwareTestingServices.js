import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import StorageIcon from "@mui/icons-material/Storage";
import PowerIcon from "@mui/icons-material/Power";

const SoftwareTestingServices = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=Gn1ih1jEW00"]}
      />
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Digital Transformation Services</h2>
            <p>
              A holistic range of services covering all aspects of software
              development life cycle (SDLC) with industry domain expertise
            </p>
          </div>

          {/* <div className="row"> */}
          <div className=" col-lg-12  col-sm-12 col">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <div className="single-services-box1 service-box-top">
                  <Link href="/SoftwareDevelopment/CloudServices/">
                    <div className="icon">
                      <CloudQueueIcon
                        sx={{
                          fontSize: "4em",
                          color: "#f27f3d",
                        }}
                        className="material-icon"
                      ></CloudQueueIcon>
                    </div>

                    <h3>
                      Cloud Services
                      <br></br>
                    </h3>
                    <p>
                      <br />
                      Test Yantra Global excels in complex cloud migrations,
                      enhancing features, and security. We offer custom cloud
                      solutions and redesign architectures for cloud readiness.
                      Our expertise includes seamless integration of cloud and
                      on-premises systems while maintaining security and
                      performance.
                    </p>
                    
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-sm-4">
                <div className="single-services-box1 service-box-top">
                  {/* <Link href="https://testyantraglobal.com/all-about-crowdsourced-testing-testyantra/"> */}
                    <div className="icon">
                      <StorageIcon
                        sx={{
                          fontSize: "4em",
                          color: "#f27f3d",
                        }}
                        className="material-icon"
                      ></StorageIcon>
                    </div>

                    <h3>AWS Services</h3>
                    <p>
                      <br />
                      Test Yantra Global is an AWS consulting firm specializing
                      in cloud-first solutions and serverless applications. Our
                      services encompass AWS architecture optimization and
                      proactive monitoring. Additionally, we emphasize
                      Infrastructure as Code (IaC) using AWS CloudFormation for
                      consistent infrastructure management.
                    </p>
                   
                  {/* </Link> */}
                </div>
              </div>
              {/* </div> */}
              {/* <div className="row"> */}
              <div className="col-lg-4 col-sm-4">
                <div className="single-services-box1">
                  {/* <Link href="https://testyantraglobal.com/services/software-testing/"> */}
                    <div className="icon">
                      <PowerIcon
                        sx={{
                          fontSize: "4em",
                          color: "#f27f3d",
                        }}
                        className="material-icon"
                      ></PowerIcon>
                    </div>

                    <h3>IOT Services</h3>
                    <p>
                      <br/>
                      The synergy of IoT connecting individuals and devices
                      fosters enhanced efficiency and creativity. At Test Yantra
                      Global, we are committed to delivering top-notch IoT
                      consultancy
                    </p>
                    
                  {/* </Link> */}
                </div>
              </div>
              {/* <div className="col-lg-3 col-sm-3">
                <div className="single-services-box">
                  <div className="icon">
                    <i className="flaticon-automatic"></i>
                  </div>

                  <h3>
                    <Link href="/service-details">
                      Software Design & Development
                    </Link>
                  </h3>

                  <div className="service-list">
                    <ul>
                      <li>Certified IT professionals</li>
                      <li>Online Interactive Learning</li>
                      <li>Learning Management Platform - SkillRary</li>
                      <li>Rapidly scale & fulfill surge in demand</li>
                      <li>Curriculum in-line with Industry </li>
                      <li>Innovative Train-Hire model</li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {/* VIDEO PLAYER  */}
          {/* <div className=" col-lg-12 col-sm-12 ">
            <div className="video-player-image">
              <img src="/images/video-thumbnail.jpg" alt="image" />

              <div
                onClick={() => setToggler(!toggler)}
                className="video-btn popup-youtube"
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <PlayCircleOutlineIcon
                  sx={{
                    fontSize: "8em",
                    color: "#f27f3d",
                  }}
                />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default SoftwareTestingServices;
