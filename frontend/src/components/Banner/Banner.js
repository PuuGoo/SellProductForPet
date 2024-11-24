import { Fragment, useEffect, useState } from "react";
import "../Banner/Banner.css";
import {
  img_banner_1,
  img_banner_2,
  img_banner_3,
} from "../../images/Banner/BannerImages";
import {
  faChevronLeft,
  faChevronRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../componentsDesignSystem/Buttons/Button";
const Banner = () => {
  const optionsButton = {
    isContent: false,
    content: "Button",
    size: "large",
    fontSize: "button-large",
    style: "solid",
    color: "primaryColor-primary",
    isIconLeft: true,
    iconLeftType: <FontAwesomeIcon icon={faChevronLeft} />,
    isIconRight: false,
    iconRightType: <FontAwesomeIcon icon={faPlus} />,
  };
  const imageBanner = [img_banner_1, img_banner_2, img_banner_3];
  const [count, setCount] = useState(0);
  if (count < 0) {
    setCount(2);
  }

  if (count > 2) {
    setCount(0);
  }

  setTimeout(() => {
    setCount(count + 1);
  }, 2000);
  return (
    <Fragment>
      <div className="banner-mess-sale">
        <div className="container">
          <div className="banner-messSale-wrapper">
            <div className="banner-messSale-info">
              <div
                className="h4"
                style={{ color: "var(--primaryColor-primary1-500)" }}
              >
                Autoship
              </div>
              <div
                className="h2"
                style={{ color: "var(--primaryColor-primary1-500)" }}
              >
                Meet Your New Supperpower.
              </div>
              <div
                className="body-large"
                style={{ color: "var(--primaryColor-primary1-500)" }}
              >
                35% off your first order, 5% off after that. No fees or
                commitments
              </div>
            </div>
            <div className="banner-messSale-img">
              <img src={imageBanner[count]} />
            </div>
            <div className="icon-slider">
              <div
                className="icon-slider-left"
                onClick={() => setCount(count - 1)}
              >
                <Button props={{ ...optionsButton }} />
              </div>
              <div
                className="icon-slider-right"
                onClick={() => setCount(count + 1)}
              >
                <Button
                  props={{
                    ...optionsButton,
                    iconLeftType: <FontAwesomeIcon icon={faChevronRight} />,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
