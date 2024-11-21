import React, { useState, useEffect } from 'react';

const Stock = ({ purchases, sales, products }) => {
    const [stock, setStock] = useState([]);
    const [selectedType, setSelectedType] = useState('all');

    // Get unique product types from the product list
    const productTypes = ['all', ...new Set(products.map(product => product.productType))];

    // Filter stock by product type
    const filteredStock = selectedType === 'all' ? stock : stock.filter(item => item.productType === selectedType);

    useEffect(() => {
        const updatedStock = [];

        // Handle stock for purchases (increases stock)
        purchases.forEach(purchase => {
            const existingProduct = updatedStock.find(item => item.product === purchase.product);
            if (existingProduct) {
                // Update unit price if it differs, recalculate total value
                if (existingProduct.unitPrice !== purchase.unitPrice) {
                    existingProduct.unitPrice = purchase.unitPrice; // New price based on purchase
                }
                existingProduct.quantity += purchase.quantity;
                existingProduct.totalValue = existingProduct.unitPrice * existingProduct.quantity;
            } else {
                const product = products.find(p => p.productName === purchase.product); // Find product to get type
                updatedStock.push({
                    product: purchase.product,
                    productType: product ? product.productType : 'Unknown',
                    unitPrice: purchase.unitPrice,
                    quantity: purchase.quantity,
                    totalValue: purchase.unitPrice * purchase.quantity
                });
            }
        });

        // Handle stock for sales (decreases stock)
        sales.forEach(sale => {
            sale.items.forEach(item => {
                const existingProduct = updatedStock.find(product => product.product === item.product);
                if (existingProduct) {
                    existingProduct.quantity -= item.quantity;
                    existingProduct.totalValue = existingProduct.unitPrice * existingProduct.quantity;
                }
            });
        });

        setStock(updatedStock);
    }, [purchases, sales, products]);

    return (
        <div>
            <h2>Product Stock</h2>

            {/* Product Type Filter */}
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

            {/* Stock Table */}
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Product Type</th>
                        <th>Unit Price</th>
                        <th>Quantity in Stock</th>
                        <th>Total Value</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStock.length > 0 ? (
                        filteredStock.map((item, index) => (
                            <tr key={index}>
                                <td>{item.product}</td>
                                <td>{item.productType}</td>
                                <td>{item.unitPrice}tk</td>
                                <td>{item.quantity}</td>
                                <td>{item.totalValue}tk</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" style={{ textAlign: 'center' }}>No products in stock.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Stock;
