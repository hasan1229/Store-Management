// src/components/Purchase2.js
import React, { useState } from 'react';

const Purchase2 = ({ clients, products }) => {
    const [selectedClient, setSelectedClient] = useState('');
    const [productDetails, setProductDetails] = useState([{ productId: '', quantity: 0, unitPrice: 0 }]);

    const handleAddProduct = () => {
        setProductDetails([...productDetails, { productId: '', quantity: 0, unitPrice: 0 }]);
    };

    const handleChangeProduct = (index, field, value) => {
        const newDetails = [...productDetails];
        newDetails[index][field] = value;
        setProductDetails(newDetails);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Purchase submitted:', {
            client: selectedClient,
            products: productDetails,
        });
        setSelectedClient('');
        setProductDetails([{ productId: '', quantity: 0, unitPrice: 0 }]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Purchase</h2>
                <select value={selectedClient} onChange={(e) => setSelectedClient(e.target.value)}>
                    <option value="">Select Client</option>
                    {Array.isArray(clients) && clients.map((client, index) => (
                        <option key={index} value={client.name}>{client.name}</option>
                    ))}
                </select>
            </div>

            {productDetails.map((detail, index) => {
                const total = detail.quantity * detail.unitPrice;

                return (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <select
                            value={detail.productId}
                            onChange={(e) => handleChangeProduct(index, 'productId', e.target.value)}
                        >
                            <option value="">Select Product</option>
                            {Array.isArray(products) && products.map((product) => (
                                <option key={product.id} value={product.id}>
                                    {product.name}
                                </option>
                            ))}
                        </select>
                        <input
                            type="number"
                            placeholder="Quantity"
                            value={detail.quantity > 0 ? detail.quantity : ''}
                            onChange={(e) => handleChangeProduct(index, 'quantity', Number(e.target.value) || 0)}
                        />
                        <input
                            type="number"
                            placeholder="Unit Price"
                            value={detail.unitPrice > 0 ? detail.unitPrice : ''}
                            onChange={(e) => handleChangeProduct(index, 'unitPrice', Number(e.target.value) || 0)}
                        />
                        <input
                            type="number"
                            placeholder="Total"
                            value={total > 0 ? total : ''}
                            readOnly
                        />
                    </div>
                );
            })}

            <button type="button" onClick={handleAddProduct}>Add Another Product</button>
            <button type="submit">Submit Purchase</button>
        </form>
    );
};

export default Purchase2;
