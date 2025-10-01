// Simple purchase functionality without React
const products = {
  1: { name: "Draped Crop Top", price: 2499, image: "top2" },
  2: { name: "Designer Top", price: 1899, image: "top 1" },
  3: { name: "High Waist Jeans", price: 3299, image: "jeans 1" },
  4: { name: "Skinny Jeans", price: 2799, image: "skinny jeans" },
  5: { name: "Night Shorts", price: 4999, image: "night dress" },
  6: { name: "Casual Dress", price: 2299, image: "casual dress.avif" },
  7: { name: "Business Suit", price: 8999, image: "business suit" },
  8: { name: "Formal Suit", price: 7499, image: "formal suit" },
  9: { name: "Silk Saree", price: 12999, image: "silk saree" },
  10: { name: "Designer Saree", price: 15999, image: "designer saree" }
};

let orders = [];

function openPurchaseModal(productId) {
  const product = products[productId];
  if (!product) return;
  
  const modal = document.createElement('div');
  modal.className = 'purchase-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>Purchase ${product.name}</h2>
        <button class="close-btn" onclick="closePurchaseModal()">&times;</button>
      </div>
      
      <div class="product-summary">
        <h3>₹${product.price}</h3>
      </div>

      <form class="purchase-form" onsubmit="submitOrder(event, ${productId})">
        <input type="text" name="name" placeholder="Full Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="tel" name="phone" placeholder="Phone Number" required>
        <textarea name="address" placeholder="Delivery Address" required></textarea>
        
        <div class="form-row">
          <select name="size">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <input type="number" name="quantity" min="1" max="5" value="1">
        </div>
        
        <div class="total">
          <strong>Total: ₹<span id="total-price">${product.price}</span></strong>
        </div>
        
        <button type="submit" class="purchase-btn">Place Order</button>
      </form>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Update total when quantity changes
  const quantityInput = modal.querySelector('input[name="quantity"]');
  quantityInput.addEventListener('input', () => {
    const total = product.price * quantityInput.value;
    document.getElementById('total-price').textContent = total;
  });
}

function closePurchaseModal() {
  const modal = document.querySelector('.purchase-modal');
  if (modal) {
    modal.remove();
  }
}

function submitOrder(event, productId) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const order = {
    id: Date.now(),
    product: products[productId],
    customer: {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      size: formData.get('size'),
      quantity: parseInt(formData.get('quantity'))
    },
    total: products[productId].price * parseInt(formData.get('quantity')),
    orderDate: new Date().toISOString(),
    status: 'pending'
  };
  
  orders.push(order);
  
  // Show success message
  const modal = document.querySelector('.purchase-modal');
  modal.innerHTML = `
    <div class="modal-content">
      <div class="order-success">
        <h2>✅ Order Placed Successfully!</h2>
        <p>Order ID: ${order.id}</p>
        <p>Thank you for your purchase. We'll contact you soon!</p>
        <button onclick="closePurchaseModal()" class="purchase-btn">Close</button>
      </div>
    </div>
  `;
  
  // Store in localStorage for persistence
  localStorage.setItem('savanaOrders', JSON.stringify(orders));
  
  console.log('Order placed:', order);
}

// Load orders from localStorage on page load
window.addEventListener('load', () => {
  const savedOrders = localStorage.getItem('savanaOrders');
  if (savedOrders) {
    orders = JSON.parse(savedOrders);
  }
});