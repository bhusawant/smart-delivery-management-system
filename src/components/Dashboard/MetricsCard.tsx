import React from 'react';
import { Order } from '../../types';
import dynamic from "next/dynamic";
import '../../styles/dashboard.css';


type MetricsCardProps = {
  orders: Order[];
};

const MetricsCard: React.FC<MetricsCardProps> = ({ orders }) => {
  const totalOrders = orders.length;
  const pendingOrders = orders.filter((order) => order.status === 'pending').length;
  const deliveredOrders = orders.filter((order) => order.status === 'delivered').length;

  return (
    <div className="metrics-card">
      <center><h3>Metrics</h3></center>
      <p>Total Orders: {totalOrders}</p>
      <p>Pending Orders: {pendingOrders}</p>
      <p>Delivered Orders: {deliveredOrders}</p>
    </div>
  );
};


export default dynamic (() => Promise.resolve(MetricsCard), {ssr: false})

