import React from "react";

const SoftwareDevelopmentContent = () => {
  return (
    <>
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12" style={{paddingTop:`4em`}}>
              <div className="about-image">
                {/* <img src="/images/about/about1.jpg" alt="image" /> */}
                <img src="\images\softwaredev.jpg" alt="software development" style={{borderRadius:`1em`}} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2>
                Digital transformation Services
                  
                </h2>
                <p>
                A holistic range of services covering all aspects of software development life cycle (SDLC) with industry domain expertise.
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </section>
    </>
  );
};

export default SoftwareDevelopmentContent;
