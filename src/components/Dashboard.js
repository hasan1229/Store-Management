import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen); // Toggle sidebar open/close
    };

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
                <h1 className="dashboard-title-sidebar">Dashboard</h1>
                <ul className="sidebar-links">
                    <li><Link to="/add-product" className="dashboard-sidebar-link">Add Product</Link></li>
                    <li><Link to="/add-client" className="dashboard-sidebar-link">Add Client</Link></li>
                    <li><Link to="/purchase" className="dashboard-sidebar-link">Make a Purchase</Link></li>
                    <li><Link to="/add-executive" className="dashboard-sidebar-link">Add Executive</Link></li>
                    <li><Link to="/add-customer" className="dashboard-sidebar-link">Add Customer</Link></li>
                    <li><Link to="/sell" className="dashboard-sidebar-link">Sell</Link></li>
                    <li><Link to="/stock" className="dashboard-sidebar-link">Stock</Link></li>
                </ul>
            </div>

            {/* Toggle button for sidebar */}
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i> {/* Hamburger icon */}
            </button>

            {/* Main Content Area */}
            <div className={`dashboard-main-content ${sidebarOpen ? 'shifted' : ''}`}>
                <h2 className="dashboard-main-title">Welcome to your Dashboard</h2>
                <p>Here you can manage products, clients, and more!</p>
                {/* Other Buttons outside the sidebar */}
                <div className="other-buttons">
                    <Link to="/product-list" className="dashboard-main-link">Product List</Link>
                    <Link to="/client-list" className="dashboard-main-link">Client List</Link>
                    <Link to="/purchase-list" className="dashboard-main-link">Purchase List</Link>
                    <Link to="/executive-list" className="dashboard-main-link">Executive List</Link>
                    <Link to="/customer-list" className="dashboard-main-link">Customer List</Link>
                    <Link to="/expense-list" className="dashboard-main-link">Expense List</Link>
                    <Link to="/add-expense" className="dashboard-main-link">Add Expense</Link>
                    <Link to="/add-expense-type" className="dashboard-main-link">Add Expense Type</Link>
                    <Link to="/profit-report" className="dashboard-main-link">profit-report</Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
