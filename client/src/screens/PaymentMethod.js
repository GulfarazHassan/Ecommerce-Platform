import React from "react";
import { Container } from "react-bootstrap";
import Header from "../compoenets/Header1";
const PaymentMethod = () => {
  return (
    <>
      <Header />
      <div style={{ margin: "1rem" }}>
        <Container>
          <h1>Payment Methods</h1>
          <p style={{ fontSize: 18 }}>
            Tradepoint2020 offers you multiple payment options so that you can
            conveniently pay as you like for the products you buy from us.
          </p>
          <h4>Payments</h4>
          <p style={{ fontSize: 18 }}>How can you pay for your purchase?</p>
          <p style={{ fontSize: 18 }}>
            We support the following payment options
          </p>
          <h4 style={{ color: "#ec8d18" }}>1. Cash on Delivery</h4>
          <p style={{ fontSize: 18 }}>
            Using this service, you can pay cash to the delivery agent upon
            receiving your order. This service will enable you to shop at
            Tradepoint2020.com conveniently and hassle free. When you make a
            purchase using the Cash on Delivery option, your product will be
            booked. Our Customer Care Expert will call to confirm your Order
            before it gets dispatched. You can pay in cash to the delivery agent
            upon receiving your order. However, in some cases we require full or
            partial advance payments where order total exceeds COD threshold or
            supplier require pre payments before arranging the product. Delivery
            time may vary product to product.
          </p>
          <h4 style={{ color: "#ec8d18" }}> 2. Credit Card/Visa Debit Card</h4>
          <p style={{ fontSize: 18 }}>
            We accept payments through Visa and Master cards. If you wish to pay
            through your Credit Card/Visa debit card at checkout, this will led
            you to the page powered by etisalat locally hosted by a renowned
            bank.
          </p>

          <h4 style={{ color: "#ec8d18" }}>3. Online Bank Transfer</h4>
          <p style={{ fontSize: 18 }}>
            We are now accepting payments via PayPal also for International
            customers. To pay via PayPal, please select payment method as
            'PayPal' in the order form. After verification, we will send you
            PayPal details to transfer the amount.
          </p>
        </Container>
      </div>
    </>
  );
};

export default PaymentMethod;
