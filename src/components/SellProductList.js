import React, { useState } from 'react';

function SellProductList({ sales, customers }) {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState('');

    // Handle date range filter change
    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleCustomerChange = (event) => {
        setSelectedCustomer(event.target.value);
    };

    // Filter sales based on date range and customer
    const filteredSales = sales.filter((sale) => {
        const saleDate = new Date(sale.date);
        const startDateFilter = startDate ? new Date(startDate) <= saleDate : true;
        const endDateFilter = endDate ? new Date(endDate) >= saleDate : true;
        const customerFilter = selectedCustomer ? sale.customer === selectedCustomer : true;

        return startDateFilter && endDateFilter && customerFilter;
    });

    return (
        <div>
            <h2>Sell Product List</h2> 
            
            {/* Date Range Filter */}
            <div>
                <label>
                    Start Date:
                    <input type="date" value={startDate} onChange={handleStartDateChange} />
                </label>
                <label>
                    End Date:
                    <input type="date" value={endDate} onChange={handleEndDateChange} />
                </label>
            </div>
            
            {/* Customer Filter */}
            <div>
                <label>
                    Customer:
                    <select value={selectedCustomer} onChange={handleCustomerChange}>
                        <option value="">Select Customer</option>
                        {customers && customers.length > 0 ? (
                            customers.map((customer, index) => (
                                <option key={index} value={customer.name}>
                                    {customer.name}
                                </option>
                            ))
                        ) : (
                            <option value="">No customers available</option>
                        )}
                    </select>
                </label>
            </div>

            {/* Sales Table */}
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Customer</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Cumulative Total for Customer</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSales.map((sale, index) => {
                        // Calculate cumulative total for the customer for this date
                        const customerTotalForDate = sale.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

                        return (
                            <React.Fragment key={index}>
                                {sale.items.map((item, itemIndex) => (
                                    <tr key={itemIndex}>
                                        {itemIndex === 0 && (
                                            <>
                                                <td rowSpan={sale.items.length}>{sale.date}</td>
                                                <td rowSpan={sale.items.length}>{sale.customer}</td>
                                            </>
                                        )}
                                        <td>{item.product}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price * item.quantity}</td>
                                        
                                        {/* Cumulative total for the customer for this date */}
                                        {itemIndex === 0 && (
                                            <td rowSpan={sale.items.length}>{customerTotalForDate}</td>
                                        )}
                                    </tr>
                                ))}
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SellProductList;
