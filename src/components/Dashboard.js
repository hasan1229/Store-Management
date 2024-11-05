import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Dashboard</h1>
            <div className="button-container">
                
                <Link to="/add-product" className="button">Add Product</Link>
                <Link to="/add-client" className="button">Add Client</Link>
                <Link to="/purchase" className="button">Make a Purchase</Link>
                <Link to="/purchase-list" className="button">Purchase list</Link>
            </div>
        </div>
    );
};

export default Dashboard;
