import React, { useState } from 'react';
import { DeliveryPartner } from '../../types/index';
import '../../styles/partner.css';  

import dynamic from "next/dynamic";


type PartnerFormProps = {
  onSubmit: (partner: DeliveryPartner) => void;
  initialData?: DeliveryPartner;
};

const PartnerForm: React.FC<PartnerFormProps> = ({ onSubmit, initialData }) => {
  const [partner, setPartner] = useState<DeliveryPartner>(
    initialData || {
      name: '',
      email: '',
      phone: '',
      status: 'active',
      currentLoad: 0,
      areas: [],
      shift: { start: '09:00', end: '17:00' },
      metrics: { rating: 5, completedOrders: 0, cancelledOrders: 0 },
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPartner({
      ...partner,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(partner);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={partner.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={partner.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={partner.phone}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="submit">Save Partner</button>
    </form>
  );
};


export default dynamic (() => Promise.resolve(PartnerForm), {ssr: false})

