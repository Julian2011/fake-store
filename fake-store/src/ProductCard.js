import React from 'react';
import './ProductCard.css'; 

const ProductCard = ({ product, discountActive }) => {
  const originalPrice = product.price; 
  const discountedPrice = (originalPrice * 0.85).toFixed(2); 

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...'; 
    }
    return description; 
  };

  return (
    <div className="card mb-4">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{truncateDescription(product.description, 100)}</p>
        <p className="card-text">
          {discountActive ? (
            <>
              <span style={{ textDecoration: 'line-through' }}>${originalPrice.toFixed(2)}</span>
              <span style={{ color: 'red', marginLeft: '10px' }}>${discountedPrice}</span>
            </>
          ) : (
            <span>${originalPrice.toFixed(2)}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;