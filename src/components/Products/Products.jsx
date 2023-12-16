import React, { useState } from "react";
import "./Products.css";
import plan from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
const Products = () => {
  const [menudata, setmenudata] = useState(ProductsData);

  const filter = (type) => {
    setmenudata(ProductsData.filter((product)=>product.type === type))
  }
  return (
    <section>
      <div className="container product-container">
        <img src={plan} alt="" />
        <h1>Our Feature Products</h1>
        <div className="all-products">
          <ul className="menu">
            <li onClick={()=>setmenudata(ProductsData)} >All</li>
            <li onClick={()=>filter('skin care')}>Skin Care</li>
            <li onClick={()=>filter('conditioner')}>Conditioners</li>
            <li onClick={()=>filter('foundation')}>Foundations</li>
          </ul>
          <div className="product-list">
            {
              menudata.map((product,i)=>{
                 return(
                  <div className="product">
                    <div className="left-product">
                      <div className="name">
                        <span>{product.name}</span>
                        <span>{product.detail}</span>
                      </div>
                      <span className="shop-price">{product.price}$</span>
                      <div className="shop-btn">Shop Now</div>
                    </div>
                    <img src={product.img} alt="" className="img-p"/>
                  </div>
                 ) 
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
