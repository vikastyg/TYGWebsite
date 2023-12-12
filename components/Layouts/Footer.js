import React, { Component } from "react";
import Link from "next/link";
import Newsletter from "./Newsletter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { padding } from "@mui/system";
import { right } from "@popperjs/core";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <Newsletter />
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <img
                      src="/images/partnerlogo2.svg"
                      alt="Platinum Partner "
                      style={{ maxWidth: '80%' }}
                    />
                  </Link>
                  <p>
                    Test Yantra Global is an Exclusive Platinum Partner of
                    FireFlink.
                    <br />
                    <br />
                    Let's get socially connected...
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/test-yantra-global"
                      target="_blank"
                    >
                      <LinkedInIcon className="footer-icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@testyantraglobal630"
                      target="_blank"
                    >
                      <YouTubeIcon className="footer-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/testyantraGLB" target="_blank">
                      <TwitterIcon className="footer-icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/testyantraglobal/"
                      target="_blank"
                    >
                      <FacebookIcon className="footer-icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/testyantraglobal/"
                      target="_blank"
                    >
                      <InstagramIcon className="footer-icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h3>Services</h3>

                <ul className="footer-services-list">
                  <li>
                    <Link href="/services/SoftwareTestingTaas/">
                      Software Testing (TaaS)
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/SoftwareDevelopment/">Software Development</Link>
                  </li>
                  <li>
                    <Link href="/services/SkillsEnhancement/">Skills Enhancement</Link>
                  </li>
                  <li>
                    <Link href="/services/ItConsulting/">IT Consulting</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <h3>Quick Links</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/">About Us</Link>
                  </li>
                  <li>
                    <Link href="/products/fireflink/">Fireflink</Link>
                  </li>
                  <li>
                    <Link href="/articles/">Article</Link>
                  </li>
                  <li>
                    <Link href="/contact/">Contact</Link>
                  </li>
                  {/* <li>
                    <Link href="/pricing">Pricing</Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <h3>Contacts</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Address:</span>
                    120 Adelaide Street West,
                    <br /> Suite 2500, Toronto, ON, M5H 1T1, Canada.
                  </li>
                  <li>
                    <span>Email:</span>
                    hello@testyantraglobal.com
                  </li>
                  <li>
                    <span>Phone:</span>
                    +1 888 980 7010
                  </li>
                  {/* <li>
                    <span>Fax:</span>
                    +44 785 4578964
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>
                  Copyright &copy;{currentYear} Test Yantra Global. All rights
                  reserved
                </p>
              </div>

              
            </div>
          </div>
        </div>

        <div className="circle-map">
          <img src="/images/circle-map.png" alt="image" />
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
