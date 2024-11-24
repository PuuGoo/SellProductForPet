import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./components/Product/ProductDetail";
import Cart from "./components/Cart/Cart";
import MessageSuccess from "./components/Header/MessageSuccess";
import Checkout from "./components/Checkout/Checkout";
import CheckoutSuccessfully from "./components/CheckoutSuccessfully/CheckoutSuccessfully";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <MessageSuccess />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/productDetail" Component={ProductDetail} />
          <Route exact path="/cart" Component={Cart} />
          <Route exact path="/checkout" Component={Checkout} />
          <Route
            exact
            path="/checkoutSuccessfully"
            Component={CheckoutSuccessfully}
          />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
