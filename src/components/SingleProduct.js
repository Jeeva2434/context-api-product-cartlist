import React from 'react'
import { CartState } from '../Context'

const SingleProduct = ({prod}) => {

  const {carts,setCarts} = CartState();

  return (
    <div className='singleProduct'>
        <div className='img_container'>
            <img className='product_img' src={prod.image} alt={prod.name}/>
        </div>
        <span className='product_name'>{prod.name}</span>
        <span>{prod.price}</span>
        <div className='product_buttons'>
            {carts.includes(prod)?(
                        <>
                            <button className='btn btn-disabled addBtn' 
                            disabled>Add</button>
                            <button className='btn btn-secondary removeBtn'
                            onClick={()=>setCarts(carts.filter(item=>item.id !==prod.id))}>Remove</button>
                        </>
            ):(
                <>
                    <button className='btn btn-primary addBtn' 
                    onClick={()=>setCarts([...carts,prod])} >Add</button>
                    <button className='btn btn-secondary removeBtn'
                    onClick={()=>setCarts(carts.filter(item=>item.id !==prod.id))}>Remove</button>
                </>
            )}
            

        </div>
    </div>
  )
}

export default SingleProduct