import React from 'react'
import { productsData } from '../Data/productData'
import '../App.css';

function ContentTable() {

    return (<>
        <div className="App">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productsData.map((product) => {
                            return <tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.unitsInStock}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>)
}

export default ContentTable