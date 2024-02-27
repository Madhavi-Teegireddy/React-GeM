import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const SingleProduct = ({handleAddCart, cart}) => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();
  console.log("id", id)

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res.data);
      setSingleProduct(res.data);
    });
  }, [id]);

  if (!singleProduct || Object.keys(singleProduct).length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
    <Navbar cart={cart} />
    <div style={{width:"50%", margin:"auto"}}>
      <h2>{singleProduct.title}</h2>
      <img style={{ width: '200px', height: '200px' }} src={singleProduct.image} alt={singleProduct.title} />
      <p>{singleProduct.description}</p>
      <p>Rate:{singleProduct.rating.rate}</p>
      <p>Price: ${singleProduct.price}</p>
      <Button onClick={() => {handleAddCart(singleProduct)}}>Add to Cart</Button>
    </div>
    </>
  );
};

export default SingleProduct;
