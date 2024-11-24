import React, { Fragment } from "react";
import "./MessageSuccess.css";
import "../../globalStyles.css";
const MessageSuccess = () => {
  return (
    <Fragment>
      <div className="mess-success">
        <div className="container">
          <div className="mess-success-wrapper">
            <div
              className="mess-success-text h6"
            >
              35% off your first Autoship
            </div>
            <div className="mess-success-term body-extra-small" style={{color: "var(--primaryColor-gray-400)"}}>Terms apply</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MessageSuccess;
