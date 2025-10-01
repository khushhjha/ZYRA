// Product database simulation
export const products = [
  {
    id: 1,
    name: "Draped Crop Top",
    price: 2499,
    category: "tops",
    image: "top2",
    description: "Stylish draped crop top perfect for casual wear",
    inStock: true
  },
  {
    id: 2,
    name: "Designer Top",
    price: 1899,
    category: "tops", 
    image: "top 1",
    description: "Premium designer top with elegant styling",
    inStock: true
  },
  {
    id: 3,
    name: "High Waist Jeans",
    price: 3299,
    category: "jeans",
    image: "jeans 1", 
    description: "Comfortable high waist jeans with perfect fit",
    inStock: true
  },
  {
    id: 4,
    name: "Skinny Jeans",
    price: 2799,
    category: "jeans",
    image: "skinny jeans",
    description: "Classic skinny jeans for modern look",
    inStock: true
  },
  {
    id: 5,
    name: "Night Shorts",
    price: 4999,
    category: "dresses",
    image: "night dress",
    description: "Comfortable night shorts for relaxation",
    inStock: true
  },
  {
    id: 6,
    name: "Casual Dress",
    price: 2299,
    category: "dresses",
    image: "casual dress.avif",
    description: "Beautiful casual dress for everyday wear",
    inStock: true
  },
  {
    id: 7,
    name: "Business Suit",
    price: 8999,
    category: "suits",
    image: "business suit",
    description: "Professional business suit for office wear",
    inStock: true
  },
  {
    id: 8,
    name: "Formal Suit",
    price: 7499,
    category: "suits",
    image: "formal suit",
    description: "Elegant formal suit for special occasions",
    inStock: true
  },
  {
    id: 9,
    name: "Silk Saree",
    price: 12999,
    category: "sarees",
    image: "silk saree",
    description: "Traditional silk saree with premium quality",
    inStock: true
  },
  {
    id: 10,
    name: "Designer Saree",
    price: 15999,
    category: "sarees",
    image: "designer saree",
    description: "Designer saree with intricate patterns",
    inStock: true
  }
];

// Simple database simulation for orders
export let orders = [];

export const addOrder = (order) => {
  const newOrder = {
    id: Date.now(),
    ...order,
    orderDate: new Date().toISOString(),
    status: 'pending'
  };
  orders.push(newOrder);
  return newOrder;
};

export const getOrders = () => orders;