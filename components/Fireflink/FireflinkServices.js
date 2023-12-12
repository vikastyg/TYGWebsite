import React from "react";
import Link from "next/link";
import LanguageIcon from '@mui/icons-material/Language';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import ExtensionIcon from '@mui/icons-material/Extension';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import DvrIcon from '@mui/icons-material/Dvr';
import CloudOffIcon from '@mui/icons-material/CloudOff';

const FireflinkServices = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>FireFlink Solutions</h2>
            <p>
            FireFlink is an all-in-one solution that comes with a simple interface, enabling effortless automation for everyone.

            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box1">
                <div className="icon">
                <LanguageIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></LanguageIcon>
                </div>

                <h3>
                WEB AUTOMATION TESTING
                </h3>
                <p>
                The automation of web applications is moving towards a codeless approach using straightforward NLP-based scripts that can easily handle various actions and verifications. FireFlink combines all the commonly used test automation framework types and more, making it the ideal solution.
                </p>
                {/* <div className="service-list">
                    <ul>
                      <li>NLP based scripting</li>
                      <li>Automation scripts are mapped directly to test cases</li>
                      <li>Separate sections for test development and test execution phases</li>
                      <li>A single script can contain web, android, iOS, and API steps</li>
                      
                    </ul>
                  </div> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box1">
                <div className="icon">
                <AddToHomeScreenIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></AddToHomeScreenIcon>
                </div>

                <h3>
                MOBILE AUTOMATION TESTING
                </h3>
                <p>
                Web application automation is moving towards processes that do not require coding, instead relying on easy-to-use NLP-based scripts to manage various actions and verifications. FireFlink incorporates a wide range of test automation frameworks, as well as additional features, to create the ideal solution.
                </p>
                {/* <div className="service-list">
                    <ul>
                      <li>Instant test setup</li>
                      <li>A single mobile script can run on both Android and iOS apps</li>
                      <li>No maximum number of devices for concurrent execution, unlike other tools</li>
                      <li>A single suite can be configured to run on multiple environment</li>
                      
                    </ul>
                  </div> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box1">
                <div className="icon">
                <ExtensionIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></ExtensionIcon>
                </div>

                <h3>
                API Automation Testing
                </h3>
                <p>
                  <br/>
                Effortlessly generate test scripts for Web Services. Our Web Service testing solution enables you to rapidly and thoroughly test the intricate layers of Web Services in just a matter of minutes. Get ready to dive deep into testing with ease.
                </p>
                {/* <div className="service-list">
                    <ul>
                      <li>Scripting language expertise is not required</li>
                      <li>Manual API test steps converted to API automation scripts</li>
                      <li>Hassle free management of custom assertions</li>
                      <li>Rich reporting feature</li>
                      
                    </ul>
                  </div> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box1">
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
                  <Link href="/service-details">
                  Visual Testing
                  </Link>
                </h3>
                <p>
                  <br/>
                The familiarity of developers, marketers, and product owners with a website may cause them to overlook issues that actual users may notice. It is crucial to gather such feedback from real users as it helps improve the quality of products and services offered to customers. FireFlink provides convenient solutions for UX testing.
                </p>
                {/* <div className="service-list">
                    <ul>
                      <li>Using NLP for User Experience</li>
                      <li>UX testing evaluation facilities included into the test script at every test step</li>
                      <li>Ability to omit unwanted parts of the Golden Image</li>
                      <li>A visual testing score is presented for every comparison</li>
                      
                    </ul>
                  </div> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box1">
                <div className="icon">
                <DvrIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></DvrIcon>
                </div>

                <h3>
                  <Link href="/service-details">UI Performance Testing</Link>
                </h3>
                <p>
                  <br/>
                The quality of a website or app's user interface directly affects its success. With FireFlink's visual testing capabilities, users can discover efficient testing techniques that enhance the usability of the user interface and eliminate any problems that could cause customer dissatisfaction.
                </p>
                {/* <div className="service-list">
                    <ul>
                      <li>Criteria for auditing performance tests</li>
                      <li>NLP to effectively test user interfaces</li>
                      <li>Compatible with a wide variety of platforms, from desktops to mobile phones</li>
                      <li>Delivers test case performance reports</li>
                      
                    </ul>
                  </div> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box1">
                <div className="icon">
                <CoPresentIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></CoPresentIcon>
                </div>

                <h3>
                  <Link href="/service-details">Manual Test Case management</Link>
                </h3>
                <p>
                FireFlink simplifies the management of manual test cases by offering a user-friendly interface that enables test engineers to easily understand and fulfill testing requirements. It allows for efficient test case management by providing a one-to-one mapping of manual test case entries with their corresponding automation test scripts.
                </p>
                {/* <div className="service-list">
                    <ul>
                      <li>Mapping Test Cases to their corresponding automation scripts</li>
                      <li>Clear traceability with tree structure view</li>
                      <li>Customizable manual test case templates</li>
                      <li>Generation of manual test execution result analytics</li>
                      
                    </ul>
                  </div> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                <CloudOffIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></CloudOffIcon>
                </div>

                <h3>
                  <Link href="/service-details">Defect Management</Link>
                </h3>
                <p>
                FireFlink's defect management system offers essential feedback to enhance the software development process. It provides a reliable solution for tracking bugs and ensuring software quality assurance, enabling smooth software releases.
                </p>
                {/* <div className="service-list">
                    <ul>
                      <li>Customizable defect templates</li>
                      <li>Configurable defect life cycle templates</li>
                      <li>Easy defect logging upon automation step failure</li>
                      <li>Auto generation of ‘Steps to reproduce the defects’ in the issue.</li>
                      
                    </ul>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FireflinkServices;
