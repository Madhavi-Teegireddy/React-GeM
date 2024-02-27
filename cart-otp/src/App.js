import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';
import { useEffect, useState } from 'react';
import SingleProduct from './Components/SingleProduct';
import Payment from './Components/Payment';
import Otp from './Components/Otp';

function App() {

  const [cart, setCart] = useState([]);

  const handleAddCart = (item) => {
    // if(cart.indexOf(item) !==-1) return
    // const newCart = [...cart, item];
    // setCart(newCart);
    // console.log("items in cart", cart);

  const newItem = { ...item, quantity: 1 };
  const newCart = [...cart, newItem];
  setCart(newCart);
  console.log("items in cart", newCart);
  };

  useEffect(() => {
    console.log("items in cart", cart);
  }, [cart]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home handleAddCart={handleAddCart} cart={cart}/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/singleProduct/:id" element={<SingleProduct handleAddCart={handleAddCart} cart={cart} />}/>
        <Route path="/payment" element={<Payment/>} />
        <Route path="/otp" element={<Otp/> } />
      </Routes>
    </div>
  );
}

export default App;
