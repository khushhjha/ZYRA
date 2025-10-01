import React, { useState } from 'react';
import { addOrder } from '../data/products';

const PurchaseModal = ({ product, isOpen, onClose }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    size: 'M',
    quantity: 1
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    
    const order = {
      product: product,
      customer: customerInfo,
      total: product.price * customerInfo.quantity
    };
    
    addOrder(order);
    setOrderPlaced(true);
    
    setTimeout(() => {
      setOrderPlaced(false);
      onClose();
      setCustomerInfo({
        name: '',
        email: '',
        phone: '',
        address: '',
        size: 'M',
        quantity: 1
      });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {orderPlaced ? (
          <div className="order-success">
            <h2>✅ Order Placed Successfully!</h2>
            <p>Thank you for your purchase. We'll contact you soon!</p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2>Purchase {product.name}</h2>
              <button className="close-btn" onClick={onClose}>×</button>
            </div>
            
            <div className="product-summary">
              <h3>₹{product.price}</h3>
              <p>{product.description}</p>
            </div>

            <form onSubmit={handlePurchase} className="purchase-form">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={customerInfo.name}
                onChange={handleInputChange}
                required
              />
              
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={customerInfo.email}
                onChange={handleInputChange}
                required
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={customerInfo.phone}
                onChange={handleInputChange}
                required
              />
              
              <textarea
                name="address"
                placeholder="Delivery Address"
                value={customerInfo.address}
                onChange={handleInputChange}
                required
              />
              
              <div className="form-row">
                <select
                  name="size"
                  value={customerInfo.size}
                  onChange={handleInputChange}
                >
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
                
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  max="5"
                  value={customerInfo.quantity}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="total">
                <strong>Total: ₹{product.price * customerInfo.quantity}</strong>
              </div>
              
              <button type="submit" className="purchase-btn">
                Place Order
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PurchaseModal;