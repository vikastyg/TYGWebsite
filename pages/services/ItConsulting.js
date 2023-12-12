import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import PageBanner from "../../components/Common/PageBanner";
import FireflinkSlider from "../../components/SoftwareTestingTaas/FireflinkSlider";
import BlogPost from "../../components/Home/BlogPost";
import ItConsultingServices from "../../components/ItConsulting/ItConsultingServices";
import ItConsultinggg from "../../components/ItConsulting/ItConsultinggg";

const Index = () => {
  return (
    <>
      <Navbar />
      <PageBanner
      pageTitle="IT Consulting"
      bgImgClass="item-bg4"
      homePageText= "Test Yantra Global's IT Consulting Services have been the cornerstone for many organizations looking to create a competitive edge. With over 15 years of experience, a team of 12,000+ skilled engineers, a portfolio of 3,000+ satisfied customers, and 180+ successful enterprise deployments, our expert team of IT Consulting and Managed Services experts can seamlessly guide your business through a successful digital transformation journey."
      />

      {/* <ItConsultingContent/> */}
      <ItConsultinggg />  
      <ItConsultingServices/>
      
      {/* <FireflinkSlider /> */}

      <BlogPost/>

      <Footer />
    </>
  );
};

export default Index;
