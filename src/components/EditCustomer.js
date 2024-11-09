// src/components/EditCustomer.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditCustomer = ({ customers, onUpdateCustomer }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const customer = customers[id];

    const [name, setName] = useState(customer?.name || '');
    const [number, setNumber] = useState(customer?.number || '');
    const [address, setAddress] = useState(customer?.address || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedCustomer = { name, number, address };
        onUpdateCustomer(id, updatedCustomer);
        navigate('/customer-list'); // Redirect to customer list after update
    };

    return (
        <div className="edit-customer-container">
            <h2>Edit Customer</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Number:</label>
                    <input 
                        type="text" 
                        value={number} 
                        onChange={(e) => setNumber(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input 
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Update Customer</button>
            </form>
        </div>
    );
};

export default EditCustomer;
