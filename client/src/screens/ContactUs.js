import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../compoenets/Header1";
const ContactUs = () => {
  return (
    <>
      <Header />
      <div style={{ margin: "1rem" }}>
        <Container>
          <h1>Contact Tradepoint2020!</h1>
          <p style={{ fontSize: 18 }}>
            We love hearing from our customers. You can email us with any
            questions at contact@tradepoint2020.com. We will respond back to
            your email as quickly as possible within a span of 24 - 48 Working
            Hours.
          </p>
          <p style={{ fontSize: 18 }}>
            One of our Experienced Customer Support Representatives will be
            taking your phone call and assist you for any of your concerns or
            queries!
          </p>
          <h4 style={{ color: "#ec8d18" }}>Emails</h4>
          <p style={{ fontSize: 17 }}>
            <b>Support:</b> support@tradepoint2020.com
          </p>
          <p style={{ fontSize: 17 }}>
            <b>Procurement officer:</b> procurement@tradepoint2020.com{" "}
          </p>
          <p style={{ fontSize: 17 }}>
            <b>Address:</b> 1A McKinney road, Newtownabbey, County Antrim BT36
            4PE, uk
          </p>
          <p style={{ fontSize: 17 }}>
            <b>Contact #</b> +447988005611
          </p>
          <p style={{ fontSize: 18 }}>
            Please tell us about the website and what you think can be done to
            make it better. Tradepoint2020.com is online retailers providing
            customers better prices than market and also connecting people world
            by giving Quality of products.
          </p>
          <p style={{ fontSize: 18 }}>
            <b>Your Comments and suggestions are of great value to us.</b>
          </p>
        </Container>
      </div>
    </>
  );
};
export default ContactUs;
