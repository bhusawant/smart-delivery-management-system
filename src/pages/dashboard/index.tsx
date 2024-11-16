import React, { useEffect, useState } from 'react';
import { Order } from '../../types';
import MetricsCard from '../../components/Dashboard/MetricsCard';
import RecentAssignments from '../../components/Dashboard/RecentAssignments';
import ActiveOrdersMap from '../../components/Dashboard/ActiveOrdersMap';
import styles from "../../app/page.module.css";
import Link from "next/link";

import dynamic from "next/dynamic";


const DashboardPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <div className={styles.navbar}>
        <Link href="/" className={styles.navLink}>Go to Home</Link>
        <Link href="/assignments" className={styles.navLink}>Go to Assignments</Link>
        <Link href="/orders" className={styles.navLink}>Go to Orders</Link>
        <Link href="/partners" className={styles.navLink}>Go to Partners</Link>
        
      </div>
      <center><h1>Dashboard</h1></center>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="dashboard-stats">
        <MetricsCard orders={orders} />
        <ActiveOrdersMap orders={orders} />
        <RecentAssignments orders={orders} />
      </div>
    </div>
  );
};

export default dynamic (() => Promise.resolve(DashboardPage), {ssr: false})

