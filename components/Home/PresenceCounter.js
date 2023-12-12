import React from "react";
import Counter from "./Counter";
import PublicIcon from "@mui/icons-material/Public";
import PlaceIcon from "@mui/icons-material/Place";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HailIcon from "@mui/icons-material/Hail";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Link from "next/link";

const PresenceCounter = () => {
  return (
    <>
      <section className="presence-area">
        {/* <div className="container"> */}
        <div className="section-title-counter">
          <h2>The numbers speak for themselves</h2>
        </div>
        <div className="presence-counter">
          <div className="numbers">
            <div className=" col-lg-12  col-sm-12 col">
              <div className="row">
                <div className="col-lg-3 col-sm-3">
                  <div className="single-services-box service-box-top">
                    <PlaceIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                    />
                    <Counter number={6} title="Countries & Growing" />
                  </div>
                </div>

                <div className="col-lg-3 col-sm-3">
                  <div className="single-services-box service-box-top">
                    <EmojiEventsIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                    />
                    <Counter
                      number={3000}
                      addeddisplayitem={true}
                      title="Clients Across Globe"
                    />
                  </div>
                </div>

                <div className="col-lg-3 col-sm-3">
                  <div className="single-services-box">
                    <HailIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                    />
                    <Counter
                      number={5000}
                      addeddisplayitem={true}
                      title="Total Team Members  "
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-3">
                  <div className="single-services-box">
                    <SupportAgentIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                    />
                    <Counter
                      number={12000}
                      addeddisplayitem={true}
                      title="On Demand Test Engineers"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="single-services-box-counter ">
              <PlaceIcon
                sx={{
                  fontSize: "4em",
                  color: "#f27f3d",
                }}
              />
              <Counter number={6} title="Countries & Growing" />
            </div>
            <div className="single-services-box-counter ">
              <EmojiEventsIcon
                sx={{
                  fontSize: "4em",
                  color: "#f27f3d",
                }}
              />
              <Counter
                number={3000}
                addeddisplayitem={true}
                title="Clients Across Globe"
              />
            </div>

            <div className="single-services-box-counter ">
              <HailIcon
                sx={{
                  fontSize: "4em",
                  color: "#f27f3d",
                }}
              />
              <Counter
                number={5000}
                addeddisplayitem={true}
                title="Team Members"
              />
            </div>
            <div className="single-services-box-counter ">
              <SupportAgentIcon
                sx={{
                  fontSize: "4em",
                  color: "#f27f3d",
                }}
              />
              <Counter
                number={12000}
                addeddisplayitem={true}
                title="On Demand Test Engineers"
              />
            </div> */}
            {/* </div> */}
          </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default PresenceCounter;
