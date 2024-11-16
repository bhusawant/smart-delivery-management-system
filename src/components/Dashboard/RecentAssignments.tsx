import React from 'react';
import { Order } from '../../types';
import dynamic from "next/dynamic";
import '../../styles/dashboard.css';


type RecentAssignmentsProps = {
  orders: Order[];
};

const RecentAssignments: React.FC<RecentAssignmentsProps> = ({ orders }) => {
  const recentOrders = orders.slice(0, 5); 

  return (
    <div className="recent-assignments">
      <center><h3>Recent Assignments</h3></center>
      <ul className='recent'>
        {recentOrders.map((order) => (
          <li key={order._id}>
            Order {order.orderNumber}: {order.customer.name} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default dynamic (() => Promise.resolve(RecentAssignments), {ssr: false})

