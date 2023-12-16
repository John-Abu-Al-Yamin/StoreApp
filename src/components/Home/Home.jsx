import React from "react";
import "./Home.css";
import hero from '../../assets/hero.png';
import { FaBagShopping } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
const Home = () => {
  return (
    <section>
      <div className="container home-container">
        <div className="left-home">
          <div className="info-left-home">
            <div className="left-title">
              <p className="left-title">Skin Protection cream</p>
            </div>
            <div className="left-sec">
              <h3 className="left-sec">tendy colection</h3>
              <p>
                seedily say Has Suitable disposal and boy .Exercise joy man
                childer rejoiced
              </p>
            </div>
          </div>
        </div>
        <div className="midle-home">
          <div className="blue-crcile"></div>
          <img src={hero} alt="" />
          <div className="card">
            <div className="icon">< FaBagShopping /></div>
            <div className="card-icon"><span>best Signin Offers</span>
            <span className="arrow">< IoIosArrowRoundForward /></span>
            </div>
          </div>
        </div>
        <div className="right-home">
        <div className="right-title">
        <h1>1.5m</h1>
          <p>Monthly</p>
        </div>
        <div className="right-title-2">
        <h1>100k</h1>
          <p>Happy Customers</p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
