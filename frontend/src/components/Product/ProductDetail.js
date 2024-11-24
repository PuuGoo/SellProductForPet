import React, { Fragment } from "react";
import "./ProductDetail.css";
import "../../globalStyles.css";
import Button from "../../componentsDesignSystem/Buttons/Button";
import Dropdown from "../../componentsDesignSystem/Inputs/Dropdown";
import {
  img_15_1,
  img_15_2,
  img_15_3,
  img_15_4,
  img_15_5,
  img_15_6,
} from "../../componentsDesignSystem/Images/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronLeft,
  faChevronRight,
  faCircle,
  faPlay,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const imageSmall = [img_15_1, img_15_2, img_15_3, img_15_4, img_15_5, img_15_6];
const ProductDetail = () => {
  const optionsButton = {
    isContent: false,
    content: "Button",
    size: "large",
    fontSize: "button-large",
    style: "solid",
    color: "primaryColor-primary1",
    isIconLeft: true,
    iconLeftType: <FontAwesomeIcon icon={faChevronLeft} />,
    isIconRight: false,
    iconRightType: <FontAwesomeIcon icon={faPlus} />,
  };
  const optionsDropdown = {
    isLabel: false,
    label: "State",
    size: "L",
    fontSize: "body-large",
    select: "State",
    options: ["1", "2", "3", "4", "5", "6"],
  };
  const flavor = [
    "Beef & Sweet Potato",
    "Chicken & Sweet Potato",
    "Duck & Sweet Potato",
    "Lamb & Sweet Potato",
    "Lamb, Venison & Beef",
    "Salmon & Sweet Potato",
    "Salmon, Whitefish & Trout",
  ];
  const size = [
    {
      name: "4-lb bag",
      unit: "$4.40/lb",
    },
    {
      name: "4-lb bag, bundle of 2",
      unit: "$4.17/lb",
    },
    {
      name: "12-lb bag",
      unit: "$3.44/lb",
    },
    {
      name: "24-lb bag",
      unit: "$2.52/lb",
    },
    {
      name: "24-lb bag, bundle of 2",
      unit: "$2.39/lb",
    },
  ];
  const mobilePDHandle = () => {
    if (mobilePD.matches) {
      document.querySelector(".pdwi-slider svg").style.color =
        "var(--secondaryColor-blue-900)";
    }
  };
  const mobilePD = window.matchMedia("(max-width: 576px");
  mobilePD.addEventListener("change", mobilePDHandle);
  return (
    <Fragment>
      <div className="productDetail">
        <div className="container">
          <div className="productDetail-wrapper">
            <div className="pdw-com-1">
              <div className="pdw-image">
                <div className="pdwi-big">
                  <img src={img_15_1} alt="" />
                  <div className="pdwi-big-button-left">
                    <Button
                      props={{
                        ...optionsButton,
                        className: "pdwi-button-cart",
                      }}
                    />
                  </div>
                  <div className="pdwi-big-button-right">
                    <Button
                      props={{
                        ...optionsButton,
                        iconLeftType: <FontAwesomeIcon icon={faChevronRight} />,
                        className: "pdwi-button-cart",
                      }}
                    />
                  </div>
                </div>
                <div className="pdwi-smalls">
                  <div className="pdwi-small">
                    <div className="pdwi-small-images">
                      {imageSmall.map((img) => {
                        return (
                          <Fragment>
                            <img src={img} alt="" />
                          </Fragment>
                        );
                      })}
                    </div>
                    <div className="pdwi-s-i-button">
                      <Button
                        props={{
                          ...optionsButton,
                          iconLeftType: (
                            <FontAwesomeIcon icon={faChevronRight} />
                          ),
                          className: "pdwi-button-cart",
                          size: "small",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pdw-contents">
                <div className="pdw-c--sponsored body-extra-small">
                  sponsored
                </div>
                <div className="pdw-content">
                  <div className="h4">
                    American Journey Salmon & Sweet Potato Recipe Grain-Free Dry
                    Dog Food
                  </div>
                  <div className="pdw-author body-small">
                    By
                    <div
                      className="bold-large"
                      style={{ color: "var(--secondaryColor-blue-900)" }}
                    >
                      American Journey
                    </div>
                  </div>
                  <div className="pdw-rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div className="price">
                    <div
                      className="body-bold-extra-large price-discount"
                      style={{ color: "var(--secondaryColor-red-900)" }}
                    >
                      $60.48
                    </div>
                    <div
                      className="body-strikeThrough-medium price-noDiscount"
                      style={{ color: "var(--primaryColor-gray-500)" }}
                    >
                      $59.99
                    </div>
                  </div>

                  <div className="infoDiscount body-extra-small">
                    Save Extra 50% with First Autoship
                  </div>
                </div>
                <div className="pdw-infoFreeship body-extra-small">
                  FREESHIP For New Member
                </div>
                <div className="pdw-flavor body-bold-small">
                  <div className="body-medium">Flavor</div>
                  <div className="pdw-flavor-items">
                    {flavor.map((flavor) => {
                      return (
                        <Fragment>
                          <div className="pdw-flavor-item">{flavor}</div>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="pdw-size body-bold-small">
                  <div className="body-medium">Size</div>
                  <div className="pdw-flavor-items">
                    {size.map((size) => {
                      return (
                        <Fragment>
                          <div className="pdw-flavor-item">
                            <div>{size.name}</div>
                            <div
                              style={{ color: "var(--primaryColor-gray-500)" }}
                            >
                              {size.unit}
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="pdw-infoCarts">
              <div className="pdw-infoAddCart">
                <div className="pdw-ica-component-1">
                  <div className="pdw-iac-quantity">
                    <div className="pdw-q-content body-medium">Quantity</div>
                    <Dropdown
                      props={{ ...optionsDropdown, className: "pdw-dropdown" }}
                    />
                  </div>
                  <div className="inStock">
                    <div
                      className="stock body-extra-small"
                      style={{ color: "var(--primaryColor-primary1-900)" }}
                    >
                      In Stock
                    </div>
                    <div className="free-ship body-bold-medium">
                      FREE 1-3 day delivery
                    </div>
                  </div>
                </div>
                <div className="pdw-ica-component-2">
                  <Link to="/cart">
                    <Button
                      props={{
                        ...optionsButton,
                        isContent: true,
                        content: "Add to cart",
                        iconLeftType: <FontAwesomeIcon icon={faPlus} />,
                        className: "pdw-ica-btnAddCart",
                        size: "small",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="productDetail-mobile">
        <div className="container">
          <div className="productDetail-wrapper">
            <div className="pdw-com-1">
              <div className="pdw-contents">
                <div className="pdw-c--sponsored body-extra-small">
                  sponsored
                </div>
                <div className="pdw-content">
                  <div className="h4">
                    American Journey Salmon & Sweet Potato Recipe Grain-Free Dry
                    Dog Food
                  </div>
                  <div className="pdw-author body-small">
                    By
                    <div
                      className="bold-large"
                      style={{ color: "var(--secondaryColor-blue-900)" }}
                    >
                      American Journey
                    </div>
                  </div>
                  <div className="pdw-rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div className="pdw-image">
                    <div className="pdwi-big">
                      <img src={img_15_1} alt="" />
                      <div className="pdwi-big-button-left">
                        <Button
                          props={{
                            ...optionsButton,
                            className: "pdwi-button-cart",
                          }}
                        />
                      </div>
                      <div className="pdwi-big-button-right">
                        <Button
                          props={{
                            ...optionsButton,
                            iconLeftType: (
                              <FontAwesomeIcon icon={faChevronRight} />
                            ),
                            className: "pdwi-button-cart",
                          }}
                        />
                      </div>
                      <div className="pdwi-slider">
                        <FontAwesomeIcon icon={faCircle} />
                        <FontAwesomeIcon icon={faCircle} />
                        <FontAwesomeIcon icon={faCircle} />
                        <FontAwesomeIcon icon={faCircle} />
                        <FontAwesomeIcon icon={faCircle} />
                        <FontAwesomeIcon icon={faPlay} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pdw-infoFreeship body-extra-small">
                  <div className="price">
                    <div
                      className="body-bold-extra-large price-discount"
                      style={{ color: "var(--secondaryColor-red-900)" }}
                    >
                      $60.48
                    </div>
                    <div
                      className="body-strikeThrough-medium price-noDiscount"
                      style={{ color: "var(--primaryColor-gray-500)" }}
                    >
                      $59.99
                    </div>
                  </div>
                  <div className="infoDiscount body-extra-small">
                    Save Extra 50% with First Autoship
                  </div>
                  FREESHIP For New Member
                </div>
                <div className="pdw-flavor body-bold-small">
                  <div className="body-medium">Flavor</div>
                  <div className="pdw-flavor-items">
                    {flavor.map((flavor) => {
                      return (
                        <Fragment>
                          <div className="pdw-flavor-item">{flavor}</div>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="pdw-size body-bold-small">
                  <div className="body-medium">Size</div>
                  <div className="pdw-flavor-items">
                    {size.map((size) => {
                      return (
                        <Fragment>
                          <div className="pdw-flavor-item">
                            <div>{size.name}</div>
                            <div
                              style={{ color: "var(--primaryColor-gray-500)" }}
                            >
                              {size.unit}
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="pdw-infoCarts">
              <div className="pdw-infoAddCart">
                <div className="pdw-ica-component-1">
                  <div className="pdw-iac-quantity">
                    <div className="pdw-q-content body-medium">Quantity</div>
                    <Dropdown
                      props={{ ...optionsDropdown, className: "pdw-dropdown" }}
                    />
                  </div>
                  <div className="inStock">
                    <div
                      className="stock body-extra-small"
                      style={{ color: "var(--primaryColor-primary1-900)" }}
                    >
                      In Stock
                    </div>
                    <div className="free-ship body-bold-medium">
                      FREE 1-3 day delivery
                    </div>
                  </div>
                </div>
                <div className="pdw-ica-component-2">
                  <Button
                    props={{
                      ...optionsButton,
                      isContent: true,
                      content: "Add to cart",
                      iconLeftType: <FontAwesomeIcon icon={faPlus} />,
                      className: "pdw-ica-btnAddCart",
                      size: "small",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
