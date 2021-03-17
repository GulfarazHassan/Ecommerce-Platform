import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import Rating from "./Rating";
import { listTopProducts } from "../actions/productActions";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./styles.css";
const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    // <Carousel pause='hover' className='bg-dark'>
    //   {products.map((product) => (
    //     <Carousel.Item key={product._id}>
    //       <Link to={`/product/${product._id}`}>
    //         <Image
    //           src={product.image}
    //           alt={product.name}
    //           fluid
    //           style={{ height: "500px" }}
    //         />
    //         <Carousel.Caption className='carousel-caption'>
    //           <ListGroup variant='flush'>
    //             <ListGroup.Item>
    //               <h3>{product.name}</h3>
    //             </ListGroup.Item>

    //             <ListGroup.Item>
    //               <Rating
    //                 value={product.rating}
    //                 text={`${product.numReviews} reviews`}
    //               />
    //             </ListGroup.Item>

    //             <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

    //             <ListGroup.Item>
    //               Description: ${product.description}
    //             </ListGroup.Item>
    //           </ListGroup>
    //         </Carousel.Caption>
    //       </Link>
    //     </Carousel.Item>
    //   ))}
    // </Carousel>
    <Slider className='slider-wrapper' autoplay={3000}>
      {products.map((item, index) => (
        <div
          key={index}
          className='slider-content'
          style={{
            background: `url('${item.image}') no-repeat center center`,
          }}>
          <div className='inner'>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <Link to={`/product/${item._id}`}>
              <button>Details</button>
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ProductCarousel;
