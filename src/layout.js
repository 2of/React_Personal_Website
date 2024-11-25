import React from "react";

import { useLocation, Outlet } from "react-router-dom";
import CompactNav from "./nav/CompactNav";
import './layout.css'
const Layout = ({ navtype }) => {
    return (
      <div className={`layout ${navtype}`}>
        <div className="LayoutNavArea">
        <CompactNav navtype={navtype} />
        </div>
        <div className="LayoutContentArea">
        <main>
          <Outlet />
        </main>
        <footer>
          <p>&copy; 2024 Your Website. All rights reserved.</p>
        </footer>
        </div>
      </div>
    );
  };
export default Layout;