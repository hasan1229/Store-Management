import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditExecutive = ({ executives, onUpdateExecutive  }) => {
    const { id } = useParams(); // Extract the customer ID from the URL
    const navigate = useNavigate(); // Hook for navigation
    const executive  = executives[id]; // Get the specific customer from the customers array using the ID

    // Define state variables for the form
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');

    // useEffect to set initial form values when the component mounts
    useEffect(() => {
        if (executive ) {
            // If a customer is found, populate the form fields with customer data
            setName(executive.name);
            setNumber(executive.number);
            setAddress(executive.address);
        }
    }, [executive]); // This effect will run whenever 'customer' changes

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create the updated customer object
        const updatedExecutive  = { name, number, address };
        // Call the onUpdateCustomer function passed from the parent to update the customer
        onUpdateExecutive (id, updatedExecutive );
        // After the update, navigate to the customer list page
        navigate('/Executive-list');
    };

    return (
        <div className="edit-customer-container">
            <h2>Edit Executive</h2>
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
                <button type="submit">Update Executive</button>
            </form>
        </div>
    );
};

export default EditExecutive ;
