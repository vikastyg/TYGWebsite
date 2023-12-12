import React from "react";
import Link from "next/link";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PinDropIcon from '@mui/icons-material/PinDrop';

const ContactAdress = () => {
  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Reach out to us at your nearest office.</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <LocationOnIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></LocationOnIcon>
                </div>

                <h3>
                  United States of America
                </h3>
                <p>
                  99 South Almaden Blvd, Suite 600, San Jose, California, CA
                  95113 Ph: +1 888 980 7010
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                <AddLocationAltIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></AddLocationAltIcon>
                </div>

                <h3>
                  Canada
                </h3>
                <p>
                  120 Adelaide Street West, Suite 2500 Toronto, ON, M5H 1T1,
                  Canada. Ph: +1 888 980 7010
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                <FmdGoodIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></FmdGoodIcon>
                </div>

                <h3>
                  <Link href="/service-details">United Kingdom</Link>
                </h3>
                <p>
                  1 Elmfield Park, Bromley - BR1 1LU, United Kingdom Ph: +44
                  0203 4115 450
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                <AddLocationIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></AddLocationIcon>
                </div>

                <h3>
                  Ireland
                </h3>
                <p>
                  The black church, St. Mary’s place, Dublin, Ireland - D07 P4AX
                  Ph: +353 1969 6560
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                <EditLocationIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></EditLocationIcon>
                </div>

                <h3>
                  Netherlands
                </h3>
                <p>
                  Vliegend Hertlaan 15-97, 3526 KT Utrecht, Netherlands Ph: +31
                  308 992 386
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                <PinDropIcon
                      sx={{
                        fontSize: "4em",
                        color: "#f27f3d",
                      }}
                      className="material-icon"
                    ></PinDropIcon>
                </div>

                <h3>
India
</h3>
<p>
#88, 3rd Floor, Brigade Chambers, Gandhi Bazaar Main Rd,
Basavanagudi, Bangalore-560004 Karnataka, India Ph: +91 80
4120 4235
</p> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactAdress;

