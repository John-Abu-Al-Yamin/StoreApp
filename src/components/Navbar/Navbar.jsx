import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { FaBarsProgress } from "react-icons/fa6";

const Navbar = () => {
  const [showmenu, setshowmenu] = useState(true);
  const togglemenu = ()=> {
    setshowmenu((showmenu) =>!showmenu)
  }
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
        <span>amazone</span>
      </div>
      <div className="rigth-nav">
      <div onClick={togglemenu} className="bars">< FaBarsProgress/></div>
        <nav style={{display:showmenu? 'inherit' : 'none'}}>
          <a href="#">Collectins</a>
          <a href="#">Brands</a>
          <a href="#">New</a>
          <a href="#">Sales</a>
          <a href="#">ENG</a>
        </nav>
        <input type="text" className="search" placeholder="Search" />
        <span>< CgShoppingBag /></span>
      </div>
    </header>
  );
};

export default Navbar;
