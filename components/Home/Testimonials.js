import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>What Clients Say About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="testimonials-slides"
          >
            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <img src="/images/author3.jpg" alt="image" />
                  <h3>Sarah Taylor</h3>
                  <span>CEO at Envato</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid ullam harum sit. Accusantium veritatis dolore ducimus
                  illum, cumque excepturi, autem rerum illo amet placeat odit
                  corporis!
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <img src="/images/author4.jpg" alt="image" />
                  <h3>Steven Smith</h3>
                  <span>CEO at Envato</span>
                </div>
                <p>
                  Accusantium veritatis dolore ducimus illum, cumque excepturi,
                  autem rerum illo amet placeat odit corporis! Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Aliquid ullam harum
                  sit.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <img src="/images/author2.jpg" alt="image" />
                  <h3>James Eva</h3>
                  <span>CEO at Envato</span>
                </div>
                <p>
                  Accusantium veritatis dolore ducimus illum, cumque excepturi,
                  autem rerum illo amet placeat odit corporis! Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Aliquid ullam harum
                  sit.
                </p>

              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        
      </div>
    </>
  );
};

export default Testimonials;
