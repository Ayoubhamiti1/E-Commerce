import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';
import './Breadcrum.css';

const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum">
      {/* Display default breadcrumb if product is not available */}
      {!product && <p>Loading...</p>}
      {product && (
        <div className="breadcrum">
          HOME
          <img src={arrow_icon} className='bd' alt="" />
          SHOP
          <img src={arrow_icon} className='bd'  alt="" />
          {product.category}
          <img src={arrow_icon} className='bd' alt="" />
          {product.name}
        </div>
      )}
    </div>
  );
};

export default Breadcrum;