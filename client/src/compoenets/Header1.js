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
import DropSide from "./DropdownSidenav";

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
  background: linear-gradient(to right, #eb4d24 0%, #ec8d18 100%);
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

const HeaderOther = ({ match, history }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <DropSide toggle={toggle} open={isOpen} />
      <Nav scrollNav={scrollNav}>
        <Logo to='/'>
          <LogoImage src={Logo1} />
          <b>TradePoint2020</b>
        </Logo>
        <MenuBars onClick={toggle} />
        <NavMenu>{/* <NavMenuLinks to='/'>Home</NavMenuLinks> */}</NavMenu>

        <NavBtn>
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
    </>
  );
};

export default HeaderOther;
