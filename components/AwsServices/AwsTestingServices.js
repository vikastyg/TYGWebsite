import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import CloudQueueIcon from "@mui/icons-material";
import StorageIcon from "@mui/icons-material/Storage";
import PowerIcon from "@mui/icons-material/Power";
import CloudSyncRoundedIcon from '@mui/icons-material/CloudSyncRounded';
import FilterDramaRoundedIcon from '@mui/icons-material/FilterDramaRounded';
import CloudDoneRoundedIcon from '@mui/icons-material/CloudDoneRounded';

import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import AirplayIcon from '@mui/icons-material/Airplay';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import LockClockIcon from '@mui/icons-material/LockClock';

const AwsTestingServices = () => {
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
              <h2>Test Yantra Global's Full-Cycle AWS Consulting Services</h2>
              
            </div>
  
            
            <div className=" col-lg-12  col-sm-12 col">
              <div className="row">
                <div className="col-lg-4 col-sm-4">
                  <div className="single-services-box2 service-box-top">
                    {/* <Link href="https://testyantraglobal.com/services/it_consulting/"> */}
                      <div className="icon">
                        <AddToQueueIcon
                          sx={{
                            fontSize: "4em",
                            color: "#f27f3d",
                          }}
                          className="material-icon"
                        ></AddToQueueIcon>
                      </div>
  
                      <h3>
                      AWS Development
                        
                      </h3>
                      <p>
                      
                      Test Yantra Globalbegins by understanding your unique business requirements and objectives. Our experienced AWS architects and developers work closely with your team to design, develop, and implement custom AWS solutions tailored to your needs. Whether you're migrating existing applications to AWS or creating new cloud-native applications, we've got you covered.
                      </p>
                      
                    {/* </Link> */}
                  </div>
                </div>
  
                <div className="col-lg-4 col-sm-4">
                  <div className="single-services-box2 service-box-top">
                    {/* <Link href="https://testyantraglobal.com/all-about-crowdsourced-testing-testyantra/"> */}
                      <div className="icon">
                        <AirplayIcon
                          sx={{
                            fontSize: "4em",
                            color: "#f27f3d",
                          }}
                          className="material-icon"
                        ></AirplayIcon>
                      </div>
  
                      <h3>AWS Setup</h3>
                      <p>
                        
                        Setting up an AWS environment that is secure, efficient, and scalable is a critical foundation for success in the cloud. Our AWS experts guide you through the setup process, helping you establish Virtual Private Clouds (VPCs), configure network architecture, and ensure proper Identity and Access Management (IAM) for secure access control. We account for your current and future performance, security, and compliance requirements to create a solid AWS infrastructure.
                      </p>
                     
                    {/* </Link> */}
                  </div>
                </div>
                
                <div className="col-lg-4 col-sm-4">
                  <div className="single-services-box2">
                    {/* <Link href="https://testyantraglobal.com/services/software-testing/"> */}
                      <div className="icon">
                        <AltRouteIcon
                          sx={{
                            fontSize: "4em",
                            color: "#f27f3d",
                          }}
                          className="material-icon"
                        ></AltRouteIcon>
                      </div>
  
                      <h3>AWS MIGRATION</h3>
                      <p>
                        
                        Whether you're moving to AWS from an on-premises environment or another cloud provider, we facilitate seamless migrations and modernization efforts, while minimizing disruption and downtime.
                      </p>
                      
                    {/* </Link> */}
                  </div>
                </div>
  
                <div className="col-lg-4 col-sm-4">
                  <div className="single-services-box2">
                    {/* <Link href="https://testyantraglobal.com/services/software-testing/"> */}
                      <div className="icon">
                        <ManageHistoryIcon
                          sx={{
                            fontSize: "4em",
                            color: "#f27f3d",
                          }}
                          className="material-icon"
                        ></ManageHistoryIcon>
                      </div>
  
                      <h3>AWS Optimization</h3>
                      <p>
                        
                        Cost-effectiveness performance is a pivotal aspect of our AWS environments. Test Yantra Global provides ongoing AWS optimization services to ensure that your infrastructure is continually improved. We assist you in optimizing your AWS resources, identifying cost-saving opportunities, and maintaining peak performance. Our expertise in leveraging AWS's cost optimization tools, like Reserved Instances and auto-scaling, guarantees a well-managed and cost-efficient AWS setup.
                      </p>
                      
                    {/* </Link> */}
                  </div>
                </div>

                <div className="col-lg-4 col-sm-4">
                  <div className="single-services-box2">
                    {/* <Link href="https://testyantraglobal.com/services/software-testing/"> */}
                      <div className="icon">
                        <LockClockIcon
                          sx={{
                            fontSize: "4em",
                            color: "#f27f3d",
                          }}
                          className="material-icon"
                        ></LockClockIcon>
                      </div>
  
                      <h3>Security and Compliance</h3>
                      <p>
                        
                        In an age where data breaches and regulatory requirements are ever-present concerns, security, and compliance are top priorities. Test Yantra Global offers robust solutions to secure your AWS environment, including identity and access management, threat detection, encryption, and compliance monitoring. We help you meet industry-specific security standards and maintain data integrity.
                      </p>
                      
                    {/* </Link> */}
                  </div>
                </div>

                <div className="col-lg-4 col-sm-4">
                  <div className="single-services-box2">
                    {/* <Link href="https://testyantraglobal.com/services/software-testing/"> */}
                      <div className="icon">
                        <CloudDoneRoundedIcon
                          sx={{
                            fontSize: "4em",
                            color: "#f27f3d",
                          }}
                          className="material-icon"
                        ></CloudDoneRoundedIcon>
                      </div>
  
                      <h3>24/7 Support and Monitoring</h3>
                      <p>
                       
                        Your AWS journey doesn't end with setup and optimization. Test Yantra Global provides 24/7 support and monitoring services to ensure your AWS environment remains resilient, secure, and high-performing. Our team proactively manages and troubleshoots issues, guaranteeing a seamless experience for your business and end-users.
                      </p>
                      
                    {/* </Link> */}
                  </div>
                </div>
                
              </div>
            </div>
           
            
          </div>
        </section>
      </>
    );
}

export default AwsTestingServices