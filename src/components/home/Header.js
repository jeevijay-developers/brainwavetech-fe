import Link from "next/link";
import { useEffect, useRef } from "react";
import { useIsVisible } from "react-is-visible";

export default function Header({
  logo,
  btn,
  btnDefault,
  loginBtn,
  headerStyle,
}) {
  const navToggle = useRef(null);
  const navHambargar = useRef(null);

  const navRef = useRef();
  const isVisible = useIsVisible(navRef);
  const headerMain = useRef();

  // toggle nav
  async function ToggleNav() {
    try {
      navHambargar.current.classList.toggle("h-active");
      navToggle.current.classList.toggle("slidenav");
    } catch (err) {}
  }

  // toggle sub menu
  async function ToggleSubMenu(e) {
    try {
      if (e.target.nextSibling.style.display === "block") {
        e.target.nextSibling.style.display = "none";
        e.target.innerHTML = "+";
      } else {
        e.target.nextSibling.style.display = "block";
        e.target.innerHTML = "-";
      }
    } catch (err) {}
  }

  useEffect(() => {
    window.addEventListener("scroll", function () {
      try {
        const scroll = window.scrollY;
        if (scroll >= 10) {
          headerMain.current.classList.add("sticky");
        } else {
          headerMain.current.classList.remove("sticky");
        }
      } catch (err) {
        console.log(err);
      }
    });
  }, []);

  return (
    <>
      <header>
        <div
          ref={headerMain}
          className={`header-area header-defult ${
            headerStyle ? headerStyle : ""
          } header-style-one`}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-xs-12 align-items-center d-xl-flex d-lg-block">
                <div className="nav-logo d-flex justify-content-between align-items-center">
                  <a href="#">
                    <img
                      src={`/images/${logo}`}
                      alt="logo"
                      style={{ width: "10rem !important" }}
                    />
                  </a>

                  <div className="d-flex align-items-center gap-4">
                    <div className="mobile-menu d-flex ">
                      <a
                        href="#"
                        className="hamburger d-block d-xl-none"
                        ref={navHambargar}
                        onClick={ToggleNav}
                      >
                        <span className="h-top"></span>
                        <span className="h-middle"></span>
                        <span className="h-bottom"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 col-md-8 col-sm-6 col-xs-6 d-xl-flex justify-content-lg-center">
                <nav className="main-nav float-end" ref={navToggle}>
                  <div className="inner-logo d-xl-none text-center">
                    <a href="/home1">
                      <img
                        src={`/images/${logo}`}
                        alt="logo"
                        className="logo-image"
                        style={{ width: "10rem !important" }}
                      />
                    </a>
                  </div>
                  <ul>
                    <li className="">
                      <a
                        href="/home2"
                        onClick={() => {
                          return null;
                        }}
                      >
                        Home
                      </a>
                      {/* <i className="fl flaticon-plus" onClick={ToggleSubMenu}>
                        +
                      </i> */}
                      {/* <ul className="sub-menu">
                        <li>
                          <a href="/home2">Home</a>
                        </li>
                      </ul> */}
                    </li>

                    {/* <li>
                      <a href="/about">About Us</a>
                    </li> */}

                    <li className="has-child-menu">
                      <a
                        href="#"
                        onClick={() => {
                          return null;
                        }}
                      >
                        About
                      </a>
                      <i className="fl flaticon-plus" onClick={ToggleSubMenu}>
                        +
                      </i>
                      <ul className="sub-menu">
                        <li>
                          <a href="/about">About Us</a>
                        </li>
                        <li>
                          <a href="/missionAndVision">Mission & Vision</a>
                        </li>
                        <li>
                          <a href="/coreValues">Core Values</a>
                        </li>
                        <li>
                          <a href="/members">Members</a>
                        </li>
                        {/* <li>
                          <a href="/about">Research & insights</a>
                        </li> */}
                        {/* <li>
                          <a href="/about">About Us</a>
                        </li>
                        <li>
                          <a href="/about">About Us</a>
                        </li> */}
                      </ul>
                    </li>

                    {/* <li className="has-child-menu">
                      <a
                        href="#"
                        onClick={() => {
                          return null;
                        }}
                      >
                        Services
                      </a>
                      <i className="fl flaticon-plus" onClick={ToggleSubMenu}>
                        +
                      </i>
                      <ul className="sub-menu">
                        <li>
                          <a href="/service">Services</a>
                        </li>
                        <li>
                          <a href="/service-details">Service Details</a>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <a href="/price">Pricing</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                  </ul>

                  <div className="inner-contact-options d-xl-none d-inline-flex flex-column px-3">
                    <a href="#" className="btn-transparent-xl mb-3">
                      Login
                    </a>
                    <a href="#" className="btn-outlined-round">
                      Sign up
                    </a>
                  </div>
                </nav>
              </div>
              <div className="col-xl-3">
                <div className="nav-right float-end d-xl-flex d-none">
                  <a
                    href="#"
                    className={`btn-transparent-xl ${loginBtn ? loginBtn : ""}`}
                  >
                    Login
                  </a>
                  <a href="/contact" className={btn}>
                    Sign up
                    {!btnDefault ? <span></span> : ""}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
