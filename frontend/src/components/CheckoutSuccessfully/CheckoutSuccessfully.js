import React, { Fragment } from "react";
import "./CheckoutSuccessfully.css";
import "../../globalStyles.css";
import Input from "../../componentsDesignSystem/Inputs/Input";
import Dropdown from "../../componentsDesignSystem/Inputs/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../../componentsDesignSystem/Buttons/Button";
import CardProduct from "../../componentsDesignSystem/ContentBlock/CardProduct";
import { img_15_1 } from "../../componentsDesignSystem/Images/Image";
import InputList from "../../componentsDesignSystem/Inputs/InputList";
const CheckoutSuccessfully = () => {
  const optionsInput = {
    isIcon: false,
    iconType: <FontAwesomeIcon icon={faSearch} />,
    isLabel: false,
    label: "Label",
    isPlaceholder: true,
    placeholder: "Value",
    fontSize: "body-large",
    size: "L",
    isBorder: true,
    borderRadius: "8px",
    width: "469px",
  };
  const optionsDropdown = {
    isLabel: false,
    label: "State",
    size: "L",
    fontSize: "body-large",
    select: "State",
    options: ["State", "Việt Nam", "Lào", "Campuchia", "Thái Lan"],
  };
  const optionsButton = {
    isContent: true,
    content: " Ship to This Address",
    size: "large",
    fontSize: "button-large",
    style: "solid",
    color: "primaryColor-primary",
    isIconLeft: false,
    iconLeftType: <FontAwesomeIcon icon={faPlus} />,
    isIconRight: false,
    iconRightType: <FontAwesomeIcon icon={faPlus} />,
  };
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
  const ItemsOfUser = [
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

  const optionsInputList = {
    type: "radio",
    isIcon: true,
    iconType: (
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 4.5C0 3.39543 0.895431 2.5 2 2.5H14C15.1046 2.5 16 3.39543 16 4.5V12.5C16 13.6046 15.1046 14.5 14 14.5H2C0.895431 14.5 0 13.6046 0 12.5V4.5ZM1.33333 4.5C1.33333 4.13181 1.63181 3.83333 2 3.83333H14C14.3682 3.83333 14.6667 4.13181 14.6667 4.5V6.5H1.33333V4.5ZM14.6667 7.83333V12.5C14.6667 12.8682 14.3682 13.1667 14 13.1667H2C1.63181 13.1667 1.33333 12.8682 1.33333 12.5V7.83333H14.6667Z"
          fill="#8CB949"
        />
      </svg>
    ),
    isLabel: false,
    label: "Label",
    size: "checkbox-M",
    fontSize: "body-medium",
    lists: ["Credit or Debit Card"],
  };

  return (
    <Fragment>
      <div className="CheckoutSuccessfully">
        <div className="container">
          <div className="CheckoutSuccessfully-wrapper">
            <div className="csw-messThanks">
              <div className="csw-mt-title h2">PetHPTPoly</div>
              <div className="csw-mt-content">
                <div className="cswmtc-title h4">Thanks for your order </div>
                <div className="cswtc-content body-medium">
                  You’ll receive an email when your items are shipped. If you
                  have any questions, call us any time at +84123456789 or simply
                  reply to this email.
                </div>
              </div>
              <div className="cswtc-button">
                <Button
                  props={{ ...optionsButton, content: "VIEW ORDER STATUS" }}
                />
              </div>
            </div>
            <div className="csw-address">
              <div className="cswa-sumary">
                <div className="cswas-title body-bold-large">SUMARY:</div>
                <div className="cswas-content body-small">
                  <div className="cswasc-order">
                    <div>Order #:</div>
                    <div>123456789</div>
                  </div>
                  <div className="cswasc-orderDate">
                    <div>Order Date:</div>
                    <div>Oct 17, 2023</div>
                  </div>
                  <div className="cswasc-orderTotal">
                    <div>Order Total:</div>
                    <div>$302.4</div>
                  </div>
                </div>
              </div>
              <div className="cswa-addressShip">
                <div className="cswaas-title body-bold-large">
                  SHIPPING ADDRESS
                </div>
                <div className="cswaas-content body-small">
                  <div className="cswaasc-name">PuuGoo</div>
                  <div className="cswaasc-street">
                    37088 AK 3-2 Bình Hưng Hòa B
                  </div>
                  <div className="cswaasc-city">Bình Tân, TPHCM</div>
                </div>
              </div>
            </div>
            <div className="cs-items">
              <div className="h3">ITEMS ORDERED</div>
              <div className="cs-item">
                {ItemsOfUser.map((item) => {
                  return (
                    <Fragment>
                      <CardProduct props={{ ...item, isQuantity: false }} />
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CheckoutSuccessfully;
