import React from 'react'
import BlogItem from './BlogItem'

const BlogList = ({blogs}) => {
  return (
    <div>
        {blogs.map(blog => (<BlogItem/>)}
    </div>
  )
}

export default BlogList