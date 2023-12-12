import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FactoryIcon from '@mui/icons-material/Factory';

const SkillsEnhancementServices = () => {
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
            <h3>Elevate Your Team's Skills with <br/>Test Yantra Global: Your Gateway to Excellence.</h3>
            <p>
            Benefits of Choosing Test Yantra Global
            </p>
          </div>

          {/* <div className="row"> */}
          <div className=" col-lg-12  col-sm-12 col">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <div className="single-services-box service-box-top">
                {/* <Link href="https://testyantraglobal.com/services/it_consulting/"> */}
                  <div className="icon">
                  <ConnectWithoutContactIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></ConnectWithoutContactIcon>
                  </div>

                  <h3>
                    
                  Expert IT Consultants
                      <br></br>
                    
                  </h3>
                  <p>
                  Test Yantra Global has trained 670,000+ learners since its inception. Our team of 400+ trainers provides invaluable domain expertise and insight into their specific topics. 

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
                  <MenuBookIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></MenuBookIcon>
                  </div>

                  <h3>
                  Practical Learning
                  </h3>
                  <p>
                  Our experiential learning methodology emphasizes practical training to ensure that you acquire real-world hands-on skills that enable immediate engagement.
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
                {/* <Link href="https://testyantraglobal.com/services/software-testing/"> */}
                  <div className="icon">
                  <FactoryIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></FactoryIcon>
                  </div>

                  <h3>
                    
                  Industry Recognition
                    
                  </h3>
                  <p>
                  We work closely with 2,500+ companies to ensure our programs meet the precise evolving needs of the industry. With 17,000 people registered in our day-to-day IT-related training courses, Test Yantra Global’s training programs are highly respected and sought after by employers.
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

export default SkillsEnhancementServices;
