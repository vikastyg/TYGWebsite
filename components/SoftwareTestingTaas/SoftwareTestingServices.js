import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import PeopleIcon from '@mui/icons-material/People';
import ScienceIcon from '@mui/icons-material/Science';

const SoftwareTestingServices = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=iGjTFB6C6tY"]}
      />
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Leverage two decades of <br/>Testing Expertise </h2>
            <p>
            Our testing center of excellence (CoE) provides a unified solutions for web, android, ios, API, and databases. 
            </p>
          </div>

          {/* <div className="row"> */}
          <div className=" col-lg-12  col-sm-12 col">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <div className="single-services-box service-box-top">
                {/* <Link href="https://testyantraglobal.com/services/it_consulting/"> */}
                  <div className="icon">
                  <PlagiarismIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></PlagiarismIcon>
                  </div>

                  <h3>
                    
                      Managed QA
                      <br></br>
                    
                  </h3>
                  <p>
                    
                    Our team of IT consultants and managed services experts provide timely consulting, software configuration, deployment, and support for an array of cloud and premise based applications.
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
                  {/* </Link> */}
                </div>
              </div>

              <div className="col-lg-4 col-sm-4">
                <div className="single-services-box service-box-top">
                {/* <Link href="https://testyantraglobal.com/all-about-crowdsourced-testing-testyantra/"> */}
                  <div className="icon">
                  <PeopleIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></PeopleIcon>
                   
                  </div>

                  <h3>
                    Crowd Testing
                  </h3>
                  <p>
                    
                    Crowdsourced Testing is a necessity and important solution for companies that are launching time-sensitive products, such as mobile applications and web-based platforms with UI, UX issues and software bugs.
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
                  {/* </Link> */}
                </div>
              </div>
              {/* </div> */}
              {/* <div className="row"> */}
              <div className="col-lg-4 col-sm-4">
                <div className="single-services-box">
                {/* <Link href="https://www.testyantraglobal.com/"> */}
                  <div className="icon">
                  <ScienceIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></ScienceIcon>
                  </div>

                  <h3>
                    
                      Testing Solutions
                    
                  </h3>
                  <p>
                    Test Yantra Global offers a suite of software testing tools, methodology, and resources aimed at enhancing the quality assurance of your applications including  testing services like automation, performance, application and security testing. 
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
          <div className="  homevideo ">
            <div className="video-player-image2">
              {/* <img src="/images/video-thumbnail.jpg" alt="image" /> */}

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
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default SoftwareTestingServices;
