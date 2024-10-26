// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import Sell from './components/Sell'; // Ensure this path is correct
import AddCustomer from './components/AddCustomer'; // Import AddCustomer
import CustomerList from './components/CustomerList'; // Import CustomerList
import DueList from './components/DueList'; // Import DueList
import './styles.css';

function App() {
    const [products, setProducts] = useState([]);
    const [customers, setCustomers] = useState([]); // To keep track of customer records
    const [sales, setSales] = useState([]); // To keep track of sales records

    const handleAddProduct = (product) => {
        setProducts([...products, product]);
    };

    const handleEditProduct = (updatedProduct) => {
        setProducts(
            products.map((product) => 
                product.id === updatedProduct.id ? updatedProduct : product
            )
        );
    };

    const handleDeleteProduct = (productId) => {
        setProducts(products.filter((product) => product.id !== productId));
    };

    const handleSellProduct = (productId, quantity) => {
        const product = products.find((p) => p.id === productId);

        if (product) {
            setProducts(
                products.map((p) =>
                    p.id === productId ? { ...p, quantity: p.quantity - quantity } : p
                )
            );

            const saleRecord = {
                id: Date.now(),
                productName: product.name,
                quantity,
                price: product.price,
                total: quantity * product.price,
                date: new Date().toLocaleDateString(),
            };

            setSales([...sales, saleRecord]);
        }
    };

    const handleAddCustomer = (customer) => {
        setCustomers([...customers, customer]);
    };

    // Optional: Function to update customer due
    const handleUpdateCustomerDue = (customerId, dueAmount) => {
        setCustomers(customers.map((customer) =>
            customer.id === customerId ? { ...customer, due: customer.due + dueAmount } : customer
        ));
    };

    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route 
                        path="/products" 
                        element={
                            <ProductList
                                products={products}
                                onEditProduct={handleEditProduct}
                                onDeleteProduct={handleDeleteProduct}
                            />
                        } 
                    />
                    <Route 
                        path="/add-product" 
                        element={<AddProduct onAddProduct={handleAddProduct} />} 
                    />
                    <Route 
                        path="/sell" 
                        element={<Sell 
                            products={products} 
                            customers={customers} 
                            onSellProduct={handleSellProduct} 
                            onUpdateCustomerDue={handleUpdateCustomerDue} 
                        />} 
                    />
                    <Route 
                        path="/add-customer" 
                        element={<AddCustomer onAddCustomer={handleAddCustomer} />} 
                    /> {/* Add Customer Route */}
                    <Route 
                        path="/customer-list" 
                        element={<CustomerList customers={customers} />} 
                    /> {/* Customer List Route */}
                    <Route 
                        path="/due-list" 
                        element={<DueList customers={customers} />} 
                    /> {/* Due List Route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
