// import React, { useState } from 'react'

// const ExampleForm = () => {
//     const [inputData, setInputData] = useState("");
//     const [num, setNum] = useState("");
//     const [submittedData, setSubmittedData] = useState("");
//     const [mobile, setMobile] = useState("");

//     const handleChange = (e) => {
//         setInputData(e.target.value);
//     }
    
//     const handleAgeChange = (e) => {
//       setNum(e.target.value);
//     }
    
//     const handleSubmit = (e) => {
//       e.preventDefault(); 
//       setSubmittedData(inputData)
//       setMobile(num)
//     }
//     console.log(inputData, num)

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//       <input type="text" placeholder='enter name' onChange={handleChange} name="name" value={name}/>
//       <input type="number" placeholder="enter mobile" onChange={handleAgeChange} name="age" value={age}/>
//       <input type="submit" value="submit"/>
//       </form>
//       <p>text u entered is: {submittedData}</p>
//       <p>number u entered is: {mobile}</p>
//     </div>
//   )
// }

// export default ExampleForm


import React, { useEffect, useState } from 'react';

let initialData = {
    name : '',
    number: ''
}


const ExampleForm = () => {
    const [formData, setFormData] = useState(initialData);
    const [submittedData, setSubmittedData] = useState([]);
    const [submittedAge, setSubmittedAge] = useState([]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const {name, number} = formData;
        if(name === "" || number === ""){
            alert("enter value")
        }
        // console.log(name, number)
        else if(number > 20) {
            setSubmittedData([...submittedData, {name, number}])
            setFormData(initialData)
        }
        else{
            setSubmittedAge([...submittedAge, {name, number}])
            setFormData(initialData)
        }
        // setSubmittedData({name, number})
        // setSubmittedData([...submittedData, {name, number}])    }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter name' name="name" value={formData.name} onChange={handleChange}/>
            <input type="number" placeholder='enter number' name="number" value={formData.number} onChange={handleChange}/>
            <input type="submit" value="Click to show"/>
        </form>
    

    {
    submittedData.length > 0 ? (
            <table>
                <thead>
                    <tr>
                    <th>Name:</th>
                    <th>Number:</th>
                    </tr>
                    </thead>
               <tbody>
            
                {submittedData.map((data, index) => (
                <tr key={index}>
                <td>{data.name}</td>
                <td>{data.number}</td>
                </tr>
                ))}
               </tbody>
            </table>
            ) : (<p> No Data</p>) }  

            <hr></hr>

            {
            submittedAge.length > 0 ? (
            <table>
                <thead>
                    <tr>
                    <th>Name:</th>
                    <th>Number:</th>
                    </tr>
                    </thead>
               <tbody>
            
                {submittedAge.map((data, index) => (
                <tr key={index}>
                <td>{data.name}</td>
                <td>{data.number}</td>
                </tr>
                ))}
               </tbody>
            </table>
            ) : (<p> No Data lessthan 20</p>) }
        </div>
      )}


export default ExampleForm