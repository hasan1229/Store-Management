import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const PurchaseList = ({ purchases, updateStock }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [filteredPurchases, setFilteredPurchases] = useState(purchases);

    // Memoized function to filter purchases based on the date range
    const filterPurchases = useCallback(() => {
        if (!startDate && !endDate) {
            setFilteredPurchases(purchases);
            return;
        }

        const filtered = purchases.filter(purchase => {
            const purchaseDate = new Date(purchase.date);
            const start = startDate ? new Date(startDate) : new Date(-8640000000000000); // Min date
            const end = endDate ? new Date(endDate) : new Date(8640000000000000); // Max date

            return purchaseDate >= start && purchaseDate <= end;
        });

        setFilteredPurchases(filtered);
    }, [startDate, endDate, purchases]);

    // Update stock whenever purchases change
    useEffect(() => {
        filterPurchases();
    }, [startDate, endDate, purchases, filterPurchases]);  // Add filterPurchases to the dependencies

    useEffect(() => {
        // Update stock whenever purchases change
        if (updateStock) {
            updateStock(purchases);
        }
    }, [purchases, updateStock]);

    return (
        <div>
            <h2>Purchase List</h2>

            {/* Date range filter */}
            <div>
                <label>
                    Start Date:
                    <input 
                        type="date" 
                        value={startDate} 
                        onChange={(e) => setStartDate(e.target.value)} 
                    />
                </label>
                <label>
                    End Date:
                    <input 
                        type="date" 
                        value={endDate} 
                        onChange={(e) => setEndDate(e.target.value)} 
                    />
                </label>
            </div>

            {/* Purchases Table */}
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Product Name</th>
                        <th>Client Name</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPurchases.map((purchase, index) => (
                        <tr key={index}>
                            <td>{purchase.date}</td>
                            <td>{purchase.product}</td>
                            <td>{purchase.client}</td>
                            <td>{purchase.quantity}</td>
                            <td>{purchase.unitPrice}</td>
                            <td>{purchase.quantity * purchase.unitPrice}tk</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="button">
                <Link to="/" className="button-link">Dashboard</Link>
            </button>
        </div>
    );
};

export default PurchaseList;
