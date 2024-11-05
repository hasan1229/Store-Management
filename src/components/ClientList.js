import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ClientList = ({ clients, onDeleteClient }) => {
    const [selectedType, setSelectedType] = useState('all');

    // Assuming you have a field to differentiate client types, e.g., `clientType`
    // Get unique client types (if you have them) and include 'all'
    const clientTypes = [...new Set(clients.map(client => client.clientType)), 'all'];

    // Filter clients based on selected type
    const filteredClients = selectedType === 'all' ? clients : clients.filter(client => client.clientType === selectedType);

    return (
        <div>
            <h2>Client List</h2>
            <div>
                <label>
                    Filter by Client Type:
                    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                        {clientTypes.map((type, index) => (
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
                    {filteredClients.length > 0 ? (
                        filteredClients.map((client, index) => (
                            <tr key={index}>
                                <td>{client.name}</td>
                                <td>{client.number}</td>
                                <td>{client.address}</td>
                                <td>
                                    <button onClick={() => onDeleteClient(index)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>No clients found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ClientList;
