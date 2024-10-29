// components/SalesReport.js
import React from 'react';

const SalesReport = ({ sales, customers, products }) => {
    return (
        <div>
            <h2>Monthly Sales Report</h2>
            <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale) => {
                        const customer = customers.find(c => c.id === sale.customerId);
                        const product = products.find(p => p.id === sale.productId);

                        return (
                            <tr key={sale.id}>
                                <td>{customer ? customer.name : 'Unknown'}</td>
                                <td>{product ? product.name : 'Unknown'}</td>
                                <td>{sale.quantity}</td>
                                <td>{sale.total}</td>
                                <td>{sale.date}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default SalesReport;
