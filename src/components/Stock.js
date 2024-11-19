import React, { useEffect, useState } from 'react';

const Stock = ({ purchases, sales, products }) => {
    const [stock, setStock] = useState({});

    // Check if products is defined before using it
    const getUnitPrice = (product) => {
        if (!products) {
            console.error('Products data is not available');
            return 0;
        }

        // Log the products array to see the structure
        console.log('Available products:', products);

        const foundProduct = products.find((prod) => prod.name === product);
        
        if (!foundProduct) {
            console.error(`Unit price for product "${product}" not found`);
            return 0;
        }

        // Log the found product and its unit price
        console.log(`Found product: ${foundProduct.name}, Unit Price: ${foundProduct.unitPrice}`);
        return foundProduct.unitPrice;
    };

    // Update stock whenever purchases or sales data changes
    useEffect(() => {
        const updatedStock = {};

        // Update stock based on purchases
        purchases.forEach((purchase) => {
            const { product, quantity } = purchase;
            if (!updatedStock[product]) updatedStock[product] = { quantity: 0, unitPrice: 0 };
            updatedStock[product].quantity += quantity;
        });

        // Update stock based on sales
        sales.forEach((sale) => {
            sale.items.forEach((item) => {
                const { product, quantity } = item;
                if (!updatedStock[product]) updatedStock[product] = { quantity: 0, unitPrice: 0 };
                updatedStock[product].quantity -= quantity;
            });
        });

        setStock(updatedStock);
    }, [purchases, sales]);

    return (
        <div>
            <h2>Stock Report</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Unit Price</th>
                        <th>Quantity in Stock</th>
                        <th>Total Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(stock).map(([product, { quantity }]) => {
                        const unitPrice = getUnitPrice(product);
                        const totalValue = unitPrice * quantity;

                        return (
                            <tr key={product}>
                                <td>{product}</td>
                                <td>{unitPrice.toFixed(2)}</td>
                                <td>{quantity}</td>
                                <td>{totalValue.toFixed(2)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Stock;
