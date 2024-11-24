import React, { Fragment } from "react";
import { img6, img7 } from "../../images/Category/Image-Category";
import {
  Product_img1,
  Product_img2,
  Product_img3,
} from "../../images/Product/ProductImage";
import "./HotDealProduct.css";
import "../../globalStyles.css";
import ReactStars from "react-rating-stars-component";
import CardProduct from "../../componentsDesignSystem/ContentBlock/CardProduct";
import { Link } from "react-router-dom";

const HotDealProduct = () => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#F5B634",
    size: window.innerWidth < 600 ? 20 : 24,
    value: 4.5,
    isHalf: true,
  };

  const hotDealProduct = [
    {
      id: 1,
      image: Product_img1,
      name: "Wellness",
      description:
        "CORE RawRev High Protein Grain-Free Ocean Whitefish, Herring & Salmon Meal Recipe Dry Dog Food",
      price: {
        noDiscount: "$80",
        discount: "$76.98",
      },
    },
    {
      id: 2,
      image: Product_img2,
      name: "Bundle",
      description:
        "Purina ONE Natural True Instinct with Real Turkey & Venison Dry Food + SmartBlend True Instinct Tender Cuts in Gravy Variety Pack Canned Dog Food",
      price: {
        noDiscount: "$68.60",
        discount: "$61.74",
      },
    },
    {
      id: 3,
      image: Product_img3,
      name: "Iams",
      description:
        "CORE RawRev High Protein Grain-Free Ocean Whitefish, Herring & Salmon Meal Recipe Dry Dog Food",
      price: {
        noDiscount: "$35.99",
        discount: "$33.98",
      },
    },
  ];

  const optionsCardProduct = {
    type: "vertical",
    width: "290px",
    isDeal: true,
    isImage: true,
    isIconHeart: true,
    isAvailable: true,
    isSponsored: true,
    isSub: false,
    isHead: true,
    isContent: true,
    isAuthor: true,
    isRating: true,
    isPrice: true,
    isPriceNoDiscount: true,
    isPriceDiscount: true,
    isDescription: true,
    isInfomation: true,
    isButtonCart: true,
    isButtonAnother: false,
    isButton_1: true,
    isButton_2: true,
  };
  return (
    <Fragment>
      <div className="hotDealProduct">
        <div className="container">
          <div className="hotDealProduct-Wrapper">
            <div className="h3">Top Hot Deal Product</div>
            <div className="hotDealProduct-Wrapper-content">
              <div className="hdp-banner">
                <div className="hdp-banner-content">
                  <img src={img6} alt="" />
                  <div
                    className="h2"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    BUY 1, GET 1
                  </div>
                  <div
                    className="display-2"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    50% OFF
                  </div>
                  <div
                    className="body-bold-extra-large"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    Select Food For Dog And Cat
                  </div>
                </div>
                <div className="hdp-banner-img">
                  <img src={img7} alt="" />
                </div>
              </div>
              <div className="hotDealProduct-Wrapper-item">
                {hotDealProduct.map((product) => {
                  return (
                    <Fragment>
                      <Link to="/productDetail">
                        <CardProduct
                          props={{
                            ...optionsCardProduct,
                            image: product.image,
                            head: product.name,
                            sub: "",
                            content: product.description,
                            author: product.name,
                            priceNoDiscount: product.price.noDiscount,
                            priceDiscount: product.price.discount,
                            infoDiscount: "Save Extra 35% on First Register",
                            infoFreeship: "FREE 1-3 day delivery on this item",
                          }}
                        />
                      </Link>
                    </Fragment>
                  );
                })}
              </div>
              <div class="hdp-t-icon" style={{ height: "56px" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
                    fill="#111827"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HotDealProduct;
