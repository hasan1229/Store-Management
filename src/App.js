import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import AddCustomer from './components/AddCustomer';
import CustomerList from './components/CustomerList';
import AddClient from './components/AddClient';
import Purchase2 from './components/Purchase2';
import './styles.css';

function App() {
    const [products, setProducts] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [AddClients, setAddClients] = useState([]);

    const handleAddProduct = (product) => {
        setProducts((prevProducts) => [...prevProducts, { id: Date.now(), ...product }]);
    };
    

    const handleAddCustomer = (customer) => {
        setCustomers([...customers, customer]);
    };

    const handleAddClient = (AddClient) => {
        setAddClients([...AddClients, AddClient]);
    };
    

    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route 
                        path="/add-product" 
                        element={<AddProduct onAddProduct={handleAddProduct} />} 
                    />
                    <Route 
                        path="/add-customer" 
                        element={<AddCustomer onAddCustomer={handleAddCustomer} />} 
                    />
                    <Route 
                        path="/customer-list" 
                        element={<CustomerList customers={customers} />} 
                    />
                    <Route 
                        path="/AddClient" 
                        element={<AddClient onAddClient={handleAddClient} />} 
                    />
                    <Route 
                        path="/Purchase2" 
                        element={<Purchase2 clients={AddClients} products={products} />} 
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
