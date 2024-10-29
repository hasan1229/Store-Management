// components/CustomerList.js
import React from 'react';

const CustomerList = ({ customers }) => (
    <div>
        <h2>Customer List</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Address</th> {/* New Address Column */}
                    <th>Due</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((customer) => (
                    <tr key={customer.id}>
                        <td>{customer.name}</td>
                        <td>{customer.contact}</td>
                        <td>{customer.address}</td> {/* Display address */}
                        <td>{customer.due}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default CustomerList;
