import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import SearchBox from "./SearchBox";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components/macro";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Button } from "./button";
import Logo1 from "./logo.png";
import { logout } from "../actions/userActions";
import { Dropdown } from "react-bootstrap";
import Menu from "./menu.svg";

const Nav = styled.nav`
  top: 0;
  left: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: ${({ scrollNav }) =>
    scrollNav
      ? "linear-gradient(to right,#eb4d24 0%,#ec8d18 100% )"
      : "transparent"};
`;

const NavLink = css`
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  color: #fff;
  font-style: italic;
`;

const LogoImage = styled.img`
  width: 60px;
  height: 60px;
`;

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Menu});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: white;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
const IcnLink = styled(Link)``;
const CartIcn = styled(FaShoppingCart)`
  color: white;
  font-size: 1.5rem;
`;
const SearchIcn = styled(FaSearch)`
  color: white;
  font-size: 1.5rem;
  margin-right: 2rem;
  cursor: pointer;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SearchBoxStyle = styled.div`
  position: absolute;
  right: 5rem;
  top: 4rem;
`;

const Header = ({ match, history, toggle }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [catgory, setCatgory] = useState(null);
  const [scrollNav, setScrollNav] = useState(false);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const showSearchController = () => {
    setShowSearch(!showSearch);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Nav scrollNav={scrollNav}>
      <Logo to='/'>
        <LogoImage src={Logo1} />
        <b>TradePoint2020</b>
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {/* <NavMenuLinks to='/'>Home</NavMenuLinks> */}

        <Dropdown style={{ width: "2rem" }}>
          <Dropdown.Toggle
            id='dropdown-basic'
            style={{ background: "transparent" }}>
            {catgory ? catgory : "Categories"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Categories");
                history.push(`/`);
              }}>
              All
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Appliances");
                history.push(`/category/Appliances`);
              }}>
              Appliances
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Apps & Games");

                history.push(`/category/Apps & Games`);
              }}>
              Apps & Games
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Arts, Crafts, & Sewing");

                history.push(`/category/Arts, Crafts, & Sewing`);
              }}>
              Arts, Crafts, & Sewing
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Automotive Parts & Accessories");

                history.push(`/category/Automotive Parts & Accessories`);
              }}>
              Automotive Parts & Accessories
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Baby");

                history.push(`/category/Baby`);
              }}>
              Baby
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Beauty & Personal Care");

                history.push(`/category/Beauty & Personal Care`);
              }}>
              Beauty & Personal Care
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Books");

                history.push(`/category/Books`);
              }}>
              Books
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("CDs & Vinyl");

                history.push(`/category/CDs & Vinyl`);
              }}>
              CDs & Vinyl
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Cell Phones & Accessories");

                history.push(`/category/Cell Phones & Accessories`);
              }}>
              Cell Phones & Accessories
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Clothing, Shoes and Jewelry");

                history.push(`/category/Clothing, Shoes and Jewelry`);
              }}>
              Clothing, Shoes and Jewelry
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Collectibles & Fine Art");

                history.push(`/category/Collectibles & Fine Art`);
              }}>
              Collectibles & Fine Art
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Computers");

                history.push(`/category/Computers`);
              }}>
              Computers
            </Dropdown.Item>

            <Dropdown.Item
              onClick={() => {
                setCatgory("Electronics");

                history.push(`/category/Electronics`);
              }}>
              Electronics
            </Dropdown.Item>

            <Dropdown.Item
              onClick={() => {
                setCatgory("Garden & Outdoor");

                history.push(`/category/Garden & Outdoor`);
              }}>
              Garden & Outdoor
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Grocery & Gourmet Food");

                history.push(`/category/Grocery & Gourmet Food`);
              }}>
              Grocery & Gourmet Food
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Handmade");

                history.push(`/category/Handmade`);
              }}>
              Handmade
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Health, Household & Baby Care");

                history.push(`/category/Health, Household & Baby Care`);
              }}>
              Health, Household & Baby Care
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Home & Kitchen");

                history.push(`/category/Home & Kitchen`);
              }}>
              Home & Kitchen
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Industrial & Scientific");

                history.push(`/category/Industrial & Scientific`);
              }}>
              Industrial & Scientific
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Kindle");

                history.push(`/category/Kindle`);
              }}>
              Kindle
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Luggage & Travel Gear");

                history.push(`/category/Luggage & Travel Gear`);
              }}>
              Luggage & Travel Gear
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Movies & TV");

                history.push(`/category/Movies & TV`);
              }}>
              Movies & TV
            </Dropdown.Item>

            <Dropdown.Item
              onClick={() => {
                setCatgory("Musical Instruments");

                history.push(`/category/Musical Instruments`);
              }}>
              Musical Instruments
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Office Products");

                history.push(`/category/Office Products`);
              }}>
              Office Products
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Pet Supplies");

                history.push(`/category/Pet Supplies`);
              }}>
              Pet Supplies
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Sports & Outdoors");

                history.push(`/category/Sports & Outdoors`);
              }}>
              Sports & Outdoors
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Tools & Home Improvement");

                history.push(`/category/Tools & Home Improvement`);
              }}>
              Tools & Home Improvement
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Toys & Games");

                history.push(`/category/Toys & Games`);
              }}>
              Toys & Games
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCatgory("Video Games");

                history.push(`/category/Video Games`);
              }}>
              Video Games
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </NavMenu>

      <NavBtn>
        <SearchIcn onClick={showSearchController} />
        <IcnLink to='/cart'>
          <CartIcn />
        </IcnLink>
        <p
          style={{
            margin: 0,
            padding: 0,
            color: "white",
            marginTop: "-2rem",
            fontWeight: "bold",
          }}>
          {cartItems.reduce((acc, item) => acc + item.qty, 0)}
        </p>
        {userInfo ? (
          <Dropdown>
            <Dropdown.Toggle
              id='dropdown-basic'
              style={{ background: "transparent" }}>
              {userInfo.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <NavMenuLinks
                  to='/Profile'
                  style={{
                    color: "black",
                    display: "flex",
                    justifyContent: "center",
                  }}>
                  Profile
                </NavMenuLinks>
              </Dropdown.Item>
              <Dropdown.Item
                onClick={logoutHandler}
                style={{ display: "flex", justifyContent: "center" }}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <NavMenuLinks to='/login'>
            {" "}
            <i className='fas fa-user' style={{ marginRight: 5 }}></i>{" "}
            <b>Sign In</b>
          </NavMenuLinks>
        )}

        {userInfo && userInfo.isAdmin && (
          <Dropdown>
            <Dropdown.Toggle
              id='dropdown-basic'
              style={{ background: "transparent" }}>
              Admin
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <NavMenuLinks
                  to='/admin/userlist'
                  style={{
                    color: "black",
                  }}>
                  Users List
                </NavMenuLinks>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavMenuLinks
                  to='/admin/productlist'
                  style={{
                    color: "black",
                  }}>
                  Products List
                </NavMenuLinks>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavMenuLinks
                  to='/admin/orderlist'
                  style={{
                    color: "black",
                  }}>
                  Orders List
                </NavMenuLinks>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </NavBtn>

      {showSearch && (
        <SearchBoxStyle>
          <Route
            render={({ history }) => (
              <SearchBox
                history={history}
                showSearchController={showSearchController}
              />
            )}
          />
        </SearchBoxStyle>
      )}
    </Nav>
  );
};

export default Header;
