import React, { Fragment, useEffect, useState } from "react";
import "./Button.css";
import "../../globalStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Button = ({ props }) => {
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
    className: "",
    width: "",
  };

  const [button, setButton] = useState({ ...optionsButton });
  const {
    isContent,
    content,
    size,
    fontSize,
    style,
    color,
    isIconLeft,
    iconLeftType,
    isIconRight,
    iconRightType,
    className,
    width,
  } = button;

  useEffect(() => {
    setButton({
      ...button,
      ...props,
    });
  }, [props]);

  return (
    <Fragment>
      <div
        style={{ width: width }}
        className={`button ${fontSize} ${size} ${style} ${color} ${className}`}
      >
        {isIconLeft && <div className="icon-left">{iconLeftType}</div>}
        {isContent && content}
        {isIconRight && <div className="icon-left">{iconRightType}</div>}
      </div>
    </Fragment>
  );
};

export default Button;
