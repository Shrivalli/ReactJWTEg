import React from 'react';

import NavbarComponent from "./Navbar.component";
import { Outlet } from "react-router";
import FooterComponent from "./Footer.component";

const LayoutComponent = () => {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
