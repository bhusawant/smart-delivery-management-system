import React from 'react';
import { Order } from '../../types';
import '../../styles/order.css';
import dynamic from "next/dynamic";


type OrderCardProps = {
  order: Order;
};

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <div className="order-card">
      <h3>Order {order.orderNumber}</h3>
      <p>Customer: {order.customer.name}</p>
      <p>Status: {order.status}</p>
      <p>Scheduled For: {order.scheduledFor}</p>
      <p>Total Amount: ₹{order.totalAmount}</p>
    </div>
  );
};


export default dynamic (() => Promise.resolve(OrderCard), {ssr: false})


