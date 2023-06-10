import React from 'react';
import "./nav.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className='nav'>
            <Link to="/"><ul>Props</ul></Link>
            <Link to="/data"><ul>Data Direct</ul></Link>
            <Link to="/fetch"><ul>Fetch</ul></Link>
            <Link to="/swiggy"><ul>Swiggy</ul></Link>
            <Link to="/"><ul>Hello</ul></Link>
        </div>
    </div>
  )
}

export default Navbar