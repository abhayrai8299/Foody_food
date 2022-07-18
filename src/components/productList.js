import React from 'react'
import Data from './CardsData';

const productList = () => {


    console.log(Data);
  return (
    <div>
        {Data.map((data)=>{
            return (
            <div className='card'>
                <div>
                <img className='image' src={data.imgdata} alt="image" /><br></br>
                <span className='price'>Price : {data.price}</span><br></br>
               <button className='add_cart'>Add To Cart</button><br></br>
            </div>
            </div>
        )})}
   </div>
  )
}

export default productList