'use client';
import React, { useState } from 'react';
import { Order } from '../../types/index';
import OrderCard from './OrderCard';
import dynamic from 'next/dynamic';

type NewOrder = {
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  scheduledFor: string;
  totalAmount: string;
};

const OrderList: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const [newOrder, setNewOrder] = useState<NewOrder>({
    customerName: '',
    customerPhone: '',
    customerAddress: '',
    scheduledFor: '',
    totalAmount: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewOrder((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addOrder = () => {
    if (
      !newOrder.customerName ||
      !newOrder.customerPhone ||
      !newOrder.customerAddress ||
      !newOrder.scheduledFor ||
      !newOrder.totalAmount
    ) {
      alert('Please fill all the fields!');
      return;
    }

    const newOrderObj: Order = {
      _id: Date.now().toString(), 
      orderNumber: `ORD${Math.floor(Math.random() * 10000)}`, 
      customer: {
        name: newOrder.customerName,
        phone: newOrder.customerPhone,
        address: newOrder.customerAddress,
      },
      area: 'Uptown', 
      items: [
        {
          name: 'Sample Item',
          quantity: 1,
          price: parseFloat(newOrder.totalAmount) || 0, 
        },
      ],
      status: 'pending',
      scheduledFor: newOrder.scheduledFor,
      totalAmount: parseFloat(newOrder.totalAmount) || 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setOrders((prevOrders) => [...prevOrders, newOrderObj]);

    setNewOrder({
      customerName: '',
      customerPhone: '',
      customerAddress: '',
      scheduledFor: '',
      totalAmount: '',
    });
  };

  const removeOrder = (orderId: string) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
  };

  return (
    <div>
      <h2>Orders</h2>

      <div className="order-form">
        <h3>Add New Order</h3>
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={newOrder.customerName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="customerPhone"
          placeholder="Customer Phone"
          value={newOrder.customerPhone}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="customerAddress"
          placeholder="Customer Address"
          value={newOrder.customerAddress}
          onChange={handleInputChange}
        />
        <input
          type="time"
          name="scheduledFor"
          value={newOrder.scheduledFor}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="totalAmount"
          placeholder="Total Amount"
          value={newOrder.totalAmount}
          onChange={handleInputChange}
        />
        <button onClick={addOrder}>Add Order</button>
      </div>

      <div className="order-list">
        {orders.map((order) => (
          <div key={order._id}>
            <OrderCard order={order} />
            <button onClick={() => removeOrder(order._id)}>Remove Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(OrderList), { ssr: false });
