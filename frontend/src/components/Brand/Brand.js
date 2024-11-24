import React, { Fragment } from "react";
import "./Brand.css";
import { Link } from "react-router-dom";
const Brand = (products) => {
  return (
    <Fragment>
      <div className="brands-product">
        <h2>Brands in Stock!</h2>
        <div className="brands-product-wrapper">
          {products.products?.map((product) => {
            return (
              <Link to={product.brand.nameOfBrand}>
                <div>
                  <img src={product.brand.urlImage} alt="" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Brand;
