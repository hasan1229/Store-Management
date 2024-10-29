import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import Sell from './components/Sell';
import AddCustomer from './components/AddCustomer';
import CustomerList from './components/CustomerList';
import DueList from './components/DueList';
import SalesReport from './components/SalesReport';
import Purchase from './components/Purchase';
import AddClient from './components/AddClient';
import PurchaseList from './components/PurchaseListTemp';
import Purchase2 from './components/Purchase2';
import './styles.css';

function App() {
    const [purchases, setPurchases] = useState([]);
    const [products, setProducts] = useState([]); // Start with an empty products array
    const [customers, setCustomers] = useState([]);
    const [sales, setSales] = useState([]);
    const [AddClients, setAddClients] = useState([]);

    const handleAddProduct = (product) => {
        // Ensure product includes quantity and price when added
        setProducts([...products, { id: Date.now(), ...product }]);
    };

    const handleAddPurchase = (purchase) => {
        setPurchases([...purchases, purchase]);
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

    const handleSellProduct = (productId, quantity, customerId) => {
        const product = products.find((p) => p.id === productId);

        if (product && quantity > 0) {
            setProducts(
                products.map((p) =>
                    p.id === productId ? { ...p, quantity: p.quantity - quantity } : p
                )
            );

            const saleRecord = {
                id: Date.now(),
                productName: product.name,
                productId,
                quantity,
                price: product.price,
                total: quantity * product.price,
                date: new Date().toLocaleDateString(),
                customerId,
            };
            setSales((prevSales) => [...prevSales, saleRecord]);
            handleUpdateCustomerDue(customerId, saleRecord.total);
        }
    };

    const handleAddCustomer = (customer) => {
        setCustomers([...customers, customer]);
    };

    const handleUpdateCustomerDue = (customerId, dueAmount) => {
        setCustomers(customers.map((customer) =>
            customer.id === customerId ? { ...customer, due: (customer.due || 0) + dueAmount } : customer
        ));
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
                        path="/products" 
                        element={<ProductList products={products} onEditProduct={handleEditProduct} onDeleteProduct={handleDeleteProduct} />} 
                    />
                    <Route 
                        path="/add-product" 
                        element={<AddProduct onAddProduct={handleAddProduct} />} 
                    />
                    <Route 
                        path="/Purchase2" 
                        element={<Purchase2 clients={AddClients} products={products} />} 
                    />
                    <Route 
                        path="/sell" 
                        element={<Sell 
                            products={products} 
                            customers={customers} 
                            onSellProduct={handleSellProduct} 
                            sales={sales} 
                        />} 
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
                        path="/due-list" 
                        element={<DueList customers={customers} />} 
                    />
                    <Route 
                        path="/sales-report" 
                        element={<SalesReport sales={sales} customers={customers} products={products} />} 
                    />
                    <Route 
                        path="/purchase" 
                        element={<Purchase onAddPurchase={handleAddPurchase} />} 
                    />
                    <Route 
                        path="/purchaselist" 
                        element={<PurchaseList purchases={purchases} />} 
                    />
                    <Route 
                        path="/AddClient" 
                        element={<AddClient onAddClient={handleAddClient} />} 
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
