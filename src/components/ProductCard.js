import React, { useState } from 'react';
import PurchaseModal from './PurchaseModal';

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePurchaseClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="product-card" data-category={product.category}>
        <img 
          src={product.image} 
          alt={product.name}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'flex';
          }}
        />
        <div className="product-img" style={{
          background: 'linear-gradient(45deg, #d4a574, #b8935f)',
          display: 'none'
        }}>
          <span>{product.name}</span>
        </div>
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
        <button 
          className="buy-btn"
          onClick={handlePurchaseClick}
        >
          Buy Now
        </button>
      </div>
      
      <PurchaseModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;