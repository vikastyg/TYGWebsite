import React from "react";
import Link from "next/link";
import ArticlesCommentsArea from "./ArticlesCommentsArea";
import ArticlesSidebar from "./ArticlesSidebar";

const ArticlesDetailsContent = ({ articleNumber }) => {
  if (articleNumber == 1) {
    return (
      <>
        <section className="blog-details-area ptb-110">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="blog-details">
                  <div className="article-image">
                    <img src="/images/blog/blog-details1.jpg" alt="image" />
                  </div>

                  <div className="article-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <span>Posted On:</span>
                          May 3, 2023
                        </li>
                        {/* <li>
                          <span>Posted By:</span>
                          <Link href="#">John Anderson</Link>
                        </li> */}
                      </ul>
                    </div>

                    <h3>
                      One stop solution for Scriptless Automated Testing –
                      FireFlink
                    </h3>

                    <p>
                      In the world of web testing, ‘Automated testing’ has
                      revolutionized the way testing is done. It has helped in
                      reducing the testing time, effort, and cost significantly.
                      However, building heavily coded test scripts can be
                      time-consuming and can divert the focus from writing
                      meaningful test scripts. This is where FireFlink comes in.
                      FireFlink’s NLP-based automated testing is the future of
                      web testing.
                    </p>

                    <p>
                      <strong>
                        FireFlink’s NLP-based automated testing scripts
                      </strong>{" "}
                      are capable of performing end-to-end web testing without
                      coding. These natural language processing scripts allow
                      testers to write test scripts using simple English, saving
                      time and effort. FireFlink’s NLP-based automation testing
                      approach offers high-speed script development, enabling
                      testers to test their web applications faster and more
                      effectively.
                    </p>
                    <blockquote className="wp-block-quote">
                      <p>
                        FireFlink is capable of providing an end to end, no code
                        testing solution when it comes to Automated Testing .
                      </p>
                    </blockquote>

                    <p>
                      <strong>
                        FireFlink is a multi-channel testing platform
                      </strong>{" "}
                      that provides a one-stop-shop for all your testing needs.
                      It offers a range of web testing services, including web
                      app functionality testing, web app integration testing,
                      web app regression testing, and web app compatibility
                      testing.
                    </p>

                    <p>
                      Web App Functionality Testing is one of FireFlink’s core
                      services. This service ensures that your web application
                      undergoes rigorous testing as planned, way before the
                      planned deadline. Frequent testing of a web application
                      can help detect bugs early, making it easier to track them
                      down and fix them.
                    </p>
                    <p>
                      Web App Integration Testing is another service offered by
                      FireFlink. This testing evaluates the functionality of a
                      product or program after all its components have been
                      assembled. FireFlink’s integration testing guarantees that
                      the combined components work as expected, with end-to-end
                      testing capability at the highest speed possible.
                    </p>
                    <p>
                      Web App Regression Testing is essential after a new
                      feature has been implemented, or a bug has been resolved.
                      FireFlink can be your trusted partner for conducting
                      regression testing to ensure that no new bugs have been
                      introduced. This regression test serves as a checkpoint on
                      the route to greater things.
                    </p>

                    <p>
                      Web App Compatibility Testing is another critical service
                      offered by FireFlink. This testing runs tests on the web
                      application’s compatibility with various browsers,
                      databases, operating systems, mobile devices, networks,
                      and hardware to ensure it appears correctly across all
                      these platforms through various advanced parallel
                      execution mechanisms of a test suite and insightful
                      reports.
                    </p>

                    <p>
                      Scriptless Web Automation is an essential aspect of
                      FireFlink’s testing services. It offers a high-speed
                      automation approach with extensive visual reporting and
                      analytics for testing web applications using natural
                      language processing (NLP). FireFlink also provides mapping
                      of manual test cases to automation test scripts, a simple
                      UI to configure test data, pre-post conditions, and
                      dependencies, multiple techniques of script execution,
                      script and suite-level results analysis, and tagging for
                      faster result analysis.
                    </p>

                    <p>
                      In conclusion, FireFlink’s NLP-based automated testing is
                      the future of web testing. Its powerful NLP-based scripts
                      can perform end-to-end web testing without coding, saving
                      time and effort. FireFlink’s multi-channel testing
                      platform provides a one-stop-shop for all your testing
                      needs, offering web app functionality testing, web app
                      integration testing, web app regression testing, web app
                      compatibility testing, and scriptless web automation. By
                      choosing FireFlink, you can rest assured that your web
                      application will undergo rigorous testing to ensure its
                      functionality and compatibility across various platforms.
                    </p>

                    <p>
                      To know more on how we can help you in providing seamless
                      service to your client & achieve digital transformation,
                      feel free to contact us.
                    </p>
                  </div>
                </div>

                {/* Blog Comments Area */}
                {/* <ArticlesCommentsArea /> */}
              </div>

              {/* <div className="col-lg-4 col-md-12">
                  <ArticlesSidebar />
                </div> */}
            </div>
          </div>
        </section>
      </>
    );
  } else if (articleNumber == 2) {
    return (
      <>
        <section className="blog-details-area ptb-110">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="blog-details">
                  <div className="article-image">
                    <img src="/images/blog/blog-details2.jpg" alt="image" />
                  </div>

                  <div className="article-content">
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <span>Posted On:</span>
                          Aug 22, 2023
                        </li>
                        {/* <li>
                          <span>Posted By:</span>
                          <Link href="#">John Anderson</Link>
                        </li> */}
                      </ul>
                    </div>

                    <h3>
                      Test Automation Suite- Selenium , Oracle or FireFlink
                    </h3>

                    <p>
                      Test automation has recently offered a viable alternative
                      for improving the effectiveness and quality of software.
                      Business organizations are evaluating how Oracle Test
                      Automation can deliver end-to-end testing for their cloud
                      architecture following the introduction of the Oracle
                      Cloud. More and more businesses are trying to leverage the
                      capabilities of the Oracle Cloud, and they need a reliable
                      test automation tool to shorten the turnaround time and
                      ensure continuous delivery.{" "}
                    </p>

                    <p>
                      The good news is that there are various Test Automation
                      products available in the market right now, such as OATS,
                      Selenium, and FireFlink. Let’s discuss them in detail:
                    </p>

                    <h3>Selenium</h3>

                    <p>
                      An open-source tool that automates web browsers. It
                      provides a single interface that allows you to write test
                      scripts in programming languages such as Ruby, Java,
                      NodeJS, PHP, Perl, Python, and C#, among others.
                      <br />
                      The drawback of Selenium is that you must know how to code
                      to set up and manage your tests, which can make testing
                      with Selenium difficult and time-consuming in the long
                      term, especially if your system is large and complex like
                      those of many other businesses utilizing Oracle. Selenium
                      is challenging to maintain and offers no tools for test
                      reporting or troubleshooting, making fixing failed tests
                      challenging and time-consuming. Also, it does not support
                      automation of any desktop-based Oracle apps or other
                      non-web technologies because it only supports
                      browser-based applications.
                    </p>

                    <h3>OATS (Oracle Application Testing Suite)</h3>
                    <p>
                      Oracle’s own test automation tool that is compatible with
                      every Oracle application. The fact that OATS is fully
                      compatible with Oracle’s own apps should not come as a
                      surprise. The process of designing and setting up tests is
                      further simplified by the inclusion of built-in automation
                      components that can be used with Oracle’s applications.
                    </p>

                    <p>
                      However, OATS has several drawbacks. The first is that it
                      can only automate Oracle and web-based products, similar
                      to Selenium, which limits its cross-technology
                      flexibility. Compared to other test automation
                      technologies on the market, OATS is more expensive. Oracle
                      testing requires in-depth familiarity with the OpenScript
                      programming language, which presents a challenge for
                      non-technical teams. Additional tools are needed for
                      Oracle test automation to cover all aspects of the test.
                    </p>

                    <h3>FireFlink</h3>
                    <p>
                      <strong>
                        An innovative no-code automation tool designed to
                        overcome the limitations and challenges of traditional
                        tools.{" "}
                      </strong>
                      FireFlink provides several features in one platform, such
                      as a rich UI-based approach of scripting in simple English
                      language based on NLP (Natural language) techniques,
                      support for cross-platform end-to-end integration based on
                      web, mobile, and API, building blocks to run tests with
                      different datasets for each scenario, and no-code platform
                      that requires no typical programming skills, but includes
                      the ability to create custom NLPs to support
                      project-specific solutions by writing one’s own libraries.
                    </p>
                    <p>
                      FireFlink provides additional benefits such as support for
                      parallel execution, cross-browser compatibility,
                      deployment of third-party web clouds, dashboards,
                      analytics, and reporting for the Oracle cloud-based
                      platform. Moreover, FireFlink has a pool of 8,000+
                      engineers on board who can support and build complete
                      suites for different client engagement models.
                    </p>
                  </div>
                </div>

                {/* Blog Comments Area */}
                {/* <ArticlesCommentsArea /> */}
              </div>

              {/* <div className="col-lg-4 col-md-12">
                  <ArticlesSidebar />
                </div> */}
            </div>
          </div>
        </section>
      </>
    );
  } 
};

export default ArticlesDetailsContent;
