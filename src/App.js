import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import EditProduct from './components/EditProduct';
import AddClient from './components/AddClient';
import ClientList from './components/ClientList';
import AddCustomer from './components/AddCustomer';
import CustomerList from './components/CustomerList';
import EditCustomer from './components/EditCustomer';
import Purchase from './components/Purchase';
import PurchaseList from './components/PurchaseList';
import AddExecutive from './components/AddExecutive';
import ExecutiveList from './components/ExecutiveList';
import EditExecutive from './components/EditExecutive';
import Sell from './components/Sell1';
import SellProductList from './components/SellProductList';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import AddExpenseType from './components/AddExpenseType';
import Stock from './components/Stock';
import './styles.css';

function App() {
    const [products, setProducts] = useState([]);
    const [clients, setClients] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [purchases, setPurchases] = useState([]);
    const [executives, setExecutives] = useState([]);
    const [sales, setSales] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [expenseTypes, setExpenseTypes] = useState([]);

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

    // Function to update a product
    const handleUpdateProduct = (id, updatedProduct) => {
        const updatedProducts = products.map(product =>
            product.id === id ? { ...product, ...updatedProduct } : product
        );
        setProducts(updatedProducts);
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

    // Function to update a customer
    const handleUpdateCustomer = (index, updatedCustomer) => {
        const updatedCustomers = [...customers];
        updatedCustomers[index] = updatedCustomer;
        setCustomers(updatedCustomers);
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

    // Function to update an executive
    const handleUpdateExecutive = (index, updatedExecutive) => {
        const updatedExecutives = [...executives];
        updatedExecutives[index] = updatedExecutive;
        setExecutives(updatedExecutives);
    };

    // Function to add a sale
    const handleAddSale = (sale) => {
        setSales((prevSales) => [...prevSales, sale]);
    };

    // Function to add an expense
    const handleAddExpense = (newExpense) => {
        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    };

    // Function to edit an expense
    const handleEditExpense = (index, updatedExpense) => {
        const updatedExpenses = [...expenses];
        updatedExpenses[index] = updatedExpense;
        setExpenses(updatedExpenses);
    };

    // Function to delete an expense
    const handleDeleteExpense = (index) => {
        setExpenses((prevExpenses) => prevExpenses.filter((_, i) => i !== index));
    };

    // Function to add an expense type
    const handleAddExpenseType = (newExpenseType) => {
        setExpenseTypes((prevExpenseTypes) => [...prevExpenseTypes, newExpenseType]);
    };

    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    {/* Default Route to redirect to Dashboard */}
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

                    {/* Edit Product Route */}
                    <Route 
                        path="/edit-product/:id" 
                        element={<EditProduct products={products} onUpdateProduct={handleUpdateProduct} />} 
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

                    {/* Edit Customer Route */}
                    <Route 
                        path="/edit-customer/:id" 
                        element={<EditCustomer customers={customers} onUpdateCustomer={handleUpdateCustomer} />} 
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

                    {/* Edit Executive Route */}
                    <Route 
                        path="/edit-executive/:id" 
                        element={<EditExecutive executives={executives} onUpdateExecutive={handleUpdateExecutive} />} 
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
                                onAddSale={handleAddSale}    
                            />
                        } 
                    />

                    {/* Sell Product List Route */}
                    <Route 
                        path="/sell-product-list" 
                        element={<SellProductList sales={sales} />} 
                    />

                    {/* Add Expense Type Route */}
                    <Route
                        path="/add-expense-type"
                        element={<AddExpenseType onAddExpenseType={handleAddExpenseType} onCancel={() => {}} />}
                    />
                    {/* Add Expense Route */}
                    <Route
                        path="/add-expense"
                        element={<AddExpense expenseTypes={expenseTypes} onAddExpense={handleAddExpense} />}
                    />
                    {/* Expense List Route */}
                    <Route
                        path="/expense-list"
                        element={<ExpenseList expenses={expenses} onEditExpense={handleEditExpense} onDeleteExpense={handleDeleteExpense} />}
                    />
                     {/* Stock Route */}
                     

                      <Route path="/stock" element={<Stock purchases={purchases} sales={sales} products={products} />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;
