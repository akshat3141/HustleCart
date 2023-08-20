import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import "./font.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/men">Men</Link>
      <Link to="/women">Women</Link>
    </div>
  );
}

export default Sidebar;
