import React from 'react'
import Data from './CardsData';

import { ADD_TO_CART} from "../redux/actions/action";
import { useDispatch } from 'react-redux';


const ProductList = () => {


  const dispatch=useDispatch();
 const addHandler=(item)=>{
    dispatch(ADD_TO_CART(item))
 }

    console.log(Data);
  return (
    <div>
        {Data.map((data)=>{
            return (
            <div className='card'>
                <div>
                <img className='image' src={data.imgdata} alt="image" /><br></br>
                <span className='price'>Price : {data.price}</span><br></br>
               <button className='add_cart' onClick={()=>addHandler(data)} >Add To Cart</button><br></br>
            </div>
            </div>
        )})}
   </div>
  )
}

export default ProductList