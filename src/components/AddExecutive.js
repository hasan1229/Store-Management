import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const AddExecutive = ({ onAddExecutive, onCancel }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExecutive = { name, number, address };
        onAddExecutive (newExecutive);
        setName('');
        setNumber('');
        setAddress('');
       
    };

    return (
        <div className="add-client-container">
            <h2>Add Executive</h2>
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
                <button type="submit">Add Executive</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
            <Link to="/executive-list" className="button">executive List</Link>
        </div>
    );
};

export default AddExecutive;







