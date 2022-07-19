import React from "react";
import Data from "./CardsData";
import { ADD_TO_CART } from "../redux/actions/action";
import { useDispatch } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();
  const addHandler = (item) => {
    dispatch(ADD_TO_CART(item));
  };
  return (
    <div className="contain">
      {Data.map((data) => {
        return (
          <div className="card">
            <div className="main">
              <img className="image" src={data.imgdata} alt="image" />
              <br></br>
              <span className="price">Price :Rs.{data.price}</span>
              <br></br>
              <button className="add_cart" onClick={() => addHandler(data)}>
                Add To Cart
              </button>
              <br></br>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
