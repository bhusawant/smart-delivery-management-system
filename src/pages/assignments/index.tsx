import React, { useEffect, useState } from 'react';
import { Order, Assignment } from '../../types';
import AssignmentCard from '../../components/Assignment/AssignmentCard';
import dynamic from "next/dynamic";
import styles from "../../app/page.module.css";
import Link from "next/link";


const AssignmentsPage: React.FC = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assignmentsResponse = await fetch('/api/assignments');
        const ordersResponse = await fetch('/api/orders');
        
        if (!assignmentsResponse.ok || !ordersResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const assignmentsData = await assignmentsResponse.json();
        const ordersData = await ordersResponse.json();

        setAssignments(assignmentsData);
        setOrders(ordersData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.navbar}>
        <Link href="/" className={styles.navLink}>Go to Home</Link>
        <Link href="/orders" className={styles.navLink}>Go to Orders</Link>
        <Link href="/partners" className={styles.navLink}>Go to Partners</Link>
        <Link href="/dashboard" className={styles.navLink}>Go to Dashboard</Link>
      </div>
      <center><h1>Assignments</h1></center>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {assignments.length > 0 ? (
        assignments.map((assignment) => {
          const order = orders.find((order) => order._id === assignment.orderId);
          return (
            <AssignmentCard
              key={assignment._id}
              assignment={assignment}
              order={order}
            />
          );
        })
      ) : (
        <p>No assignments available.</p>
      )}
    </div>
  );
};

export default dynamic (() => Promise.resolve(AssignmentsPage), {ssr: false})

