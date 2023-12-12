import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ArticlesDetailsContent from "../../components/Articles/ArticlesDetailsContent";
import Footer from "../../components/Layouts/Footer";
import { useRouter } from "next/router";

const ArticleDetails = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />

      {/* <PageBanner pageTitle="Articles" bgImgClass="item-bg1" /> */}

      <ArticlesDetailsContent articleNumber={router.query.id} />

      <Footer />
    </>
  );
};

export default ArticleDetails;
