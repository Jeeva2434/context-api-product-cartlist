import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Products from './components/Products';
import CartPage from './components/CartPage';
import Header from './components/Header';

function App() {


  // const[carts,setCarts] = useState([]);
  // const[price,setPrice] = useState(0);

  // const removeCartItem = (prod) => {
  //   const updateCart = carts.filter(item => item.id !== prod.id);
  //   setCarts(updateCart);
  //   setPrice(prev => Math.round(prev - Math.round(prod.price)));
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="appContent">
          
          {/* <Routes>
            <Route path='/' element={<Products carts={carts} setCarts={setCarts} 
            removeCartItem={removeCartItem} setPrice={setPrice}/>}/>
            <Route path='/CartPage' element={<CartPage  carts={carts} setCarts={setCarts} 
            price={price} setPrice={setPrice} removeCartItem={removeCartItem} />}/>
          </Routes> */}

          <Routes>
            <Route path='/' element={<Products/>}/>
            <Route path='/CartPage' element={<CartPage/>}/>
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
