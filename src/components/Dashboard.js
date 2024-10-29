// components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <p>Welcome to the Store Management Dashboard</p>
            <p>Use the navigation to access features like products, customers, and clients.</p>
            <div className="dashboard-buttons button-container">
                <Link to="/add-customer">
                    <button className="dashboard-button">Add Customer</button>
                </Link>
                <Link to="/customer-list">
                    <button className="dashboard-button">Customer List</button>
                </Link>
                <Link to="/add-product">
                    <button className="dashboard-button">Add Product</button>
                </Link>
                <Link to="/AddClient">
                    <button className="dashboard-button">Add Client</button>
                </Link>
                <Link to="/Purchase2">
                    <button className="dashboard-button">Purchase2</button>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
