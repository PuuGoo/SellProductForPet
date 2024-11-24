import {
  ALL_PRODUCT_FAILURE,
  ALL_PRODUCT_REQUIRE,
  ALL_PRODUCT_SUCCESS,
} from "../constants/productConstants";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUIRE:
      return {
        loading: true,
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        error: "",
      };
    case ALL_PRODUCT_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
export default productReducer;
