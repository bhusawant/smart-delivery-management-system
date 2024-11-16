import React from 'react';
import { Assignment, Order } from '../../types';
import '../../styles/assignment.css';
import dynamic from "next/dynamic";


type AssignmentCardProps = {
  assignment: Assignment;
  order?: Order; 
};

const AssignmentCard: React.FC<AssignmentCardProps> = ({ assignment, order }) => {
  return (
    <div className="assignment-card">
      <h3>Assignment {assignment._id}</h3>
      {order ? (
        <>
          <p>Order Number: {order.orderNumber}</p>
          <p>Customer: {order.customer.name}</p>
          <p>Order Status: {order.status}</p>
          <p>Scheduled For: {order.scheduledFor}</p>
        </>
      ) : (
        <p className="no-order">Order not found</p>
      )}
      <p><strong>Assigned to Partner:</strong> {assignment.partnerId}</p>
      <p><strong>Status:</strong> {assignment.status}</p>
    </div>
  );
};

export default dynamic (() => Promise.resolve(AssignmentCard), {ssr: false})

