import React from 'react'
import {Link} from 'react-router-dom';
import { CartState } from '../Context';

const Header = () => {

  const {carts} = CartState();

  return (
     <header>
        <h2>Products</h2>
        <nav>
            <ul>
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="/CartPage" className='link'>Cart ({carts.length})</Link></li>
            </ul>
        </nav>
     </header>
  )
}

export default Header