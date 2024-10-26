// components/AddCustomer.js
import React, { useState } from 'react';

const AddCustomer = ({ onAddCustomer }) => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState(''); // New address field
    const [due, setDue] = useState('');

    const handleAddCustomer = (e) => {
        e.preventDefault();

        const newCustomer = {
            id: Date.now(),
            name,
            contact,
            address, // Include address
            due: parseFloat(due),
        };

        onAddCustomer(newCustomer);

        setName('');
        setContact('');
        setAddress(''); // Clear address field
        setDue('');
    };

    return (
        <div>
            <h2>Add Customer</h2>
            <form onSubmit={handleAddCustomer}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Contact:</label>
                    <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
                </div>
                <div>
                    <label>Address:</label> {/* New Address input */}
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <div>
                    <label>Due:</label>
                    <input type="number" value={due} onChange={(e) => setDue(e.target.value)} required />
                </div>
                <button type="submit">Add Customer</button>
            </form>
        </div>
    );
};

export default AddCustomer;
