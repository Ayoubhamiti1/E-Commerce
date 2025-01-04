import { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cart_cross_icon.png'

const ListProduct = () => {

  const[allproducts,setAllproducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
    .then((res) => res.json())
    .then((data) =>{setAllproducts(data)});
  }

  useEffect(() => {
    fetchInfo();
  },[])

  const remove_product = async (id) => {
    try {
      const response = await fetch('http://localhost:4000/removeproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id })
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      await fetchInfo();
    } catch (error) {
      console.error('Failed to remove product:', error);
    }
  };
  


  return (
    <div className='list-product'>
      <h1>All Products list</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="listproducts-allproducts">
        <hr />
        {allproducts.map((product,index) => {
          return <>
            <div key={index} className="listproduct-format-main listproduct-format">
              <img src={product.image} alt="" className="listproduct-product-icon" />
              <p>{product.name}</p>
              <p>{product.old_price} Dh</p>
              <p>{product.new_price} Dh</p>
              <p>{product.category} </p>
              <img onClick={()=>{remove_product(product.id)}} src={cross_icon} className='listproduct-remove-icon' alt="" />    
            </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct