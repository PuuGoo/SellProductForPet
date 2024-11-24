import React, { Fragment } from "react";
import "../../globalStyles.css";
import { img_15_1 } from "../../componentsDesignSystem/Images/Image";
import "./CardProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPlus,
  faRepeat,
  faStar,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-rating-stars-component";
import Button from "../Buttons/Button";
import InputList from "../../componentsDesignSystem/Inputs/InputList";
import Dropdown from "../../componentsDesignSystem/Inputs/Dropdown";
const CardProduct = ({ props }) => {
  const {
    isDeal,
    isImage,
    isIconHeart,
    isAvailable,
    isSponsored,
    isSub,
    isHead,
    isContent,
    isAuthor,
    isRating,
    isPrice,
    isPriceNoDiscount,
    isPriceDiscount,
    isDescription,
    isInfomation,
    isButtonCart,
    isButtonAnother,
    isButton_1,
    isButton_2,
    isAutoship,
    isQuantity,
    isTabletQuantity,
    type,
    width,
    image,
    head,
    sub,
    content,
    author,
    priceNoDiscount,
    priceDiscount,
    infoDiscount,
    infoFreeship,
  } = props;

  const optionsButtonCart = {
    isContent: true,
    content: "Add to cart",
    size: "medium",
    fontSize: "button-large",
    style: "solid",
    color: "primaryColor-primary",
    isIconLeft: true,
    iconLeftType: <FontAwesomeIcon icon={faPlus} />,
    isIconRight: false,
    iconRightType: <FontAwesomeIcon icon={faPlus} />,
  };

  const optionsInputList = {
    type: "radio",
    isIcon: true,
    iconType: <FontAwesomeIcon icon={faRepeat} />,
    isLabel: false,
    label: "Label",
    size: "checkbox-M",
    fontSize: "body-medium",
    lists: ["Autoship"],
  };

  const optionsDropdown = {
    isLabel: false,
    label: "State",
    size: "L",
    fontSize: "body-large",
    select: "State",
    options: ["1", "2", "3", "4", "5", "6"],
  };
  return (
    <Fragment>
      <div className="card">
        <div className="card-wrapper">
          {type === "vertical" ? (
            <div className="card-vertical">
              <div className="card-image" style={{ width: width }}>
                {isDeal && <div className="h5">Deal</div>}
                {isImage && <img src={img_15_1} alt="" />}
                {isIconHeart && (
                  <div className="icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                )}
              </div>

              <div className="card-content" style={{ width: width }}>
                {isAvailable && (
                  <div
                    className="cc-available body-extra-small"
                    style={{ color: "var(--primaryColor-gray-500)" }}
                  >
                    More Choices Available
                  </div>
                )}
                {isSponsored && (
                  <div
                    className="cc-sponsored body-small"
                    style={{ color: "var(--primaryColor-gray-900)" }}
                  >
                    sponsored
                  </div>
                )}
                <div className="cc-content">
                  {isHead && <div className="title h4">{head}</div>}
                  {isSub && <div className="sub h6">{sub}</div>}
                  {isContent && (
                    <div className="content body-small">{content}</div>
                  )}
                  {isAuthor && (
                    <div className="author">
                      <div
                        className="body-small"
                        style={{ color: "var(--primaryColor-gray-900" }}
                      >
                        By
                      </div>
                      <div
                        className="body-bold-large"
                        style={{ color: "var(--secondaryColor-blue-900" }}
                      >
                        {author}
                      </div>
                    </div>
                  )}

                  {isRating && (
                    <div className="rating-customer">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  )}
                  {isPrice && (
                    <div className="price">
                      {isPriceNoDiscount && (
                        <div
                          className="priceDiscount body-bold-large"
                          style={{ color: "Var(--secondaryColor-red-900)" }}
                        >
                          {priceNoDiscount}
                        </div>
                      )}
                      {isPriceDiscount && (
                        <div
                          className="priceNoDiscount body-strikeThrough-small"
                          style={{ color: "var(--primaryColor-gray-500)" }}
                        >
                          {priceDiscount}
                        </div>
                      )}
                    </div>
                  )}
                  {isAutoship && (
                    <div className="autoship">
                      <InputList props={{ ...optionsInputList }} />
                      <InputList
                        props={{
                          ...optionsInputList,
                          isIcon: false,
                          lists: ["Buy Once"],
                        }}
                      />
                    </div>
                  )}

                  {isDescription && (
                    <div
                      className="infoDiscount body-extra-small"
                      style={{ color: "var(--primaryColor-gray-white)" }}
                    >
                      {infoDiscount}
                    </div>
                  )}
                </div>

                {isInfomation && (
                  <div
                    className="infoFreship body-extra-small"
                    style={{ color: "var(--primaryColor-gray-500)" }}
                  >
                    {infoFreeship}
                  </div>
                )}
                {isButtonCart && (
                  <Button
                    props={{ ...optionsButtonCart, className: "button-cart" }}
                  />
                )}

                {isButtonAnother && (
                  <div className="button-another">
                    {isButton_1 && (
                      <div className="btn-1">
                        <Button
                          props={{
                            ...optionsButtonCart,
                            color: "primaryColor-gray",
                            content: "Button",
                            className: "button-1",
                          }}
                        />
                      </div>
                    )}
                    {isButton_2 && (
                      <div className="btn-2">
                        <Button
                          props={{
                            ...optionsButtonCart,
                            style: "outline",
                            content: "Button",
                            className: "button-2",
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
              {isQuantity && (
                <div className="card-quantity">
                  <div className="cq-dropdown">
                    <Dropdown
                      props={{ ...optionsDropdown, className: "cq-select" }}
                    />
                    <div className="cqd-content body-medium">Quantity</div>
                  </div>
                  <div className="cq-button-save">
                    <Button
                      props={{
                        ...optionsButtonCart,
                        isIconLeft: false,
                        content: "Save for Later",
                        color: "primaryColor-primary1",
                        style: "outline",
                        className: "cq-bs",
                        size: "small",
                      }}
                    />
                  </div>
                  <div className="cq-button-remove">
                    <Button
                      props={{
                        ...optionsButtonCart,
                        iconLeftType: <FontAwesomeIcon icon={faTrashCan} />,
                        content: "Remove",
                        color: "primaryColor-primary1",
                        style: "outline",
                        className: "cq-bs",
                        size: "small",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="card-horizontal">
              <div className="card-image" style={{ width: width }}>
                {isDeal && <div className="h5">Deal</div>}
                {isImage && <img src={img_15_1} alt="" />}
                {isIconHeart && (
                  <div className="icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                )}
              </div>

              <div className="card-content" style={{ width: width }}>
                {isAvailable && (
                  <div
                    className="cc-available body-extra-small"
                    style={{ color: "var(--primaryColor-gray-500)" }}
                  >
                    More Choices Available
                  </div>
                )}
                {isSponsored && (
                  <div
                    className="cc-sponsored body-small"
                    style={{ color: "var(--primaryColor-gray-900)" }}
                  >
                    sponsored
                  </div>
                )}
                <div className="cc-content">
                  {isHead && <div className="title h4">{head}</div>}
                  {isSub && <div className="sub h6">{sub}</div>}
                  {isContent && (
                    <div className="content body-small">{content}</div>
                  )}
                  {isAuthor && (
                    <div className="author">
                      <div
                        className="body-small"
                        style={{ color: "var(--primaryColor-gray-900" }}
                      >
                        By
                      </div>
                      <div
                        className="body-bold-large"
                        style={{ color: "var(--secondaryColor-blue-900" }}
                      >
                        {author}
                      </div>
                    </div>
                  )}

                  {isRating && (
                    <div className="rating-customer">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  )}
                  {isPrice && (
                    <div className="price">
                      {isPriceNoDiscount && (
                        <div
                          className="priceDiscount body-bold-large"
                          style={{ color: "Var(--secondaryColor-red-900)" }}
                        >
                          {priceNoDiscount}
                        </div>
                      )}
                      {isPriceDiscount && (
                        <div
                          className="priceNoDiscount body-strikeThrough-small"
                          style={{ color: "var(--primaryColor-gray-500)" }}
                        >
                          {priceDiscount}
                        </div>
                      )}
                    </div>
                  )}
                  {isAutoship && (
                    <div className="autoship">
                      <InputList props={{ ...optionsInputList }} />
                      <InputList
                        props={{
                          ...optionsInputList,
                          isIcon: false,
                          lists: ["Buy Once"],
                        }}
                      />
                    </div>
                  )}

                  {isDescription && (
                    <div
                      className="infoDiscount body-extra-small"
                      style={{ color: "var(--primaryColor-gray-white)" }}
                    >
                      {infoDiscount}
                    </div>
                  )}
                </div>

                {isInfomation && (
                  <div
                    className="infoFreship body-extra-small"
                    style={{ color: "var(--primaryColor-gray-500)" }}
                  >
                    {infoFreeship}
                  </div>
                )}
                {isButtonCart && (
                  <Button
                    props={{ ...optionsButtonCart, className: "button-cart" }}
                  />
                )}

                {isButtonAnother && (
                  <div className="button-another">
                    {isButton_1 && (
                      <div className="btn-1">
                        <Button
                          props={{
                            ...optionsButtonCart,
                            color: "primaryColor-gray",
                            content: "Button",
                            className: "button-1",
                          }}
                        />
                      </div>
                    )}
                    {isButton_2 && (
                      <div className="btn-2">
                        <Button
                          props={{
                            ...optionsButtonCart,
                            style: "outline",
                            content: "Button",
                            className: "button-2",
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
              {isQuantity && (
                <div className="card-quantity">
                  <div className="cq-dropdown">
                    <Dropdown
                      props={{ ...optionsDropdown, className: "cq-select" }}
                    />
                    <div className="cqd-content body-medium">Quantity</div>
                  </div>
                  <div className="cq-button-save">
                    <Button
                      props={{
                        ...optionsButtonCart,
                        isIconLeft: false,
                        content: "Save for Later",
                        color: "primaryColor-primary1",
                        style: "outline",
                        className: "cq-bs",
                        size: "small",
                      }}
                    />
                  </div>
                  <div className="cq-button-remove">
                    <Button
                      props={{
                        ...optionsButtonCart,
                        iconLeftType: <FontAwesomeIcon icon={faTrashCan} />,
                        content: "Remove",
                        color: "primaryColor-primary1",
                        style: "outline",
                        className: "cq-bs",
                        size: "small",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default CardProduct;
