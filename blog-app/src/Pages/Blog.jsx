import React, { useState } from 'react'

const Blog = () => {
    const [data, setData] = useState("")

    const handleChange = () => {

    }

    // const handleSubmit = () => {}

  return (
    <div>Blog
        <form onSubmit={handleSubmit}>
            <input value="" type="text" onChange={handleChange}/>
        </form>
    </div>
  )
}

export default Blog