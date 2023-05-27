import React from 'react'
import Cards from './Cards';
import data from "../Data/db.json"

const Home = () => {
  return (
    <div>
        <h1>Hi props</h1>
            {data.map((res) => (
              <Cards key={res.id}
              id={res.id}
                title={res.title}
                url={res.url}
                thumbnailUrl={res.thumbnailUrl}>
            </Cards>
        ))}
    </div>
  )
}

export default Home