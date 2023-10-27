import React from 'react';
import data from "../src/Data/db.json";
import { Link } from 'react-router-dom';
import Swiggy from './Swiggy/Swiggy';

const ExampleProps = (props) => {
    const {id, title, rate, thumbnailUrl} = props;
    // console.log(data)

    // const handleClickCard = () => {
    //     console.log("item clicked");
    //     Navigate("/")
    // }
  return (
    <div>
        <Link to="/swiggy">
        <img src={thumbnailUrl} 
        style={{width:"100px", 
        height:"100px"}}
        // onClick={handleClickCard}
        />
        </Link>
       <h6>{id}</h6>
        <h6>{title}</h6>
        <p>{rate}</p>
    </div>
  )
}

export default ExampleProps;