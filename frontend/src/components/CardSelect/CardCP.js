import React, { Fragment } from "react";
import "./CardCP.css";
const CardCP = ({ props }) => {
  const { img, sub, content } = props;
  return (
    <Fragment>
      <div className="cp-i-banner">
        <img src={img} alt="" />
        <div className="cp-i-banner-content">
          <div
            className="cpibc-sub h2"
            style={{ color: "var(--primaryColor-primary1-500)" }}
          >
            {sub}
          </div>
          <div
            className="cpibc-content body-bold-medium"
            style={{ color: "var(--primaryColor-primary1-500)" }}
          >
            {content}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardCP;
