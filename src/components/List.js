import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ADD_TO_CART,
  REMOVE_CART,
  REMOVE_IND_ITEM,
} from "../redux/actions/action";

const List = ({ getdata }) => {
  const [totalprice, setTotalprice] = useState(0);

  const dispatch = useDispatch();
  const addHandler = (item) => {
    console.log("item", item);
    dispatch(ADD_TO_CART(item));
  };
  const delHandler = (id) => {
    dispatch(REMOVE_CART(id));
  };

  const removeHandler = (item) => {
    dispatch(REMOVE_IND_ITEM(item));
  };

  const totalAmount = () => {
    let price = 0;
    getdata.map((item) => {
      price = item.price * item.qnty + price;
    });
    setTotalprice(price);
  };

  useEffect(() => {
    totalAmount();
  }, [totalAmount]);
  return (
    <>
      {getdata.length > 0 ? (
        <div>
          {getdata.map((data) => {
            return (
              <div>
                <span>{data.rname}</span>
                <br></br>
                <img className="images" src={data.imgdata} alt="image" />
                <br></br>
                <span className="prices">Price :Rs.{data.price}</span>
                <br></br>
                <div className="add-remove">
                  <span
                    className="dec"
                    onClick={
                      data.qnty <= 1
                        ? () => delHandler(data.id)
                        : () => removeHandler(data)
                    }
                  >
                    -
                  </span>
                  <span className="num">{data.qnty}</span>
                  <span className="inc" onClick={() => addHandler(data)}>
                    +
                  </span>
                </div>{" "}
              </div>
            );
          })}
          <div>
            <hr />
            <span>SubTotal:</span>
            <br />
            {getdata.map((data) => {
              return (
                <>
                  <span>{data.rname}:</span>
                  <span>Rs.{data.price}</span>
                  <span>*</span>
                  <span>{data.qnty}</span>=
                  <span>
                    Rs.{data.price * data.qnty}
                    <br></br>
                  </span>
                </>
              );
            })}
            <br></br> <span>Grand Total:Rs.{totalprice}</span>
          </div>
        </div>
      ) : (
        "Cart is Empty"
      )}
    </>
  );
};

export default List;
