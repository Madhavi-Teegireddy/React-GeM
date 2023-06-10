import React, { useEffect, useState } from 'react'
import "./single.css"
import SingleShimmer from './SingleShimmer';
import { useParams } from 'react-router-dom';

const SingleCard = () => {
    const[menu, setMenu] = useState(null);
    
    const {resId} = useParams();
    console.log("id", resId)

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
    try{
      const res = (await fetch(`https://fakestoreapi.com/products/${resId}`));
      const resData = await res.json();

      setMenu(resData)
      console.log(resData)
    }catch(error){
      console.log("Error:", error)
    }
  }

  return (
    <div className="sig">
      {menu ? (
        <>
          <h1>{menu.category}</h1>
          <img src={menu.image} alt={menu.title} />
          <h3>Rating: {menu.rating.rate}</h3>
          <h4>Price: Rs. {menu.price}</h4>
        </>
      ) : (
        <SingleShimmer />
      )}
    </div>
  );
}

export default SingleCard

