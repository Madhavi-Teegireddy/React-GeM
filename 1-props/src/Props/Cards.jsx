import React from 'react';
import data from "../Data/db.json"

const Cards = (props) => {
    const{id, title, url, thumbnailUrl} = props
    console.log(props)

  return (
    <div>
        <img src={url} style={{width:"100px",height:"100px"}}/>
        <h1>{id}</h1>
        <h2>{title}</h2>
        <p>{thumbnailUrl}</p>
    </div>
  )
}

export default Cards