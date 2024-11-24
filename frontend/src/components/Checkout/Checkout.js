import React, { Fragment } from "react";
import "./Checkout.css";
import "../../globalStyles.css";
import Input from "../../componentsDesignSystem/Inputs/Input";
import Dropdown from "../../componentsDesignSystem/Inputs/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../../componentsDesignSystem/Buttons/Button";
import CardProduct from "../../componentsDesignSystem/ContentBlock/CardProduct";
import { img_15_1 } from "../../componentsDesignSystem/Images/Image";
import InputList from "../../componentsDesignSystem/Inputs/InputList";
import { Link } from "react-router-dom";
const Checkout = () => {
  const optionsDropdown = {
    isLabel: false,
    label: "State",
    size: "L",
    fontSize: "body-large",
    select: "State",
    options: ["State", "Việt Nam", "Lào", "Campuchia", "Thái Lan"],
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
      <div className="checkout">
        <div className="container">
          <div className="checkout-wrapper">
            <div className="checkout-left">
              <div className="cl-address">
                <div className="cla-title h3">Your Shipping Address</div>
                <div className="cla-form">
                  <Input
                    props={{
                      placeholder: "Full Name",
                    }}
                  />
                  <Input
                    props={{
                      placeholder: "Street Address",
                    }}
                  />
                  <Input
                    props={{
                      placeholder: "Apt / Suite / Other",
                    }}
                  />
                  <div className="cla-form-another">
                    <Input
                      props={{
                        placeholder: "City",
                        width: "146px",
                      }}
                    />
                    <Dropdown props={{ ...optionsDropdown, width: "188px" }} />
                    <Input
                      props={{
                        placeholder: "Zip Code",
                        width: "119px",
                      }}
                    />
                  </div>
                  <Input
                    props={{
                      placeholder: "Phone Number",
                    }}
                  />
                </div>
                <div className="cla-button">
                  <Button
                    props={{
                      content: "Ship to This Address",
                      color: "primaryColor-primary",
                      width: "250px",
                    }}
                  />
                </div>
              </div>

              <div className="cl-items">
                <div className="h3">Your Items</div>
                <div className="cl-item">
                  {ItemsOfUser.map((item) => {
                    return (
                      <Fragment>
                        <CardProduct props={{ ...item, isQuantity: false }} />
                      </Fragment>
                    );
                  })}
                </div>
              </div>

              <div className="cl-giftcard">
                <div className="h3">Gift Card</div>
                <Button
                  props={{
                    isIconLeft: true,
                    content: "Add a Gift Card",
                    style: "outline",
                    color:"primaryColor-gray-900"
                  }}
                />
              </div>

              <div className="cl-infoPayment">
                <div className="h3">Your Payment Information</div>
                <div className="clip-options">
                  <InputList props={{ ...optionsInputList }} />
                  <InputList
                    props={{
                      ...optionsInputList,
                      lists: ["Pay"],
                      iconType: (
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.8582 7.05831C15.9534 7.59525 16.0008 8.13928 16 8.68426C16 11.1182 15.1125 13.1761 13.568 14.5691H13.57C12.2193 15.792 10.3627 16.5 8.16118 16.5C5.9967 16.5 3.92087 15.6572 2.39035 14.1569C0.859836 12.6567 0 10.6219 0 8.50026C0 6.3786 0.859836 4.34384 2.39035 2.8436C3.92087 1.34335 5.9967 0.500528 8.16118 0.500528C10.1871 0.47727 12.1437 1.22334 13.621 2.58246L11.291 4.86638C10.4487 4.07938 9.32465 3.64842 8.16118 3.66642C6.03213 3.66642 4.22341 5.07438 3.57868 6.97031C3.23683 7.96379 3.23683 9.03974 3.57868 10.0332H3.58174C4.22953 11.9262 6.03519 13.3341 8.16424 13.3341C9.26396 13.3341 10.2086 13.0581 10.9411 12.5701H10.938C11.3633 12.2939 11.7271 11.9362 12.0075 11.5183C12.2879 11.1005 12.4789 10.6314 12.5692 10.1392H8.16118V7.05931L15.8582 7.05831Z"
                            fill="#DB5359"
                          />
                        </svg>
                      ),
                    }}
                  />
                  <InputList
                    props={{
                      ...optionsInputList,
                      lists: ["PayPal"],
                      iconType: (
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_256_20468)">
                            <path
                              d="M14.06 4.213C14.18 3.142 13.967 2.381 13.358 1.687C12.628 0.856 11.312 0.5 9.626 0.5H4.734C4.56747 0.500072 4.40642 0.559514 4.27977 0.667651C4.15312 0.775788 4.06917 0.925535 4.043 1.09L2.005 14.009C1.99546 14.069 1.99904 14.1304 2.01551 14.1888C2.03198 14.2473 2.06094 14.3015 2.10039 14.3477C2.13984 14.3939 2.18885 14.431 2.24403 14.4565C2.29921 14.4819 2.35925 14.495 2.42 14.495H5.176L4.974 15.775C4.95985 15.8646 4.96527 15.9562 4.98992 16.0436C5.01456 16.1309 5.05783 16.2118 5.11676 16.2808C5.17568 16.3498 5.24885 16.4052 5.33124 16.4432C5.41363 16.4813 5.50327 16.501 5.594 16.501H8.14C8.569 16.501 8.933 16.191 9.002 15.77L9.027 15.64L9.507 12.597L9.537 12.433L9.538 12.426C9.55092 12.3431 9.59312 12.2675 9.65697 12.213C9.72081 12.1585 9.80207 12.1287 9.886 12.129H10.266C11.532 12.129 12.691 11.873 13.611 11.219C13.99 10.949 14.323 10.616 14.604 10.214C15.0707 9.56433 15.3726 8.8111 15.484 8.019C15.726 6.773 15.614 5.663 14.914 4.865C14.6982 4.62421 14.4408 4.42434 14.154 4.275L14.06 4.213ZM6.543 9.32C6.64209 9.26823 6.75221 9.24113 6.864 9.241H8.3C11.12 9.241 13.327 8.097 13.972 4.785L13.975 4.769C14.192 4.893 14.375 5.039 14.523 5.207C15.069 5.83 15.202 6.742 14.973 7.917C14.701 9.314 14.107 10.224 13.31 10.791C12.508 11.361 11.468 11.606 10.267 11.606H9.887C9.67937 11.6057 9.47843 11.6795 9.32027 11.814C9.1621 11.9485 9.05706 12.135 9.024 12.34L8.994 12.504L8.514 15.547L8.49 15.677L8.489 15.681C8.47568 15.7637 8.43333 15.8389 8.36955 15.8931C8.30577 15.9474 8.22474 15.9771 8.141 15.977H5.595C5.57961 15.9771 5.5644 15.9738 5.55041 15.9673C5.53643 15.9609 5.524 15.9515 5.51401 15.9398C5.50402 15.9281 5.4967 15.9144 5.49255 15.8996C5.48841 15.8847 5.48754 15.8692 5.49 15.854L5.698 14.534L6.543 9.32Z"
                              fill="#518DD9"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_256_20468">
                              <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      ),
                    }}
                  />
                  <InputList
                    props={{
                      ...optionsInputList,
                      lists: ["Momo"],
                      iconType: (
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_256_20480)">
                            <path
                              d="M11.9082 7.8701C13.5082 7.8701 14.8197 6.58486 14.8197 4.98486C14.8197 3.38486 13.5082 2.09961 11.9082 2.09961C10.3082 2.09961 8.99673 3.38486 8.99673 4.98486C8.99673 6.58486 10.3082 7.8701 11.9082 7.8701ZM11.9082 3.72584C12.5902 3.72584 13.141 4.27666 13.141 4.95863C13.141 5.64059 12.5902 6.19141 11.9082 6.19141C11.2262 6.19141 10.6754 5.64059 10.6754 4.95863C10.6754 4.27666 11.2262 3.72584 11.9082 3.72584Z"
                              fill="#A50064"
                            />
                            <path
                              d="M11.9082 9.12891C10.3082 9.12891 8.99673 10.4142 8.99673 12.0142C8.99673 13.6142 10.3082 14.8994 11.9082 14.8994C13.5082 14.8994 14.8197 13.6142 14.8197 12.0142C14.8197 10.4142 13.5082 9.12891 11.9082 9.12891ZM11.9082 13.2469C11.2262 13.2469 10.6754 12.6961 10.6754 12.0142C10.6754 11.3322 11.2262 10.7814 11.9082 10.7814C12.5902 10.7814 13.141 11.3322 13.141 12.0142C13.141 12.6961 12.5902 13.2469 11.9082 13.2469Z"
                              fill="#A50064"
                            />
                            <path
                              d="M5.98033 9.12891C5.48197 9.12891 5.03607 9.28628 4.66885 9.57481C4.30164 9.31251 3.85574 9.12891 3.35738 9.12891C2.15082 9.12891 1.18033 10.0994 1.18033 11.306V14.9256H2.85902V11.2797C2.85902 11.0174 3.06885 10.7814 3.35738 10.7814C3.6459 10.7814 3.85574 10.9912 3.85574 11.2797V14.9256H5.5082V11.2797C5.5082 11.0174 5.71803 10.7814 6.00656 10.7814C6.26885 10.7814 6.50492 10.9912 6.50492 11.2797V14.9256H8.15738V11.2797C8.15738 10.0994 7.18689 9.12891 5.98033 9.12891Z"
                              fill="#A50064"
                            />
                            <path
                              d="M5.98033 2.07324C5.48197 2.07324 5.03607 2.23062 4.66885 2.51914C4.30164 2.25685 3.85574 2.07324 3.35738 2.07324C2.15082 2.07324 1.18033 3.04373 1.18033 4.25029V7.86996H2.85902V4.22406C2.85902 3.96177 3.06885 3.7257 3.35738 3.7257C3.6459 3.7257 3.85574 3.93554 3.85574 4.22406V7.86996H5.5082V4.22406C5.5082 3.96177 5.71803 3.7257 6.00656 3.7257C6.26885 3.7257 6.50492 3.93554 6.50492 4.22406V7.86996H8.18361V4.25029C8.15738 3.04373 7.18689 2.07324 5.98033 2.07324Z"
                              fill="#A50064"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_256_20480">
                              <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      ),
                    }}
                  />
                  <InputList
                    props={{
                      ...optionsInputList,
                      lists: ["Cash"],
                      iconType: (
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_256_20512)">
                            <path
                              d="M5.4857 5.59921C5.25713 5.59921 5.02856 5.52649 5.02856 5.45376C4.79999 5.23558 4.91427 5.0174 5.14284 4.94467C6.05713 4.58103 6.51427 3.7083 6.05713 2.83558C5.82856 2.32649 5.37142 1.96285 4.6857 1.67194C4.11427 1.45376 3.54284 1.38103 2.97142 1.45376C2.51427 1.52649 2.05713 1.81739 1.82856 2.25376C1.59999 2.69012 1.59999 3.19921 1.82856 3.7083C1.82856 3.85376 1.71427 4.07194 1.37142 4.14467C1.02856 4.2174 0.799987 4.07194 0.685701 3.92649C0.342844 3.27194 0.342844 2.54467 0.685701 1.96285C1.14284 1.38103 1.82856 0.944668 2.74284 0.726486C3.65713 0.581031 4.57142 0.653759 5.4857 1.0174C6.2857 1.38103 6.97142 1.89012 7.31427 2.54467C7.8857 3.7083 7.31427 5.0174 5.82856 5.52649C5.71427 5.59921 5.59999 5.59921 5.4857 5.59921ZM8.57142 11.0538L8.91427 11.781C9.37142 11.6356 9.4857 11.4901 9.37142 11.2719C9.25713 11.1265 9.14284 11.0538 8.57142 11.0538ZM6.62856 9.67194C6.74284 9.8174 6.85713 9.89012 7.31427 9.96285L6.97142 9.23558C6.62856 9.3083 6.51427 9.45376 6.62856 9.67194Z"
                              fill="#165A4A"
                            />
                            <path
                              d="M15.6571 13.6722L11.6571 5.59944C11.5429 5.45399 11.3143 5.30853 11.0857 5.23581L7.77143 4.50853C7.42858 5.09035 6.85715 5.59944 6.05715 5.89035C5.82858 5.96308 5.71429 5.96308 5.48572 5.96308C5.02857 5.96308 4.68572 5.81762 4.45715 5.59944C4.11429 5.23581 4.34286 4.79944 4.91429 4.58126C5.25715 4.4358 5.48572 4.21762 5.6 3.92671H5.25715C4.8 3.78126 4.34286 3.92671 4 4.1449L0.457147 7.27217C0.228575 7.41762 0.228575 7.63581 0.342861 7.78126L4.34286 15.854C4.45715 16.1449 5.02857 16.3631 5.48572 16.2176L14.9714 14.3267C15.5429 14.3267 15.7714 13.9631 15.6571 13.6722ZM10.9714 11.9994C10.6286 12.3631 10.1714 12.5813 9.37143 12.7994L9.6 13.3813L8.91429 13.5267L8.68572 12.9449C7.42857 13.1631 6.4 12.9449 5.6 12.4358L6.85715 11.6358C7.2 11.854 7.65715 11.9994 8.22857 11.9267L7.77143 11.054C6.17143 11.054 5.14286 10.8358 4.8 10.1085C4.57143 9.7449 4.68572 9.38126 4.91429 9.01762C5.25715 8.65399 5.71429 8.43581 6.28572 8.21762L6.05715 7.70853L6.74286 7.56308L6.97143 8.07217C8.11429 7.92671 9.14286 8.1449 9.82857 8.58126L8.57143 9.38126C8.22857 9.16308 7.88572 9.01762 7.42858 9.01762L8 9.96308C8.91429 9.96308 9.71429 10.0358 10.1714 10.1813C10.6286 10.3267 10.9714 10.5449 11.2 10.9085C11.4286 11.2722 11.3143 11.6358 10.9714 11.9994Z"
                              fill="#165A4A"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_256_20512">
                              <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      ),
                    }}
                  />
                </div>

                <div className="clip-button-checkout">
                  <div className="body-bold-medium">Order Total: $125</div>
                  <Link to="/checkoutSuccessfully">
                    <Button props={{ content: "Buy with G Pay" , color:"primaryColor-primary"}} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="checkout-right">
              <div className="cr-title body-bold-medium">Order Summary</div>
              <div className="cr-content body-extra-small">
                <div className="cr-c-quantity">
                  <div>Items (5):</div>
                  <div>$302.4</div>
                </div>
                <div className="cr-c-stateFreeship">
                  <div>Flat-Rate Shipping:</div>
                  <div>FREE</div>
                </div>
                <div className="cr-c-beforeTax">
                  <div>Total Before Tax:</div>
                  <div>$302.4</div>
                </div>
                <div className="cr-c-estimated">
                  <div>Estimated Tax:</div>
                  <div>$0</div>
                </div>
              </div>
              <div className="cr-total body-bold-small">
                <div>Order Total:</div>
                <div>$302.4</div>
              </div>
              <div className="cr-btn-promoteCode">
                <div className="cr-btn-pc-input">
                  <Input
                    props={{
                      width: "152px",
                      placeholder: "Promote code",
                    }}
                  />
                </div>
                <div className="cr-btn-pc-button">
                  <Button
                    props={{
                      width: "80px",
                      content: "Apply",
                      size: "medium",
                      style: "outline",
                      color:"primaryColor-gray-900"
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="clip-button-checkout-mobile"
              style={{ display: "none" }}
            >
              <div className="body-bold-medium">Order Total: $125</div>
              <Button props={{ content: "Buy with G Pay" }} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Checkout;
