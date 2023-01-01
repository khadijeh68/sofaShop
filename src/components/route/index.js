import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "../../pages/aboutUs";
import ContactUs from "../../pages/contactUs";
import Home from "../../pages/home";
import Products from "../../pages/products";
import Categories from "../categories";
import Sidbar from "../categories/Sidbar";
import SharedLayout from "../shared";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="products" element={<Products />} /> */}
          
          <Route path="categories" element={<Categories />}>
            <Route path=":categoryId" element={<Sidbar />} />
          </Route>
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contactUs" element={<ContactUs />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
