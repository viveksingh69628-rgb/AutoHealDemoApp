import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import CheckboxDemo from "./components/CheckboxDemo";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <Router>
      <div className="app">
        {/* Header Section */}
        <header className="header">
          <div className="top-bar">
            <div className="logo">
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>Demo App</h1>
              </Link>
            </div>
            <div className="user-actions">
              <Link to="/register" className="register-link">Register</Link>
              <span className="separator">|</span>
              <Link to="/login" className="login-link">Login</Link>
              <div className="cart-info">
                <span className="cart-icon">🛒</span>
                <span className="cart-count">({cartCount})</span>
              </div>
              <div className="wishlist-info">
                <span className="wishlist-icon">❤️</span>
                <span className="wishlist-count">({wishlistCount})</span>
              </div>
            </div>
          </div>

          {/* Search Section */}
          <div className="search-section">
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Search store"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">Search</button>
            </form>
          </div>
        </header>

        {/* Navigation/Categories Section */}
        <nav className="categories">
          <ul className="category-list">
            <li>
              <Link to="/category/checkbox">CHECKBOX</Link>
            </li>
            <li>
              <Link to="/category/textbox">TEXTBOX</Link>
            </li>
            <li>
              <Link to="/category/electronics">BUTTON</Link>
            </li>
            <li>
              <Link to="/category/tables">TABLES</Link>
            </li>
            <li>
              <Link to="/category/dropdown">DROPDOWN</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/checkbox" element={<CheckboxDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;