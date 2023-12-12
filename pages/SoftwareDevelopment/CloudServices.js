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
import CloudTestingServices from "../../components/CloudServices/CloudTestingServices";

const CloudServices = () => {
  return (
    <>
    <Navbar />
      <PageBanner
        pageTitle="Cloud Services"
        bgImgClass="item-bg2"
        homePageText= "Test Yantra Global offers a comprehensive suite of cloud computing services that form the foundation for a scalable hybrid cloud management platform that drives holistic digital transformation."
      />
      <CloudTestingServices/>
      <BlogPost/>
      <Footer/>
    </>
  )
}

export default CloudServices
