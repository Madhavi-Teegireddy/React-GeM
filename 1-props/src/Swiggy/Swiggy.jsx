import React, { useEffect, useState } from 'react'
import "./swi.css"
import Shimmer from '../Fetch/Shimmer';
import { Link } from 'react-router-dom';

const Swiggy = () => {
    const [ restaurantData, setRestaurantData ] = useState([]);

    useEffect(() => {
        fetchData()
    },[])

  const fetchData = async () => {
    try{
      const res = (await fetch("https://fakestoreapi.com/products"))
      const resData = await res.json()
      setRestaurantData(resData)
    //   console.log(resData)
    }catch(error){
      console.log("Error:", error)
    }
  }

  return (
    restaurantData.length === 0 ? (
      <Shimmer/>
    ) : (
      <>
        <div className='cardi'>
          {restaurantData.length === 0 ? (
            <h1 className='no-resultsi'>No items found</h1>
          ) : (
            restaurantData.map((item) => (
                <Link to={"/swiggy/"+item.id} key={item.id}>
              <div className='cardi-1'>
                <img src={item.image} className='img' alt={item.category} />
                <h1>{item.category}</h1>
                <h3>Rating: {item.rating.rate}*</h3>
              </div>
              </Link>
            ))
          )}
        </div>
      </>
    )
  )
}

export default Swiggy