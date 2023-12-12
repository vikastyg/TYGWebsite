import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import PageBanner from "../../components/Common/PageBanner";
import SoftwaretestingTaasContent from "../../components/SoftwareTestingTaas/SoftwaretestingTaasContent";
import FireflinkSlider from "../../components/SoftwareTestingTaas/FireflinkSlider";
import SoftwareTestingServices from "../../components/SoftwareTestingTaas/SoftwareTestingServices";
import BlogPost from "../../components/Home/BlogPost";

const Index = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Software Testing Services (TaaS)"
        bgImgClass="item-bg1"
        homePageText= "Trusted by 3000+ clients across the globe to provide a range of Software testing solutions, expertise, and AI based software testing platform."

      />

      {/* <SoftwaretestingTaasContent /> */}
      <SoftwareTestingServices/>
      {/* <FireflinkSlider /> */}

      {/* <FireflinkServices /> */}
      <BlogPost/>

      <Footer />
    </>
  );
};

export default Index;
