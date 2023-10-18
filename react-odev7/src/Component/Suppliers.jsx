import React, { useState } from 'react'
import { suppliersData } from '../Data/SuppliersData'

function Suppliers() {
    const [suppliers, setSuppliers] = useState(suppliersData);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortedColumn, setSortedColumn] = useState(null);

    const handleDelete = (id) => {

        var result = window.confirm("Want to delete?");
        if (result) {
            var filteredSuppliers = suppliers.filter(q => q.id !== id);
            setSuppliers([...filteredSuppliers])
        }
    }

    const handleSort = (column) => {
        const newSortOrder = sortedColumn === column ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc';
        const sortedSuppliers = [...suppliers].sort((a, b) => {
            if (newSortOrder === 'asc') {
                return a[column] < b[column] ? -1 : 1;
            } else {
                return b[column] < a[column] ? -1 : 1;
            }
        });

        setSuppliers(sortedSuppliers);
        setSortOrder(newSortOrder);
        setSortedColumn(column);
    }


    return (<>
        <h1>Length: {suppliers.length}</h1>
        <table>
            <thead>
                <tr>
                    <th onClick={() => handleSort('companyName')}>Company Name ▲ ▼</th>
                    <th>Contact Name</th>
                    <th>Country</th>
                    <th>Phone</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {suppliers.map((supplier) => (
                  <tr key={supplier.id}>
                    <td>{supplier.companyName}</td>
                    <td>{supplier.contactName}</td>
                    <td>{supplier.address.country}</td>
                    <td>{supplier.address.phone}</td>
                    <td><button className="deleteButton" onClick={()=>handleDelete(supplier.id)}>Delete</button></td>
                  </tr>
                ))}
            </tbody>
        </table>
    </>
    )
}

export default Suppliers