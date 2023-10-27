import React, { useState } from 'react'

const ExampleUSe = () => {
  const [data, setData] = useState("hello");
  const [age, setAge] = useState(24);


  const handleClick = () => {
    setData((prevData) => (prevData === "hello" ? "skilled already" : "hello"))
    setAge((prevAge) => (prevAge === "24" ? "34" : "24"))
  }


  return (
    <>
    <div>
      <h6>{data}</h6>
      <h6>{age}</h6>
      <button onClick={handleClick}>Change</button>
    </div>
    </>
  )
}

export default ExampleUSe;