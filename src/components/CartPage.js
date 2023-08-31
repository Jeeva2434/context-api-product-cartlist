import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import {CartState} from '../Context';

const CartPage = () => {
 
  const {carts} = CartState();
  const [total,totalPrice] = useState(0);

  useEffect(()=>{
    totalPrice(carts.reduce((acc,item)=>acc + Number(item.price),0));
  },[carts]);
  

  return (
    <div>
      <div>Total : {total}</div>
      {carts && carts.length > 0 ?( <div className='product_wrapper'>
            {carts.map((cart) => {
                return(
                    <div className='product_container' key={cart.id}>
                        <SingleProduct prod = {cart} />
                    </div>
                )
            })}
        </div>):(
          <div>No items are added !</div>
        )
      }
    </div>
  )
}

export default CartPage