
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

const SharedLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  );
};
export default SharedLayout;
