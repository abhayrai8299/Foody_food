import React,{useState,useEffect} from "react";
import Badge from 'react-bootstrap/Badge';
import {TbShoppingCart} from 'react-icons/tb'
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART,REMOVE_CART,REMOVE_IND_ITEM } from "../redux/actions/action";

const Header = () => {

  const initialState=JSON.parse(localStorage.getItem("getdata")) || []


  console.log("initialState.............",initialState)
    const getdata = useSelector((state) => state.cartreducer.carts);
    const cumdata=getdata;


    console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqq",cumdata)

useEffect(()=>{
  localStorage.setItem("getdata",JSON.stringify(getdata));
},[getdata]);

    console.log("statae",getdata)
    const dispatch=useDispatch()

    console.log("getdta",getdata);
    const [dropdownState, setDropdownState] = useState(false);
    const [dropdownValue, setDropdownValue] = useState("");
    const [totalprice,setTotalprice]=useState(0);
  
    const handleDropdownClick = () => {
      setDropdownState(!dropdownState);
    };

    const addHandler=(item)=>{
      console.log("item",item)
        dispatch(ADD_TO_CART(item))
      }
      const delHandler=(id)=>{
        dispatch(REMOVE_CART(id))
      }
    
      const removeHandler=(item)=>{
        dispatch(REMOVE_IND_ITEM(item))
      }

     const totalAmount=()=>{
        let price=0;
        getdata.map((item)=>{
          price=item.price *item.qnty+price;
        });
       setTotalprice(price);
      }
     
      useEffect(()=>{
        totalAmount()
      },[totalAmount])

  console.log("sdafafafdfdsdsfd",getdata);
  return (
    <div className="navbar">
      <div className="container">
        <div className="header">
         <div><span>Foody Food</span></div>
          <div onClick={handleDropdownClick} className="dropdown-btn">{dropdownValue === "" ?<><TbShoppingCart /><Badge >{getdata.length}</Badge></>: dropdownValue}</div>
         
        </div>
      </div>
      <div
          className={`dropdown-items ${
            dropdownState ? "isVisible" : "isHidden"
          }`}><>{getdata.length>0?<div>
            {getdata.map((data)=>{
                return (
                    <div>      
                  <span>{data.rname}</span><br></br>
                 <img className='images' src={data.imgdata} alt="image" /><br></br>
                <span className='prices'>Price : {data.price}</span><br></br>
                <div className="add-remove">
                  <span className="dec" onClick={data.qnty <=1 ? ()=>delHandler(data.id) : ()=>removeHandler(data)}>-</span>
                   <span className="num" >{data.qnty}</span>
                    <span className="inc" onClick={()=>addHandler(data)}>+</span>
                </div> </div>)
            })} 
               <div><hr></hr>
               <span>SubTotal:</span><br></br>
               {cumdata.map((data)=>{
                return (
                 <><span>{data.rname}:</span><span>{data.price}</span><span>*</span><span>{data.qnty}</span>=<span>{data.price*data.qnty}<br></br></span></>
                )
               })}
               
              <br></br> <span>Grand Total:{totalprice}</span>
            </div>
          </div>:"Cart is Empty"}</></div>
    </div> 
  );
};

export default Header;
