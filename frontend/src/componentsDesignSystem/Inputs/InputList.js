import React, { Fragment, useState } from "react";
import "./InputList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const InputList = ({ props }) => {
  const { type, isIcon, iconType, isLabel, label, size, fontSize, lists } =
    props;

  return (
    <Fragment>
      <div className="input-checkbox">
        {isLabel && <label className="body-bold-large">{label}</label>}
        {lists.map((list) => {
          return (
            <label htmlFor="" className={`${fontSize}`}>
              {type === "checkbox" ? (
                <input type="checkbox" className={`${size}`} />
              ) : (
                <input type="radio" className={`${size}`} />
              )}
              <div
                className="ic-content"
                style={{ color: "var(--primaryColor-gray-900)" }}
              >
                {isIcon && iconType}
                {list}
              </div>
            </label>
          );
        })}
      </div>
    </Fragment>
  );
};

export default InputList;
