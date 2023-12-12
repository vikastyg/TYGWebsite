import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import StorageIcon from "@mui/icons-material/Storage";
import PowerIcon from "@mui/icons-material/Power";
import CloudSyncRoundedIcon from '@mui/icons-material/CloudSyncRounded';
import FilterDramaRoundedIcon from '@mui/icons-material/FilterDramaRounded';
import CloudDoneRoundedIcon from '@mui/icons-material/CloudDoneRounded';

const CloudTestingServices = () => {
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
            <h2>Test Yantra Global’s cloud services</h2>
            <p>
             Enable your organization to initiate, transition and enhance cloud-enabled applications and technologies
            </p>
          </div>

          
          <div className=" col-lg-12  col-sm-12 col">
            <div className="row">
              <div className="col-lg-6 col-sm-4">
                <div className="single-services-box1 service-box-top">
                  {/* <Link href="https://testyantraglobal.com/services/it_consulting/"> */}
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
                    Cloud Migration
                      
                    </h3>
                    <p>
                    <br />
                    Test Yantra Global specializes in executing intricate direct and multistep cloud software migrations. Our approach goes beyond simply relocating a solution; we enhance its features, user interface, performance, and security. The result is a solution that is not only seamlessly transferred but also improved for ease of use and management.
                    </p>
                    
                  {/* </Link> */}
                </div>
              </div>

              <div className="col-lg-6 col-sm-4">
                <div className="single-services-box1 service-box-top">
                  {/* <Link href="https://testyantraglobal.com/all-about-crowdsourced-testing-testyantra/"> */}
                    <div className="icon">
                      <CloudSyncRoundedIcon
                        sx={{
                          fontSize: "4em",
                          color: "#f27f3d",
                        }}
                        className="material-icon"
                      ></CloudSyncRoundedIcon>
                    </div>

                    <h3>Architecture Re-Design</h3>
                    <p>
                      <br />
                      The redesign of software architecture is a pivotal aspect of our cloud migration consulting services. We adapt and enhance legacy on-premises architectures to fit the parameters of the cloud environment. Our team excels in delivering cloud architectures that are straightforward to implement, configure, and scale, drawing from our extensive expertise and CoE best practices.
                    </p>
                   
                  {/* </Link> */}
                </div>
              </div>
              
              <div className="col-lg-6 col-sm-4">
                <div className="single-services-box1">
                  {/* <Link href="https://testyantraglobal.com/services/software-testing/"> */}
                    <div className="icon">
                      <FilterDramaRoundedIcon
                        sx={{
                          fontSize: "4em",
                          color: "#f27f3d",
                        }}
                        className="material-icon"
                      ></FilterDramaRoundedIcon>
                    </div>

                    <h3>Cloud-First Development</h3>
                    <p>
                      <br/>
                      To support the unique needs of your business, our expert team of designers and engineers can craft purpose-built solutions from the ground up. These cloud-ready solutions come equipped with integrated security and connectivity features, simplifying further deployment and customization.
                    </p>
                    
                  {/* </Link> */}
                </div>
              </div>

              <div className="col-lg-6 col-sm-4">
                <div className="single-services-box1">
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

                    <h3>Cloud Integration</h3>
                    <p>
                      <br/>
                      We seamlessly link cloud applications with on-premises or other cloud-based solutions. This interconnected environment guarantees unimpeded data exchange and facilitates the streamlined management of workflows, all while maintaining the ecosystem's resilience and ensuring seamless performance.
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
};

export default CloudTestingServices;
