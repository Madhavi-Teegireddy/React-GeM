import React from 'react';
import data from "../Data/db.json"

const Restaurant = () => {
  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"30px"}}>
        {data.map((res) => (
           <div key={res.id} style={{border:"2px solid yellow"}}>
            <img style={{width:"100px",height:"100px"}}
              src={res.url}/>
            <h1>{res.id}</h1>
            <h1>{res.title}</h1>
            <p>{res.thumbnailUrl}</p>
            </div>
        ))}
    </div>
  )
}

export default Restaurant