// src/components/AddProduct.js
import React, { useState } from 'react';

const AddProduct = ({ onAddProduct }) => {
    const [products, setProducts] = useState([{ productType: '', productName: '' }]);

    const handleAddProduct = (e) => {
        e.preventDefault();
        onAddProduct(products); // Pass all products to the parent
        setProducts([{ productType: '', productName: '' }]); // Reset to initial state
    };

    const handleChangeProduct = (index, field, value) => {
        const newProducts = [...products];
        newProducts[index][field] = value;
        setProducts(newProducts);
    };

    const handleAddAnotherProduct = () => {
        setProducts([...products, { productType: '', productName: '' }]);
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleAddProduct}>
                {products.map((product, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <label>Product Type:</label>
                        <select
                            value={product.productType}
                            onChange={(e) => handleChangeProduct(index, 'productType', e.target.value)}
                            required
                        >
                            <option value="">Select Product Type</option>
                            <option value="Bar Phone">Bar Phone</option>
                            <option value="Smart Phone">Smart Phone</option>
                        </select>
                        <label>Product Name:</label>
                        <input
                            type="text"
                            placeholder="Enter Product Name"
                            value={product.productName}
                            onChange={(e) => handleChangeProduct(index, 'productName', e.target.value)}
                            required
                        />
                    </div>
                ))}

                <button type="button" onClick={handleAddAnotherProduct}>
                    Add Another Product
                </button>
                <button type="submit">Submit Products</button>
            </form>
        </div>
    );
};

export default AddProduct;
