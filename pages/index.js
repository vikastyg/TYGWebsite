import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import MainBanner from "../components/Home/MainBanner";
import ServicesHome from "../components/Home/ServicesHome";
import VideoPlayer from "../components/Home/VideoPlayer";
import HighlightedFeature from "../components/Home/HighlightedFeature";
import Testimonials from "../components/Home/Testimonials";
import BlogPost from "../components/Home/BlogPost";
import PresenceCounter from "../components/Home/PresenceCounter";

const Index = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <ServicesHome />
      {/* <VideoPlayer/> */}
      {/* <HighlightedFeature /> */}
      <PresenceCounter />
      {/* <Testimonials /> */}
      <BlogPost />
      <Footer />
    </>
  );
};

export default Index;
