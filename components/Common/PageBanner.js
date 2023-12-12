import React, { Component } from "react";
import Link from "next/link";

const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,

  activePageText,
  bgImgClass,
}) => {
  return (
    <>
    <div className="PageBannerContainer">
      <div className={`col-sm-12  col-md-12 col-lg-12 col-xl-12 page-title-area ${bgImgClass}`}>
        <div className=" container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>

            <br />
            <p style={{ color: `white` }}>{homePageText}</p>
            {/* <ul>
              <li>
                <Link href={homePageUrl}> {homePageText}</Link>
              </li>
              <li>{activePageText}</li>
            </ul> */}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default PageBanner;
