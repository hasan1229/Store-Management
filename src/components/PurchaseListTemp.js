// components/ProductList.js 

import React from 'react';

const PurchaseList = ({ purchases }) => (
    <div>
        <h2>Purchase List</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>product name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {purchases.map((purchase) => (
                    <tr key={purchase.id}>
                        <td>{purchase.name}</td>
                        <td>{purchase.name}</td>
                        <td>{purchase.price}</td>
                        <td>{purchase.quantity}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default PurchaseList;
