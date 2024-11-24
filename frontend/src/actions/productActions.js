import axios from "axios";
import {
  ALL_PRODUCT_REQUIRE,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAILURE,
} from "../constants/productConstants";

const getProduct = (dispatch) => {
  dispatch({ type: ALL_PRODUCT_REQUIRE });

  axios
    .get("/api/v1/products")
    .then((response) => {
      const products = response.data;
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: products,
      });
    })
    .catch((error) => {
      dispatch({ type: ALL_PRODUCT_FAILURE, payload: error.message });
    });
};

export { getProduct };
