import React from 'react';
import './Product.css';
import { click } from '@testing-library/user-event/dist/click';

function Product({ imageUrl, name, description, price, rating }) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <div className="product-info">
          <span className="product-price">${price}</span>
          <span className="check-box">{click}</span>
        </div>
      </div>
    </div>
  );
}

export default Product;