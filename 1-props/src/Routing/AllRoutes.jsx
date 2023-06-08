import React from 'react'
import Home from '../Props/Home'
import { Route, Routes } from 'react-router-dom'
import Restaurant from "../AccessDataDirectly/Restaurant"
import FetchApi from '../Fetch/FetchApi'
import Error from '../Error'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} errorElement={<Error/>}/>
        <Route path="/data" element={<Restaurant/>}/>
        <Route path="/fetch" element={<FetchApi/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes