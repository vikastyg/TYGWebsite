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
import AwsTestingServices from "../../components/AwsServices/AwsTestingServices";

const AwsServices = () => {
  return (
    <>
    <Navbar />
      <PageBanner
        pageTitle="AWS Services"
        bgImgClass="item-bg2"
        homePageText= "Empowering your cloud journey with Test Yantra Global: Your Full-Cycle AWS Development, Setup, and Optimization Partner"
      />
      <AwsTestingServices/>
      <BlogPost/>
      <Footer/>
    </>
  )
}

export default AwsServices
