// src/components/CustomerList.js
import React from 'react';
import { Link } from 'react-router-dom';

const CustomerList = ({ customers, onDeleteCustomer, onEditCustomer }) => {
    return (
        <div>
            <h2>Customer List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.length > 0 ? (
                        customers.map((customer, index) => (
                            <tr key={index}>
                                <td>{customer.name}</td>
                                <td>{customer.number}</td>
                                <td>{customer.address}</td>
                                <td>
                                    <button onClick={() => onDeleteCustomer(index)}>Delete</button>
                                    <Link to={`/edit-customer/${index}`}><button>Edit</button></Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>No customers found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerList;
