import { Fragment } from "react";
import "../CardSelect/CatelogyProduct.css";
import "../../globalStyles.css";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
} from "../../images/Category/Image-Category";
import CardCP from "./CardCP";
const CategoryProduct = () => {
  const contentCardCP = [
    {
      img: img4,
      sub: "The Dog Shop",
      content: "The secret to a healthy pet.",
    },
    {
      img: img5,
      sub: "The Cat Shop",
      content: "Everything from eats to snacks to catnaps.",
    },
  ];

  const itemsCatalog = [
    
  ]
  return (
    <Fragment>
      <div className="category-product">
        <div className="container">
          <div className="category-product-wrapper">
            <div className="h3">Catalogies Product</div>
            <div className="cp-items">
              <div className="cp-items-catalogs">
                <div className="cp-t-catalog">
                  <img src={img1} alt="" />
                  <div className="h4">Dry Food</div>
                </div>
                <div className="cp-t-catalog">
                  <img src={img2} alt="" />
                  <div className="h4">Wet Food</div>
                </div>
                <div className="cp-t-catalog">
                  <img src={img3} alt="" />
                  <div className="h4">Cleaning</div>
                </div>

                <div
                  className="cp-t-icon"
                  style={{ display: "none", height: "56px" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
                      fill="#111827"
                    />
                  </svg>
                </div>
              </div>
              <div className="cp-items-banners">
                {contentCardCP.map((banner) => (
                  <CardCP
                    props={{
                      img: banner.img,
                      sub: banner.sub,
                      content: banner.content,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CategoryProduct;
