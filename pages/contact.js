import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ContactFormContent from "../components/Contact/ContactFormContent";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";
import ContactAdress from "../components/Contact/ContactAdress";

const Contact = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Contact" bgImgClass="item-bg1" />

      <ContactFormContent />
      <ContactAdress />

      <Footer />
    </>
  );
};

export default Contact;
