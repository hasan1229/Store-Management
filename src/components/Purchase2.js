import React, { useState } from 'react';

const Purchase2 = ({ clients, products }) => {
    const [selectedClient, setSelectedClient] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [productDetails, setProductDetails] = useState([{ productId: '', quantity: 0, unitPrice: 0 }]);
    const [purchaseList, setPurchaseList] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

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
        const totalPurchase = productDetails.reduce((acc, detail) => acc + (detail.quantity * detail.unitPrice), 0);
        
        const newPurchase = {
            client: selectedClient,
            date: purchaseDate,
            products: productDetails.map(detail => {
                const product = products.find(product => product.id === detail.productId);
                console.log(`Searching for product with ID ${detail.productId}:`, product); // Log the product search
                return {
                    name: product ? product.productName : 'Unknown', // Check here
                    quantity: detail.quantity,
                    unitPrice: detail.unitPrice,
                    total: detail.quantity * detail.unitPrice
                };
            }),
            total: totalPurchase
        };

        console.log('New Purchase:', newPurchase); // Log the new purchase
        setPurchaseList([...purchaseList, newPurchase]);
        resetForm();
    };

    const resetForm = () => {
        setSelectedClient('');
        setPurchaseDate('');
        setProductDetails([{ productId: '', quantity: 0, unitPrice: 0 }]);
    };

    const filteredPurchases = purchaseList.filter(purchase => {
        const purchaseDateObj = new Date(purchase.date);
        const isAfterStartDate = startDate ? purchaseDateObj >= new Date(startDate) : true;
        const isBeforeEndDate = endDate ? purchaseDateObj <= new Date(endDate) : true;
        return isAfterStartDate && isBeforeEndDate;
    });

    return (
        <div>
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

                <div>
                    <label htmlFor="purchaseDate">Purchase Date:</label>
                    <input
                        type="date"
                        id="purchaseDate"
                        value={purchaseDate}
                        onChange={(e) => setPurchaseDate(e.target.value)}
                        required
                    />
                </div>

                {productDetails.map((detail, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <select
                            value={detail.productId}
                            onChange={(e) => handleChangeProduct(index, 'productId', e.target.value)}
                        >
                            <option value="">Select Product</option>
                            {Array.isArray(products) && products.map((product) => (
                                <option key={product.id} value={product.id}>
                                    {product.productName}
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
                            value={detail.quantity * detail.unitPrice > 0 ? detail.quantity * detail.unitPrice : ''}
                            readOnly
                        />
                    </div>
                ))}

                <button type="button" onClick={handleAddProduct}>Add Another Product</button>
                <button type="submit">Submit Purchase</button>
            </form>

            <h2>Purchase List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Client</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPurchases.length > 0 ? filteredPurchases.map((purchase, purchaseIndex) => (
                        purchase.products.map((product, productIndex) => (
                            <tr key={`${purchaseIndex}-${productIndex}`}>
                                {productIndex === 0 && (
                                    <>
                                        <td rowSpan={purchase.products.length}>{purchase.date}</td>
                                        <td rowSpan={purchase.products.length}>{purchase.client}</td>
                                    </>
                                )}
                                <td>{product.name}</td> {/* Use product.name here */}
                                <td>{product.quantity}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.total}</td>
                            </tr>
                        ))
                    )) : (
                        <tr>
                            <td colSpan="6" style={{ textAlign: 'center' }}>No purchases found for this date range.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Purchase2;
