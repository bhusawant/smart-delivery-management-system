import React, { useEffect, useState } from 'react';
import PartnerList from '../../components/Partner/PartnerList';
import PartnerForm from '../../components/Partner/PartnerForm';
import { DeliveryPartner } from '../../types/index';
import styles from "../../app/page.module.css";
import Link from "next/link";

import dynamic from "next/dynamic";


const PartnersPage: React.FC = () => {
  const [partners, setPartners] = useState<DeliveryPartner[]>([]);

  useEffect(() => {
    const fetchPartners = async () => {
      const response = await fetch('/api/partners');
      const data = await response.json();
      setPartners(data);
    };
    fetchPartners();
  }, []);

  const handlePartnerSubmit = async (partner: DeliveryPartner) => {
    const response = await fetch('/api/partners', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(partner),
    });

    if (response.ok) {
      const newPartner = await response.json();
      setPartners([...partners, newPartner]);
    }
  };

  return (
    <div>
      <div className={styles.navbar}>
        <Link href="/assignments" className={styles.navLink}>Go to Assignments</Link>
        <Link href="/orders" className={styles.navLink}>Go to Orders</Link>
        <Link href="/" className={styles.navLink}>Go to Home</Link>
        <Link href="/dashboard" className={styles.navLink}>Go to Dashboard</Link>
      </div>
      <center><h1>Partners</h1></center>
      <PartnerForm onSubmit={handlePartnerSubmit} />
      <PartnerList partners={partners} onDelete={() => {}} />
    </div>
  );
};

export default dynamic (() => Promise.resolve(PartnersPage), {ssr: false})

