import React, { useState } from 'react';

const ExpenseList = ({ expenses, onEditExpense, onDeleteExpense }) => {
    const [editIndex, setEditIndex] = useState(-1);
    const [editExpense, setEditExpense] = useState(null);

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditExpense({ ...expenses[index] });
    };

    const handleSave = () => {
        onEditExpense(editIndex, editExpense);
        setEditIndex(-1);
        setEditExpense(null);
    };

    return (
        <div className="expense-list-container">
            <h2>Expense List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Note</th>
                        <th>Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={index}>
                            {editIndex === index ? (
                                <>
                                    <td><input type="date" value={editExpense.date} onChange={(e) => setEditExpense({ ...editExpense, date: e.target.value })} /></td>
                                    <td><input type="text" value={editExpense.type} onChange={(e) => setEditExpense({ ...editExpense, type: e.target.value })} /></td>
                                    <td><input type="text" value={editExpense.note} onChange={(e) => setEditExpense({ ...editExpense, note: e.target.value })} /></td>
                                    <td><input type="number" value={editExpense.amount} onChange={(e) => setEditExpense({ ...editExpense, amount: e.target.value })} /></td>
                                    <td>
                                        <button onClick={handleSave}>Save</button>
                                        <button onClick={() => setEditIndex(-1)}>Cancel</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{expense.date}</td>
                                    <td>{expense.type}</td>
                                    <td>{expense.note}</td>
                                    <td>{expense.amount}</td>
                                    <td>
                                        <button onClick={() => handleEdit(index)}>Edit</button>
                                        <button onClick={() => onDeleteExpense(index)}>Delete</button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;
