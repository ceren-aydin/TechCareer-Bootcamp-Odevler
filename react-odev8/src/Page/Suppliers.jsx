import axios from 'axios';
import React, { useEffect, useState } from 'react';

function SuppliersPage() {
  const [suppliers, setSuppliers] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortedColumn, setSortedColumn] = useState(null);

  useEffect(() => {
    loadSuppliers();
  }, []);

  const loadSuppliers = () => {
    axios.get("https://northwind.vercel.app/api/suppliers").then((res) => {
      setSuppliers(res.data);
    });
  };

  const handleDelete = (id) => {
    var result = window.confirm("Want to delete?");
    if (result) {
      axios
        .delete("https://northwind.vercel.app/api/suppliers/" + id)
        .then((res) => {
          loadSuppliers();
        });
    }
  };

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

  return (
    <>
      <h1>Lenght: {suppliers.length}</h1>
      <table >
        <thead>
          <tr>
            <th>Id</th>
            <th onClick={() => handleSort('companyName')}>Company Name ▲ ▼</th>
            <th>Contact Name</th>
            <th>Contact Title</th>
            <th>Delete</th>
          </tr>
        </thead>


        <tbody>
          {suppliers &&
            suppliers.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.companyName}</td>
                  <td>{item.contactName}</td>
                  <td>{item.contactTitle}</td>
                  <td>
                    <button
                      className="deleteButton"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default SuppliersPage;
