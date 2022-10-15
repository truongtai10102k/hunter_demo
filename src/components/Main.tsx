import React, { ReactNode, useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

import "../assets/css/components/main.css";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <div className="overflow-hidden">
      <div className="header">
        <Info />
        <Header />
      </div>
      {/* <div className="mt-5"></div> */}
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;

const Info = () => {
  return (
    <div className="background">
      <div className="container py-2 text-white">
        <div className="row ">
          <div className="col-md-8 col-12">
            <span className=" text pe-2">
              <span className="pe-1">
                <FaMapMarkerAlt size={24} color="#fff" />
              </span>
              30 Trần Hữu Dực – Nam Từ Liêm – Hà Nội
            </span>
            <span className=" text px-2 border-phone">
              <span className="pe-1">
                <FaMobileAlt size={24} color="#fff" />
              </span>
              0812161090
            </span>
            <span className=" text ps-2">
              <span className="pe-1">
                <FaRegClock size={24} color="#fff" />
              </span>
              8pm – 8am / 7 days
            </span>
          </div>
          <div className="col-md-4 col-12 text-md-end text-center">
            <span>
              <FaFacebookF size={24} color="#fff" />
            </span>
            <span className="px-3">
              <FaInstagram size={24} color="#fff" />
            </span>
            <span>
              <FaTwitter size={24} color="#fff" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

function Header() {
  const [fixed, setFixed] = useState(false);
  console.log("🚀 ~ file: Main.tsx ~ line 80 ~ Header ~ fixed", fixed);

  function setFixedFn() {
    if (window.scrollY >= 150) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  window.addEventListener("scroll", setFixedFn);
  return (
    <Navbar
      expand="lg"
      className={`px-5 py-4 w-100 ${fixed ? "nav-fix" : "nav-static"}`}
    >
      <Navbar.Brand className="text-white">
        <Link
          to={"/"}
          style={{ color: "#56b665" }}
          className="fw-bold fs-5  text-decoration-none mx-3"
        >
          LOGO
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ background: "#ffffff47" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link
            to={"/"}
            style={{ color: "#56b665" }}
            className="fw-bold fs-5 text-nav text-decoration-none mx-3"
          >
            TRANG CHỦ
          </Link>
          <Link
            to={"/about"}
            style={{ color: "#56b665" }}
            className="fw-bold fs-5  text-nav text-decoration-none mx-3"
          >
            GIỚI THIỆU
          </Link>
          <Link
            to={"/service"}
            style={{ color: "#56b665" }}
            className="fw-bold fs-5 text-nav mx-3 text-decoration-none"
          >
            DỊCH VỤ
          </Link>
          <Link
            to={"/contract"}
            style={{ color: "#56b665" }}
            className="fw-bold fs-5 text-nav mx-3 text-decoration-none"
          >
            DỰ ÁN
          </Link>
          {/* <Link to={"/"} className="mx-3 text-decoration-none">
            TIN TỨC
          </Link> */}
          {/* <Link to={"/"} className="mx-3 text-decoration-none">
            LIÊN HỆ
          </Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const Footer = () => {
  return (
    <div>
      <FooterInfo />
      {/* <FooterAbout /> */}
    </div>
  );
};

const FooterInfo = () => {
  return (
    <div style={{ background: "#272d2e" }}>
      <div className="container text-white pb-4">
        <div className="row">
          <div className="col-md-4 gy-4">
            <div className="d-flex align-items-center">
              <div className="pe-3">
                <FaPhoneAlt color="#56b665" fontSize={40} />
              </div>
              <div>
                <div style={{ color: "#80888a" }}>GỌI NGAY CHO CHÚNG TÔI</div>
                <div>0812161090</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 gy-4">
            <div className="d-flex align-items-center">
              <div className="pe-3">
                <FaMapMarkedAlt color="#56b665" fontSize={40} />
              </div>
              <div>
                <div style={{ color: "#80888a" }}>30 TRẦN HỮU DỰC </div>
                <div>Nam Từ Liêm – Hà Nội</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 gy-4">
            <div className="d-flex align-items-center">
              <div className="pe-3">
                <FiMail color="#56b665" fontSize={40} />
              </div>
              <div>
                <div style={{ color: "#80888a" }}>EMAIL</div>
                <div>Ngotuyet0809@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterAbout = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-md-6 col-12">
            <div>Về Chúng Tôi</div>
            <div></div>
          </div>
          <div className="col-xl-3 col-md-6 col-12">2</div>
          <div className="col-xl-3 col-md-6 col-12">3</div>
          <div className="col-xl-3 col-md-6 col-12">4</div>
        </div>
      </div>
    </div>
  );
};
