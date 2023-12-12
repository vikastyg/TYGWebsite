import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import ServicesAbout from "../components/About/ServicesAbout";
import PageBanner from "../components/Common/PageBanner";
import AboutContact from "../components/About/AboutContent";
import PartnerContent from "../components/About/PartnerContent";

const Index = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
        bgImgClass="item-bg1"
      />

      <AboutContact />

      <ServicesAbout />

      <PartnerContent />

      <Footer />
    </>
  );
};

export default Index;
