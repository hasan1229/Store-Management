import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddProduct = ({ onAddProduct, onCancel }) => {
    const [products, setProducts] = useState([{ productType: 'bar phone', productName: '' }]);

    const handleChange = (index, field, value) => {
        const newProducts = [...products];
        newProducts[index][field] = value;
        setProducts(newProducts);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        products.forEach(product => {
            if (product.productName.trim()) {
                onAddProduct(product);
            }
        });
        setProducts([{ productType: 'bar phone', productName: '' }]); // Reset to initial state
    };

    const handleAddAnother = () => {
        setProducts([...products, { productType: 'bar phone', productName: '' }]);
    };

    const handleCancelLast = () => {
        if (products.length > 1) {
            setProducts(products.slice(0, -1)); // Remove the last product entry
        }
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                {products.map((product, index) => (
                    <div key={index}>
                        <label>
                            Product Type:
                            <select
                                value={product.productType}
                                onChange={(e) => handleChange(index, 'productType', e.target.value)}
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
                                onChange={(e) => handleChange(index, 'productName', e.target.value)}
                                required
                            />
                        </label>
                    </div>
                ))}
                <div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleCancelLast}>Cancel Last Product</button>
                    <button type="button" onClick={handleAddAnother}>Add Another Product</button>
                </div>
            </form>
            <Link to="/product-list" className="button">Product List</Link>
        </div>
    );
};

export default AddProduct;
