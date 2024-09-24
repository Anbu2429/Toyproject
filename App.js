import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import ProductList from './Product/ProductList';
import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import AuthPage from './components/AuthPage';  // Import the AuthPage component
import Cart from './Cart/Cart'; // Import the Cart component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // State to check if user is authenticated
  const [currentPage, setCurrentPage] = useState('home');  // State for page navigation
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    // Logic to add the product to the cart
    setInCart(true); // Switch to cart view
    setCurrentPage('cart'); // Set the current page to cart
  };

  const handleViewProduct = () => {
    setInCart(false); // Switch back to product view
    setCurrentPage('products'); // Ensure current page is set to products
  };

  const handleSignIn = () => {
    setIsAuthenticated(true);  // Set authentication to true after sign-in
    setCurrentPage('home');    // Redirect to home after successful sign-in
  };

  const handleSignOut = () => {
    setIsAuthenticated(false); // Set authentication to false on sign-out
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'products':
        return <ProductList />;
      case 'contact':
        return <Contact />;
      case 'cart':  // Added case for cart
        return <Cart onBackToProduct={handleViewProduct} />; // Pass function to go back to products
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {isAuthenticated ? (  // If authenticated, show the main app content
        <>
          <Navbar onSignOut={handleSignOut} setPage={setCurrentPage} />
          {renderPage()}
          <Footer />
        </>
      ) : (  // If not authenticated, show the AuthPage
        <AuthPage onSignIn={handleSignIn} />  // Pass onSignIn to AuthPage for handling login
      )}
    </div>
  );
}

export default App;
