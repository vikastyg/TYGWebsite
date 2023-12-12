import React, { useState } from "react";

import FsLightbox from "fslightbox-react";
import Link from "next/link";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import ComputerSharpIcon from "@mui/icons-material/ComputerSharp";
import BuildSharpIcon from "@mui/icons-material/BuildSharp";
import DeveloperModeSharpIcon from "@mui/icons-material/DeveloperModeSharp";

const ServicesHome = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=tuwxrL7Kh4E&t=72s"]}
      />
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>
              Leverage Test Yantra Global's range of Professional Services
            </h2>
          </div>

          {/* <div className="row"> */}
          <div className=" col-lg-12  col-sm-12 col">
            <div className="row">
              <div className="col-lg-3 col-sm-3">
                <div className="single-services-box service-box-top">
                  <Link href="/services/SoftwareTestingTaas/">
                    <div className="icon">
                      <SettingsSharpIcon
                        sx={{
                          fontSize: "4em",
                          color: "#f27f3d",
                        }}
                        className="material-icon"
                      ></SettingsSharpIcon>
                    </div>

                    <h3>
                      Software Testing Services (TaaS)
                      <br></br>
                    </h3>

                    <p>
                      We offer cost-effective, reliable and scalable software
                      testing services.
                      <br/>
                    </p>

                    {/* <div className="service-list">
                    <ul>
                      <li>Application Testing</li>
                      <li>Functional and Automation Testing</li>
                      <li>Security and Performance Testing</li>
                      <li>Dedicated Crowd Testing</li>
                      <li>1000+ just-in-time beta testers</li>
                      <li>Test Competency Centers</li>
                      <li>FireFlink - AI, ML Test Automation Platform</li>
                    </ul>
                  </div> */}
                  </Link>
                </div>
              </div>

              <div className="col-lg-3 col-sm-3">
                <div className="single-services-box service-box-top">
                  <Link href="/services/SkillsEnhancement/">
                    <div className="icon">
                      <ComputerSharpIcon
                        sx={{
                          fontSize: "4em",
                          color: "#f27f3d",
                        }}
                        className="material-icon"
                      ></ComputerSharpIcon>
                    </div>

                    <h3>IT Software Skills Enhancement</h3>
                    <p>
                      Our customized and curated training models help
                      organizations elevate their IT quotient.
                    </p>
                    {/* <div className="service-list">
                    <ul>
                      <li>Mobile App Development </li>
                      <li>Migration and Reengineering </li>
                      <li>Full Stack Development </li>
                      <li>Web Solutions and Cloud Solutions </li>
                      <li>Middleware Integration </li>
                      <li>e-commerce Development </li>
                      <li>Data Science and ML DevOps Management </li>
                    </ul>
                  </div> */}
                  </Link>
                </div>
              </div>

              <div className="col-lg-3 col-sm-3">
                <div className="single-services-box">
                  <Link href="/services/ItConsulting/">
                    <div className="icon">
                      <BuildSharpIcon
                        sx={{
                          fontSize: "4em",
                          color: "#f27f3d",
                        }}
                        className="material-icon"
                      ></BuildSharpIcon>
                    </div>

                    <h3>Deployment & Support Services</h3>
                    <p>
                      Our team of experts help you craft a winning IT strategy
                      for your organization.
                    </p>
                    {/* <div className="service-list">
                    <ul>
                      <li>Global offshore ODC services</li>
                      <li>IT Consulting Services</li>
                      <li>Application Deployment, Maintenance and Support</li>
                      <li>Cloud Deployment & Support </li>
                      <li>Public and Private cloud</li>
                      <li>Strong Recruitment team specialized in sourcing</li>
                    </ul>
                  </div> */}
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-sm-3">
                <div className="single-services-box">
                  <Link href="/services/SoftwareDevelopment/">
                    <div className="icon">
                      <DeveloperModeSharpIcon
                        sx={{
                          fontSize: "4em",
                          color: "#f27f3d",
                        }}
                        className="material-icon"
                      ></DeveloperModeSharpIcon>
                    </div>

                    <h3>Software Design & Development</h3>
                    <p>
                      We deliver IT solutions in a wide variety of verticals and
                      elevate businesses to the next level.
                    </p>

                    {/* <div className="service-list">
                    <ul>
                      <li>Certified IT professionals</li>
                      <li>Online Interactive Learning</li>
                      <li>Learning Management Platform - SkillRary</li>
                      <li>Rapidly scale & fulfill surge in demand</li>
                      <li>Curriculum in-line with Industry </li>
                      <li>Innovative Train-Hire model</li>
                    </ul>
                  </div> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="homevideo">
            <div className="video-player-image1">
              <div className="video-content layer1">
                <h3>ENABLE THE DIGITAL</h3>
                <h1>TRANSFORMATION</h1>
              </div>
              <div className="video-content layer2">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesHome;
