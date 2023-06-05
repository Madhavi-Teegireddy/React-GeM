import React, { useEffect, useState } from 'react'
import "./fet.css"
import Shimmer from './Shimmer';

const FetchApi = () => {
 const [ restaurantData, setRestaurantData ] = useState([]);
 const [filteredData, setFilteredData] = useState([]);
 const [searchText, setSearchText] = useState("")

  const handleTop = () => {
   const filtered = restaurantData.filter((res) => res.rating.rate >=  4);
  setRestaurantData(filtered)
  }

 useEffect(() => {
  fetchData()
 },[])

  const fetchData = async () => {
    try{
      const res = (await fetch("https://fakestoreapi.com/products"))
      const resData = await res.json()
      setRestaurantData(resData)
      setFilteredData(resData)
      console.log(resData)
    }catch(error){
      console.log("Error:", error)
    }
  }


  const handleSearch = () => {
    const filteredData = restaurantData.filter((item) =>
      item.category.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    restaurantData.length === 0 ? (
      <Shimmer/>
    ) : (
      <>
        <div className='ser'>
          <button onClick={handleTop}>Top Rated Brands</button>
          <div>
            <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className='card'>
          {filteredData.length === 0 ? (
            <h1 className='no-results'>No items found</h1>
          ) : (
            filteredData.map((item) => (
              <div key={item.id} className='card-1'>
                <img src={item.image} className='img' alt={item.category} />
                <h1>{item.category}</h1>
                <h3>Rating: {item.rating.rate}*</h3>
              </div>
            ))
          )}
        </div>
      </>
    )
  )
}

export default FetchApi