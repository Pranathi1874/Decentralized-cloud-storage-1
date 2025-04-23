import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/retrieve">Retrieve</Link></li>
      </ul>
      <ul>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Signup">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
