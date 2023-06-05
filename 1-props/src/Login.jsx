import React, { useState } from 'react'

const Login = () => {
    const [data, setData] = useState(false);

    const handleClick=() => {
        setData((prevData) => !prevData)
    }
  return (
    <div>
        <button onClick={handleClick}>{data? "Logout" : "Login"}</button>
    </div>
  )
}

export default Login