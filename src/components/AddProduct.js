// components/AddProduct.js
import React, { useState } from 'react';

const AddProduct = ({ onAddProduct }) => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleAddProduct = (e) => {
        e.preventDefault();

        const newProduct = {
            id: Date.now(),
            name: productName,
            price: parseFloat(price),
            quantity: parseInt(quantity),
        };

        onAddProduct(newProduct);

        setProductName('');
        setPrice('');
        setQuantity('');
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleAddProduct}>
                <div>
                    <label>Product Name:</label>
                    <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
