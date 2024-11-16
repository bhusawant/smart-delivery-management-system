import React, { useEffect, useState } from 'react';
import { Order } from '../../types';
import OrderCard from '../../components/Order/OrderCard';
import OrderForm from '../../components/Order/OrderForm';
import dynamic from "next/dynamic";
import styles from "../../app/page.module.css";
import Link from "next/link";


const OrdersPage: React.FC = () => {
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

  const handleOrderAdded = (order: Order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <div>
      <div className={styles.navbar}>
        <Link href="/" className={styles.navLink}>Go to Home</Link>
        <Link href="/orders" className={styles.navLink}>Go to Orders</Link>
        <Link href="/partners" className={styles.navLink}>Go to Partners</Link>
        <Link href="/dashboard" className={styles.navLink}>Go to Dashboard</Link>
      </div>
      <center><h1>Orders</h1></center>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <OrderForm onOrderAdded={handleOrderAdded} />

      {orders.length > 0 ? (
        orders.map((order) => <OrderCard key={order._id} order={order} />)
      ) : (
        <p>No orders available.</p>
      )}
    </div>
  );
};

export default dynamic (() => Promise.resolve(OrdersPage), {ssr: false})


