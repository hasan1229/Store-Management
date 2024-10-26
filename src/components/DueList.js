// components/DueList.js
import React from 'react';

const DueList = ({ customers }) => {
    const customersWithDue = customers.filter((customer) => customer.due > 0);

    return (
        <div>
            <h2>Due List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Due</th>
                    </tr>
                </thead>
                <tbody>
                    {customersWithDue.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.name}</td>
                            <td>{customer.contact}</td>
                            <td>{customer.due}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DueList;
