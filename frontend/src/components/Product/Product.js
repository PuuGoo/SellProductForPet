import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import ProductCard from "./ProductCard";

const Product = ({ products }) => {
  const popularCategories = [
    {
      title: "Dog Food",
      image: "https://clone-chewy.vercel.app/Images/110183-Iams-Dog-Food.png",
    },
    {
      title: "Cat Food",
      image: "https://clone-chewy.vercel.app/Images/76096-Food-Cat.png",
    },
    {
      title: "Dog Flea & Tick",
      image:
        "https://clone-chewy.vercel.app/Images/2023-05-Recipe-2-FrontlinePlus-Dog-FleaTick.png",
    },
    {
      title: "Dog Treats",
      image:
        "https://clone-chewy.vercel.app/Images/2023-02-Dog-Treats-ePLP-Recipe2-3-50345.png",
    },
    {
      title: "Cat Litter",
      image: "https://clone-chewy.vercel.app/Images/47416-Litter-Cat.png",
    },
    {
      title: "Chewy Pharmacy",
      image:
        "https://clone-chewy.vercel.app/Images/Pharmacy-460px-Winter21.png",
    },
  ];

  return (
    <Fragment>
      <div className="popular-categories">
        <h2>Popular Categories</h2>
        <div className="popular-category">
          {popularCategories.map((category) => {
            return (
              <Link className="category-list">
                <img src={category.image} alt="" />
                <h3>{category.title}</h3>
              </Link>
            );
          })}
        </div>

        <h2>Discover Pet Favorites by Chewy</h2>
      </div>

      <div className="fav-products">
        {products?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </Fragment>
  );
};

export default Product;
