import React, { useState } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
const Product = ({ product, history }) => {
  const [qty, setQty] = useState(1);

  return (
    <Card className='my-3 p-3 rounded' style={{ height: "500px" }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant='top'
          style={{ height: "270px" }}
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>
              {product.name.slice(0, 34)}{" "}
              {product.name.length > 34 ? "...." : ""}
            </strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <div className='my-3'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as='h3'>£{product.price}</Card.Text>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "40px",
          }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ margin: 5, fontSize: 15 }}>Qty</p>
            <Form.Control
              as='select'
              onChange={(e) => {
                console.log("Quantity is changing ... ", e.target.value);
                setQty(e.target.value);
              }}>
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </Form.Control>
          </div>
          {product.countInStock === 0 ? (
            <p>
              <b>Out of stock</b>
            </p>
          ) : (
            <Link
              to={`/cart/${product._id}?qty=${qty}`}
              style={{
                background: "red",
                color: "white",
                padding: 7,
                borderRadius: 5,
              }}>
              Add To cart
            </Link>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
