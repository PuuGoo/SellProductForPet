import React, { Fragment } from "react";
import "./BannerSmall.css";
import { Link } from "react-router-dom";

const BannerSmall = () => {
  const imageBannerSmall = [
    {
      title: "Puppy Shop",
      image:
        "https://clone-chewy.vercel.app/Images/2023-01-New-Pet-Shop-Recipe3-2-Short_Puppy.png",
    },
    {
      title: "Kitten Shop",
      image:
        "https://clone-chewy.vercel.app/Images/2023-01-New-Pet-Shop-Recipe3-1-Short_Kitten.png",
    },
  ];
  return (
    <Fragment>
      <div className="banners-small">
        <h2>New Puppy or Kitten?</h2>
        <div className="banners-small-wrapper">
          {imageBannerSmall.map((bannerSmall) => {
            return (
              <Link to={bannerSmall.title}>
                <div className="banner-small">
                  <img src={bannerSmall.image} alt="" />
                  <span>{bannerSmall.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default BannerSmall;
