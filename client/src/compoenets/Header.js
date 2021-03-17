import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";
import SearchBox from "./SearchBox";
import Logo from "./logo.png";

const Header = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href='#'>
              <img
                src={Logo}
                style={{ width: "65px", background: "white", borderRadius: 60 }}
              />
            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer to='/'>
            <Navbar.Brand href='#'>TradePoint2020</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
            <Nav className='ml-auto'>
              <LinkContainer
                to='/cart'
                style={{
                  background: "red",
                  borderRadius: 5,
                  color: "white",
                  marginRight: 10,
                }}>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown
                  // title={userInfo.name}
                  title={
                    <span style={{ color: "white" }}>{userInfo.name}</span>
                  }
                  id='username'
                  style={{
                    background: "red",
                    borderRadius: 5,
                    marginRight: 10,
                  }}>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer
                  to='/login'
                  style={{
                    background: "red",
                    borderRadius: 5,
                    color: "white",
                    marginRight: 10,
                  }}>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown
                  id='adminmenu'
                  title={<span style={{ color: "white" }}>Admin</span>}
                  style={{
                    background: "red",
                    borderRadius: 5,
                    color: "white",
                    marginRight: 10,
                  }}>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users List</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products List</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders List</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
