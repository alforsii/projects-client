import React, { useState } from 'react';
import uuid from 'react-uuid';
import ironCart from './IronCart.module.scss';

export default function IronCart() {
  const [state, setState] = useState({
    total: 0,
  });
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
  const [newProduct, setNewProduct] = useState({
    id: null,
    name: '',
    price: 0,
    quantity: 0,
    subtotal: 0,
  });

  const handleNewProd = ({ target: { name, value } }) => {
    setNewProduct({ ...newProduct, [name]: value });
  };

  const addNewProd = () => {
    if (!newProduct.name || !newProduct.price) {
      alert('Please enter product name and price!');
      return;
    }
    setProducts([...products, { ...newProduct, id: uuid() }]);
    setNewProduct({ ...newProduct, id: null, name: '', price: 0 });
  };

  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleChange = ({ target: { value } }, id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: value,
          subtotal: value * product.price,
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const calcAll = () => {
    const total = products.reduce((acc, prod) => acc + prod.subtotal, 0);
    setState({ ...state, total });
  };

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
                    onChange={(e) => handleChange(e, product.id)}
                  />
                </td>
                <td className="subtotal">
                  $<span> {product.subtotal} </span>
                </td>
                <td className="action">
                  <button
                    onClick={() => removeProduct(product.id)}
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
              <input
                onChange={handleNewProd}
                value={newProduct.name}
                type="text"
                name="name"
                placeholder="Product Name"
              />
            </td>
            <td>
              <input
                onChange={handleNewProd}
                value={newProduct.price}
                name="price"
                type="number"
                placeholder="0"
              />
            </td>
            <td></td>
            <td></td>
            <td>
              <button id="create" onClick={addNewProd} className={ironCart.brn}>
                Create Product
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
      <div className={ironCart.calculateTotal}>
        <button
          onClick={calcAll}
          id={`calculate`}
          className={`${ironCart.btnRemove} ${ironCart.btn} btnRemove`}
        >
          Calculate Prices
        </button>
      </div>
      <h2 id="total-value">
        Total: $<span> {state.total} </span>
      </h2>
    </div>
  );
}
