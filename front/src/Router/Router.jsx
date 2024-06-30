import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import MyAccount from "../Pages/MyAccount/MyAccount";
import ProductList from "../Pages/ProductList/ProductList";
import Basket from "../Pages/Basket/Basket";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Payment from "../Pages/Payment/Payment";
import Dashboard from "../Pages/Dashboard/Dashbord";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/myaccount" element={<MyAccount/>}/>
          <Route path="/productlist" element={<ProductList/>}/>
          <Route path="/basket" element={<Basket/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
