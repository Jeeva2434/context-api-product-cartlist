import React, { createContext, useContext, useState } from 'react'
import {faker} from '@faker-js/faker';

const Cart = createContext();

const Context = ({children}) => {

  const[carts,setCarts] = useState([]);

  const productList = [...Array(20)].map((_)=>{
    return ({
            id:faker.string.uuid(),
            name : faker.commerce.productName(),
            price:faker.commerce.price(),
            image:faker.image.urlPicsumPhotos()
        }
    )
  })

  const[products] = useState(productList); 

  return (
    <Cart.Provider value={{carts,setCarts,products}}>
        {children}
    </Cart.Provider>
  )
}

export const CartState = () => {
    return useContext(Cart);
}

export default Context