import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Products from './Components/Products';
import Cart from './Components/Cart';
import SingleProduct from './Components/SingleProduct';
import Electronics from './Components/ProductList';
import Jewelery from './Components/Jewelery';
import Men from './Components/Men';
import Women from './Components/Women';
import { useState } from 'react';
import ProductList from './Components/ProductList';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
      <Header size={cart.length}/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/singleProduct/:id" element={<SingleProduct/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/productList" element={<ProductList/>}/>
        <Route path="/jewelery" element={<Jewelery/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
