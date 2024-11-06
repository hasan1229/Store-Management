import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const AddCustomer = ({ onAddCustomer, onCancel }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCustomer = { name, number, address };
        onAddCustomer(newCustomer);
        setName('');
        setNumber('');
        setAddress('');
    };

    return (
        <div className="add-customer-container">
            <h2>Add Customer</h2>
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
                <button type="submit">Add Customer</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
            <Link to="/customer-list" className="button">Customer List</Link>
        </div>
    );
};

export default AddCustomer;
