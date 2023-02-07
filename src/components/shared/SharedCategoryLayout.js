import { Outlet } from "react-router";

function SharedCategoryLayout() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
  
  export default SharedCategoryLayout;