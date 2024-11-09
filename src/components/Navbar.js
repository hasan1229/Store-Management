// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-title">Store Management</h1>
            
            {/* Hamburger icon */}
            <button className="hamburger-icon" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            {/* Navbar links */}
            <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Dashboard</Link></li>
                <li><Link to="/add-product" onClick={() => setIsMenuOpen(false)}>Add Product</Link></li>
                <li><Link to="/product-list" onClick={() => setIsMenuOpen(false)}>Product List</Link></li>
                <li><Link to="/add-client" onClick={() => setIsMenuOpen(false)}>Add Client</Link></li>
                <li><Link to="/purchase-list" onClick={() => setIsMenuOpen(false)}>Purchase List</Link></li>
                <li><Link to="/add-executive" onClick={() => setIsMenuOpen(false)}>Executive</Link></li>
                <li><Link to="/add-customer" onClick={() => setIsMenuOpen(false)}>Customer</Link></li>
                <li><Link to="/sell" onClick={() => setIsMenuOpen(false)}>Sell</Link></li>
                <li><Link to="/sell-product-list" onClick={() => setIsMenuOpen(false)}>Sell List</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
