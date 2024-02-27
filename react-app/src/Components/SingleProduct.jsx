import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const singleProduct = async() => {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const singleData = await res.json();
            console.log("products data", singleData);
            setProduct(singleData)
        }
        singleProduct()
    }, [id])

  return (
    <div className="modal" tabIndex={-1}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body" style={{border:"1px solid gray"}}>
        <h5>Product Title: {product.title}</h5>
        <p>Category: {product.category}</p>
        <img src={product.image} className='w-[100px] h-[100px] m-auto'/>
        <p>Price: ${product.price}</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default SingleProduct