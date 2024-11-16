'use client';
import React from 'react';
import { Order } from '../../types';
import dynamic from "next/dynamic";
import '../../styles/dashboard.css';


type ActiveOrdersMapProps = {
  orders: Order[];
};

const ActiveOrdersMap: React.FC<ActiveOrdersMapProps> = ({ orders }) => {
  const activeOrders = orders.filter((order) => order.status === 'pending');

  return (
    <div className="active-orders-map">
      <center><h3>Active Orders Map</h3></center>
      <ul>
        {activeOrders.map((order) => (
          <li key={order._id}>
            Order {order.orderNumber}: {order.customer.name} - {order.scheduledFor}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default dynamic (() => Promise.resolve(ActiveOrdersMap), {ssr: false})


