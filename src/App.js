import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import AddClient from './components/AddClient';
import ClientList from './components/ClientList';
import Purchase from './components/Purchase';
import PurchaseList from './components/PurchaseList'; // Import PurchaseList component
import AddExecutive from './components/AddExecutive';
import ExecutiveList from './components/ExecutiveList';
import './styles.css';

function App() {
    const [products, setProducts] = useState([]);        // Holds the list of products
    const [clients, setClients] = useState([]);          // Holds the list of clients
    const [purchases, setPurchases] = useState([]);      // Holds the list of purchases
    const [executives, setExecutives] = useState([]); 
    // Function to add new purchases
    const handleAddPurchase = (newPurchases) => {
        setPurchases((prevPurchases) => [...prevPurchases, ...newPurchases]);
    };

    // Function to add a product
    const handleAddProduct = (product) => {
        setProducts((prevProducts) => [...prevProducts, product]);
    };

    // Function to delete a product by index
    const handleDeleteProduct = (index) => {
        const newProducts = products.filter((_, i) => i !== index);
        setProducts(newProducts);
    };

    // Function to add a client
    const handleAddClient = (client) => {
        setClients((prevClients) => [...prevClients, client]);
    };

    // Function to delete a client by index
    const handleDeleteClient = (index) => {
        const newClients = clients.filter((_, i) => i !== index);
        setClients(newClients);
    };
     // Function to add a Executive
     const handleAddExecutive = (executive) => {
        setExecutives((prevExecutives) => [...prevExecutives, executive]);
    };
    const handleDeleteExecutive = (index) => {
        const newExecutives = executives.filter((_, i) => i !== index);
        setExecutives(newExecutives);
    };

    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    {/* Navigate to the dashboard by default */}
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    
                    {/* Dashboard Route */}
                    <Route path="/dashboard" element={<Dashboard />} />

                    {/* Add Product Route */}
                    <Route 
                        path="/add-product" 
                        element={<AddProduct onAddProduct={handleAddProduct} onCancel={() => {}} />} 
                    />

                    {/* Product List Route */}
                    <Route 
                        path="/product-list" 
                        element={<ProductList products={products} onDeleteProduct={handleDeleteProduct} />} 
                    />

                    {/* Add Client Route */}
                    <Route 
                        path="/add-client" 
                        element={<AddClient onAddClient={handleAddClient} onCancel={() => {}} />} 
                    />

                    {/* Client List Route */}
                    <Route 
                        path="/client-list" 
                        element={<ClientList clients={clients} onDeleteClient={handleDeleteClient} />} 
                    />
                    <Route 
                        path="/add-executive" 
                        element={<AddExecutive onAddExecutive={handleAddExecutive} onCancel={() => {}} />} 
                    />
                    <Route 
                        path="/executive-list" 
                        element={<ExecutiveList executives={executives} onDeleteExecutive={handleDeleteExecutive} />} 
                    />

                    {/* Purchase Route */}
                    <Route 
                        path="/purchase" 
                        element={
                            <Purchase 
                                products={products} 
                                clients={clients} 
                                onAddPurchase={handleAddPurchase}    // Pass the handleAddPurchase to update purchases
                                onCancel={() => {}} 
                            />
                        } 
                    />

                    {/* Purchase List Route */}
                    <Route 
                        path="/purchase-list" 
                        element={<PurchaseList purchases={purchases} />}  // Pass purchases to display in PurchaseList
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
