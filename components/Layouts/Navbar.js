import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // Add active class
  const [currentpath, setcurrentpath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setcurrentpath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              {/* FOR LOGO */}
              <Link href="/" className="navbar-brand">
                <img src="/images/logo.svg" className="main-logo" alt="logo" />
              </Link>

              {/* BUTTON FOR COLLAPSED MENUE IN MOBILE VIEW  */}
              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              {/* NAVBAR - MENUES   */}
              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  {/* HOME MENUE  */}
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${currentpath == "/" && "active"}`}
                    >
                      Home
                    </Link>

                    {/* <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/about"
                          className={`nav-link ${
                            currentpath == "/about/" && "active"
                          }`}
                        >
                          About
                        </Link>
                      </li>
                    </ul> */}
                  </li>

                  {/* SERVICES MENUE  */}
                  <li className="nav-item">
                    <Link
                      href="/services"
                      className={`nav-link ${
                        currentpath == "/services/" && "active"
                      }`}
                      onClick={(e) => e.preventDefault()}
                    >
                      Services
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/services/SoftwareTestingTaas/"
                          className={`nav-link ${
                            currentpath == "/services/SoftwareTestingTaas/" &&
                            "active"
                          }`}
                        >
                          Software Testing (TAAS)
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/services/SoftwareDevelopment/"
                          className={`nav-link ${
                            currentpath == "/services/SoftwareDevelopment/" &&
                            "active"
                          }`}
                        >
                          Software Development
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/services/SkillsEnhancement/"
                          className={`nav-link ${
                            currentpath == "/services/SkillsEnhancement/" &&
                            "active"
                          }`}
                        >
                          Skills Enhancement
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/services/ItConsulting/"
                          className={`nav-link ${
                            currentpath == "/services/ItConsulting/" && "active"
                          }`}
                        >
                          IT Consulting
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* PARTNERS MENUE  */}
                  <li className="nav-item">
                    <Link
                      href="/products/"
                      className={`nav-link ${
                        currentpath == "/products/" && "active"
                      }`}
                      onClick={(e) => e.preventDefault()}
                    >
                      Partners
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/products/fireflink/"
                          className={`nav-link ${
                            currentpath == "/products/fireflink/" && "active"
                          }`}
                        >
                          FireFlink
                        </Link>
                      </li>

                      {/* <li className="nav-item">
                        <Link
                          href="/firecrowd/"
                          className={`nav-link ${
                            currentpath == "/firecrowd/" && "active"
                          }`}
                        >
                          FireCrowd
                        </Link>
                      </li> */}

                      {/* <li className="nav-item">
                        <Link
                          href="/skillrary/"
                          className={`nav-link ${
                            currentpath == "/skillrary/" && "active"
                          }`}
                        >
                          Skill Rary
                        </Link>
                      </li> */}
                    </ul>
                  </li>

                  {/* ARTICLES MENUE  */}
                  <li className="nav-item">
                    <Link
                      href="/articles/"
                      className={`nav-link ${
                        currentpath == "/articles/" && "active"
                      }`}
                    >
                      Articles
                    </Link>
                  </li>

                  {/* CONTACT MENUE  */}
                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      className={`nav-link ${
                        currentpath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>

                  {/* CAREER MENUE  */}
                  {/* <li className="nav-item">
                    <Link
                      href="/career/"
                      className={`nav-link ${
                        currentpath == "/career/" && "active"
                      }`}
                    >
                      Career
                    </Link>
                  </li> */}
                </ul>

                {/* others-options */}
                <div className="others-options">
                  {/* <Link href="/cart" className="cart-btn">
                    <i className="flaticon-commerce-and-shopping"></i>
                    <span>1</span>
                  </Link> */}

                  <Link href="/contact" className="btn btn-primary">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}
    </>
  );
};

export default Navbar;
