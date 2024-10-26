// components/Sell.js
import React, { useState } from 'react';

const Sell = ({ products, customers, onSellProduct, onUpdateCustomerDue }) => {
    const [selectedProductId, setSelectedProductId] = useState('');
    const [selectedCustomerId, setSelectedCustomerId] = useState(''); // New state for selected customer
    const [quantity, setQuantity] = useState(0);

    const handleSell = (e) => {
        e.preventDefault();
        const product = products.find(p => p.id === selectedProductId);
        if (product) {
            onSellProduct(selectedProductId, quantity);
            const dueAmount = quantity * product.price; // Calculate due amount
            if (selectedCustomerId) {
                onUpdateCustomerDue(selectedCustomerId, dueAmount); // Update the customer's due
            }
            setQuantity(0);
            setSelectedProductId('');
            setSelectedCustomerId(''); // Clear the selected customer
        }
    };

    return (
        <div>
            <h2>Sell Product</h2>
            <form onSubmit={handleSell}>
                <div>
                    <label>Product:</label>
                    <select
                        value={selectedProductId}
                        onChange={(e) => setSelectedProductId(e.target.value)}
                        required
                    >
                        <option value="">Select a product</option>
                        {products.map((product) => (
                            <option key={product.id} value={product.id}>
                                {product.name} (Available: {product.quantity})
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Customer:</label>
                    <select
                        value={selectedCustomerId}
                        onChange={(e) => setSelectedCustomerId(e.target.value)}
                        required
                    >
                        <option value="">Select a customer</option>
                        {customers.map((customer) => (
                            <option key={customer.id} value={customer.id}>
                                {customer.name} (Due: {customer.due})
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Quantity:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        min="1"
                        required
                    />
                </div>
                <button type="submit">Sell</button>
            </form>
        </div>
    );
};

export default Sell;
