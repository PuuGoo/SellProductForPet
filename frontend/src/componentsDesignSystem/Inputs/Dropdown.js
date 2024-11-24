import React, { Fragment, useState } from "react";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./Dropdown.css";
import "../../globalStyles.css";
const Dropdown = ({ props }) => {
  const { isLabel, label, size, fontSize, options, className, width } = props;
  return (
    <Fragment>
      <div className="dropdown">
        {isLabel && <label className="body-bold-large">{label}</label>}
        <select
          name=""
          id=""
          style={{ width: width }}
          className={`${size} ${fontSize} ${className}`}
        >
          {options.map((e) => {
            return <option className={`${size} ${fontSize}`}>{e}</option>;
          })}
        </select>
      </div>
    </Fragment>
  );
};

export default Dropdown;
