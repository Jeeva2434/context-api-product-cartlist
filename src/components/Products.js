import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import { CartState } from '../Context';

const Products = () => {
// const Products = ({carts,setCarts,removeCartItem,setPrice}) => {
    // const[products,setProducts] = useState([]);

    const {products} = CartState();

    // useEffect(()=>{
    //     const productList = [...Array(20)].map((_,index)=>(
    //         {
    //             id : faker.string.uuid(),
    //             name : faker.commerce.productName(),
    //             price:faker.commerce.price(),
    //             image:faker.image.urlPicsumPhotos()
    //         }
    //     ))

    //     setProducts(productList);
    //     console.log(carts,'carts');
    
    // },[]);

    // const addToCart = (prod) => {
    //    setCarts((prevCarts)=>[...prevCarts,prod]);
    //    setPrice(prev => Math.round(prev + Math.round(prod.price)));
    //    console.log(carts)
    // } 

    return (
        <div className='product_wrapper'>
            {products.map((product) => {
                return(
                    <div className='product_container' key={product.id}>
                        {/* <SingleProduct prod = {product} carts={carts} setCarts={setCarts} addToCart={addToCart}
                        removeCartItem={removeCartItem}/> */}
                        <SingleProduct prod = {product}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Products