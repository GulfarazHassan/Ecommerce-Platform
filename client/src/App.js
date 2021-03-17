import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./compoenets/Header";
import Footer from "./compoenets/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentMethodScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderDetailScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import AboutUs from "./screens/AboutUs";
import MissionStatment from "./screens/MissionStatment";
import CourierGuide from "./screens/CourierGuide";
import PaymentMethod from "./screens/PaymentMethod";
import ContactUs from "./screens/ContactUs";

const App = () => {
  return (
    <Router>
      <Header />
      <main className='p-5'>
        <Route exact path='/login' component={LoginScreen} />
        <Route exact path='/payment' component={PaymentMethodScreen} />
        <Route exact path='/admin/userlist' component={UserListScreen} />

        <Route path='/admin/productlist' component={ProductListScreen} exact />
        <Route
          path='/admin/productlist/:pageNumber'
          component={ProductListScreen}
          exact
        />
        <Route exact path='/admin/user/:id/edit' component={UserEditScreen} />
        <Route exact path='/placeorder' component={PlaceOrderScreen} />
        <Route exact path='/contactus' component={ContactUs} />
        <Route exact path='/privacypolicy' component={PrivacyPolicy} />
        <Route exact path='/missionstatment' component={MissionStatment} />
        <Route exact path='/paymentmethod' component={PaymentMethod} />
        <Route exact path='/courierguide' component={CourierGuide} />
        <Route exact path='/aboutus' component={AboutUs} />
        <Route exact path='/order/:id' component={OrderDetailScreen} />
        <Route exact path='/shipping' component={ShippingScreen} />
        <Route exact path='/profile' component={ProfileScreen} />
        <Route exact path='/register' component={RegisterScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
        <Route path='/admin/orderlist' component={OrderListScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/search/:keyword' component={HomeScreen} exact />
        <Route path='/category/:category' component={HomeScreen} exact />
        <Route path='/page/:pageNumber' component={HomeScreen} exact />
        <Route
          path='/search/:keyword/page/:pageNumber'
          component={HomeScreen}
          exact
        />
        <Route exact path='/' component={HomeScreen} exact ç />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
