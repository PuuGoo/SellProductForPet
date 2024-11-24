import React, { Fragment, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import CardSelect from "../CardSelect/CardSelect";
import Product from "../Product/Product";
import BannerSmall from "../Banner/BannerSmall";
import Brand from "../Brand/Brand";
import ProductByPet from "../Product/ProductByPet";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/productActions";
import "./Home.css";
import MessageSuccess from "../Header/MessageSuccess";
import CategoryProduct from "../CardSelect/CatelogyProduct";
import HotDealProduct from "../Product/HotDealProduct";
import Button from "../../componentsDesignSystem/Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "../../componentsDesignSystem/Inputs/Input";
import Dropdown from "../../componentsDesignSystem/Inputs/Dropdown";
import InputList from "../../componentsDesignSystem/Inputs/InputList";
import CardProduct from "../../componentsDesignSystem/ContentBlock/CardProduct";
const Home = () => {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct);
  }, [dispatch]);
  const optionsInputList = {
    type: "checkbox",
    isIcon: true,
    iconType: <FontAwesomeIcon icon={faPlus} />,
    isLabel: true,
    label: "Label",
    size: "checkbox-S",
    fontSize: "body-small",
    lists: ["Cart", "Cash", "Momo", "Toro"],
  };
  return (
    <Fragment>
      <Banner />
      <CategoryProduct />
      <HotDealProduct />
      {/* <CardSelect />
        <Product products={products} />
        <Brand products={products} />
        <BannerSmall />
        <ProductByPet /> */}
    </Fragment>
  );
};

export default Home;
