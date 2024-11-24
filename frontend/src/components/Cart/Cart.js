import React, { Fragment } from "react";
import "./Cart.css";
import "../../globalStyles.css";
import CardProduct from "../../componentsDesignSystem/ContentBlock/CardProduct";
import Button from "../../componentsDesignSystem/Buttons/Button";
import { img_15_1 } from "../../componentsDesignSystem/Images/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Cart = () => {
  const optionsCardProduct = {
    type: "vertical",
    width: "664px",
    isDeal: true,
    isImage: true,
    isIconHeart: true,
    isAvailable: true,
    isSponsored: true,
    isHead: true,
    isSub: false,
    isContent: false,
    isAuthor: true,
    isRating: true,
    isPrice: true,
    isPriceNoDiscount: true,
    isPriceDiscount: true,
    isDescription: true,
    isInfomation: true,
    isButtonCart: false,
    isButtonAnother: false,
    isButton_1: true,
    isButton_2: true,
    isAutoship: true,
    isQuantity: true,
  };
  const optionsButton = {
    isContent: true,
    content: "Button",
    size: "large",
    fontSize: "button-large",
    style: "solid",
    color: "primaryColor-primary1",
    isIconLeft: false,
    iconLeftType: <FontAwesomeIcon icon={faPlus} />,
    isIconRight: false,
    iconRightType: <FontAwesomeIcon icon={faPlus} />,
  };
  const productAddToCart = [
    {
      ...optionsCardProduct,
      type: "horizontal",
      img: img_15_1,
      head: "American Journey Salmon & Sweet Potato Recipe Grain-Free Dry Dog Food",
      author: "American Journey",
      priceDiscount: "$60.48",
      priceNoDiscount: "$59.99",
      infoDiscount: "Save Extra 50% with First Autoship",
      infoFreeship: "FREESHIP For New Member",
    },
    {
      ...optionsCardProduct,
      type: "horizontal",
      img: img_15_1,
      head: "American Journey Salmon & Sweet Potato Recipe Grain-Free Dry Dog Food",
      author: "American Journey",
      priceDiscount: "$60.48",
      priceNoDiscount: "$59.99",
      infoDiscount: "Save Extra 50% with First Autoship",
      infoFreeship: "FREESHIP For New Member",
    },
    {
      ...optionsCardProduct,
      type: "horizontal",
      img: img_15_1,
      head: "American Journey Salmon & Sweet Potato Recipe Grain-Free Dry Dog Food",
      author: "American Journey",
      priceDiscount: "$60.48",
      priceNoDiscount: "$59.99",
      infoDiscount: "Save Extra 50% with First Autoship",
      infoFreeship: "FREESHIP For New Member",
    },
    {
      ...optionsCardProduct,
      type: "horizontal",
      img: img_15_1,
      head: "American Journey Salmon & Sweet Potato Recipe Grain-Free Dry Dog Food",
      author: "American Journey",
      priceDiscount: "$60.48",
      priceNoDiscount: "$59.99",
      infoDiscount: "Save Extra 50% with First Autoship",
      infoFreeship: "FREESHIP For New Member",
    },
    {
      ...optionsCardProduct,
      type: "horizontal",
      img: img_15_1,
      head: "American Journey Salmon & Sweet Potato Recipe Grain-Free Dry Dog Food",
      author: "American Journey",
      priceDiscount: "$60.48",
      priceNoDiscount: "$59.99",
      infoDiscount: "Save Extra 50% with First Autoship",
      infoFreeship: "FREESHIP For New Member",
    },
  ];

  const saveLater = [
    {
      ...optionsCardProduct,
      type: "horizontal",
      img: img_15_1,
      head: "American Journey Salmon & Sweet Potato Recipe Grain-Free Dry Dog Food",
      author: "American Journey",
      priceDiscount: "$60.48",
      priceNoDiscount: "$59.99",
      infoDiscount: "Save Extra 50% with First Autoship",
      infoFreeship: "FREESHIP For New Member",
    },
    {
      ...optionsCardProduct,
      type: "horizontal",
      img: img_15_1,
      head: "American Journey Salmon & Sweet Potato Recipe Grain-Free Dry Dog Food",
      author: "American Journey",
      priceDiscount: "$60.48",
      priceNoDiscount: "$59.99",
      infoDiscount: "Save Extra 50% with First Autoship",
      infoFreeship: "FREESHIP For New Member",
    },
    {
      ...optionsCardProduct,
      type: "horizontal",
      img: img_15_1,
      head: "American Journey Salmon & Sweet Potato Recipe Grain-Free Dry Dog Food",
      author: "American Journey",
      priceDiscount: "$60.48",
      priceNoDiscount: "$59.99",
      infoDiscount: "Save Extra 50% with First Autoship",
      infoFreeship: "FREESHIP For New Member",
    },
  ];
  const inspiredToCart = [
    {
      ...optionsCardProduct,
      type: "horizontal",
      img: img_15_1,
      head: "American Journey Salmon & Sweet Potato Recipe Grain-Free Dry Dog Food",
      author: "American Journey",
      priceDiscount: "$60.48",
      priceNoDiscount: "$59.99",
      infoDiscount: "Save Extra 50% with First Autoship",
      infoFreeship: "FREESHIP For New Member",
    },
    {
      ...optionsCardProduct,
      type: "horizontal",
      img: img_15_1,
      head: "American Journey Salmon & Sweet Potato Recipe Grain-Free Dry Dog Food",
      author: "American Journey",
      priceDiscount: "$60.48",
      priceNoDiscount: "$59.99",
      infoDiscount: "Save Extra 50% with First Autoship",
      infoFreeship: "FREESHIP For New Member",
    },
    {
      ...optionsCardProduct,
      type: "horizontal",
      img: img_15_1,
      head: "American Journey Salmon & Sweet Potato Recipe Grain-Free Dry Dog Food",
      author: "American Journey",
      priceDiscount: "$60.48",
      priceNoDiscount: "$59.99",
      infoDiscount: "Save Extra 50% with First Autoship",
      infoFreeship: "FREESHIP For New Member",
    },
    {
      ...optionsCardProduct,
      type: "horizontal",
      img: img_15_1,
      head: "American Journey Salmon & Sweet Potato Recipe Grain-Free Dry Dog Food",
      author: "American Journey",
      priceDiscount: "$60.48",
      priceNoDiscount: "$59.99",
      infoDiscount: "Save Extra 50% with First Autoship",
      infoFreeship: "FREESHIP For New Member",
    },
  ];
  return (
    <Fragment>
      <div className="cart">
        <div className="container">
          <div className="cart-wrapper">
            <div className="cart-w-left">
              <div className="cwl-shoppingCart">
                <div className="h3">Shopping Cart</div>
                {productAddToCart.map((product) => {
                  return (
                    <Fragment>
                      <CardProduct props={{ ...product }} />
                    </Fragment>
                  );
                })}
              </div>

              <div className="cwl-saveLater">
                <div className="cwl-sl-title">
                  <div className="h3">Saved for Later</div>
                  <div className="body-more-extra-small">3 items</div>
                </div>
                <div className="cwl-sl-products">
                  {saveLater.map((product) => {
                    return (
                      <Fragment>
                        <CardProduct
                          props={{
                            ...product,
                            isQuantity: false,
                            isAutoship: false,
                            type: "vertical",
                            width: "280px",
                            isButtonCart: true,
                          }}
                        />
                      </Fragment>
                    );
                  })}
                </div>

                <div className="cwl-sl-buttonCircle">
                  <Button
                    props={{
                      ...optionsButton,
                      isContent: false,
                      isIconLeft: true,
                      iconLeftType: <FontAwesomeIcon icon={faChevronRight} />,
                      className: "cwl-sl-icon",
                      color: "primaryColor-primary",
                    }}
                  />
                </div>
              </div>

              <div className="cwl-inspired">
                <div className="h3">Inspired By Your Cart</div>
                <div className="cwl-i-products">
                  {inspiredToCart.map((product) => {
                    return (
                      <Fragment>
                        <CardProduct
                          props={{
                            ...product,
                            isQuantity: false,
                            isAutoship: false,
                            type: "vertical",
                            width: "204px",
                            isButtonCart: true,
                          }}
                        />
                      </Fragment>
                    );
                  })}
                </div>
                <div className="cwl-i-buttonCircle">
                  <Button
                    props={{
                      ...optionsButton,
                      isContent: false,
                      isIconLeft: true,
                      iconLeftType: <FontAwesomeIcon icon={faChevronRight} />,
                      className: "cwl-sl-icon",
                      color: "primaryColor-primary",
                      isIconHeart: false,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="cart-w-right">
              <div className="cart-w-r-content">
                <div className="subtotal h6">
                  <div>Subtotal</div>
                  <div>$302.4</div>
                </div>

                <div className="body-more-extra-small">5 item</div>

                <div className="cwr-infoFreeship">
                  <div className="body-extra-small">
                    $30 until FREE shipping
                  </div>
                  <div className="cwr-ifs-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.666667 1.3335C0.298477 1.3335 0 1.63197 0 2.00016V10.6668C0 11.035 0.298477 11.3335 0.666667 11.3335H1.55788C1.4139 11.6366 1.33333 11.9756 1.33333 12.3335C1.33333 13.6222 2.378 14.6668 3.66667 14.6668C4.95533 14.6668 6 13.6222 6 12.3335C6 11.9756 5.91944 11.6366 5.77546 11.3335H10.2245C10.0806 11.6366 10 11.9756 10 12.3335C10 13.6222 11.0447 14.6668 12.3333 14.6668C13.622 14.6668 14.6667 13.6222 14.6667 12.3335C14.6667 11.9756 14.5861 11.6366 14.4421 11.3335H15.3333C15.7015 11.3335 16 11.035 16 10.6668V7.3335C16 7.15668 15.9298 6.98712 15.8047 6.86209L13.8047 4.86209C13.6797 4.73707 13.5101 4.66683 13.3333 4.66683H11.3333V2.00016C11.3333 1.63197 11.0349 1.3335 10.6667 1.3335H0.666667ZM14.6667 10.0002V7.60964L13.0572 6.00016H11.3333V10.0002H14.6667ZM12.3333 11.3335C11.781 11.3335 11.3333 11.7812 11.3333 12.3335C11.3333 12.8858 11.781 13.3335 12.3333 13.3335C12.8856 13.3335 13.3333 12.8858 13.3333 12.3335C13.3333 11.7812 12.8856 11.3335 12.3333 11.3335ZM2.66667 12.3335C2.66667 11.7812 3.11438 11.3335 3.66667 11.3335C4.21895 11.3335 4.66667 11.7812 4.66667 12.3335C4.66667 12.8858 4.21895 13.3335 3.66667 13.3335C3.11438 13.3335 2.66667 12.8858 2.66667 12.3335ZM10 10.0002H1.33333V2.66683H10V10.0002Z"
                        fill="#111827"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="cwr-button">
                <Link to="/checkout">
                  <Button
                    props={{
                      ...optionsButton,
                      content: "Proceed to Checkout",
                      color: "primaryColor-primary",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
