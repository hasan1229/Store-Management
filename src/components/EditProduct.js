// src/EditProduct.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = ({ products, onUpdateProduct }) => {
    const { id } = useParams();  // Get the product id from the URL
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        productType: 'bar phone',
        productName: ''
    });

    // Load the existing product data if we're editing
    useEffect(() => {
        if (id) {
            const existingProduct = products.find((product) => product.id === parseInt(id));
            if (existingProduct) {
                setProduct(existingProduct);
            }
        }
    }, [id, products]);

    const handleChange = (field, value) => {
        setProduct(prevProduct => ({ ...prevProduct, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update the product
        onUpdateProduct(id, product);
        navigate('/product-list');  // Navigate back to the product list after update
    };

    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Product Type:
                    <select
                        value={product.productType}
                        onChange={(e) => handleChange('productType', e.target.value)}
                    >
                        <option value="bar phone">Bar Phone</option>
                        <option value="smartphone">Smartphone</option>
                    </select>
                </label>
                <label>
                    Product Name:
                    <input
                        type="text"
                        value={product.productName}
                        onChange={(e) => handleChange('productName', e.target.value)}
                        required
                    />
                </label>
                <div>
                    <button type="submit">Update Product</button>
                </div>
            </form>
        </div>
    );
};

export default EditProduct;
