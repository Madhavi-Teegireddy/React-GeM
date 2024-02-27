import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({size}) => {

  return (
    <>
    <div className='flex justify-around w-full h-20 bg-gray-200 font-semibold text-center align-center cursor-pointer'>
            <Link to="/"><p className='m-auto'>Products</p></Link>
            <Link to="/cart"><p className='m-auto'>Cart <span className='text-red-500'>({size})</span></p></Link>
            <Link><p className='m-auto'>Login</p></Link>
        </div>
    </>
  )
}

export default Header;