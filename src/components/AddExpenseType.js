import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddExpenseType = ({ onAddExpenseType, onCancel }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpenseType = { name };
        onAddExpenseType(newExpenseType);  // Call the parent function to add expense type
        setName('');  // Clear the input field
    };

    return (
        <div className="add-expense-type-container">
            <h2>Add Expense Type</h2>  {/* Updated heading */}
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
                <button type="submit">Add Expense Type</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
            <Link to="/expense-list" className="button">Expense List</Link>  {/* Update link if necessary */}
        </div>
    );
};

export default AddExpenseType;
