import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "../pages/aboutUs";
import ContactUs from "../pages/contactUs";
import Products from "../pages/products";
import SharedLayout from "../shared";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="products" element={<Products />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
