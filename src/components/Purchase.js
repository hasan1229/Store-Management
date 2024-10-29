// components/Purchase.js
import React, { useState } from 'react';
    const AddPurchase = ({ onAddPurchase }) =>{
    const [name, setName] = useState('');
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    
    const handleAddPurchase = (e) => {
        e.preventDefault();
        const newPurchase = {
            id: Date.now(),
            name,
            name: productName,
            price: parseFloat(price),
            quantity: parseInt(quantity),
        };
        onAddPurchase(newPurchase);
        setName('');
        setProductName('');
        setPrice('');
        setQuantity('');

    }

    
    return (
        <div>
            <h2>Add Purchase</h2>
            <form onSubmit={handleAddPurchase}>
          <div>
            <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
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
                <button type="submit">Add Purchase</button>
                </form>
        </div>
    );
};


export default AddPurchase;