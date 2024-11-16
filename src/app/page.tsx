'use client';
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    
    <div className={styles.page}>
      <div className={styles.navbar}>
        <Link href="/assignments" className={styles.navLink}>Go to Assignments</Link>
        <Link href="/orders" className={styles.navLink}>Go to Orders</Link>
        <Link href="/partners" className={styles.navLink}>Go to Partners</Link>
        <Link href="/dashboard" className={styles.navLink}>Go to Dashboard</Link>
      </div>
      <div className={styles.background}>
        <h1>Welcome to Smart Delivery Management System</h1>
      </div>
    </div>
  );
}