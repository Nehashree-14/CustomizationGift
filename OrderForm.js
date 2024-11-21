import React, { useState } from 'react';
import axios from 'axios';

function OrderForm() {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [message, setMessage] = useState('');

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.example.com/orders', {
        customerName,
        address,
        paymentMethod,
      });
      setMessage(`Order placed successfully: ${response.data.orderId}`);
    } catch (error) {
      setMessage(`Order submission failed: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Order Form</h2>
      <form onSubmit={handleOrderSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        <textarea
          placeholder="Shipping Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
        <button type="submit">Place Order</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default OrderForm;
