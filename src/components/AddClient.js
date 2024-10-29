// src/components/AddClient.js
import React, { useState } from 'react';

const AddClient = ({ onAddClient }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddClient({ name, number, address });
        setName('');
        setNumber('');
        setAddress('');
    };

    return (
        <div>
            <h2>Add Client</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <button type="submit">Add Client</button>
            </form>
        </div>
    );
};

export default AddClient;
