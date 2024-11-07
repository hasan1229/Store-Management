import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import AddClient from './components/AddClient';
import ClientList from './components/ClientList';
import AddCustomer from './components/AddCustomer';
import CustomerList from './components/CustomerList';
import Purchase from './components/Purchase';
import PurchaseList from './components/PurchaseList';
import AddExecutive from './components/AddExecutive';
import ExecutiveList from './components/ExecutiveList';
import Sell from './components/Sell1';  // Import Sell component
import SellProductList from './components/SellProductList';  // Import SellProductList component
import './styles.css';

function App() {
    const [products, setProducts] = useState([]);        // Holds the list of products
    const [clients, setClients] = useState([]);          // Holds the list of clients
    const [customers, setCustomers] = useState([]);      // Holds the list of customers
    const [purchases, setPurchases] = useState([]);      // Holds the list of purchases
    const [executives, setExecutives] = useState([]);    // Holds the list of executives
    const [sales, setSales] = useState([]);              // Holds the list of sales

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

    // Function to add a customer
    const handleAddCustomer = (customer) => {
        setCustomers((prevCustomers) => [...prevCustomers, customer]);
    };

    // Function to delete a customer by index
    const handleDeleteCustomer = (index) => {
        const newCustomers = customers.filter((_, i) => i !== index);
        setCustomers(newCustomers);
    };

    // Function to add an executive
    const handleAddExecutive = (executive) => {
        setExecutives((prevExecutives) => [...prevExecutives, executive]);
    };

    // Function to delete an executive by index
    const handleDeleteExecutive = (index) => {
        const newExecutives = executives.filter((_, i) => i !== index);
        setExecutives(newExecutives);
    };

    // Function to add a sale
    const handleAddSale = (sale) => {
        setSales((prevSales) => [...prevSales, sale]);
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

                    {/* Add Customer Route */}
                    <Route 
                        path="/add-customer" 
                        element={<AddCustomer onAddCustomer={handleAddCustomer} onCancel={() => {}} />}  
                    />

                    {/* Customer List Route */}
                    <Route 
                        path="/customer-list" 
                        element={<CustomerList customers={customers} onDeleteCustomer={handleDeleteCustomer} />}  
                    />

                    {/* Add Executive Route */}
                    <Route 
                        path="/add-executive" 
                        element={<AddExecutive onAddExecutive={handleAddExecutive} onCancel={() => {}} />} 
                    />

                    {/* Executive List Route */}
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
                                onAddPurchase={handleAddPurchase}    
                                onCancel={() => {}} 
                            />
                        } 
                    />

                    {/* Purchase List Route */}
                    <Route 
                        path="/purchase-list" 
                        element={<PurchaseList purchases={purchases} />}  
                    />

                    {/* Sell Route */}
                    <Route 
                        path="/sell" 
                        element={
                            <Sell 
                                customers={customers} 
                                executives={executives} 
                                products={products} 
                                onAddSale={handleAddSale}    // Pass handleAddSale to add sales
                            />
                        } 
                    />

                    {/* Sell Product List Route */}
                    <Route 
                        path="/sell-product-list" 
                        element={<SellProductList sales={sales} />} // Pass sales data to SellProductList
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
