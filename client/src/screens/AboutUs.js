import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../compoenets/Header1";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div style={{ margin: "1rem" }}>
        <Container>
          <h1>About Us</h1>
          <p style={{ fontSize: 18 }}>
            Tradepoint2020 was founded in 2018 and launched officially in 2021,
            our site is distinct information from the very start we have focused
            on quality. Tradepoint2020 is one of the most experienced e-commerce
            stores now lunched in international market.
          </p>
          <p style={{ fontSize: 18 }}>
            Tradepoint2020 have great experience of selling different categories
            like clothing, bed sheet, Home & Kitchen, Grocery & Gourmet Food,
            Electronics, Gadgets and Tech Online Store. To meet our customer
            needs and provide an above and beyond sense of service, we do
            everything ourselves, that’s why you can trust us to deliver what
            you have ordered. We pick the requested product, quality check it;
            pack it and have it shipped to you.
          </p>
          <h1>Meeting International Standards</h1>
          <p style={{ fontSize: 18 }}>
            We are proudly working internationally and competing with
            international players in this huge e-commerce landscape. In-order to
            bring unmatched value to our customers we work with a variety of
            international partners with best global practices.
          </p>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
