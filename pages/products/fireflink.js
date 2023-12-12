import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import FireflinkServices from "../../components/Fireflink/FireflinkServices";
import PageBanner from "../../components/Common/PageBanner";
import FireflinkContent from "../../components/Fireflink/FireflinkContent";
import FireflinkSlider from "../../components/Fireflink/FireflinkSlider";
import BlogPost from "../../components/Home/BlogPost";

const Index = () => {
  return (
    <>
      <Navbar />
      <PageBanner 
      pageTitle=  "FireFlink -Extreme test automation."
       
      bgImgClass="item-bg1"
      homePageText= "FireFlink is a high-speed test automation platform, the way forward for agile software testing FireFlink is a groundbreaking advancement in scriptless testing and providing end-to-end test automation for web, Android, iOS, and API tests. Test Yantra Global , ‘Exclusive Service Platinum Partner’ of FireFlink', enables you to achieve Digital Transformation efficiently with better ROI."
      />
       
       

      

      {/* <FireflinkContent /> */}
      {/* <FireflinkSlider /> */}

      <FireflinkServices />
      <BlogPost/>

      <Footer />
    </>
  );
};

export default Index;
