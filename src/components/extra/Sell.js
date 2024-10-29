// components/Sell.js
import React, { useState } from 'react';

    const Sell = ({ products, customers, onSellProduct, sales }) => {
    const [selectedProductId, setSelectedProductId] = useState('');
    const [selectedCustomerId, setSelectedCustomerId] = useState('');
    const [quantity, setQuantity] = useState(1); // Default quantity to 1

    const handleSell = (e) => {
        e.preventDefault();
        if (onSellProduct) { // Check if the function exists
            onSellProduct(selectedProductId, quantity, selectedCustomerId);
        }
        // Reset the fields after selling
        setSelectedProductId('');
        setSelectedCustomerId('');
        setQuantity(1); // Reset quantity to 1 after sale
    };

    return (
        <div>
            <h2>Sell Product</h2>
            <form onSubmit={handleSell}>
                <div>
                    <label>Select Product:</label>
                    <select value={selectedProductId} onChange={(e) => setSelectedProductId(e.target.value)} required>
                        <option value="">Select a product</option>
                        {products.map((product) => (
                            <option key={product.id} value={product.id}>{product.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Select Customer:</label>
                    <select value={selectedCustomerId} onChange={(e) => setSelectedCustomerId(e.target.value)} required>
                        <option value="">Select a customer</option>
                        {customers.map((customer) => (
                            <option key={customer.id} value={customer.id}>{customer.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Quantity:</label>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" required />
                </div>
                <button type="submit">Sell</button>
            </form>

            
        </div>
    );
};

export default Sell;
