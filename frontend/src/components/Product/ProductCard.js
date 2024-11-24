import React, { Fragment } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: 4.5,
    isHalf: true,
  };

  // console.log(product.images[0].sizeBig.url[0]);
  return (
    <Fragment>
      <Link to="/">
        <div className="fav-product">
          <div className="fav-image">
            <img src={product.images[0].sizeBig.url[0]} alt="" />
          </div>
          <div className="fav-name">
            <span>{product.name + " "}</span>
            {product.description}
          </div>
          <div className="fav-author">
            By <span>{product.name}</span>
          </div>
          <div className="fav-rating">
            <ReactStars {...options} />
          </div>
          <div className="fav-price">$ {product.price}</div>
          <div className="fav-program-discount">
            Spend $100, Get $30 eGift Card with code: FALL
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default ProductCard;
