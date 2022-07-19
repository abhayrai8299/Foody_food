import React, { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import { TbShoppingCart } from "react-icons/tb";
import { useSelector } from "react-redux";
import List from "./List";

const Header = () => {
  const [dropdownState, setDropdownState] = useState(false);
  const getdata = useSelector((state) => state.cartreducer.carts);
  localStorage.setItem("data", JSON.stringify(getdata));
  const initialState = localStorage.getItem("data") || [];
  console.log("vvvvvvvvvvvvvvvvvv", initialState);
  // const initialState = JSON.parse(localStorage.getItem("getdata")) || [];
  // const [data, setData] = useState(initialState);

  //  useEffect(() => {
  //    localStorage.setItem("data", JSON.stringify(getdata));
  //  }, [getdata]);

  const data = JSON.parse(localStorage.getItem("data"));

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="header">
          <div>
            <span>Foody Food</span>
          </div>
          <div onClick={handleDropdownClick} className="dropdown-btn">
            <TbShoppingCart />
            <Badge>{data.length}</Badge>
          </div>
        </div>
      </div>
      <div
        className={`dropdown-items ${dropdownState ? "isVisible" : "isHidden"}`}
      >
        <List getdata={data} />
      </div>
    </div>
  );
};

export default Header;
