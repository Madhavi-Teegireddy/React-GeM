import React, { useState } from 'react'
import Cards from './Cards';
import data from "../Data/db.json"

const Home = () => {
  const [topRatedRestaurants, setTopRatedRestaurants] = useState(data)

  const handleTop = () => {
   const filtered = data.filter((res) => res.rate >=  4);
  setTopRatedRestaurants(filtered)
  }

  return (
    <>
    <h1>Hi props</h1>
     <button onClick={handleTop}>Top Rated Restaurants</button>

    <div  style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"30px"}}>  

      {topRatedRestaurants.map((res) => (
        <Cards 
          key={res.id}
          id={res.id}
          title={res.title}
          url={res.url}
          thumbnailUrl={res.thumbnailUrl}
          rate={res.rate}
        />
      ))}
    </div>
    </>
  )
}

export default Home