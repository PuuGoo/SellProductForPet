import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const ProductByPet = () => {
  const CatalogByPet = [
    {
      title: "Dog",
      image:
        "https://clone-chewy.vercel.app/Images/PET-TILES-Deal-FlagsDog-2x.png",
    },
    {
      title: "Cat",
      image:
        "https://clone-chewy.vercel.app/Images/PET-TILES-Deal-FlagsCat-2x.png",
    },
    {
      title: "Small Pet",
      image:
        "https://clone-chewy.vercel.app/Images/PET-TILES-Deal-FlagsSmallPet-2x.png",
    },
    {
      title: "Bird",
      image:
        "https://clone-chewy.vercel.app/Images/PET-TILES-Deal-FlagsBird-2x.png",
    },
    {
      title: "Fish",
      image:
        "https://clone-chewy.vercel.app/Images/PET-TILES-Deal-FlagsFish-2x.png",
    },
    {
      title: "Reptile",
      image:
        "https://clone-chewy.vercel.app/Images/PET-TILES-Deal-FlagsReptile-2x.png",
    },
  ];

  const exploreMore = [
    {
      title: "Today's Deals",
      image:
        "https://clone-chewy.vercel.app/Images/2022-TodaysDeals-Refresh-Chewy-Picks-Tile.png",
    },
    {
      title: "Today's Deals",
      image:
        "https://clone-chewy.vercel.app/Images/2022-ByChewy-Explore-More_Recipe2-Default.png",
    },
    {
      title: "Birthday Shop",
      image:
        "https://clone-chewy.vercel.app/Images/2022-07-BirthdayShop-NavTile.png",
    },
    {
      title: "Disney Collection",
      image: "https://clone-chewy.vercel.app/Images/Circle-5-1a-2x-square.png",
    },
    {
      title: "Senior Pet Shop",
      image:
        "https://clone-chewy.vercel.app/Images/Senior%20Pet%20Shop%20-%20Circle-5-1-v2-2x.png",
    },
    {
      title: "Pet Parent Shop",
      image: "https://clone-chewy.vercel.app/Images/pet-parents-explore.png",
    },
    {
      title: "Chewy Home Collection",
      image: "https://clone-chewy.vercel.app/Images/chewy-home-explore.png",
    },
    {
      title: "While You're Out Shop",
      image: "https://clone-chewy.vercel.app/Images/wyoe-explore.png",
    },
    {
      title: "Chewy eGift Cards",
      image:
        "https://clone-chewy.vercel.app/Images/2022-Birthday-GC-Circle-5-1-4x.png",
    },
    {
      title: "Personalized Products",
      image:
        "https://clone-chewy.vercel.app/Images/2021-P1-Personalization-Circle-5-1-2x.png",
    },
    {
      title: "Game Day Shop",
      image:
        "https://clone-chewy.vercel.app/Images/2022-06_Chewy-Picks_Tile_GameDay.png",
    },
    {
      title: "Pet Goody Boxes",
      image: "https://clone-chewy.vercel.app/Images/Goodybox-square-5-5-2x.png",
    },
  ];
  return (
    <Fragment>
      <div className="filterByPet">
        <h2>Shop By Pet</h2>
        <div className="filterByPet-wrapper">
          {CatalogByPet.map((item) => {
            return (
              <Fragment>
                <Link to={item.title}>
                  <div className="listByPet">
                    <img src={item.image} alt="" />
                    <p>{item.title}</p>
                  </div>
                </Link>
              </Fragment>
            );
          })}
        </div>
      </div>

      <div className="exploreMores">
        <h2>Explore More</h2>
        <div className="exploreMore-wrapper">
          {exploreMore.map((item) => {
            return (
              <Fragment>
                <Link to={item.title}>
                  <div className="exploreMore">
                    <img src={item.image} alt="" />
                    <p>{item.title}</p>
                  </div>
                </Link>
              </Fragment>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductByPet;
