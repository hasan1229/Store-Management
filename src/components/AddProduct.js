import React, { useState } from 'react';

const AddProduct = ({ onAddProduct }) => {
    const [products, setProducts] = useState([{ productType: '', productName: '' }]);
    const [isAddingProduct, setIsAddingProduct] = useState(false); // Track adding products

    const handleAddProduct = (e) => {
        e.preventDefault();
        products.forEach((product) => {
            console.log('Adding product:', product); // Log each product being added
            onAddProduct(product); // Call the function passed from parent
        });
        setProducts([{ productType: '', productName: '' }]); // Reset to initial state
        setIsAddingProduct(false); // Reset adding state
    };

    const handleChangeProduct = (index, field, value) => {
        const newProducts = [...products];
        newProducts[index][field] = value;
        setProducts(newProducts);
    };

    const handleAddAnotherProduct = () => {
        setProducts([...products, { productType: '', productName: '' }]);
        setIsAddingProduct(true); // Set to true when adding a new product
    };

    const handleCancelAddProduct = () => {
        if (products.length > 1) {
            setProducts(products.slice(0, -1)); // Remove the last entry
        } else {
            setProducts([{ productType: '', productName: '' }]); // Reset to initial state if no more entries
            setIsAddingProduct(false); // Hide Cancel button
        }
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
                {isAddingProduct && ( // Show Cancel button only when adding products
                    <button type="button" onClick={handleCancelAddProduct}>Cancel</button>
                )}
                <button type="submit">Submit Products</button>
            </form>
        </div>
    );
};

export default AddProduct;
