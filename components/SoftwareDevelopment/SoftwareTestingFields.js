import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import TerminalIcon from '@mui/icons-material/Terminal';
import DnsIcon from '@mui/icons-material/Dns';

const SoftwareTestingFields = () => {
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
            <h2>Empowering Digital Success with Comprehensive Technology Expertise</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          {/* <div className="row"> */}
          <div className=" col-lg-12  col-sm-12 col">
            <div className="row">

            <div className="col-lg-4 col-sm-4">
                <div className="single-services-box1 service-box-top">
                  <div className="icon">
                  <ScreenshotMonitorIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></ScreenshotMonitorIcon>
                  </div>

                  <h3>
                    
                  Frontend
                      <br></br>
                    
                  </h3>
                  <p>
                  At Test Yantra Global, we harness the power of cutting-edge front-end technologies to transform your digital presence. Our experts excel in React, React Native, Ionic, Angular, and Vue.js, crafting dynamic and responsive user interfaces that captivate your audience. We specialize in utilizing these frameworks to ensure your web and mobile applications are at the forefront of innovation.
                  </p>
                  {/* <div className="service-list">
                    <ul>
                      <li>React</li>
                      <li>ReactNative</li>
                      <li>Ionic</li>
                      <li>Angular</li>
                      <li>Vue.js</li>
                    </ul>
                  </div> */}
                  
                </div>
              </div>


              <div className="col-lg-4 col-sm-4">
                <div className="single-services-box1 service-box-top">
                  <div className="icon">
                  <TerminalIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></TerminalIcon>
                  </div>

                  <h3>
                    
                      Backend
                      <br></br>
                    
                  </h3>
                  <p>
                  With expertise in Java, Node.js, Python, and Ruby on Rails, our skilled developers architect secure and high-performance server-side systems. We tailor back-end solutions that empower your applications with reliability and scalability, ensuring your online presence remains seamless and efficient. We're adept at leveraging robust back-end technologies to drive your digital solutions. 
                  </p>
                  {/* <div className="service-list">
                    <ul>
                      <li>Java</li>
                      <li>Node JS</li>
                      <li>Python</li>
                      <li>Ruby on Rails</li>
                    </ul>
                  </div> */}
                  
                </div>
              </div>

              <div className="col-lg-4 col-sm-4">
                <div className="single-services-box1 service-box-top">
                  <div className="icon">
                  <DnsIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></DnsIcon>
                  </div>

                  <h3>
                  Database
                  </h3>
                  <p>
                  Test Yantra Global excels in harnessing diverse database technologies to optimize your data management needs. From relational databases like MySQL, Oracle, and PostgreSQL to NoSQL solutions such as MongoDB, SQLite, and neo4j, we offer tailored solutions for efficient data storage and retrieval. With our expertise, your data remains secure, organized, accessible, and ready to drive your business forward.    
                  </p>
                  {/* <div className="service-list">
                    <ul>
                      <li>MySQL </li>
                      <li>Oracle </li>
                      <li>PostgreSQL </li>
                      <li>MongoDB </li>
                      <li>SQLite </li>
                      <li>neo4j </li>
                      
                    </ul>
                  </div> */}
                 
                </div>
              </div>
          

              {/* EXTRA CARD - ADJUST THE COL WIDTH - 4 */}
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
          
          
          
        </div>
      </section>
    </>
  );
};

export default SoftwareTestingFields;
