import React from "react";
import PageBanner from "../components/Common/PageBanner";

import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";
import CareersFormContent from "../components/Careers/CareersFormContent";

const Career = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Contact" bgImgClass="item-bg1" />

      <CareersFormContent />

      <Footer />
    </>
  );
};

export default Career;
