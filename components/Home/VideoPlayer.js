import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const VideoPlayer = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=Gn1ih1jEW00"]}
      />

      <section className="video-player-area">
        <div className="row m-0">
          <div className="col-lg-6 p-0">
            <div className="video-player-content">
              <h2>At the forefront of innovation</h2>
              <p>
                Test Yantra Global provides industry leading expertise and
                advanced technology solution to Digitally Transform leading
                brands across various industries. Connect with one of our Expert
                Solutions Specialist to see how Test Yantra can give your
                organization a leading edge.
              </p>

              <Link href="#" className="btn btn-primary">
                Watch More
              </Link>
            </div>
          </div>

          <div className="col-lg-6 p-0">
            <div className="video-player-image">
              <img src="/images/video-thumbnail.jpg" alt="image" />

              <div
                onClick={() => setToggler(!toggler)}
                className="video-btn popup-youtube"
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <PlayCircleOutlineIcon fontSize="16px" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoPlayer;
