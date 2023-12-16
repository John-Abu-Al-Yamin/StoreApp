import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { PiSignInFill } from "react-icons/pi";
import { PiCommand } from "react-icons/pi";
import { FaSquarespace } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="container footer-container">
        <div className="img-footer">
          <img src={logo} alt="" />
          <span>amazone</span>
        </div>
        <div className="contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <CiLocationOn /> <span>Egypt Assuit</span>
            </li>
            <li>
              < FiPhone  /> <span>012-011-01552</span>
            </li>
            <li>
              < MdOutlineMarkEmailRead  /> <span>Store@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h4>Account</h4>
          <ul>
            <li>
              < PiSignInFill /> <span>Signin</span>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h4>Company</h4>
          <ul>
            <li>
              < PiCommand /> <span>About Us</span>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h4>Resources</h4>
          <ul>
            <li>
              < FaSquarespace  /> <span>Safety Privacy & terms</span>
            </li>
          </ul>
        </div>
      </div>
      <h5>&copy;Coding With John-Abu-Al-Yamin</h5>
    </footer>
  );
};

export default Footer;
