import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import FireflinkServices from "../../components/SoftwareDevelopment/FireflinkServices";
import PageBanner from "../../components/Common/PageBanner";
import SoftwareDevelopmentContent from "../../components/SoftwareDevelopment/SoftwareDevelopmentContent";
import FireflinkSlider from "../../components/SoftwareDevelopment/FireflinkSlider";
import SoftwareTestingServices from "../../components/SoftwareDevelopment/SoftwareTestingServices";
import BlogPost from "../../components/Home/BlogPost";
import SoftwareTestingFields from "../../components/SoftwareDevelopment/SoftwareTestingFields";

const Index = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Software Development"
        bgImgClass="item-bg2"
        homePageText= "Our 1,100+ expert software developers utilize the latest technology stack to build and integrate leading applications across a variety of domains."
      />

      {/* <SoftwareDevelopmentContent /> */}
      <SoftwareTestingServices/>
      <SoftwareTestingFields/>
      {/* <FireflinkSlider /> */}

      {/* <FireflinkServices /> */}
      <BlogPost/>

      <Footer />
    </>
  );
};

export default Index;
