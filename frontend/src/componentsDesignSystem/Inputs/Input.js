import React, { Fragment, useEffect, useState } from "react";
import "./Input.css";
import "../../globalStyles.css";
import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Input = ({ props }) => {
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
    isReadOnly: false,
    className: "",
  };

  const [input, setInput] = useState({ ...optionsInput });

  const {
    isIcon,
    iconType,
    isLabel,
    label,
    isPlaceholder,
    placeholder,
    fontSize,
    size,
    isBorder,
    isReadOnly,
    className,
    width,
    borderRadius,
  } = input;

  useEffect(() => {
    setInput({
      ...input,
      ...props,
    });
  }, [input, props]);
  const [value, setValue] = useState("");
  return (
    <Fragment>
      <form className="inputComponent">
        {isLabel && <label className="body-bold-large">{label}</label>}

        <div className="placeholder">
          {isPlaceholder && value === "" && (
            <label
              className={fontSize}
              // onClick={(e) => {
              //   document.querySelectorAll(".inputComponent input").focus();
              // }}
            >
              {placeholder}
            </label>
          )}
          {isReadOnly ? (
            <input
              type="text"
              className={`${size} ${fontSize} ${className} ${
                !isBorder && "no-border"
              }`}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              readOnly
            />
          ) : (
            <input
              type="text"
              style={{ width: width, borderRadius: borderRadius }}
              className={`${size} ${fontSize} ${className} ${
                !isBorder && "no-border"
              }`}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          )}

          {isIcon && <div className="placeholder-icon">{iconType}</div>}
        </div>
      </form>
    </Fragment>
  );
};

export default Input;
