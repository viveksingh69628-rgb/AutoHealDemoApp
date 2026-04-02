import React from "react";
import "./Home.css";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Sample Product 1",
      price: "$29.99",
      icon: "📦",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Sample Product 2",
      price: "$49.99",
      icon: "👕",
      category: "Apparel",
    },
    {
      id: 3,
      name: "Sample Product 3",
      price: "$79.99",
      icon: "👟",
      category: "Shoes",
    },
    {
      id: 4,
      name: "Sample Product 4",
      price: "$19.99",
      icon: "📚",
      category: "Books",
    },
  ];

  return (
    <>
      <main className="main-content">
      <div className="featured-products">
        <h2>Welcome to Demo Web Shop</h2>
        <p>Discover our amazing collection of products!</p>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.icon}</div>
              <h3>{product.name}</h3>
              <p className="category">{product.category}</p>
              <p className="price">{product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      </main>
    </>
  );
};

export default Home;
