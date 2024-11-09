import React, { useState } from 'react';

function Sell({ customers, executives, products, onAddSale }) {
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [selectedExecutive, setSelectedExecutive] = useState('');
    const [saleDate, setSaleDate] = useState(new Date().toISOString().split('T')[0]); // Default to today’s date
    const [saleItems, setSaleItems] = useState([{ product: '', price: 0, quantity: 1, total: 0 }]);

    // Handle change for customer, executive, and date
    const handleCustomerChange = (event) => {
        setSelectedCustomer(event.target.value);
    };

    const handleExecutiveChange = (event) => {
        setSelectedExecutive(event.target.value);
    };

    const handleDateChange = (event) => {
        setSaleDate(event.target.value);
    };

    // Handle changes in product selection, price, and quantity for each sale item
    const handleSaleItemChange = (index, field, value) => {
        const newSaleItems = [...saleItems];
        newSaleItems[index][field] = value;

        if (field === 'price' || field === 'quantity') {
            newSaleItems[index].total = newSaleItems[index].price * newSaleItems[index].quantity;
        }

        setSaleItems(newSaleItems);
    };

    // Add another product row
    const handleAddSaleItem = () => {
        setSaleItems([...saleItems, { product: '', price: 0, quantity: 1, total: 0 }]);
    };

    // Remove a product row by index
    const handleRemoveSaleItem = (index) => {
        const newSaleItems = saleItems.filter((_, i) => i !== index);
        setSaleItems(newSaleItems);
    };

    // Calculate the total of all items
    const totalSaleAmount = saleItems.reduce((acc, item) => acc + item.total, 0);

    // Handle the sale submission
    const handleSell = () => {
        const sale = {
            customer: selectedCustomer,
            executive: selectedExecutive,
            items: saleItems,
            date: saleDate,  // Using the selected sale date
            totalAmount: totalSaleAmount,
        };
        onAddSale(sale);

        // Reset fields after sale
        setSelectedCustomer('');
        setSelectedExecutive('');
        setSaleDate(new Date().toISOString().split('T')[0]); // Reset to today's date
        setSaleItems([{ product: '', price: 0, quantity: 1, total: 0 }]);
    };

    return (
        <div>
            <h2>Sell Products</h2>
            <div>
                <label>
                    Customer:
                    <select value={selectedCustomer} onChange={handleCustomerChange} required>
                        <option value="">Select Customer</option>
                        {customers.map((customer, index) => (
                            <option key={index} value={customer.name}>{customer.name}</option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Executive:
                    <select value={selectedExecutive} onChange={handleExecutiveChange} required>
                        <option value="">Select Executive</option>
                        {executives.map((executive, index) => (
                            <option key={index} value={executive.name}>{executive.name}</option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Sale Date:
                    <input type="date" value={saleDate} onChange={handleDateChange} required />
                </label>
            </div>

            <h3>Sale Items</h3>
            {saleItems.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <label>
                        Product:
                        <select
                            value={item.product}
                            onChange={(e) => handleSaleItemChange(index, 'product', e.target.value)}
                            required
                        >
                            <option value="">Choose a Product</option>
                            {products.map((product, index) => (
                                <option key={index} value={product.productName}>
                                    {product.productName}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label>
                        Price:
                        <input
                            type="number"
                            value={item.price}
                            onChange={(e) => handleSaleItemChange(index, 'price', parseFloat(e.target.value))}
                            required
                        />
                    </label>

                    <label>
                        Quantity:
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleSaleItemChange(index, 'quantity', parseInt(e.target.value))}
                            required
                        />
                    </label>

                    <label style={{ marginLeft: '70px' }}>
                            Total: {item.total}
                    </label>

                    <button
                        type="button"
                        onClick={() => handleRemoveSaleItem(index)}
                        disabled={saleItems.length === 1}
                    >
                        Remove
                    </button>
                </div>
            ))}

            <button type="button" onClick={handleAddSaleItem}>
                Add Another Product
            </button>

            {/* Display the total value of all products */}
            <div style={{ marginTop: '16px' }}>
                <h3>Total Sale Amount: {totalSaleAmount}</h3>
            </div>

            <div>
                <button 
                    onClick={handleSell} 
                    disabled={
                        !selectedCustomer || 
                        !selectedExecutive || 
                        saleItems.some(item => !item.product || !item.price || !item.quantity)
                    }
                >
                    Complete Sale
                </button>
            </div>
        </div>
    );
}

export default Sell;
