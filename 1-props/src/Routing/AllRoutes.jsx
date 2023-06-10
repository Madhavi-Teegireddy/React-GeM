import React from 'react'
import Home from '../Props/Home'
import { Route, Routes } from 'react-router-dom'
import Restaurant from "../AccessDataDirectly/Restaurant"
import FetchApi from '../Fetch/FetchApi'
import Error from '../Error'
import Swiggy from '../Swiggy/Swiggy'
import SingleCard from '../Swiggy/SingleCard'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} errorElement={<Error/>}/>
        <Route path="/data" element={<Restaurant/>}/>
        <Route path="/fetch" element={<FetchApi/>}/>
        <Route path="/swiggy" element={<Swiggy/>}/>
        <Route path="/swiggy/:resId" element={<SingleCard/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes