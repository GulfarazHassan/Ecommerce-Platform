import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Dropdown } from "react-bootstrap";
import Message from "../compoenets/Message.js";
import Loader from "../compoenets/Loader.js";
import Paginate from "../compoenets/Paginate";
import Header from "../compoenets/Header";
import Product from "../compoenets/Product";
import Meta from "../compoenets/Meta";
import DropDown from "../compoenets/DropdownSidenav";
import ProductCarousel from "../compoenets/ProductCarousel";
import { listProducts } from "../actions/productActions.js";

const HomeScreen = ({ match, history }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const catgory = match.params.category;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber, catgory));
  }, [dispatch, keyword, pageNumber, catgory]);

  return (
    <>
      <DropDown toggle={toggle} open={isOpen} />
      <Meta />
      <Header history={history} toggle={toggle} />

      <ProductCarousel />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {!loading && products.length === 0 && (
            <Message>No Products Found</Message>
          )}
          <div style={{ margin: "3rem" }}>
            <h2>Latest Products</h2>

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
          </div>
        </>
      )}
    </>
  );
};

export default HomeScreen;
