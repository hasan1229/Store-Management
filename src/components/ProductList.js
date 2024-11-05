import React, { useState } from 'react';

const ProductList = ({ products, onDeleteProduct }) => {
    const [selectedType, setSelectedType] = useState('all');

    // Get unique product types
    const productTypes = [...new Set(products.map(product => product.productType)), 'all'];

    // Filter products based on selected type
    const filteredProducts = selectedType === 'all' ? products : products.filter(product => product.productType === selectedType);

    return (
        <div>
            <h2>Product List</h2>
            <div>
                <label>
                    Filter by Product Type:
                    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                        {productTypes.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Product Type</th>
                        <th>Product Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <tr key={index}>
                                <td>{product.productType}</td>
                                <td>{product.productName}</td>
                                <td>
                                    <button onClick={() => onDeleteProduct(index)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" style={{ textAlign: 'center' }}>No products found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
