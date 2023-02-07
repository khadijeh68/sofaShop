import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutUs from "../../pages/aboutUs";
import ContactUs from "../../pages/contactUs";
import Home from "../../pages/home";
import Login from "../../pages/login/Login";
import Products from "../../pages/products";
import ProductDetails from "../../pages/products/productDetails";
import { Banner } from "../banner";
import Categories from "../categories";
import Sidbar from "../categories/Sidbar";
import Footer from "../footer";
import FooterSection from "../footerSection";
import Navbar from "../navbar";
import SharedAccountLayout from "../shared/SharedAccountLayout";
import SharedCategoryLayout from "../shared/SharedCategoryLayout";
import SharedLayout from "../shared/SharedLayout";
import SharedProductdLayout from "../shared/SharedProductdLayout";

function AppRouter() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="categories" element={<SharedCategoryLayout />}>
            <Route index element={<Categories />} />
            <Route path=":categoryId" element={<Sidbar />} />
          </Route>

          <Route path="products" element={<SharedProductdLayout />}>
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>

          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="account" element={<SharedAccountLayout />} />
      </Routes>
      <Banner />
      <FooterSection />
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
