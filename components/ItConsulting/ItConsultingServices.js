import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GppGoodIcon from '@mui/icons-material/GppGood';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';

const ItConsultingServices = () => {
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
            <h3>Partnering with Test Yantra Global for your IT consulting needs offers numerous benefits</h3>
            
          </div>

          {/* <div className="row"> */}
          <div className=" col-lg-12  col-sm-12 col">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <div className="single-services-box service-box-top">
                  {/* <Link href="https://testyantraglobal.com/services/it_consulting/"> */}
                    <div className="icon">
                    <GppGoodIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></GppGoodIcon>
                    </div>

                    <h3>
                    Tailored Solutions
                      <br></br>
                    </h3>
                    <p>
                    Test Yantra Global provides IT consulting services that are customized to meet the unique needs of an organization.
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
                
                  <MonetizationOnIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></MonetizationOnIcon>
                      
                    </div>

                    <h3>Cost Efficiency</h3>
                    
                    <p>
                    Our expert advisors identify cost-saving opportunities and optimize your IT investments, ensuring you get the most value from your technology spend.
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
                    <GppMaybeIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></GppMaybeIcon>
                    </div>

                    <h3>Risk Mitigation</h3>
                    <p>
                    In an era where cybersecurity takes center stage, our services are dedicated to proactively mitigating risks and fortifying the protection of your sensitive data.

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
        </div>
      </section>
    </>
  );
};

export default ItConsultingServices;
