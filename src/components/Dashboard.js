import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Dashboard</h1>
            <div className="button-container">
                <div className="button-container-1">
                <Link to="/add-product" className="button-dash">Add Product</Link>
                <Link to="/add-client" className="button-dash">Add Client</Link>
                <Link to="/purchase" className="button-dash">Make a Purchase</Link>
                <Link to="/add-executive" className="button-dash">Add Executive</Link>
                <Link to="/add-customer" className="button-dash">Add Customer</Link>
                <Link to="/sell" className="button-dash-1">Sell</Link>
                </div>
                <div className="button-container-1">
                <Link to="/product-list" className="button-dash">Product List</Link>
                <Link to="/client-list" className="button-dash">Client List</Link>
                <Link to="/purchase-list" className="button-dash">Purchase list</Link>
                <Link to="/executive-list" className="button-dash">Executive List</Link>
                <Link to="/customer-list" className="button-dash">Customer List</Link>
                <Link to="/sell-product-list" className="button-dash-1">Sold List</Link>
                

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
