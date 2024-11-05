import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ExecutiveList = ({ executives, onDeleteExecutive }) => {
    const [selectedType, setSelectedType] = useState('all');

    // Assuming you have a field to differentiate client types, e.g., `clientType`
    // Get unique client types (if you have them) and include 'all'
    const executiveTypes = [...new Set(executives.map(executive => executive.executiveType)), 'all'];

    // Filter clients based on selected type
    const filteredExecutives = selectedType === 'all' ? executives : executives.filter(executive => executive.executiveType === selectedType);

    return (
        <div>
            <h2>executive List</h2>
            <div>
                <label>
                    Filter by executive Type:
                    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                        {executiveTypes.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredExecutives.length > 0 ? (
                        filteredExecutives.map((executive, index) => (
                            <tr key={index}>
                                <td>{executive.name}</td>
                                <td>{executive.number}</td>
                                <td>{executive.address}</td>
                                <td>
                                    <button onClick={() => onDeleteExecutive(index)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>No executive found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ExecutiveList;
