import React, { useState } from 'react';
import './IronCart';
import ironCart from './IronCart.module.scss';

export default function IronCart() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Ironhack Rubber Duck',
      price: 25.0,
      quantity: 0,
      subtotal: 0,
    },
    {
      id: 2,
      name: 'Ironhack Beach Towel',
      price: 12.5,
      quantity: 0,
      subtotal: 0,
    },
  ]);
  const [newProduct, setNewProduct] = useState({});

  const handleChange = (event) => {};

  return (
    <div className={ironCart.body}>
      <h1>Ironhack Cart</h1>
      <table id="cart" className={ironCart.cart}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr className="product" key={product.id}>
                <td className="name">
                  <span> {product.name} </span>
                </td>
                <td className="price">
                  $<span> {product.price} </span>
                </td>
                <td className="quantity">
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={handleChange}
                  />
                </td>
                <td className="subtotal">
                  $<span> {product.subtotal} </span>
                </td>
                <td className="action">
                  <button
                    className={`${ironCart.btnRemove} ${ironCart.btn} btnRemove`}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        {/* <!-- Create a new product --> */}
        <tfoot>
          <tr className="create-product">
            <td>
              <input type="text" placeholder="Product Name" />
            </td>
            <td>
              <input type="number" placeholder="0" />
            </td>
            <td></td>
            <td></td>
            <td>
              <button id="create" className={ironCart.brn}>
                Create Product
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
      <div className={ironCart.calculateTotal}>
        <button
          id={`calculate`}
          className={`${ironCart.btnRemove} ${ironCart.btn} btnRemove`}
        >
          Calculate Prices
        </button>
      </div>
      <h2 id="total-value">
        Total: $<span>0</span>
      </h2>
    </div>
  );
}
