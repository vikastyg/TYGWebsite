import React from "react";
import ContactForm from "./ContactForm";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const ContactFormContent = () => {
  return (
    <>
      <section className="contact-area ptb-110">
        <div className="container">
          <div className="section-title">
            <span>Contact Us</span>
            <h2>
              Please complete the form below and we will get back to you soon.
            </h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <div className="contact-form">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="contact-image">
                  <img src="/images/contact.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="contact-info">
            <div className="contact-info-content">
              <h3>Contact us by Phone Number or Email Address</h3>
              <h2>
                <span className="number">+1 888 980 7010</span>
                <span className="or">OR</span>
                <span className="email">hello@testyantraglobal.com</span>
              </h2>
              <div></div>
              <ul className="social">
                {/* <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.youtube.com/@testyantraglobal630"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <YouTubeIcon className="footer-icon" fontSize="large" />
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.linkedin.com/company/test-yantra-global"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon className="footer-icon" fontSize="large" />
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactFormContent;
