import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart'
import ProductList from './ProductList';


const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [categoryList, setCategoryList] = useState();

  const [opt, setOpt] = useState();
  const [page, setPage] = useState(1);
  const [lim] = useState(10);
  const navigate = useNavigate()
  const perPage = 8;
  const totalPage = Math.ceil(allProducts.length / perPage);
  let end = page * perPage;
  let start = end - perPage;


  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(`https://fakestoreapi.com/products?limit=${perPage}&page=${page}`);
      const data = await res.json();
      console.log("products data", data);
      setAllProducts(data);
      updateDisplayedProducts(page);
    };
    getProducts();
  }, []);

  const updateDisplayedProducts = (currentPage) => {
    const startIndex = (currentPage - 1) * lim;
    const endIndex = startIndex + lim;
    setDisplayedProducts(allProducts.slice(startIndex, endIndex));
  };

  const handlePage = (val) => {
    if (val === 'Next' && page < Math.ceil(allProducts.length / lim)) {
      setPage(page + 1);
    } else if (val === 'Pre' && page > 1) {
      setPage(page - 1);
    }
    updateDisplayedProducts(page);
  };

  useEffect(() => {
    const getOptions = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/categories`);
      const data = await res.json();
    //   console.log("options data", data);
      setOpt(data);
    };
    getOptions();
  }, []);

  const handleSelect = (event) => {
    const v = event.target.value;
    setCategoryList(v)
  }

  const handleSort = (event) => {
    const val = event.target.value;
    let sortedProducts = [...displayedProducts];

    if (val === "desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (val === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    setDisplayedProducts(sortedProducts);
  }

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item];
      console.log("Cart:", updatedCart);
      return updatedCart;
    });
    alert(`${item.title} added to cart`)
  };
  

  return (
    <div>

        <select onChange={handleSelect}>
            <option>Selecte</option>
            {opt && opt.map((op, id) => (
                <option key={id} value={op}>{op}</option>
            ))}
        </select>

        <select onChange={handleSort}>
            <option>Select Sorting</option>
            <option value="desc">High to Low</option>
            <option value="asc">Low to high</option>
        </select>

      <div className='grid grid-cols-4 gap-4'>
        {displayedProducts &&
          displayedProducts.map((p, id) => {
            return (
              <div key={id} className='border-2 border-gray-200'>
                <Link to={`/singleProduct/${p.id}`}>
                  <p>{p.title}</p>
                  <p>{p.category}</p>
                  <img src={p.image} className='w-[100px] h-[100px] m-auto' alt={p.title} />
                  <p>Price: {p.price}*</p>
                  <p>{p.rating.rate}</p>
                </Link>
                <button className='border-2 border-gray-600 rounded p-1' onClick={() =>  handleAddToCart(p)}
                  >Add to Cart</button>
              </div>
            );
          })}
      </div>

      <Cart cartItems={cart} />
      <ProductList categoryProducts={categoryList}/>
      


      {allProducts.length > 0 && (
        <div
          style={{
            width: '50%',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            gap: '4px',
          }}
        >
          <button disabled={page < 2} onClick={() => handlePage('Pre')}>Prev</button>
          <button>{page}</button>
          <button onClick={() => handlePage('Next')}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Products;
