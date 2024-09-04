import React from 'react';
import './Navbar.css';

function Navbar({ onSignOut, setPage }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Toy Store</div>
        <div>
          <a href="#home" className="navbar-link" onClick={() => setPage('home')}>Home</a>
          <a href="#products" className="navbar-link" onClick={() => setPage('products')}>Products</a>
          <a href="#contact" className="navbar-link" onClick={() => setPage('contact')}>Contact</a>
          <a href="#logout" className="navbar-logout" onClick={onSignOut}>Logout</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;