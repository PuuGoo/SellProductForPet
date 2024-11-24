import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./CardSelect.css";

const CardSelect = () => {
  const cardMenuImage = [
    {
      title: "Chewer Toys",
      image: "https://clone-chewy.vercel.app/Images/tough-chewer.png",
    },
    {
      title: "Gear for Warmer Weather",
      image:
        "https://clone-chewy.vercel.app/Images/2023-01_Chewy-Picks-Tiles-Outdoor-Adventure-Essentials.png",
    },
    {
      title: "Must-Haves for Allergies",
      image:
        "https://clone-chewy.vercel.app/Images/2023-01_Chewy-Picks-Tiles-Spring-Allergies.png",
    },
    {
      title: "Cleaning & Home Essentials",
      image:
        "https://clone-chewy.vercel.app/Images/2023-Refresh-Your-Nest_ChewyPicks-Recipe3-Default.png",
    },
  ];
  return (
    <Fragment>
      <div className="card-select">
        <div className="card-components">
          <div className="card-component">
            <span>Hi</span>
            <Link className="card-title">Sign In</Link>
          </div>
          <div className="card-component">
            <span>Save 35% Today</span>
            <Link className="card-title">Set up Autoship</Link>
          </div>
          <div className="card-component">
            <span>Recent Order</span>
            <Link className="card-title">Track Package</Link>
          </div>
          <div className="card-component">
            <span>Chewy Pharmacy</span>
            <Link className="card-title">Shop Now</Link>
          </div>
        </div>
      </div>

      <div className="card-menu">
        {cardMenuImage.map((card) => {
          return (
            <Link className="card-menu-list">
              <img src={card.image} alt="" />
              <h3>{card.title}</h3>
            </Link>
          );
        })}
      </div>
    </Fragment>
  );
};

export default CardSelect;
