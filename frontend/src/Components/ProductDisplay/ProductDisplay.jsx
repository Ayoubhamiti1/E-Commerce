import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product = {} } = props; // Set a default empty object if product is not provided
  const { addToCart } = useContext(ShopContext);

  return (
    <div className='productdisplay'>
      {product && ( // Check if product exists before rendering
        <>
          <div className="productdisplay-left">
            <div className="productdisplay-img-list">
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
            </div>
            <div className='productdisplay-img'>
              <img className='productdisplay-main-img' src={product.image || ""} alt="" /> {/* Use an empty string as fallback for image */}
            </div>
          </div>

          <div className="productdisplay-right">
            <h1>{product.name || "Product Name"}</h1> {/* Use default value for name */}
            <div className='productdisplay-right-stars'>
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_dull_icon} alt="" />
              <p>(121)</p>
            </div>

            <div className="productdisplay-right-prices">
              <div className="productdisplay-right-price-old">{product.old_price}Dh</div>
              <div className="productdisplay-right-price-new">{product.new_price}Dh</div>
            </div>

            <div className="productdisplay-right-description">Transform your look with these stylish and functional sunglasses. Perfect for sunny days.</div>

            <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category : </span>{product.category}</p>
            <p className='productdisplay-right-category'><span>Tags : </span>Modern , Latest</p>
          </div>
        </>
      )}
      {!product && <p>Loading Product...</p>} {/* Display loading message if product is not available */}
    </div>
  );
};

export default ProductDisplay;