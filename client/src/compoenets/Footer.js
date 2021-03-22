import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <footer className='footerSty'>
      <Container>
        <Row>
          <Col md={4} sm={6}>
            <div className='text-center py-3'>
              <p style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
                Company Profile
              </p>
              <p style={{ color: "white", fontSize: 15 }}>
                <Link
                  style={{ color: "white" }}
                  to='/aboutus'
                  onClick={toggleHome}>
                  About us
                </Link>
              </p>
              <p style={{ color: "white", fontSize: 15 }}>
                <Link
                  style={{ color: "white" }}
                  to='/missionstatment'
                  onClick={toggleHome}>
                  Mission Statment
                </Link>
              </p>

              <p style={{ color: "white", fontSize: 15 }}>
                <Link
                  style={{ color: "white" }}
                  to='/privacypolicy'
                  onClick={toggleHome}>
                  Privacy Policy
                </Link>
              </p>
              <p style={{ color: "white", fontSize: 15 }}>
                <Link
                  style={{ color: "white" }}
                  to='/contactus'
                  onClick={toggleHome}>
                  Contact Us
                </Link>
              </p>
            </div>
          </Col>
          <Col md={4} sm={6}>
            <div className='text-center py-3'>
              <p style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
                My Account
              </p>

              <p style={{ color: "white", fontSize: 15 }}>
                <Link style={{ color: "white" }} to='/' onClick={toggleHome}>
                  Main Page
                </Link>
              </p>

              <p style={{ color: "white", fontSize: 15 }}>
                <Link
                  style={{ color: "white" }}
                  to='/login'
                  onClick={toggleHome}>
                  Sign In / Register
                </Link>
              </p>
            </div>
          </Col>
          <Col md={4} sm={6}>
            <div className='text-center py-3'>
              <p style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
                Customer & Services
              </p>
              <p style={{ color: "white", fontSize: 15 }}>
                <Link
                  style={{ color: "white" }}
                  to='/paymentmethod'
                  onClick={toggleHome}>
                  Payment & Shipping
                </Link>
              </p>

              <p style={{ color: "white", fontSize: 15 }}>
                <Link
                  style={{ color: "white" }}
                  to='/courierguide'
                  onClick={toggleHome}>
                  Courier Guide
                </Link>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3' style={{ color: "white" }}>
            Copyright &copy; Tradepoint2020
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
