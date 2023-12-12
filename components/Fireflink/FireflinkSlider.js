import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const FireflinkSlider = () => {
  return (
    <>
      <div className="feedback-area">
        <div className="container-flauid p-0">
          <Swiper
            navigation={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Autoplay]}
            className="feedback-slides"
          >
            <SwiperSlide>
              <div className="row m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="feedback-item">
                    <h3>WEB AUTOMATION TESTING</h3>
                    {/* <span>Founder & CEO</span> */}
                    <p>
                      The automation of web applications is moving towards a
                      codeless approach using straightforward NLP-based scripts
                      that can easily handle various actions and verifications.
                      FireFlink combines all the commonly used test automation
                      framework types and more, making it the ideal solution.
                     
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 p-0">
                  <div className="client-image bg1">
                    {/* <img src="/images/fireflink-dashboard.jpg" alt="image" /> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="feedback-item">
                    <h3>MOBILE AUTOMATION TESTING</h3>
                    {/* <span>Founder & CEO</span> */}
                    <p>
                    Web application automation is moving towards processes that do not require coding, instead relying on easy-to-use NLP-based scripts to manage various actions and verifications. FireFlink incorporates a wide range of test automation frameworks, as well as additional features, to create the ideal solution.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 p-0">
                  <div className="client-image bg2">
                    {/* <img src="/images/clients/client2.jpg" alt="image" /> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="feedback-item">
                    <h3>API Automation Testing</h3>
                    {/* <span>Founder & CEO</span> */}
                    <p>
                    Effortlessly generate test scripts for Web Services. Our Web Service testing solution enables you to rapidly and thoroughly test the intricate layers of Web Services in just a matter of minutes. Get ready to dive deep into testing with ease.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 p-0">
                  <div className="client-image bg3">
                    {/* <img src="/images/clients/client3.jpg" alt="image" /> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FireflinkSlider;
