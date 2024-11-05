// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Store Management</h1>
            <ul className="navbar-links">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/add-product">Add Product</Link></li>
                <li><Link to="/product-list">Product List</Link></li>
                <li><Link to="/add-client">Add Client</Link></li>
                <li><Link to="/purchase-list">Purchase List</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
