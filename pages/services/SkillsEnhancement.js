import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import FireflinkServices from "../../components/SoftwareDevelopment/FireflinkServices";
import PageBanner from "../../components/Common/PageBanner";
import SkillsEnhancementContent from "../../components/SkillsEnhancement/SkillsEnhancementContent";
import FireflinkSlider from "../../components/SoftwareDevelopment/FireflinkSlider";
import SkillsEnhancementServices from "../../components/SkillsEnhancement/SkillsEnhancementServices";
import BlogPost from "../../components/Home/BlogPost";

const Index = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Skill Enhancement"
        bgImgClass="item-bg3"
        homePageText= "Unlock Your Potential - Explore Skill Enhancement Opportunities with Test Yantra Global. "
        
      />

      {/* <SkillsEnhancementContent /> */}
      <SkillsEnhancementServices/>
      {/* <FireflinkSlider /> */}

      {/* <FireflinkServices /> */}
      <BlogPost/>

      <Footer />
    </>
  );
};

export default Index;
