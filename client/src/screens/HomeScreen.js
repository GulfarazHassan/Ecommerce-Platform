import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Dropdown } from "react-bootstrap";
import Message from "../compoenets/Message.js";
import Loader from "../compoenets/Loader.js";
import Paginate from "../compoenets/Paginate";
import Product from "../compoenets/Product";
import Meta from "../compoenets/Meta";
import ProductCarousel from "../compoenets/ProductCarousel";
import { listProducts } from "../actions/productActions.js";

const HomeScreen = ({ match, history }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const catgory = match.params.category;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber, catgory));
  }, [dispatch, keyword, pageNumber, catgory]);

  return (
    <>
      <Meta />
      {/* <h1>Latest Products</h1> */}
      {!keyword && <ProductCarousel />}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {!keyword && (
            <div className='categories'>
              <Row>
                <Col sm={12} md={6}>
                  <h2 style={{ color: "white" }}>Products</h2>
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} className='catBtn'>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant='primary'
                      id='dropdown-basic'
                      style={{ borderRadius: 5 }}>
                      {catgory ? catgory : "All Categories"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/`);
                        }}>
                        All Categories
                      </Dropdown.Item>
                      <Dropdown.Item
                        value='a12asd'
                        onClick={() => {
                          history.push(`/category/Appliances`);
                        }}>
                        Appliances
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Apps & Games`);
                        }}>
                        Apps & Games
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Arts, Crafts, & Sewing`);
                        }}>
                        Arts, Crafts, & Sewing
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(
                            `/category/Automotive Parts & Accessories`
                          );
                        }}>
                        Automotive Parts & Accessories
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Baby`);
                        }}>
                        Baby
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Beauty & Personal Care`);
                        }}>
                        Beauty & Personal Care
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Books`);
                        }}>
                        Books
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/CDs & Vinyl`);
                        }}>
                        CDs & Vinyl
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Cell Phones & Accessories`);
                        }}>
                        Cell Phones & Accessories
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Clothing, Shoes and Jewelry`);
                        }}>
                        Clothing, Shoes and Jewelry
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Collectibles & Fine Art`);
                        }}>
                        Collectibles & Fine Art
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Computers`);
                        }}>
                        Computers
                      </Dropdown.Item>

                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Electronics`);
                        }}>
                        Electronics
                      </Dropdown.Item>

                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Garden & Outdoor`);
                        }}>
                        Garden & Outdoor
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Grocery & Gourmet Food`);
                        }}>
                        Grocery & Gourmet Food
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Handmade`);
                        }}>
                        Handmade
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(
                            `/category/Health, Household & Baby Care`
                          );
                        }}>
                        Health, Household & Baby Care
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Home & Kitchen`);
                        }}>
                        Home & Kitchen
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Industrial & Scientific`);
                        }}>
                        Industrial & Scientific
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Kindle`);
                        }}>
                        Kindle
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Luggage & Travel Gear`);
                        }}>
                        Luggage & Travel Gear
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Movies & TV`);
                        }}>
                        Movies & TV
                      </Dropdown.Item>

                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Musical Instruments`);
                        }}>
                        Musical Instruments
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Office Products`);
                        }}>
                        Office Products
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Pet Supplies`);
                        }}>
                        Pet Supplies
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Sports & Outdoors`);
                        }}>
                        Sports & Outdoors
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Tools & Home Improvement`);
                        }}>
                        Tools & Home Improvement
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Toys & Games`);
                        }}>
                        Toys & Games
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          history.push(`/category/Video Games`);
                        }}>
                        Video Games
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </div>
          )}
          {!loading && products.length === 0 && (
            <Message>No Products Found</Message>
          )}
          <Row>
            {products.map((product, index) => (
              <Col sm={12} md={6} lg={4} xl={3} key={index}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
