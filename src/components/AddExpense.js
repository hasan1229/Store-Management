import React, { useState } from 'react';

const AddExpense = ({ expenseTypes, onAddExpense }) => {
    const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
    const [type, setType] = useState('');
    const [note, setNote] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = { date, type, note, amount: parseFloat(amount) };
        onAddExpense(newExpense);
        setDate(new Date().toISOString().substr(0, 10));
        setType('');
        setNote('');
        setAmount('');
    };

    return (
        <div className="add-expense-container">
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date:</label>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Expense Type:</label>
                    <select value={type} onChange={(e) => setType(e.target.value)} required>
                        <option value="">Select a type</option>
                        {expenseTypes.map((expenseType, index) => (
                            <option key={index} value={expenseType.name}>{expenseType.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Note:</label>
                    <input 
                        type="text" 
                        value={note} 
                        onChange={(e) => setNote(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Amount:</label>
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        min="0" 
                        required 
                    />
                </div>
                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
};

export default AddExpense;
