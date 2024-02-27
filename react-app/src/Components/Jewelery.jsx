import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Jewelery = () => {
    const [jewels, setJewels] = useState([])
  
    useEffect(() => {
      const getJewelery = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
        const data = await res.json();
        console.log("products data", data);
        setJewels(data);
      };
      getJewelery();
    }, []);

  return (
    <div>
        <div className='grid grid-cols-4 gap-4'>
        {jewels &&
          jewels.map((p, id) => {
            return (
              <div key={id} className='border-2 border-gray-200'>
                <Link to={`/singleProduct/${p.id}`}>
                  <p>{p.title}</p>
                  <p>{p.category}</p>
                  <img src={p.image} className='w-[100px] h-[100px] m-auto' alt={p.title} />
                  <p>{p.price}</p>
                  <p>{p.rating.rate}</p>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  )
}

export default Jewelery