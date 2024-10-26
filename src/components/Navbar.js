// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
    <nav className="navbar"> {/* Apply the navbar class */}
        <h1 className="navbar-title">Store Management</h1>
        <div className="navbar-links"> {/* Add a wrapper for the links */}
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/products">Products</Link>
            <Link to="/add-product">Add Product</Link>
            <Link to="/sell">Sell</Link> {/* New Sell Link */}
            <Link to="/sales-report">Sales Report</Link>
            <Link to="/add-customer">Add Customer</Link> {/* Link to Add Customer */}
            <Link to="/customer-list">Customer List</Link> {/* Link to Customer List */}
            <Link to="/due-list">Due List</Link> {/* Link to Due List */}
        </div>
    </nav>
);

export default Navbar;
