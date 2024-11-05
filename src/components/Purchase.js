import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Purchase = ({ products, clients, onAddPurchase, onCancel }) => {
    const [forms, setForms] = useState([
        { product: '', client: '', quantity: 1, unitPrice: '', date: new Date().toISOString().substr(0, 10) }
    ]);

    const handleInputChange = (index, field, value) => {
        const updatedForms = [...forms];
        updatedForms[index][field] = value;
        setForms(updatedForms);
    };

    const handleAddForm = () => {
        setForms([
            ...forms,
            { product: '', client: '', quantity: 1, unitPrice: 0, date: new Date().toISOString().substr(0, 10) }
        ]);
    };

    const handleSubmitAll = () => {
        // Validate each form entry before submission
        for (const form of forms) {
            if (!form.product || !form.client) {
                alert('Please fill out all required fields for each purchase.');
                return;
            }
        }

        // Send purchases data to App.js
        onAddPurchase(forms);

        // Reset forms after submission
        alert('All purchases have been submitted.');
        setForms([{ product: '', client: '', quantity: 1, unitPrice: 0, date: new Date().toISOString().substr(0, 10) }]);
    };

    return (
        <div className="purchase-container">
            <h2>Purchase From Client</h2>
            {forms.map((form, index) => (
                <div key={index} className="form-group">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-field">
                            <label>Date:</label>
                            <input
                                type="date"
                                value={form.date}
                                onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                            />
                        </div>
                        <div className="form-field">
                            <label>Product:</label>
                            <select
                                value={form.product}
                                onChange={(e) => handleInputChange(index, 'product', e.target.value)}
                            >
                                <option value="">Select a product</option>
                                {products.map((product, i) => (
                                    <option key={i} value={product.productName}>{product.productName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-field">
                            <label>Client:</label>
                            <select
                                value={form.client}
                                onChange={(e) => handleInputChange(index, 'client', e.target.value)}
                            >
                                <option value="">Select a client</option>
                                {clients.map((client, i) => (
                                    <option key={i} value={client.name}>{client.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-field">
                            <label>Quantity:</label>
                            <input
                                type="number"
                                value={form.quantity}
                                onChange={(e) => handleInputChange(index, 'quantity', Number(e.target.value))}
                                min="1"
                            />
                        </div>
                        <div className="form-field">
                            <label>Unit Price:</label>
                            <input
                                type="number"
                                value={form.unitPrice}
                                onChange={(e) => handleInputChange(index, 'unitPrice', Number(e.target.value))}
                                min="0"
                            />
                        </div>
                        <div className="form-field total-display">
                            <strong>Total: {form.quantity * form.unitPrice}tk </strong>
                        </div>
                    </form>
                </div>
            ))}

            {/* Buttons below the forms */}
            <div className="button-container">
                <button type="submit" onClick={handleSubmitAll}>Submit All Purchases</button>
                <button type="button" onClick={handleAddForm}>Add Another Purchase</button>
                <button type="button " ><Link to="/"className="button-link">Dashboard</Link></button>
                <Link to="/purchase-list" className="button">Purchase list</Link>
            </div>
            
        </div>
    );
};

export default Purchase;
