import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServicesContent from "../components/Services/ServicesContent";
import Footer from "../components/Layouts/Footer";

const Services = () => {
  return (
    <>
      <Navbar/>

      <PageBanner
        pageTitle="Services"
        homePageUrl="/"
        homePageText=""
        activePageText=""
        bgImgClass="item-bg1"
      />

      <ServicesContent />


      <Footer />
    </>
  );
};

export default Services;
