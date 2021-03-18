import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footerSty'>
      <Container>
        <Row>
          <Col md={3} sm={6}>
            <div className='text-center py-3'>
              <p style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
                Useful Links
              </p>
              <p style={{ color: "white", fontSize: 15 }}>
                <Link style={{ color: "white" }} to='/aboutus'>
                  About us
                </Link>
              </p>

              <p style={{ color: "white", fontSize: 15 }}>
                <Link style={{ color: "white" }} to='/'>
                  Main Page
                </Link>
              </p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className='text-center py-3'>
              <p style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
                My Account
              </p>
              <p style={{ color: "white", fontSize: 15 }}>
                <Link style={{ color: "white" }} to='/login'>
                  Sign In
                </Link>
              </p>

              <p style={{ color: "white", fontSize: 15 }}>
                <Link style={{ color: "white" }} to='/register'>
                  Create Account
                </Link>
              </p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className='text-center py-3'>
              <p style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
                Customer Services
              </p>
              <p style={{ color: "white", fontSize: 15 }}>
                <Link style={{ color: "white" }} to='/paymentmethod'>
                  Payment & Shipping
                </Link>
              </p>

              <p style={{ color: "white", fontSize: 15 }}>
                <Link style={{ color: "white" }} to='/privacypolicy'>
                  Privacy Policy
                </Link>
              </p>
              <p style={{ color: "white", fontSize: 15 }}>
                <Link style={{ color: "white" }} to='/missionstatment'>
                  Mission Statment
                </Link>
              </p>
              <p style={{ color: "white", fontSize: 15 }}>
                <Link style={{ color: "white" }} to='/courierguide'>
                  Courier Guide
                </Link>
              </p>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div className='text-center py-3'>
              <p style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
                Contact Us
              </p>
              <p style={{ color: "white", fontSize: 15 }}>
                <Link style={{ color: "white" }} to='/contactus'>
                  Contact Tradepoint2020!
                </Link>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3' style={{ color: "white" }}>
            Copyright &copy; My-Ecommerce
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
