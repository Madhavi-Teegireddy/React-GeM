import React, { useState } from 'react';
import ExampleProps from './ExampleProps';
import data from "../src/Data/db.json";


const ExapleParent = () => {
    const[resData, setResData] = useState(data);
    const [searchQuery, setSearchQuery] = useState('');

    const handleClick = () => {
        let filteredData = data.filter((res) => res.rate >= 4)
        setResData(filteredData)
    }

  const handleSearch = (e) => {
    let query = e.target.value
    setSearchQuery(query)
    searchFilteredData(query)
  }
  console.log(searchQuery)

const searchFilteredData =(query) => {
    const searchFilter = data.filter((res) => 
    res.title.toLocaleLowerCase().includes(query.toLowerCase())
    )
    setResData(searchFilter)
} 
console.log(resData)

  return (
    <>
    <button onClick={handleClick}>More than 4 rating</button>
    <input type="text" placeholder='search title'  
    onChange={handleSearch}/>

    <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)"}}>
        {resData.map((items) => (
            <ExampleProps
            key={items.id}
            // thumbnailUrl={items.thumbnailUrl}
            title={items.title}
            rate={items.rate}
            />
        ))}
        
    </div>
    </>
  )
}

export default ExapleParent;