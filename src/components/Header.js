import React,{useState} from "react";
import {TbShoppingCart} from 'react-icons/tb'
import { useSelector } from "react-redux";

const Header = () => {

    const getdata = useSelector((state) => state.cartreducer.carts);

    console.log("getdta",getdata);
    const [dropdownState, setDropdownState] = useState(false);
    const [dropdownValue, setDropdownValue] = useState("");
  
    const handleDropdownClick = () => {
      setDropdownState(!dropdownState);
    };

  
  return (
    <div className="navbar">
      <div className="container">
        <div className="header">
         <div><span>Foody Food</span></div>
          <div onClick={handleDropdownClick} className="dropdown-btn">{dropdownValue === "" ?<TbShoppingCart />: dropdownValue}</div>
         
        </div>
      </div>
      <div
          className={`dropdown-items ${
            dropdownState ? "isVisible" : "isHidden"
          }`}><>{getdata.length>0?<div>
            {getdata.map((data)=>{
                return (
                    <div>
                       <img className='images' src={data.imgdata} alt="image" /><br></br>
                <span className='prices'>Price : {data.price}</span><br></br>
                <div className="add-remove">
                  <span className="dec">-</span>
                   <span className="num" >{data.qnty}</span>
                    <span className="inc">+</span>
                </div>
                    </div>
                    
                )
            })}<div><hr></hr>
               <span>Total:</span>
            </div>
          </div>:"Cart is Empty"}</></div>
    </div> 
  );
};

export default Header;
