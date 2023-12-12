import React from "react";
import Link from "next/link";
import AssessmentIcon from '@mui/icons-material/Assessment';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';

const ItConsultinggg = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Our Range of Services</h2>
            <p>
            Test Yantra Global offers a comprehensive range of IT consulting services to meet your unique needs.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                <AssessmentIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></AssessmentIcon>
                </div>

                <h3>
                Strategic IT Planning
                </h3>
                <p>
                We work closely with your organization to understand your unique business goals and challenges. Based on this understanding, we leverage our CoE to develop a customized IT strategy that aligns technology investments with your long-term objectives.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                <PrecisionManufacturingIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></PrecisionManufacturingIcon>
                </div>

                <h3>
                Technology Assessment and Auditing
                </h3>
                <p>
                Our team of experts conducts thorough assessments and audits of your existing IT infrastructure and systems to identify areas for improvement, cost-saving opportunities, and potential vulnerabilities.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                <DomainAddIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></DomainAddIcon>
                </div>

                <h3>
                Infrastructure Optimization
                </h3>
                <p>
                We help you streamline your IT infrastructure, enhance scalability, and improve performance, all while reducing costs. Our consultants provide practical guidance for hardware, software, and cloud solutions.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box1">
                <div className="icon">
                <IntegrationInstructionsIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></IntegrationInstructionsIcon>
                </div>

                <h3>
                Cybersecurity and Compliance
                </h3>
                <p>
                In an era of escalating cyber threats characterized by increasing sophistication, safeguarding your data and adhering to industry regulations has become imperative. Test Yantra Global provides comprehensive cybersecurity solutions and expert compliance consulting services to ensure the security and regulatory compliance of your business.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box1">
                <div className="icon">
                <LightbulbCircleIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></LightbulbCircleIcon>
                </div>

                <h3>
                Digital Transformation
                </h3>
                <p>
                In today's dynamic business landscape, organizations must continually adapt and evolve to maintain their competitive edge. Our CoE-based expert guidance empowers you to navigate digital transformation initiatives, harness emerging technologies, and streamline processes, all contributing to your sustained competitive advantage.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box1">
                <div className="icon">
                <ListAltIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></ListAltIcon>
                </div>

                <h3>
                Project Management 
                </h3>
                <p>
                Our PMO and project management services ensure your IT initiatives are completed successfully, on time, and within budget. We apply best practices and methodologies to minimize risks and ensure successful project delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItConsultinggg;
