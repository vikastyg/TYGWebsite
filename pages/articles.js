import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ArticlesGrid from "../components/Articles/ArticlesGrid";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

const Articles = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Articles" bgImgClass="item-bg1" />

      <ArticlesGrid />

      <Footer />
    </>
  );
};

export default Articles;
